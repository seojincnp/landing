"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const heroImages = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
  "/hero/hero-5.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center pt-26 pb-14 lg:pt-16 lg:pb-0 overflow-hidden"
    >
      {/* 배경: 느린 그라디언트 시프트 */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 텍스트 영역 */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* 라벨 */}
            <motion.span
              variants={fadeUp}
              className="inline-block text-md font-medium text-white/60 tracking-widest uppercase mb-3"
            >
              (주)서진씨앤피
            </motion.span>

            {/* 메인 타이틀 */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8"
            >
              결과로 증명하는 라벨 파트너
            </motion.h1>

            {/* 인용문 */}
            <motion.blockquote
              variants={fadeUp}
              className="relative pl-5 border-l-2 border-white/30 mb-8"
            >
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed italic">
                &ldquo;브랜드의 가치를 완성하는 디테일,
                <br />
                그 차이를 만들어냅니다.&rdquo;
              </p>
            </motion.blockquote>

            {/* 구분선 */}
            <motion.div
              variants={fadeUp}
              className="w-full h-px bg-white/20 mb-7"
            />

            {/* 체크리스트 */}
            <motion.ul
              variants={stagger}
              className="space-y-3 mb-9"
            >
              {[
                "28년+ 전 공정 통합 운영 (기획 → 인쇄 → 후가공 → 품질)",
                "식품·화장품·의약품 다업종 맞춤 대응",
                "대량 생산부터 정밀 프로젝트까지 유연 생산",
              ].map((text) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  className="flex items-start gap-1.5 sm:gap-3 text-white/90 text-sm sm:text-base"
                >
                  <svg className="w-5 h-5 text-white/50 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ wordBreak: "keep-all" }}>{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA 버튼 */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#portfolio"
                className="w-full sm:w-auto bg-white text-primary px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-primary-50 transition-colors shadow-lg text-center"
              >
                생산 사례 보기
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/20 transition-colors text-center"
              >
                견적 문의하기
              </a>
            </motion.div>
          </motion.div>

          {/* 이미지 슬라이드 영역 */}
          <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[current]}
                  alt={`서진씨엔피 공장 ${current + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* 하단 인디케이터 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`이미지 ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
