import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("orvessa-auth");

  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/register");

  const isDashboard =
    pathname.startsWith("/dashboard");

  // User not logged in
  if (!token && isDashboard) {
    return NextResponse.redirect(
      new URL("/auth/login", request.url)
    );
  }

  // User already logged in
  if (token && isAuthPage) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/login",
    "/auth/register",
  ],
};