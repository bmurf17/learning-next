"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function NavBar() {
  return (
    <header className="w-full absolute z-10">
      <div className="flex bg-purple-500 text-white p-4 justify-between">
        <Link href={"/"}>
          <div className="">FCPM</div>
        </Link>
        <div
          onClick={() => {
            signIn("google");
          }}
          className="cursor-pointer"
        >
          Login
        </div>
      </div>
    </header>
  );
}
