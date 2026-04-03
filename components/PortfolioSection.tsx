"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["생활용품", "식품", "의약품", "화장품", "RFID"] as const;
type Category = (typeof categories)[number];

const portfolioItems = [
  // 생활용품 (9장)
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    category: "생활용품" as Category,
    image: `/portfolio/daily/${i + 1}.jpg`,
    alt: `생활용품 라벨 ${i + 1}`,
  })),
  // 식품 (11장)
  ...Array.from({ length: 11 }, (_, i) => ({
    id: 100 + i,
    category: "식품" as Category,
    image: `/portfolio/food/${i + 1}.jpg`,
    alt: `식품 라벨 ${i + 1}`,
  })),
  // 의약품 (6장)
  ...Array.from({ length: 6 }, (_, i) => ({
    id: 200 + i,
    category: "의약품" as Category,
    image: `/portfolio/pharma/${i + 1}.jpg`,
    alt: `의약품 라벨 ${i + 1}`,
  })),
  // 화장품 (8장)
  ...Array.from({ length: 8 }, (_, i) => ({
    id: 300 + i,
    category: "화장품" as Category,
    image: `/portfolio/cosmetic/${i + 1}.jpg`,
    alt: `화장품 라벨 ${i + 1}`,
  })),
  // RFID (1장)
  { id: 400, category: "RFID" as Category, image: "/portfolio/rfid/1.jpg", alt: "RFID 라벨" },
];

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
  const [activeCategory, setActiveCategory] = useState<Category>("생활용품");

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-text">
            주요 거래선
          </h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto">
            다양한 산업 분야의 고객사에 라벨을 공급하고 있습니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
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
      <div className="mt-16 pt-12 border-t border-gray-200/60">
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
      </div>
    </section>
  );
}
