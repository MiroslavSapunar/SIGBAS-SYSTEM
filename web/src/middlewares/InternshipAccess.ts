import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types";

export const internshipAccess: MiddlewareFactory = (next: NextMiddleware) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const res = await next(request, _next);
        if (res) {
            const { pathname } = request.nextUrl

            const accessPaths = ["/dashboard/pasantias"]

            const matchesProtectedPath = accessPaths.some((path) => pathname.startsWith(path))

            if (matchesProtectedPath) {
                const token = await getToken({ req: request })
                if (!token) {
                    const url = new URL(`/signin`, request.url)
                    url.searchParams.set("callbackUrl", encodeURI(request.url))
                    return NextResponse.redirect(url)
                }
                if (token.role !== "Admin") {
                    const url = new URL(`/403`, request.url)
                    return NextResponse.rewrite(url)
                }
            }
            // return NextResponse.next()
        }
        return res;
    };
};

