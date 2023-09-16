"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  path: string;
  toggleNav?: () => void;
  children: React.ReactNode;
}

const SideLink: FC<Props> = ({ path, toggleNav, children }) => {
  const pathname = usePathname();
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
      className={`${
        pathname.includes(path)
          ? "p-2 pr-20 flex flex-row gap-x-2 bg-btn-background text-lg font-spaceMono font-bold text-[#471AA0FF]"
          : "p-2 pr-20 flex flex-row gap-x-2 hover:bg-btn-background text-lg hover:text-[#471AA0FF] font-spaceMono hover:font-bold opacity-70 hover:opacity-100"
      }`}
      href={`/${authenticated ? "dashboard" : "demo"}/${path}`}
    >
      {children}
    </Link>
  );
};

export default SideLink;
