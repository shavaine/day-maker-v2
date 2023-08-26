"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <div className="flex flex-col gap-y-4">
      <Image
        className="w-auto "
        src="/assets/logo.png"
        width={2000}
        height={1500}
        alt="Logo"
      />
      <form>
        <a
          className="px-7 py-4 bg-secondaryColor hover:bg-mainColor text-white text-2xl font-spaceMono rounded-lg leading-6 w-full flex justify-center"
          onClick={() => signIn("google", { callbackUrl })}
          role="button"
        >
          Login with Google
          <FcGoogle className="ml-2" />
        </a>
      </form>
    </div>
  );
};
