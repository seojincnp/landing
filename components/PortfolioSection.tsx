"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motions";

// 사진을 추가할 때는 public/portfolio/{dir}/ 에 이어지는 번호로 넣고 count만 늘린다
const portfolioConfig = [
  { category: "식품", dir: "food", count: 11 },
  { category: "화장품", dir: "cosmetic", count: 12 },
  { category: "생활용품", dir: "daily", count: 9 },
  { category: "의약품", dir: "pharma", count: 6 },
  { category: "RFID", dir: "rfid", count: 1 },
] as const;

type Category = (typeof portfolioConfig)[number]["category"];

const categories = portfolioConfig.map((c) => c.category);

const portfolioItems = portfolioConfig.flatMap(({ category, dir, count }) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${dir}-${i + 1}`,
    category: category as Category,
    image: `/portfolio/${dir}/${i + 1}.jpg`,
    alt: `${category} 라벨 ${i + 1}`,
  })),
);

const CLIENT_LOGOS = [
  { name: "세븐일레븐", src: "/client/7eleven.png" },
  { name: "CU", src: "/client/cu.png" },
  { name: "GS25", src: "/client/gs25.png" },
  { name: "다이소", src: "/client/daiso.png" },
  { name: "서울F&B", src: "/client/seoulfnb.png" },
  { name: "한살림", src: "/client/hansalim.png" },
  { name: "한국삼공", src: "/client/hankooksamgong.png" },
  { name: "배상면주가", src: "/client/soolsool.png" },
  { name: "카스리테일", src: "/client/cas.png" },
  { name: "더페이스샵", src: "/client/thefaceshop.png" },
  { name: "토니모리", src: "/client/tonymoly.png" },
  { name: "에뛰드하우스", src: "/client/etudehouse.png" },
];

const REPEATED_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <motion.span variants={fadeInUp} className="text-primary text-sm font-semibold tracking-wide uppercase block">
            Portfolio
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-2 text-2xl sm:text-4xl font-bold text-text">
            제작사례
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-text-light max-w-2xl mx-auto">
            다양한 브랜드가 선택한 라벨 전문 파트너
          </motion.p>
        </motion.div>

        {/* 카테고리 필터 */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-2.5 rounded-full text-sm sm:text-md font-medium transition-all duration-200 cursor-pointer ${activeCategory === cat
                ? "bg-primary text-white shadow-md shadow-primary/25"
                : "bg-white text-text-light hover:bg-primary/10 hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 이미지 그리드 */}
        <AnimatePresence mode="popLayout">
          {activeCategory === "RFID" ? (
            <motion.div
              key="rfid-single"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-video bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src={filteredItems[0]?.image ?? ""}
                alt={filteredItems[0]?.alt ?? ""}
                fill
                className="object-contain p-4"
                sizes="100vw"
              />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              layout
              className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-4/3 bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 거래처 마퀴 슬라이드 */}
      <motion.div
        className="mt-16 pt-12 border-t border-gray-200/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-text-light text-sm font-semibold tracking-widest uppercase">
            Trusted Partners
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex items-center h-20 group">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 md:gap-20 items-center pl-12 md:pl-20 group-hover:[animation-play-state:paused]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ minWidth: "fit-content" }}
          >
            {REPEATED_LOGOS.map((client, idx) => (
              <div
                key={`client-${idx}`}
                className="flex items-center justify-center group/logo cursor-default shrink-0"
              >
                <div className="h-10 w-24 md:h-18 md:w-38 relative opacity-40 grayscale group-hover/logo:opacity-100 group-hover/logo:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
