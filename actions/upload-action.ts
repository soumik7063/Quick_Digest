"use server";

import { generateResponse } from "../lib/openAI";
import { fetchAndExtractText } from "../lib/langChain";
import { generateResponseGeminiAi } from "@/lib/geminiAI";
import { auth } from "@clerk/nextjs/server";
import { dbConnection } from "@/lib/db";
import { string } from "zod/v4";
import { formatFilenameAsTitle } from "@/utils/format-ulits";
import { revalidatePath } from "next/cache";

interface responsePDF {
  fileURL: string;
  file_name: string;
  title: string;
  summary_text: string;
}
export async function generateResp(
  uploadResp: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    },
  ],
) {
  if (!uploadResp[0]) {
    return {
      success: false,
      message: "invalid upload response",
      data: null,
    };
  }
  const {
    serverData: {
      userId,
      file: { url: url, name: name },
    },
  } = uploadResp[0];
  if (!url) {
    return {
      success: false,
      message: "invalid pdf url",
      data: null,
    };
  }
  let summary;
  let formatedFilename = formatFilenameAsTitle(name);
  try {
    const pdfText = await fetchAndExtractText(url);
    // summary = await generateResponse(pdfText);
    summary = await generateResponseGeminiAi(pdfText);
    console.log(summary);
    return {
      success: true,
      message: "success",
      data: { title: formatedFilename, summary },
    };
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
}

async function savePDFsummary({
  userId,
  fileURL,
  file_name,
  title,
  summary_text,
}: {
  userId: string;
  fileURL: string;
  file_name: string;
  title: string;
  summary_text: string;
}) {
  const sql = await dbConnection();

  const [result] = await sql`
    INSERT INTO pdf_summaries (
      user_id,
      original_file_url,
      file_name,
      title,
      summary_text
    ) VALUES (
      ${userId},
      ${fileURL},
      ${file_name},
      ${title},
      ${summary_text}
    )
    RETURNING *;
  `;

  return result;
}
export async function storePDF({
  fileURL,
  file_name,
  title,
  summary_text,
}: responsePDF) {
  let savedSummary: any;

  try {
    const { userId } = await auth();
    console.log(userId);
    if (!userId) {
      return {
        success: false,
        message: "user not found",
      };
    }
    savedSummary = await savePDFsummary({
      userId,
      fileURL,
      file_name,
      title,
      summary_text,
    });

    if (!savedSummary) {
      return {
        success: false,
        message: "Failed to save summary , try again later ...",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error saving pdf",
    };
  }
  //revalidate cache
  revalidatePath(`/summaries/${savedSummary.id}`);
  return {
    success: true,
    message: "summary saved successfully",
    data: {
      id: savedSummary.id,
    },
  };
}
