import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { phoneNumber, code } = body

        // Initialize Twilio client
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        // Verify OTP
        const verificationCheck = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
            .verificationChecks
            .create({ to: phoneNumber, code: code });

        console.log(verificationCheck)

        if (verificationCheck.status === 'approved') {
            return NextResponse.json({
                message: "The user has been created"
            }, { status: 200 })
        } else {
            return NextResponse.json({
                message: "Invalid code!!!"
            }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong wile donig this request!!"
        }, { status: 500 })
    }
}
