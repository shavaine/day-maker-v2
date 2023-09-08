"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  toggleNav?: () => void;
  children: React.ReactNode;
}

export default function MobileLink({ path, toggleNav, children }: Props) {
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
      href={`/${authenticated ? "dashboard" : "demo"}/${path}`}
    >
      {children}
    </Link>
  );
}
