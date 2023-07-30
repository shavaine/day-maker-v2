import { Space_Mono, Viaoda_Libre, Work_Sans } from "next/font/google";

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space_mono",
  preload: true,
});

export const viaodaLibre = Viaoda_Libre({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-viaoda_libre",
  preload: true,
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
  variable: "--font-work_sans",
  preload: true,
});
