import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { phoneNumber } = body

        // Initialize Twilio client
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        // Send OTP
        await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
            .verifications
            .create({ to: phoneNumber, channel: 'sms' });

        return NextResponse.json({
            message: "OTP has been sent"
        }, { status: 200 })
    } catch (error) {

        return NextResponse.json({
            message: "Something went wrong while sending the OTP!!"
        }, { status: 500 })
    }
}
