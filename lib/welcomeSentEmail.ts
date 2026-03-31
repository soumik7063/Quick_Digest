import nodemailer from "nodemailer";
export async function sendWelcomeEmail(userEmail: string) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Mail content
    const mailOptions = {
      from: `"Quick Digest 👋" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Welcome to Quick Digest-AI powered PDF summariser 🎉",
      html: `
<div style="margin:0;padding:0;background-color:#f4f6fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
    <tr>
      <td align="center">
        
        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" 
          style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#4f46e5);padding:30px;text-align:center;color:white;">
              <h1 style="margin:0;font-size:26px;">🎉 Welcome to Quick Digest</h1>
              <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">
                AI-powered PDF summariser
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;color:#333;">
              <h2 style="margin-top:0;">Hi there 👋</h2>

              <p style="font-size:15px;line-height:1.6;color:#555;">
                We're excited to have you on board! 🚀  
                Quick Digest helps you turn long PDFs into <b>concise, easy-to-read summaries</b> in seconds.
              </p>

              <!-- Feature highlights -->
              <ul style="padding-left:18px;color:#555;font-size:14px;line-height:1.6;">
                <li>📄 Upload PDFs instantly</li>
                <li>⚡ Get AI-generated summaries</li>
                <li>🎯 Save time and boost productivity</li>
              </ul>

              <!-- CTA Button -->
              <div style="text-align:center;margin:30px 0;">
                <a href="https://quick-digest-ulqw.vercel.app/upload" 
                  style="background:linear-gradient(135deg,#6366f1,#4f46e5);
                  color:#fff;
                  text-decoration:none;
                  padding:12px 24px;
                  border-radius:30px;
                  font-size:14px;
                  display:inline-block;
                  font-weight:bold;">
                  🚀 Start Summarising
                </a>
              </div>

              <p style="font-size:14px;color:#777;">
                If you have any questions, feel free to reach out. We're here to help!
              </p>

              <p style="margin-top:20px;font-size:14px;">
                Cheers,<br/>
                <strong>Quick Digest Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafc;padding:20px;text-align:center;font-size:12px;color:#999;">
              © 2026 Quick Digest. All rights reserved.<br/>
              Made with ❤️ for productivity
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</div>
`,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
