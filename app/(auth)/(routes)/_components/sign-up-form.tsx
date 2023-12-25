"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { OtpForm } from "./otp-form";
import Link from "next/link";
import axios from 'axios';
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import { useCustomToast } from "@/components/custom/custom-toast";



export const SingUpForm = () => {

    const [username, setUsername] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [conformPassword, setConfirmPassword] = useState<string>('')

    const toast = useCustomToast()

    const [userId, setUserId] = useState<string>('');
    const theme = useTheme();

    const [toggle, setToggle] = useState(false)

    const handleInputFields = () => {
        const mobileRegex = /^\+91\d{10}$/; // corrected here
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (username && phoneNumber && password === conformPassword) {
            let new_number = '+91' + phoneNumber
            if (mobileRegex.test(new_number)) { // corrected here
                if (passwordRegex.test(password)) {
                    return true
                } else {
                    toast({ message: 'Your password does not follow the pattern required, it should have a capital, small, a number and a special character' })
                }
            } else {
                toast({ message: 'There seem to be something wrong with your mobile number please check again' })
            }
        } else {
            toast({ message: 'either the passwords are not matching or the username field and mobile fields are empty' })
        }
    }

    const handleSendOTP = async (e: any) => {
        const verify = handleInputFields()
        if (verify) {
            try {
                const createUser = await axios.post('/api/user', { mobile: phoneNumber, username: username, password: password })
                if (createUser.status == 201) {
                    const userId = await createUser.data.user.id
                    await setUserId(userId)
                    const request = await axios.post('/api/send-otp', { phoneNumber: `+91${phoneNumber}` });
                    if (request.status == 200) {
                        verify && setToggle(!toggle)
                    } else {
                        toast({message: "The otp service is down for the moment"})
                    }
                }
            } catch (error) {
                toast({message: 'A user with the given phone number already exists!!'})
            }
        }
    }


    return (
        <>
            <div className="min-h-screen w-[100vw] max-w-screen  bg-gray-50 dark:bg-[#020817] flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md dark:shadow-md shadow-lg rounded-lg dark:border-2 dark:shadow-[#0369A1] dark:border-[#0369A1] ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md pt-3">
                        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 dark:text-white">
                            Create a new account
                        </h2>

                    </div>
                    <div className="bg-white dark:bg-[#020817] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form method="POST" action="#">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700 dark:text-white">Username</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input onChange={(e) => setUsername(e.target.value)} id="name" name="name" placeholder="John Doe" type="text" className="appearance-none focus:border-blue-300 block w-full px-3 py-2 border  rounded-md  focus:outline-none focus:shadow-outline-blue  dark:bg-[#020817] transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
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
                                <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700 dark:text-white">Mobile Number</label>
                                <div className="mt-1 flex rounded-md shadow-sm">

                                    <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0  dark:bg-[#141e36]  bg-gray-50 dark:text-white  text-gray-500 sm:text-sm">
                                        +91
                                    </span>
                                    <input maxLength={10} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Mobile Number" type="text" className="flex-1 border-2 focus:outline-none focus:border-blue-300 dark:bg-[#020817] form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700 dark:text-white">
                                    Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" className="appearance-none dark:bg-[#020817] block w-full px-3 py-2 border  rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700 dark:text-white">
                                    Confirm Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} id="password_confirmation" name="password_confirmation" type="password" className="appearance-none dark:bg-[#020817] block w-full px-3 py-2 border  rounded-md  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <Button onClick={handleSendOTP} className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-[#0369A1] dark:text-white">
                                        Send Otp
                                    </Button>
                                </span>
                                <span className="block w-full rounded-md shadow-sm mt-2">
                                    <Link href={`sign-in`}>
                                        <Button className="w-full dark:text-white bg-green-500 hover:bg-green-600 dark:dark:bg-gray-600 dark:hover:bg-slate-700">
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
                    <OtpForm phoneNumber={phoneNumber} username={username} password={password} userId={userId} />
                </div>
            }
        </>
    )
}