"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  children: React.ReactNode;
}

export default function SideLink({ path, children }: Props) {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname.includes(path)
          ? "p-2 flex flex-row gap-x-2 bg-btn-background font-spaceMono font-bold text-[#471AA0FF]"
          : "p-2 flex flex-row gap-x-2 hover:bg-btn-background hover:text-[#471AA0FF] font-spaceMono font-bold opacity-70 hover:opacity-100"
      }`}
      href={path}
    >
      {children}
    </Link>
  );
}
