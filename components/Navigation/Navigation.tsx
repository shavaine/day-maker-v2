"use client";
import { useState } from "react";
import SignInButton from "../Buttons/SignInButton";
import AuthCheck from "../AuthCheck";
import SignOutButton from "../Buttons/SignOutButton";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";

export default function Navigation() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="flex flex-row gap-x-4 ml-auto mr-4 py-2 content-end z-50">
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
        <ul className="dropdown gap-y-4">
          <li>
            <NavLink name="Home" path="/" />
          </li>
          <li>
            <NavLink name="Demo" path="/demo" />
          </li>
        </ul>
      )}
    </div>
  );
}
