import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { phone, code } = await request.json();

    if (!phone || !code) {
      return NextResponse.json(
        { error: 'Phone and code are required' },
        { status: 400 }
      );
    }

    // If Twilio credentials are configured in environment variables, dispatch real carrier SMS
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromPhone = process.env.TWILIO_PHONE_NUMBER;

    if (accountSid && authToken && fromPhone) {
      const messageBody = `Your CompareBondRates security verification code is: ${code}. Valid for 10 minutes.`;
      
      const authHeader = 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64');
      const params = new URLSearchParams();
      params.append('To', phone);
      params.append('From', fromPhone);
      params.append('Body', messageBody);

      const twilioRes = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        }
      );

      const twilioData = await twilioRes.json();
      return NextResponse.json({ success: true, dispatched: true, sid: twilioData.sid });
    }

    // Default development / client-notification mode:
    console.log(`[SMS Gateway Simulated] Sent OTP "${code}" to ${phone}`);
    return NextResponse.json({
      success: true,
      dispatched: false,
      message: 'OTP generated. Configure TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN for live carrier delivery.',
    });
  } catch (error: any) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
