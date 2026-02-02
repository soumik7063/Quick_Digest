import { auth } from "@clerk/nextjs/server";
import { dbConnection } from "./db";

export const getSummaries = async () => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        data: [],
        success: false,
        message: "Unauthorized",
      };
    }

    const sql = await dbConnection();

    const summaries = await sql`
      SELECT *
      FROM pdf_summaries
      WHERE user_id = ${userId}
      ORDER BY created_at DESC;
    `;

    return {
      data: summaries, // ✅ NOW THIS IS AN ARRAY
      success: true,
      message: "Data fetched successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      success: false,
      message: "Something went wrong",
    };
  }
};
