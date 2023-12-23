"use client"

import Link from "next/link"
import { useRef, useState } from "react"

interface OtpInterface {
    phoneNumber: string
    username: string
    password: string
}

export const OtpForm = ({
    phoneNumber,
}: OtpInterface) => {

    // new 
    const [state, setState] = useState(Array(6).fill(''));
    const inputRefs = Array.from({ length: 6 }).map(() => useRef<HTMLInputElement | null>(null));


    const handleChange = (e: any, i: any) => {
        const value = e.target.value;
        setState(prevState => {
            const newState = [...prevState];
            newState[i] = value;
            return newState;
        });

        if (value && i < 5 && inputRefs[i + 1] && inputRefs[i + 1].current) {
            inputRefs[i + 1].current.focus(); // Focus on the next field after entering a value
        }
    };



    const handleVerifyToken = () => {
        const final_otp = state.join('')
        if (final_otp.length == 6) {
            alert(final_otp)
        } else {
            alert("fill the entire field of the otp")
        }
    }

    return (
        <div className="relative flex  flex-col justify-center overflow-hidden bg-[#F9FAFB] py-28 px-24">
            <div className="relative bg-white px-6 pt-10 pb-9 border-1 shadow-md mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Mobile Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your Mobile please check</p>
                        </div>
                    </div>

                    <div>
                        <form action="" method="post">
                            <div className="flex flex-col space-y-16 ">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    {state.map((s, i) => (
                                        <div key={i} className="w-16 h-16 mx-2">
                                            <input
                                                ref={inputRefs[i]}
                                                maxLength={1}
                                                value={s}
                                                onChange={(e) => handleChange(e, i)}
                                                className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                type="text"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button onClick={handleVerifyToken} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                            Verify Account
                                        </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Link href={`sign-in`}>
                                            <p className="text-red-400 hover:text-red-600 text-sm">Cancel</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}