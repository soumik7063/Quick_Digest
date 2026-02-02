import { dbConnection } from "@/lib/db";

export async function getSummaryById(id: string) {
  try {
    const sql = await dbConnection();
    const res = await sql`SELECT * FROM pdf_summaries
    WHERE id = ${id}`;

    if (!res) {
      return {
        success: false,
        data: "Server is busy ",
      };
    }
    return {
      success: true,
      data: res,
    };
  } catch (error) {
    return {
      success: false,
      data: error instanceof Error ? error.message : "something sent wrong",
    };
  }
}
