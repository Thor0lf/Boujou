import { User } from "@prisma/client";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface CustomUser extends User  {
    id: int;
    fullname: string;
    avatar?: string;
    longitude?: string;
    latitude?: string;
    adress?: string;
    password: string;
    avatar?: string;
    email: string;
    roleId: number;
  }

  interface Session {
    user: CustomUser;
  }
}

declare module "next-auth/jwt" {
  type JWT = CustomUser;
}
