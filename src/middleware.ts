import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import jwt from "jsonwebtoken";
import { getRoleFromToken } from "./helpers/getRoleFromToken";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = ["/login", "/signup", "/verifyemail", "/forgottenpassword", "/resetpassword"].includes(path);

  const home = path === "/";

  const isAdminPath = path === "/dashboard";

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !home && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));  
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/verifyemail", "/forgottenpassword", "/resetpassword", '/api/', '/dashboard'],
};
