import NextAuth from 'next-auth'

declare module "next-auth" {
    interface User {
        username: string | null
        mobile: string
    }
    interface Session {
        user: User & {
            username: string | null
            mobile: string
        }
        token: {
            username: string | null
            mobile: string
        }
    }
    
}