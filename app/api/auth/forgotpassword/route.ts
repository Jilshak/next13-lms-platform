import { db } from "@/lib/db"
import axios from "axios"
import * as argon2 from "argon2";
import { sign } from "jsonwebtoken"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { mobile } = body

        const checkExistingUser = await db.user.findUnique({
            where: { mobile: mobile }
        })

        if (!checkExistingUser || !checkExistingUser.verified) {
            return NextResponse.json({
                user: null,
                message: "such a user doesn't exist"
            }, { status: 401 })
        }

        console.log("Its reaching up until here!!!", '+91' + mobile)

        const request = await axios.post('http://localhost:3000/api/send-otp', { phoneNumber: `+91${mobile}` })

        if (request.status == 200) {
            return NextResponse.json({
                user: checkExistingUser.username,
                message: 'The user really does exist!'
            }, { status: 200 })
        }


    } catch (error) {

    }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json()
        const { mobile, password } = body

        const checkExistingUser = await db.user.findUnique({
            where: { mobile: mobile }
        })

        if (!checkExistingUser || !checkExistingUser.verified) {
            return NextResponse.json({
                user: null,
                message: "such a user doesn't exist"
            }, { status: 401 })
        }

        const hashedPassword = await argon2.hash(password);

        // Update the user's password in the database
        const updatedUser = await db.user.update({
            where: { mobile: mobile },
            data: { password: hashedPassword }
        })

        if (updatedUser) {
            return NextResponse.json({
                user: checkExistingUser.username,
                message: 'Password updated successfully!'
            }, { status: 200 })
        }

    } catch (error) {
        console.log("Error: ", error)
    }
}
