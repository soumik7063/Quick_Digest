import { dbConnection } from "@/lib/db";

export async function getSummaryById(id: string) {
  try {
    const sql = await dbConnection();
    const [res] = await sql`SELECT 
    id,
    user_id,
    title,
    original_file_url,
    summary_text,
    created_at,
    updated_at,
    file_name,
    status,
    LENGTH(summary_text) - LENGTH(REPLACE(summary_text, ' ', '')) + 1 AS word_count
    FROM pdf_summaries
    WHERE id = ${id}`;

    return res;
  } catch (error) {
    console.error("Error fetching summary by ID:", error);
    return null;
  }
}
