"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { VscLoading } from "react-icons/vsc";

interface Props {
  toggleNav: () => void;
}

const SignInButton: FC<Props> = ({ toggleNav }) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <p className="flex flex-row gap-x-3">
        <VscLoading className="animate-spin"></VscLoading>
        Loading...
      </p>
    );
  }

  if (status === "authenticated") {
    return (
      <Link href="/dashboard/profile" onClick={toggleNav}>
        <Image
          src={session.user?.image ?? "/assets/avatar.png"}
          width={32}
          height={32}
          alt="Profile Picture"
          className="rounded-full"
        />
      </Link>
    );
  }

  return (
    <button
      className="bg-btn-background h-10 px-6 py-2 rounded-md font-spaceMono text-mainColor"
      onClick={() => signIn()}
    >
      Login
    </button>
  );
};

export default SignInButton;
