import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup" || path === "/verifyemail" || path === "/forgottenpassword" || path === "/resetpassword";

  const home = path === "/";

  const token = request.cookies.get('token')?.value || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !home && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/verifyemail", "/forgottenpassword", "/resetpassword", '/api/'],
};
