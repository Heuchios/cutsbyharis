import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cuts by Haris | Barbershop in Saskatoon",
  description:
    "Premium fades, beard work, and sharp lineups in Saskatoon.",
  verification: {
    google: "ltkTbM_5bnx899563B0pMusEHiqMeFrvR_-VKuCka7w", // paste here
  },
    icon: "/icon.png",
    apple: "/apple-icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
