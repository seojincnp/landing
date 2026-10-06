import type { Metadata } from "next";
// unicode-range로 나뉜 서브셋이라 페이지에 쓰인 글자 조각만 내려받는다
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const title = "서진씨앤피 | 프린팅 & 라벨 전문기업";
const description =
  "서진씨앤피는 고품질 프린팅, 라벨, 패키징 솔루션을 제공하는 전문기업입니다.";

export const metadata: Metadata = {
  // apex 도메인은 www로 리다이렉트되므로 www를 정식 주소로 둔다
  metadataBase: new URL("https://www.seojincnp.kr"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "서진씨앤피",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
