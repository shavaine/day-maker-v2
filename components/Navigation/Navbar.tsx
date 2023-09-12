import Image from "next/image";
import NavLink from "./NavLink";
import Navigation from "./Navigation";
import DashOrDemo from "./DashOrDemo";

export default function Navbar() {
  return (
    <div className="flex flex-row border-b bg-white content-center py-2 sticky top-0 z-30">
      <Image
        className="ml-3 sm:ml-10 mr-auto w-auto h-16"
        src="/assets/logo.png"
        width={2000}
        height={1500}
        alt="Logo"
      />
      <ul className="hidden sm:flex flex-row gap-x-4 mx-auto py-3 content-center ">
        <li>
          <NavLink name="Home" path="/" />
        </li>
        <DashOrDemo />
      </ul>
      <Navigation />
    </div>
  );
}
