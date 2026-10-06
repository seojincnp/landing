"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// 첫 장은 LCP와 공유 이미지(app/opengraph-image.jpg)의 원본이라 밝은 전경 사진을 둔다
const heroImages = [
  { src: "/hero/factory-1.jpg", alt: "서진씨앤피 공장의 다색 라벨 인쇄 라인 전경" },
  { src: "/hero/factory-2.jpg", alt: "로타리 라벨 인쇄기" },
  { src: "/hero/factory-3.jpg", alt: "인쇄 유닛을 지나는 라벨 원단" },
  { src: "/hero/factory-4.jpg", alt: "다색 로타리 인쇄 라인" },
  { src: "/hero/factory-5.jpg", alt: "라벨 후가공 설비" },
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
            src={heroImages[current].src}
            alt={heroImages[current].alt}
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
