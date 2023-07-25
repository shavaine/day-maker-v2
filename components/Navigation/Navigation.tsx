import Image from "next/image";
import Link from "next/link";
import SignInButton from "../Buttons/SignInButton";
import AuthCheck from "../AuthCheck";
import SignOutButton from "../Buttons/SignOutButton";
import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <div className="flex flex-row content-center py-2 h-20">
      <Image
        className="mr-auto ml-4 h-auto w-auto"
        src="/assets/logo.png"
        width={2000}
        height={1500}
        alt="Logo"
      />
      <div className="flex flex-row gap-x-4 mx-auto py-3 content-center">
        <NavLink name="Home" path="/" />
        <NavLink name="Demo" path="/demo" />
      </div>
      <div className="flex flex-row gap-x-4 ml-auto mr-4 py-2 content-end">
        {/* <button className=" bg-btn-background h-10 px-6 py-2 rounded-md font-spaceMono text-mainColor">
          Login
        </button>
        <button className="border bg-mainColor h-10 px-6 py-2 rounded-md font-spaceMono text-white">
          Sign up
        </button> */}
        <SignInButton />
        <AuthCheck>
          <SignOutButton />
        </AuthCheck>
      </div>
    </div>
  );
}
