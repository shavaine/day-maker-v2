"use client";
import { useState } from "react";
import SignInButton from "../Buttons/SignInButton";
import AuthCheck from "../AuthCheck";
import SignOutButton from "../Buttons/SignOutButton";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  AiFillLayout,
  AiFillSchedule,
  AiOutlineCalendar,
} from "react-icons/ai";
import { HiListBullet } from "react-icons/hi2";
import DashOrDemo from "./DashOrDemo";
import MobileLink from "./MobileLink";

export default function Navigation() {
  const pathname = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const closeNav = () => {
    setToggleDropdown(false);
  };
  return (
    <div className="flex flex-row gap-x-4 ml-auto mr-4 py-2 items-center z-50">
      <div className="hidden sm:flex gap-x-4 items-center">
        <SignInButton />
        <AuthCheck>
          <SignOutButton />
        </AuthCheck>
      </div>
      <FaBars
        onClick={() => {
          setToggleDropdown((prev) => !prev);
        }}
        className="sm:hidden text-3xl cursor-pointer text-mainColor mt-1"
      />
      <div
        className={`${
          toggleDropdown
            ? "max-h-screen overflow-hidden transition-max-height duration-500 ease-in"
            : "flex justify-end max-h-0 overflow-hidden transition-max-height duration-500 ease-out"
        } dropdown gap-y-4`}
      >
        <ul className="p-5 flex flex-col gap-y-4 items-end">
          <li>
            <NavLink name="Home" path="/" toggleNav={closeNav} />
          </li>
          <DashOrDemo toggleNav={closeNav} />
          <hr className="mt-3 border-1 w-full " />
          <SignInButton />
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </ul>
      </div>
      {(pathname.includes("dashboard") || pathname.includes("demo")) && (
        <ul className="sm:hidden fixed bottom-0 left-0 w-full bg-white shadow-md flex text-center text-[#471AA0FF]">
          <li
            className={`${
              pathname.includes("schedule")
                ? "bg-purple-200 p-2 grow"
                : "p-2 grow"
            }bg-purple-200 p-2 grow`}
          >
            <MobileLink path="schedule" toggleNav={closeNav}>
              <AiFillSchedule className="text-2xl mx-auto" />
              <p className="text-sm">Schedule</p>
            </MobileLink>
          </li>
          <li
            className={`${
              pathname.includes("calendar")
                ? "bg-purple-200 p-2 grow"
                : "p-2 grow"
            }bg-purple-200 p-2 grow`}
          >
            <MobileLink path="calendar" toggleNav={closeNav}>
              <AiOutlineCalendar className="text-2xl mx-auto" />
              <p className="text-sm">Calendar</p>
            </MobileLink>
          </li>
          <li
            className={`${
              pathname.includes("templates")
                ? "bg-purple-200 p-2 grow"
                : "p-2 grow"
            }bg-purple-200 p-2 grow`}
          >
            <MobileLink path="templates" toggleNav={closeNav}>
              <AiFillLayout className="text-2xl mx-auto" />
              <p className="text-sm">Templates</p>
            </MobileLink>
          </li>
          <li
            className={`${
              pathname.includes("actions")
                ? "bg-purple-200 p-2 grow"
                : "p-2 grow"
            }bg-purple-200 p-2 grow`}
          >
            <MobileLink path="actions" toggleNav={closeNav}>
              <HiListBullet className="text-2xl mx-auto" />
              <p className="text-sm">Actions</p>
            </MobileLink>
          </li>
        </ul>
      )}
    </div>
  );
}
