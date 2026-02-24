import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, website, challenge, formType } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const isAudit = formType === "audit";

    const auditRows = isAudit
      ? `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:140px;">Website URL</td>
        <td style="padding:10px 0;border-bottom:1px solid #eee;">
          <a href="${website}" style="color:#f97316;">${website || "Not provided"}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;vertical-align:top;">Biggest Challenge</td>
        <td style="padding:10px 0;border-bottom:1px solid #eee;line-height:1.6;">
          ${challenge || "Not provided"}
        </td>
      </tr>`
      : `
      <tr>
        <td style="padding:10px 0;color:#666;vertical-align:top;">Message</td>
        <td style="padding:10px 0;line-height:1.6;">${message ? message.replace(/\n/g, "<br/>") : ""}</td>
      </tr>`;

    await resend.emails.send({
      from: "Khalis Marketing <onboarding@resend.dev>",
      to: "abdullahbajwa2048@gmail.com",
      subject: isAudit
        ? `Free Audit Request from ${name}`
        : `New Enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#f97316;margin-bottom:8px;">
            ${isAudit ? "Free SEO Audit Request" : "New Contact Enquiry"}
          </h2>
          <p style="color:#999;font-size:13px;margin-bottom:24px;">
            Submitted via Khalis Marketing website
          </p>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:140px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;">
                <a href="mailto:${email}" style="color:#f97316;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            ${auditRows}
          </table>
          <div style="margin-top:32px;padding:16px;background:#fff7ed;border-radius:8px;
                      border-left:4px solid #f97316;">
            <p style="margin:0;color:#666;font-size:14px;">
              Reply directly to this email to respond to <strong>${name}</strong>.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}