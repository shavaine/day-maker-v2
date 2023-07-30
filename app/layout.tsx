import { spaceMono, viaodaLibre, workSans } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "./AuthProvider";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";

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
        <body
          className={`${spaceMono.variable} ${viaodaLibre.variable} ${workSans.variable}`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
