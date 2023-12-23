"use client"

import { useState } from 'react';
import axios from 'axios';
import { SingUpForm } from '../../_components/sign-up-form'

export default function OTPForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const sendOtp = async () => {
        try {
            const response = await axios.post('/api/send-otp', { phoneNumber });
            console.log(response)
            setMessage(response?.data?.message);
        } catch (error: any) {
            setMessage(error.response.data.message);
        }
    };

    const verifyOtp = async () => {
        try {

            const response = await axios.post('/api/verify-otp', { phoneNumber: phoneNumber, code: otp });
            console.log(response)
            setMessage(response.data.message);

        } catch (error: any) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div>
            {/* <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={() => sendOtp()}>Send OTP</button>

            <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify OTP</button>

            <p>{message}</p> */}
            <SingUpForm />
        </div>
    );
}
