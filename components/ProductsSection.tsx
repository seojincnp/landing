"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/motions";

const products = [
  {
    title: "생활용품 라벨",
    description: "세제, 방향제, 위생용품 등 생활용품에 적합한 내수·내유성 라벨",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "화장품 라벨",
    description: "프리미엄 질감과 특수 후가공으로 브랜드 가치를 극대화하는 라벨",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "의약품 라벨",
    description: "GMP 기준에 부합하는 정밀 인쇄와 규격 준수 라벨",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "전기·전자제품 라벨",
    description: "내열·내구성이 뛰어난 산업용 라벨 및 인증 마크 라벨",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "식품 라벨",
    description: "식품위생법 기준에 맞는 안전한 소재와 정확한 표기의 라벨",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546M12 3v1m0 11v1m-4.93-9.464l.707.707M5.636 15.757l.707.707M3 12h1m11 0h1m-2.636-5.757l.707-.707m-9.9 9.9l.707-.707" />
      </svg>
    ),
  },
  {
    title: "특수 라벨",
    description: "금박, 은박, 형압, UV 코팅 등 특수 후가공 프리미엄 라벨",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <motion.span variants={fadeInUp} className="text-primary text-sm font-semibold tracking-wide uppercase block">
            Products
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-2 text-3xl sm:text-4xl font-bold text-text">
            제안 품목
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-text-light max-w-2xl mx-auto">
            각 업계의 특성에 적합한 다양한 라벨을 생산하여 공급하고 있습니다.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1, 0.1)}
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={scaleIn}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {product.icon}
              </div>
              <h3 className="text-lg font-bold text-text mb-3">
                {product.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
