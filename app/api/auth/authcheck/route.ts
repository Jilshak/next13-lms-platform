import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET() {
    const cookieStrore = cookies()
    const token = cookieStrore.get('oursitejwt')
    if (!token) {
        return NextResponse.json(
            {
                message: "Unauthorzied"
            },
            {
                status: 401
            }
        )
    }

    const secret = process.env.MY_SECRET_KEY || ""

    try {

        verify(token.value, secret)

        const response = {
            user: "Authenticated"
        }

        return new Response(JSON.stringify(response), {
            status: 200,
        })

    } catch (e) {
        return NextResponse.json(
            {
                message: "Something went wrong while doint the process"
            },
            {
                status: 500
            }
        )
    }
}