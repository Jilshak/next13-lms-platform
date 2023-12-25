import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt'

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


        const hashedPassword = await hash(password, 10);

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


// for deleting the user
export async function DELETE(req: Request) {
    try {
        const body = await req.json()
        const { userId } = body

        // check if user exists 
        const existingUser = await db.user.findUnique({
            where: { id: userId }
        });

        if (!existingUser) {
            return NextResponse.json({
                message: "No User found with this ID"
            }, { status: 404 })
        }

        // delete user
        await db.user.delete({
            where: { id: userId }
        })

        return NextResponse.json({
            message: "The user has been deleted"
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong while doing this operation'
        }, { status: 500 })
    }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json()
        const { userId } = body

        // check if user exists 
        const existingUser = await db.user.findUnique({
            where: { id: userId }
        });

        if (!existingUser) {
            return NextResponse.json({
                message: "No User found with this ID"
            }, { status: 404 })
        }

        // update user
        await db.user.update({
            where: { id: userId },
            data: { verified: true } // set verified to true
        })

        return NextResponse.json({
            message: "The user has been verified"
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong while doing this operation'
        }, { status: 500 })
    }
}
