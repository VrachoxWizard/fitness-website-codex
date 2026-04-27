import {NextResponse, type NextRequest} from "next/server";

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const {pathname} = url;

  if (pathname === "/hr" || pathname.startsWith("/hr/")) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  url.pathname = `/hr${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
