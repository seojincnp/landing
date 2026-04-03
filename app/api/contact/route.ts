import { Resend } from "resend";
import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body: ContactFormData = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "이름, 연락처, 문의 내용은 필수 항목입니다." },
        { status: 400 }
      );
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "올바른 이메일 주소를 입력해주세요." },
          { status: 400 }
        );
      }
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || "sjin5640@daum.net";
    const ccEmail = process.env.CONTACT_EMAIL_CC;

    const { error } = await resend.emails.send({
      from: "서진씨앤피 문의 <noreply@seojincnp.kr>",
      to: toEmail,
      cc: ccEmail || undefined,
      replyTo: email || undefined,
      subject: `[견적 문의] ${name}`,
      html: `
        <div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: linear-gradient(135deg, #2563EB 0%, #3B82F6 100%); padding: 16px 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">새로운 견적 문의</h1>
          </div>

          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; width: 120px;">이름 / 회사명</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">연락처</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${phone}</td>
              </tr>
              ${email ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">이메일</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
                </td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px;">
              <p style="color: #64748b; font-size: 14px; margin-bottom: 8px;">문의 내용</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="color: #1e293b; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                이 이메일은 seojincnp.kr 웹사이트 견적 문의 폼을 통해 발송되었습니다.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "문의가 성공적으로 접수되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
