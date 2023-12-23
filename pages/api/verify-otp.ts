import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default async function verifyOtp(req: NextApiRequest, res: NextApiResponse) {
  const { phoneNumber, code } = req.body;

  // Initialize Twilio client
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  // Verify OTP
  const verificationCheck = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
    .verificationChecks
    .create({ to: phoneNumber, code: code });

  if (verificationCheck.status === 'approved') {
    res.status(200).json({ success: true });
  } else {
    res.status(403).json({ success: false, message: 'Invalid code.' });
  }

}
