

import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default async function sendOtp(req: NextApiRequest, res: NextApiResponse) {
    
    const { phoneNumber } = req.body;

    // Initialize Twilio client
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    try {
        // Send OTP
        await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
            .verifications
            .create({ to: phoneNumber, channel: 'sms' });

        res.status(200).json({ success: true });
        console.log(res.status(200).json({ success: true }))
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
}
