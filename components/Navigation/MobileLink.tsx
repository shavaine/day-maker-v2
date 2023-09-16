"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  path: string;
  toggleNav?: () => void;
  children: React.ReactNode;
}

const MobileLink: FC<Props> = ({ path, toggleNav, children }) => {
  const { data: session, status } = useSession();

  const authenticated = status === "authenticated" ? true : false;
  return (
    <Link
      onClick={
        toggleNav
          ? () => {
              setTimeout(() => {
                toggleNav!();
              }, 75);
            }
          : undefined
      }
      href={`/${authenticated ? "dashboard" : "demo"}/${path}`}
    >
      {children}
    </Link>
  );
};

export default MobileLink;
