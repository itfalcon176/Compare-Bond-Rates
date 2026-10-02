import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, term, timeframe, fullName, email, phone } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return NextResponse.json({ error: 'Full Name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid Email is required' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json({ error: 'Phone Number is required' }, { status: 400 });
    }
    if (!amount || typeof amount !== 'string' || !amount.trim()) {
      return NextResponse.json({ error: 'Investment Amount is required' }, { status: 400 });
    }
    if (!term || typeof term !== 'string' || !term.trim()) {
      return NextResponse.json({ error: 'Investment Term is required' }, { status: 400 });
    }
    if (!timeframe || typeof timeframe !== 'string' || !timeframe.trim()) {
      return NextResponse.json({ error: 'Investment Timeline is required' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: RESEND_API_KEY is missing' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const cleanFullName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const subject = `New Bond Rate Lead - ${cleanFullName}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
        <h2 style="color: #059669; border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-top: 0;">New Bond Rate Lead Received</h2>
        
        <p style="font-size: 15px; color: #475569;">A new lead has submitted their preferences on Compare Bond Rates:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; width: 40%; color: #1e293b;">Full Name:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #0f172a;">${cleanFullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Email:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${cleanEmail}" style="color: #059669; text-decoration: none;">${cleanEmail}</a></td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Phone Number:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #0f172a;">${cleanPhone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Investment Amount:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #0f172a;">${amount}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Investment Term:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #0f172a;">${term}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Investment Timeline:</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #0f172a;">${timeframe}</td>
          </tr>
        </table>
        
        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent automatically from Compare Bond Rates Lead System.
        </p>
      </div>
    `;

    const textContent = `
New Bond Rate Lead Received:

Full Name: ${cleanFullName}
Email: ${cleanEmail}
Phone Number: ${cleanPhone}
Investment Amount: ${amount}
Investment Term: ${term}
Investment Timeline: ${timeframe}
    `.trim();

    const data = await resend.emails.send({
      from: 'leads@comparebondrates.co.uk',
      to: ['comparebondrateslead@atomicmail.co.uk'],
      replyTo: cleanEmail,
      subject: subject,
      html: htmlContent,
      text: textContent,
    });

    if (data.error) {
      console.error('Resend API error:', data.error);
      return NextResponse.json(
        { error: data.error.message || 'Failed to send email via Resend' },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: any) {
    console.error('Error in /api/compare-rates route:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
