import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "서진씨앤피 | 프린팅 & 라벨 전문기업",
  description:
    "서진씨앤피는 고품질 프린팅, 라벨, 패키징 솔루션을 제공하는 전문기업입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
