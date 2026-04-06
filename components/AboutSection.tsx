"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motions";

const strengths = [
  {
    title: "통합 공정",
    description: (
      <>
        디자인 기획부터 인쇄, 후가공, 품질 관리까지
        <br className="sm:hidden" />
        {" "}전 공정을 직접 운영하여 일관된
        <br />품질과 높은 완성도를 보장합니다.
      </>
    ),
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    title: "다업종 경험",
    description:
      "식품, 화장품, 의약품, 산업용 제품 등\n다양한 분야에서 축적된 경험으로\n맞춤형 라벨을 제공합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "유연한 생산",
    description:
      "고도화된 인쇄 기술과 안정적인\n생산 시스템으로 대량 생산부터\n정밀 프로젝트까지 유연하게 대응합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "신뢰의 파트너",
    description:
      "국내 주요 식품·화장품 기업과 지속적인\n파트너십을 유지하며 장기적인\n신뢰 관계를 구축하고 있습니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const history: { year: string; event: string; sub?: string }[] = [
  { year: "1996", event: "서진프린팅 설립\nPC4530, PC40, PC30 설비", sub: "서울 중구 광희동" },
  { year: "1999", event: "UL 및 CSA 인증 획득\n세미로타리 5색기 증설" },
  { year: "2000", event: "SANKI Rotary 8색기 증설" },
  { year: "2003", event: "본사 및 공장 이전", sub: "성동구 성수1가" },
  { year: "2007", event: "로타리 실크스크린 M/C 2대 증설" },
  { year: "2008", event: "본사 및 공장 이전\n세미로타리 6색기" },
  { year: "2014.3", event: "HAWOOTEN 7+1 도입" },
  { year: "2015.3", event: "디지털 인쇄기(딜리) 도입" },
  { year: "2016.3", event: "HONTEC 7+1, 10+1 도입" },
  { year: "2025.6", event: "본사 및 공장 확장 이전", sub: "경기도 구리시" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 회사소개 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.12)}
          >
            <motion.span variants={fadeInUp} className="text-primary text-sm font-semibold tracking-wide uppercase block">
              About Us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-2 text-2xl sm:text-4xl font-bold text-text">
              제품의 가치를 완성하는 기술과 신뢰
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-5 text-text-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
              (주)서진씨앤피는 1996년 설립 이래, 단순한 인쇄를 넘어 고객사의 브랜드 경쟁력을 강화하는 라벨 전문 기업입니다. 브랜드의 가치를 완성하는 디테일, 그 차이를 만들어냅니다.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-3 text-text-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
              제품의 첫인상을 결정짓는 라벨은 브랜드 아이덴티티를 전달하는 핵심 요소입니다. 저희는 디자인 기획부터 인쇄, 후가공, 품질 관리까지 전 공정을 통합 운영하며, 일관된 품질과 높은 완성도를 보장합니다.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-3 text-text-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
              식품, 화장품, 의약품, 산업용 제품 등 다양한 분야에서 축적된 경험을 바탕으로 각 산업의 특성과 규격에 부합하는 맞춤형 라벨을 제공하고 있으며, 고도화된 인쇄 기술과 안정적인 생산 시스템을 통해 대량 생산부터 정밀 프로젝트까지 유연하게 대응합니다.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-3 text-text-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
              현재도 국내 주요 식품·화장품 기업과 지속적인 파트너십을 유지하고 있으며, 앞으로도 신뢰를 기반으로 고객사의 브랜드 가치를 높이는 라벨 솔루션을 제공하겠습니다.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-4 text-text font-medium">
              대표이사 채기옥
            </motion.p>
          </motion.div>

          {/* 강점 카드 */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.12, 0.2)}
          >
            {strengths.map((item, i) => (
              <motion.div
                key={item.title}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                className="relative bg-surface border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* 배경 넘버 */}
                <span className="absolute -top-2 -right-2 text-[80px] font-black text-primary/[0.06] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <div className="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center mb-4 shadow-md shadow-primary/25">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 연혁 가로 스크롤 타임라인 */}
        <div className="mt-16 lg:mt-24">
          <motion.div
            className="text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              History
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-text">
              회사 연혁
            </h2>
          </motion.div>

          {/* 모바일: 세로 타임라인 */}
          <motion.div
            className="lg:hidden pl-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
          >
            {history.map((item, i) => (
              <motion.div key={item.year} className="flex gap-4" variants={fadeInLeft}>
                {/* 좌측: 도트 + 라인 */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-white shrink-0 mt-1" />
                  <div className={`w-px flex-1 ${i < history.length - 1 ? "bg-primary/20" : "bg-transparent"}`} />
                </div>
                {/* 우측: 텍스트 */}
                <div className="pb-5">
                  <span className="text-primary font-bold text-sm">{item.year}</span>
                  <p className="text-text-light text-sm leading-snug whitespace-pre-line mt-0.5" style={{ wordBreak: "keep-all" }}>{item.event}</p>
                  {item.sub && (
                    <p className="text-text-light/60 text-xs mt-0.5">{item.sub}</p>
                  )}
                </div>
              </motion.div>
            ))}
            {/* 하단 쉐브론 */}
            <div className="flex flex-col items-center ml-[3px] gap-0.5">
              <svg width="20" height="12" viewBox="0 0 24 14" fill="none" className="text-primary/20">
                <path d="M2 2l10 10L22 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="20" height="12" viewBox="0 0 24 14" fill="none" className="text-primary/35">
                <path d="M2 2l10 10L22 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="20" height="12" viewBox="0 0 24 14" fill="none" className="text-primary/50">
                <path d="M2 2l10 10L22 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>

          {/* PC: 가로 타임라인 */}
          <motion.div
            className="hidden lg:block max-w-6xl mx-auto overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.08, 0.2)}
          >
            <div className="relative flex items-center overflow-visible">
              <div className="relative grid grid-cols-10 overflow-visible flex-1">
                <div className="absolute top-1/2 left-[5%] right-0 h-px bg-primary/20 -translate-y-px" />

                {history.map((item, i) => {
                  const isTop = i % 2 === 0;
                  return (
                    <motion.div
                      key={item.year}
                      variants={fadeInUp}
                      className="group relative flex flex-col items-center cursor-default overflow-visible"
                    >
                      <div className={`flex flex-col items-center justify-end h-24 pb-2 overflow-visible transition-transform duration-300 group-hover:scale-105 ${isTop ? "opacity-100" : "opacity-0"}`}>
                        <span className="text-primary font-bold text-sm mb-0.5 whitespace-nowrap transition-all duration-300 group-hover:text-base">{isTop ? item.year : ""}</span>
                        <p className="text-text-light text-xs leading-snug text-center whitespace-pre-line min-w-[160px] transition-colors duration-300 group-hover:text-text">{isTop ? item.event : ""}</p>
                        {isTop && item.sub && (
                          <p className="text-text-light/60 text-xs leading-snug text-center whitespace-pre-line min-w-[120px] mt-0.5 transition-colors duration-300 group-hover:text-text-light">{item.sub}</p>
                        )}
                      </div>

                      <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-white z-10 my-1 transition-all duration-300 group-hover:scale-150 group-hover:ring-primary/20" />

                      <div className={`flex flex-col items-center justify-start h-24 pt-2 overflow-visible transition-transform duration-300 group-hover:scale-105 ${!isTop ? "opacity-100" : "opacity-0"}`}>
                        <span className="text-primary font-bold text-sm mb-0.5 whitespace-nowrap transition-all duration-300 group-hover:text-base">{!isTop ? item.year : ""}</span>
                        <p className="text-text-light text-xs leading-snug text-center whitespace-pre-line min-w-[160px] transition-colors duration-300 group-hover:text-text">{!isTop ? item.event : ""}</p>
                        {!isTop && item.sub && (
                          <p className="text-text-light/60 text-xs leading-snug text-center whitespace-pre-line min-w-[120px] mt-0.5 transition-colors duration-300 group-hover:text-text-light">{item.sub}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="shrink-0 ml-2 flex items-center gap-0.5">
                <svg width="12" height="20" viewBox="0 0 14 24" fill="none" className="text-primary/20">
                  <path d="M2 2l10 10L2 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="12" height="20" viewBox="0 0 14 24" fill="none" className="text-primary/35">
                  <path d="M2 2l10 10L2 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="12" height="20" viewBox="0 0 14 24" fill="none" className="text-primary/50">
                  <path d="M2 2l10 10L2 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
