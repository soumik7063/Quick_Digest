import { dbConnection } from "./db";

export const getPriceId = async (email: string): Promise<string | null> => {
  try {
    const sql = await dbConnection();
    const result =
      await sql`SELECT price_id FROM users WHERE email = ${email} AND status = 'active'`;
    return result[0]?.price_id || null;
  } catch (error) {
    console.error("Error fetching price ID:", error);
    return null;
  }
};
