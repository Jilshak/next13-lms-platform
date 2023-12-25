// import { NextRequest, NextResponse } from 'next/server';

import { NextRequest } from "next/server";

// export default function middleware(req: NextRequest) {
//   const verify = req.cookies.get('next-auth.session-token'); 
//   const url = new URL(req.url, "http://localhost:3000"); 

//   const authRoutes = ['/search', '/', '/courses']; 
//   const publicRoutes = ['/sign-up', '/sign-in']; 
//   if (!verify && (authRoutes.includes(url.pathname))){
//     return NextResponse.redirect('http://localhost:3000/sign-in')
//   }

//   if (verify && publicRoutes.includes(url.pathname)) {
//     return NextResponse.redirect('http://localhost:3000/'); 
//   }
// }

// export const config = {
//   matcher: (url: any) => url.startsWith('/courses/'),
// };


export default function middleware(req: NextRequest){
  console.log("The middle ware is called!!!")
}