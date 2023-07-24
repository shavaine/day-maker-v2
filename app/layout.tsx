import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Day Maker",
  description: "Scheduling Made Simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
