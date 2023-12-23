"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { OtpForm } from "./otp-form";
import Link from "next/link";
import axios from 'axios';

interface SingUpFormProps {
    mobile: Number;
    username: string;
    password: string;
}

export const SingUpForm = () => {

    const [username, setUsername] = useState<string>('')
    const [mobileNumber, setMobileNumber] = useState<string>('+91')
    const [password, setPassword] = useState<string>('')
    const [conformPassword, setConfirmPassword] = useState<string>('')

    const [toggle, setToggle] = useState(false)

    const handleInputFields = () => {
        const mobileRegex = /^\+91\d{10}$/; // corrected here
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (username && mobileNumber && password === conformPassword) {
            let new_number = '+91' + mobileNumber
            if (mobileRegex.test(new_number)) { // corrected here
                if (passwordRegex.test(password)) {
                    return true
                } else {
                    alert('Your password does not follow the pattern required, it should have a capital, small, a number and a special character')
                }
            } else {
                alert('There seem to be something wrong with your mobile number please check again')
            }
        } else {
            alert("either the passwords are not matching or the username field and mobile fields are empty")
        }
    }

    const handleUserDetails = () => {
        
    }


    const handleSendOTP = async (e: any) => {
        // const verify = handleInputFields()
        const request = await axios.post('/api/auth/register', {username: username, password: password})
        const response = request.data
        console.log("This is the response: ", response)
        // verify && setToggle(!toggle)
        return response

    }

    return (
        <>
            <div className="min-h-screen w-[100vw] max-w-screen  bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create a new account
                    </h2>

                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form method="POST" action="#">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Username</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input onChange={(e) => setUsername(e.target.value)} id="name" name="name" placeholder="John Doe" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    <div className="hidden absolute inset-y-0 right-0 pr-3  items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">Mobile Number</label>
                                <div className="mt-1 flex rounded-md shadow-sm">

                                    <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                        +91
                                    </span>
                                    <input maxLength={10} onChange={(e) => setMobileNumber(e.target.value)} placeholder="" type="text" className="flex-1 border-2 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} id="password_confirmation" name="password_confirmation" type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <Button onClick={handleSendOTP} className="w-full bg-blue-500 hover:bg-blue-600">
                                        Send Otp
                                    </Button>
                                </span>
                                <span className="block w-full rounded-md shadow-sm mt-2">
                                    <Link href={`sign-in`}>
                                        <Button className="w-full bg-red-500 hover:bg-red-600">
                                            Already have an account? Login
                                        </Button>
                                    </Link>
                                </span>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
            {
                toggle &&
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <OtpForm phoneNumber={mobileNumber} username={username} password={password}/>
                </div>
            }
        </>
    )
}