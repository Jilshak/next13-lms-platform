import { db } from "@/lib/db";
import { compare, hash } from "bcrypt";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { mobile, password } = body


        // check if mobile already exist
        const existingUserByMobile = await db.user.findUnique({
            where: { mobile: mobile }
        });


        // checking the password validity
        if (!existingUserByMobile || !existingUserByMobile.password) {
            throw new Error('User or password is undefined');
        }

        const passwordMatch = await compare(password, existingUserByMobile.password);

        if (!existingUserByMobile) {
            return NextResponse.json({
                user: null,
                message: "such a user doesn't exist"
            }, { status: 409 })
        }

        const secret = process.env.MY_SECRET_KEY || ""
        const MAX_AGE = 60 * 60 * 24 * 30

        const token = sign(
            {
                mobile,
            },
            secret,
            {
                expiresIn: MAX_AGE
            }
        )

        if (passwordMatch && existingUserByMobile.verified) {
            const serialized = serialize('oursitejwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: "strict",
                maxAge: MAX_AGE,
                path: "/"
            })


            const response = {
                message: 'Authenticated',
                response: 200
            }

            return new Response(JSON.stringify(response), {
                status: 200,
                headers: { 'Set-Cookie': serialized }
            })
        } else {
            return NextResponse.json({
                user: null,
                message: "such a user doesn't exist"
            }, { status: 401 })
        }


    } catch (error) {
        NextResponse.json({
            message: 'something went wrong while doing this operation'
        }, { status: 500 })
    }
}