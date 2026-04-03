"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), {
  ssr: false,
});

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
      className="relative min-h-screen flex items-center bg-linear-to-br from-primary to-primary-light pt-16 overflow-hidden"
    >
      {/* 배경: 파티클 캔버스 */}
      <ParticleCanvas />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 텍스트 영역 */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-lg font-medium text-white/70 tracking-widest uppercase mb-2"
            >
              (주)서진씨앤피
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              결과로 증명하는 라벨 파트너
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed mb-10"
            >
              1996년 설립, 전 공정 통합 운영으로
              <br />
              품질, 공정, 결과까지 설계합니다.
            </motion.p>
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
                문의하기
              </a>
            </motion.div>
          </motion.div>

          {/* 이미지 슬라이드 영역 */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
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

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
