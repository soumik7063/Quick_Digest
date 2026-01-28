"use server";

import { generateResponse } from "../lib/openAI";
import { fetchAndExtractText } from "../lib/langChain";
import { generateResponseGeminiAi } from "@/lib/geminiAI";

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
    }
  ]
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
  try {
    const pdfText = await fetchAndExtractText(url);
    // summary = await generateResponse(pdfText);
    summary = await generateResponseGeminiAi(pdfText);
    console.log(summary);
    return {
      success: true,
      message: "success",
      data: summary,
    };
  } catch (error) {
    return {
      success: false,
      message: error,
      data: null,
    };
  }
}
