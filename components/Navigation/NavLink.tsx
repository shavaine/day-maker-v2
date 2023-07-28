"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  path: string;
}

export default function NavLink({ name, path }: Props) {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname === path
          ? "pb-2 border-b-4 font-spaceMono font-bold text-[#471AA0FF] px-4"
          : "hover:border-b-4 font-spaceMono font-bold text-[#471AA0FF] px-4"
      }`}
      href={path}
    >
      {name}
    </Link>
  );
}
