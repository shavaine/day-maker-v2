"use client";
import { useSession } from "next-auth/react";
import NavLink from "./NavLink";
import { VscLoading } from "react-icons/vsc";

const DashOrDemo = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <p className="flex gap-x-3">
        <VscLoading className="animate-spin"></VscLoading>
        Loading...
      </p>
    );
  }

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
