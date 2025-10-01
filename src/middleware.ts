

/// define protected routes

import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from 'better-auth/cookies'



const protectedRoutes = ["/profile", "/orders", "/checkout"]

export async function middleware(request: NextRequest){
    const path = request.nextUrl.pathname

    const session = getSessionCookie(request)


    const isProtectedRoute = protectedRoutes.some(currentRoute=> path.startsWith(currentRoute))

    if(isProtectedRoute && !session){
        //redirect to auth page
        return NextResponse.redirect(new URL("/auth", request.url))
    }

    //if user is already logged in and they are assessing auth route, they will automatically be redirected to home page

    if(path === '/auth' && session){
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher: ['/profile/:path*','/checkout/:path*','/orders/:path*', '/auth']
}