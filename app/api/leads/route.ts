import { NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const data = body as Record<string, unknown>;
    const fullName = typeof data.fullName === 'string' ? data.fullName.trim() : '';
    const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
    const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
    const amount = typeof data.amount === 'string' ? data.amount.trim() : '';
    const term = typeof data.term === 'string' ? data.term.trim() : '';
    const timeframe = typeof data.timeframe === 'string' ? data.timeframe.trim() : '';

    if (
      !fullName || fullName.length > 120 ||
      !email || email.length > 254 || !/^\S+@\S+\.\S+$/.test(email) ||
      !phone || phone.length > 40 ||
      !amount || amount.length > 80 ||
      !term || term.length > 30 ||
      !timeframe || timeframe.length > 40 ||
      data.consent !== true
    ) {
      return NextResponse.json({ error: 'Please provide valid form details and consent.' }, { status: 400 });
    }

    const client = await getMongoClient();
    const database = process.env.MONGODB_DB || 'comparebondrates';

    await client.db(database).collection('leads').insertOne({
      fullName,
      email,
      phone,
      amount,
      term,
      timeframe,
      consentAccepted: true,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to save lead:', error);
    return NextResponse.json({ error: 'Unable to submit your request right now. Please try again.' }, { status: 500 });
  }
}