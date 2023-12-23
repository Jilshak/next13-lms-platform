import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  console.log("This is the middleware")
}

export const config = {
  matcher: ["/sign-up/",]
}