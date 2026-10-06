import type { Metadata } from "next";
// unicode-range로 나뉜 서브셋이라 페이지에 쓰인 글자 조각만 내려받는다
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

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
    <html lang="ko" className="antialiased">
      <body className="min-h-screen flex flex-col">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
