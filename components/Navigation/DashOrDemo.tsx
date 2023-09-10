"use client";
import { useSession } from "next-auth/react";
import NavLink from "./NavLink";
import { VscLoading } from "react-icons/vsc";
import { FC } from "react";

interface Props {
  toggleNav?: () => void;
}

const DashOrDemo: FC<Props> = ({ toggleNav }) => {
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
        <NavLink name="Dashboard" path="/dashboard" toggleNav={toggleNav} />
      </li>
    );
  } else {
    return (
      <li>
        <NavLink name="Demo" path="/demo" toggleNav={toggleNav} />
      </li>
    );
  }
};
export default DashOrDemo;
