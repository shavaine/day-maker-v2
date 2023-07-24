"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="border bg-mainColor h-10 px-6 py-2 rounded-md font-spaceMono text-white"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
