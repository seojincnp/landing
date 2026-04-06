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
            {/* 메인 타이틀 */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3"
            >
              제품의 가치를 완성하는 기술과 신뢰
            </motion.h1>

            {/* 서브 카피 */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/60 leading-relaxed italic mb-8"
            >
              브랜드의 가치를 완성하는 디테일, 그 차이를 만들어냅니다.
            </motion.p>

            {/* 소개글 */}
            <motion.p variants={fadeUp} className="text-white/80 leading-relaxed mb-4" style={{ wordBreak: "keep-all" }}>
              (주)서진씨앤피는 1996년 설립 이래, 단순한 인쇄를 넘어 고객사의 브랜드 경쟁력을 강화하는 라벨 전문 기업입니다.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/80 leading-relaxed mb-4" style={{ wordBreak: "keep-all" }}>
              제품의 첫인상을 결정짓는 라벨은 브랜드 아이덴티티를 전달하는 핵심 요소입니다. 저희는 디자인 기획부터 인쇄, 후가공, 품질 관리까지 전 공정을 통합 운영하며, 일관된 품질과 높은 완성도를 보장합니다.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/80 leading-relaxed mb-9" style={{ wordBreak: "keep-all" }}>
              식품, 화장품, 의약품, 산업용 제품 등 다양한 분야에서 축적된 경험을 바탕으로 각 산업의 특성과 규격에 부합하는 맞춤형 라벨을 제공하고 있으며, 앞으로도 신뢰를 기반으로 고객사의 브랜드 가치를 높이는 라벨 솔루션을 만들어 내겠습니다.
            </motion.p>

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
