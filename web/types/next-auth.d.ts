import NextAuth from "next-auth"

// // export enum Role {
// //     Admin = "Admin",
// //     InternShip = "InternShip",
// //     ScholarShip = "ScholarShip",
// //     OutReach = "OutReach",
// //     Student = "Student",
// //     Entity = "Entity"
// // }

// // export enum EntityRole {
// //     Company = "Company",
// //     Organization = "Organization"
// // }

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
     */

    interface User {
        role: String
        // address: String
    }

    interface Session {
        user: User
    }
}

declare module "next-auth/jwt" {
    interface JWT { role: String }
}


// import { DefaultSession, DefaultUser } from "next-auth";
// // Define a role enum
// export enum Role {
//     student = "student",
//     entity = "entity",
//     internship = "internship",
//     scholarship = "scholarship",
//     outreach = "outreach",
//     admin = "admin",
//     Admin = "Admin",
// }
// // common interface for JWT and Session
// interface IUser extends DefaultUser {
//     role?: Role;
// }
// declare module "next-auth" {
//     interface User extends IUser { }
//     interface Session {
//         user?: User;
//     }
// }
// declare module "next-auth/jwt" {
//     interface JWT extends IUser { }
// }
