"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export const SingInForm = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleLogin = () => {
        if (username && password) {
            if (passwordRegex.test(password)) {
                alert(`This is the username and password: ${username}, ${password}`)
            } else {
                alert("The password doesn't seem to have the required characters within it.")
            }
        } else {
            alert("one of the required field is missing")
        }
    }

    return (
        <>
            <div className="min-h-screen w-[100vw] max-w-screen  bg-gray-50 dark:bg-[#020817] flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-lg dark:shadow-md dark:border-2 dark:border-[#0369A1] dark:shadow-[#0369A1]  rounded-lg  flex flex-col">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mt-3 pt-5">

                        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />


                        <h2 className="mt-6 text-center text-2xl leading-9 font-extrabold text-gray-900 dark:text-white">
                            Welcome, We've missed you
                        </h2>
                        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">

                            <p
                                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                there is a lot of catching up to do
                            </p>
                        </p>
                    </div>
                    <div className="bg-white dark:bg-[#020817] py-8 px-4  sm:rounded-lg sm:px-10">
                        <form method="POST" action="#">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5 dark:text-white  text-gray-700">Mobile</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input onChange={(e) => setUsername(e.target.value)} placeholder="Enter your number" type="number" className="appearance-none dark:bg-[#020817] focus:border-blue-300  block w-full px-3 py-2 border border-grey-300 rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
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
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700 dark:text-white">
                                    Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input onChange={(e) => setPassword(e.target.value)} placeholder="*******" id="password" name="password" type="password" className="appearance-none block w-full px-3 py-2 border dark:bg-[#020817] rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    <div className="flex items-center justify-end w-full text-xs my-2 ">
                                        <p className="hover:text-[#0369A1] cursor-pointer">
                                            Forgot Password ?
                                        </p>
                                    </div>
                                </div>
                            </div>



                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <Button onClick={handleLogin} className="w-full dark:text-white bg-blue-500 hover:bg-blue-600 dark:bg-[#0369A1] dark:hover:bg-[#0369A1]">
                                        Login
                                    </Button>
                                </span>
                                <span className="block w-full rounded-md shadow-sm my-3">
                                    <Link href='sign-up'>
                                        <Button className="w-full dark:text-white bg-red-500 hover:bg-red-600 dark:bg-gray-600 dark:hover:bg-gray-700">
                                            Register
                                        </Button>
                                    </Link>
                                </span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}