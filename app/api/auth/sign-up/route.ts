import { db } from "@/lib/db";
import * as argon2 from "argon2";
import { NextResponse } from "next/server";


// for creating the user
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { mobile, username, password } = body

        // check if email already exist 
        const existingUserByMobile = await db.user.findUnique({
            where: { mobile: mobile }
        });

        if (existingUserByMobile) {
            return NextResponse.json({
                user: null,
                message: "An User with this mobile already exists"
            }, { status: 409 })
        }


        // changed to argon hashing
        const hashedPassword = await argon2.hash(password);
        



        const newUser = await db.user.create({
            data: {
                mobile,
                username,
                password: hashedPassword
            }
        })

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({
            user: rest,
            message: "The user has been created"
        }, { status: 201 })


    } catch (error) {
        NextResponse.json({
            message: 'something went wrong while doing this operation'
        }, { status: 500 })
    }
}