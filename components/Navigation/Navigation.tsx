import Image from "next/image";
import Link from "next/link";

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
        <Link
          className="hover:border-b-4 font-spaceMono font-bold text-[#471AA0FF] px-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:border-b-4 font-spaceMono font-bold text-[#471AA0FF] px-4"
          href="/demo"
        >
          Demo
        </Link>
      </div>
      <div className="flex flex-row gap-x-4 ml-auto mr-4 py-2 content-end">
        <button className=" bg-btn-background h-10 px-6 py-2 rounded-md font-spaceMono text-mainColor">
          Login
        </button>
        <button className="border bg-mainColor h-10 px-6 py-2 rounded-md font-spaceMono text-white">
          Sign up
        </button>
      </div>
    </div>
  );
}
