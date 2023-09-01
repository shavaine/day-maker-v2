"use client";
import { useState } from "react";
import SignInButton from "../Buttons/SignInButton";
import AuthCheck from "../AuthCheck";
import SignOutButton from "../Buttons/SignOutButton";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import SideLink from "./SideLink";
import {
  AiFillLayout,
  AiFillSchedule,
  AiOutlineCalendar,
} from "react-icons/ai";
import { HiListBullet } from "react-icons/hi2";
import DashOrDemo from "./DashOrDemo";

export default function Navigation() {
  const pathname = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const closeNav = () => {
    setToggleDropdown(false);
  };
  return (
    <div className="flex flex-row gap-x-4 ml-auto mr-4 py-2 items-center z-50">
      <SignInButton />
      <AuthCheck>
        <SignOutButton />
      </AuthCheck>
      <FaBars
        onClick={() => {
          setToggleDropdown((prev) => !prev);
        }}
        className="sm:hidden text-3xl cursor-pointer text-mainColor mt-1"
      />
      {toggleDropdown && (
        <div>
          <ul className="dropdown gap-y-4">
            <li>
              <NavLink name="Home" path="/" toggleNav={closeNav} />
            </li>
            <DashOrDemo />
            <hr className="mt-3 border-1 w-full " />
            {(pathname.includes("dashboard") || pathname.includes("demo")) && (
              <>
                <li>
                  <SideLink path="schedule" toggleNav={closeNav}>
                    <AiFillSchedule className="text-2xl ml-3" />
                    <p>Schedule</p>
                  </SideLink>
                </li>
                <li>
                  <SideLink path="calendar" toggleNav={closeNav}>
                    <AiOutlineCalendar className="text-2xl ml-3" />
                    <p>Calendar</p>
                  </SideLink>
                </li>
                <li>
                  <SideLink path="templates" toggleNav={closeNav}>
                    <AiFillLayout className="text-2xl ml-3" />
                    <p>Templates</p>
                  </SideLink>
                </li>
                <li>
                  <SideLink path="actions" toggleNav={closeNav}>
                    <HiListBullet className="text-2xl ml-3" />
                    <p>Actions</p>
                  </SideLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
