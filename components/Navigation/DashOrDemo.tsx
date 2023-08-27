"use client";
import { useSession } from "next-auth/react";
import NavLink from "./NavLink";

const DashOrDemo = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <li>
        <NavLink name="Dashboard" path="/dashboard" />
      </li>
    );
  } else {
    return (
      <li>
        <NavLink name="Demo" path="/demo" />
      </li>
    );
  }
};
export default DashOrDemo;
