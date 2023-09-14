"use client";
import { signOut } from "next-auth/react";
import { FC } from "react";

interface Props {
  toggleNav: () => void;
}
export default function SignOutButton({ toggleNav }: Props) {
  const Logout = () => {
    signOut();
    toggleNav();
  };
  return (
    <button
      className="border bg-mainColor h-10 px-6 py-2 rounded-md font-spaceMono text-white hover:opacity-80 hover:font-bold"
      onClick={() => Logout()}
    >
      Sign out
    </button>
  );
}
