import Image from "next/image";
import NavLink from "./NavLink";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <div className="flex flex-row content-center py-2 sticky top-0 z-50">
      <Image
        className="mr-auto ml-4  w-auto h-16"
        src="/assets/logo.png"
        width={2000}
        height={1500}
        alt="Logo"
      />
      <ul className="hidden sm:flex flex-row gap-x-4 mx-auto py-3 content-center ">
        <li>
          <NavLink name="Home" path="/" />
        </li>
        <li>
          <NavLink name="Demo" path="/demo" />
        </li>
      </ul>
      <Navigation />
      {/* <div className="flex flex-row gap-x-4 ml-auto mr-4 py-2 content-end">
        <SignInButton />
        <AuthCheck>
          <SignOutButton />
        </AuthCheck>
      </div> */}
    </div>
  );
}
