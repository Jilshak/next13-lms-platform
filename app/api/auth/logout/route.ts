import { serialize } from "cookie"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        console.log("This is being called atleast!!!")
      
        const serialized = serialize('oursitejwt', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "strict",
        maxAge: -1,
        path: "/"
      })

      const response = {
        "message": "user logged out!!"
      }
  
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { 'Set-Cookie': serialized }
    })
    } catch (error) {
      return NextResponse.json({
        message: 'something went wrong while doing this operation'
      }, { status: 500 })
    }
  }
  