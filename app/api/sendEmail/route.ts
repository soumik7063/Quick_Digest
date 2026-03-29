import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { sendWelcomeEmail } from "@/lib/welcomeSentEmail";

export async function POST() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ success: false, error: "Unauthorized" });
    }

    const email = user.emailAddresses[0]?.emailAddress;

    if (!email) {
      return NextResponse.json({ success: false, error: "No email found" });
    }

    const result = await sendWelcomeEmail(email);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
