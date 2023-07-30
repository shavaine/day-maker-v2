"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  toggleNav?: () => void;
  children: React.ReactNode;
}

export default function SideLink({ path, toggleNav, children }: Props) {
  const pathname = usePathname();
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
          ? "p-2 flex flex-row gap-x-2 bg-btn-background font-spaceMono font-bold text-[#471AA0FF]"
          : "p-2 flex flex-row gap-x-2 hover:bg-btn-background hover:text-[#471AA0FF] font-spaceMono font-bold opacity-70 hover:opacity-100"
      }`}
      href={path}
    >
      {children}
    </Link>
  );
}
