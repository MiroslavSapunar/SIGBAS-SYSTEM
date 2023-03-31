// import { getToken } from "next-auth/jwt";
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// import { useRouter } from 'next/router'

// export async function middleware(request: NextRequest, _next: NextFetchEvent) {

//     const { pathname } = request.nextUrl;


//     const dashboardPaths = ["/dashboard/(.*)"];
//     const internshipPaths = ["/pasantias/(.*)"];
//     const schoolarshipPaths = ["/becas/(.*)"];
//     const outhreachPaths = ["/extension/(.*)"];
//     const studentPaths = ["/estudiante/(.*)"];
//     const adminPaths = ["/autoridad/(.*)"];

//     const matchesProtectedPath = dashboardPaths.some((path) => {
//         console.log(path)
//         pathname.includes(path)
//     }
//     );

//     console.log(matchesProtectedPath)

//     if (matchesProtectedPath) {
//         const token = await getToken({ req: request });
//         console.log("Role")
//         console.log(token?.role)
//         if (!token) {
//             const url = new URL(`/signin`, request.url);
//             url.searchParams.set("callbackUrl", encodeURI(request.url));
//             return NextResponse.redirect(url);
//         }
//         if (token.role !== "admin") {
//             const url = new URL(`/403`, request.url);
//             return NextResponse.rewrite(url);
//         }
//     }
//     return NextResponse.next();
// }


import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { useRouter } from 'next/router'

export async function middleware(request: NextRequest, _next: NextFetchEvent) {

    const { pathname } = request.nextUrl

    const internshipPaths = ["/dashboard/pasantias"]

    const matchesProtectedPath = internshipPaths.some((path) => pathname.startsWith(path))

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
    return NextResponse.next()
}
