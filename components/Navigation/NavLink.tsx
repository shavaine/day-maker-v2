"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  name: string;
  path: string;
  toggleNav?: () => void;
}

const NavLink: FC<Props> = ({ name, path, toggleNav }) => {
  const pathname = usePathname();
  if (path === "/demo" || path === "/dashboard") {
    return (
      <Link
        onClick={toggleNav}
        className={`${
          pathname.includes(path)
            ? "pb-2 border-b-4 border-[#471AA0FF] font-spaceMono font-bold text-[#471AA0FF] px-4"
            : "pb-2 hover:border-b-4 hover:border-[#471AA0FF] font-spaceMono hover:font-bold text-[#471AA0FF] px-4"
        }`}
        href={path}
      >
        {name}
      </Link>
    );
  }

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
        pathname === path
          ? "pb-2 border-b-4 border-[#471AA0FF] font-spaceMono font-bold text-[#471AA0FF] px-4"
          : "pb-2 hover:border-b-4 hover:border-[#471AA0FF] font-spaceMono hover:font-bold text-[#471AA0FF] px-4"
      }`}
      href={path}
    >
      {name}
    </Link>
  );
};

export default NavLink;
