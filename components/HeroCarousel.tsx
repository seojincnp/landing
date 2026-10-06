"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const heroImages = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
  "/hero/hero-5.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // 자동 전환도 움직임이므로 모션을 줄이는 설정이면 인디케이터로만 넘긴다
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
      {/* 첫 이미지가 LCP라 최초 진입 페이드는 생략 */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt={`서진씨엔피 공장 ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            preload={current === 0}
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
  );
}
