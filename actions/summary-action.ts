"use server";

import { auth } from "@clerk/nextjs/server";
import { dbConnection } from "@/lib/db";

export async function deleteSummary(summaryId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const sql = await dbConnection();

  const deleted = await sql`
    DELETE FROM pdf_summaries
    WHERE id = ${summaryId}
      AND user_id = ${userId}
    RETURNING id;
  `;

  if (deleted.length === 0) {
    throw new Error("Not found or unauthorized");
  }

  return { success: true };
}
