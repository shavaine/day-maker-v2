"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  path: string;
}

export default function NavLink({ name, path }: Props) {
  const pathname = usePathname();
  if (path === "/demo") {
    return (
      <Link
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
}
