"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motions";
import BlurFade from "@/components/BlurFade";
import DotPattern from "@/components/DotPattern";

// 거래처 원문마다 항목 구성이 달라서 없는 칸은 생략한다
interface Equipment {
  name: string;
  tagline?: string;
  headline?: string;
  body: string[];
  specs: string[];
  image: string;
  imageAlt: string;
}

const equipment: Equipment[] = [
  {
    name: "HONTEC FLEXICON 380",
    tagline: "10 COLORS. ONE PERFECT PRINT.",
    body: [
      "10색 다색 인쇄와 정밀한 색상 정합을 기반으로\n다양한 필름 및 종이 소재의 고품질 인쇄를 구현합니다.",
    ],
    specs: ["10 COLORS", "MAX. 380mm WEB WIDTH", "MAX. 380mm PRINTING WIDTH"],
    image: "/equipment/flexicon-380.jpg",
    imageAlt: "HONTEC FLEXICON 380 10색 플렉소 인쇄기",
  },
  {
    name: "HONTEC HY-R260 / R460-8C",
    tagline: "8 COLOR ROTARY",
    headline: "빠르고 정밀한 다색 로타리 인쇄",
    body: [
      "8색 다색 인쇄를 기반으로 안정적인 색상 표현과 연속 생산이 가능한\n로타리 인쇄 시스템입니다.",
      "다양한 규격과 소재의 라벨 제작에 대응하며 대량 생산이 필요한 라벨을\n효율적으로 생산합니다.",
    ],
    specs: ["8 COLOR", "ROTARY PRINTING", "HIGH PRODUCTIVITY"],
    image: "/equipment/hy-r260-r460-8c.jpg",
    imageAlt: "HONTEC HY-R260 / R460 8색 로타리 인쇄기",
  },
  {
    name: "SEMI-ROTARY 6 COLOR",
    headline: "다양한 라벨을 위한 정밀하고 유연한 생산",
    body: [
      "6색 세미 로타리 인쇄 시스템을 통해 소량·다품종부터 다양한 규격의 라벨까지\n효율적으로 생산합니다.",
      "작업 특성에 맞춘 유연한 생산과 정밀한 인쇄 품질로 변화하는 고객의 요구에\n빠르게 대응합니다.",
    ],
    specs: ["6 COLOR", "SEMI-ROTARY", "SHORT RUN", "MULTI VARIETY"],
    image: "/equipment/semi-rotary-6.jpg",
    imageAlt: "6색 세미 로타리 인쇄기",
  },
  {
    name: "WJJM-350",
    tagline: "MULTI-FUNCTIONAL DIE CUTTING",
    body: [
      "인쇄가 완료된 라벨 원단을 제품의 형태에 맞게 정밀하게 가공하는\n고속 다기능 다이커팅 시스템입니다.",
      "간헐식 및 로터리 다이커팅에 대응하며 접착 라벨부터 IML·종이 라벨까지\n다양한 후가공을 지원합니다.",
    ],
    specs: ["MAX. 350mm WEB WIDTH", "±0.15mm CUTTING ACCURACY", "ROTARY / INTERMITTENT"],
    image: "/equipment/wjjm-350.jpg",
    imageAlt: "WJJM-350 다기능 다이커팅기",
  },
  {
    name: "HONTEC UniCon 350",
    tagline: "MULTI-FUNCTIONAL LABEL FINISHING SYSTEM",
    body: [
      "인쇄된 라벨에 코팅, 콜드포일, 라미네이팅, 다이커팅, 인몰드 등\n다양한 후가공을 적용할 수 있는 모듈형 라벨 컨버팅 시스템입니다.",
      "제품의 소재와 디자인, 요구되는 품질에 따라 최적의 후가공 공정을 구성하여\n더 선명하고 고급스러운 라벨을 완성합니다.",
    ],
    specs: ["FLEXO", "COATING", "COLD FOIL", "LAMINATION", "DIE CUTTING"],
    image: "/equipment/unicon-350.jpg",
    imageAlt: "HONTEC UniCon 350 모듈형 라벨 후가공기",
  },
];

export default function EquipmentSection() {
  return (
    <section id="equipment" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <motion.span variants={fadeInUp} className="text-primary text-sm font-semibold tracking-wide uppercase block">
            Equipment
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-2 text-2xl sm:text-4xl font-bold text-text">
            보유설비
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-text-light max-w-2xl mx-auto">
            최신 인쇄 설비를 순차적으로 도입하여 어떠한 라벨<br className="sm:hidden" />
            인쇄물에도 대응할 수 있는 생산 체계를 갖추고 있습니다.
          </motion.p>
        </motion.div>

        {/* 설비별 행: PC에서는 사진 좌우를 번갈아 배치 */}
        <div className="space-y-16 lg:space-y-24">
          {equipment.map((item, i) => (
            <BlurFade
              key={item.name}
              inView
              direction="up"
              offset={16}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div
                className={`relative aspect-16/10 overflow-hidden rounded-2xl border border-primary-100/60 shadow-sm bg-linear-to-br from-white via-surface to-primary-50 ${i % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <DotPattern
                  width={18}
                  height={18}
                  className="text-primary/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
                />
                {/* 설비 사진이 흰 배경 JPG라 multiply로 흰색을 배경에 녹인다 */}
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-contain p-6 sm:p-10 mix-blend-multiply"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div style={{ wordBreak: "keep-all" }}>
                <span className="text-primary/60 text-sm font-bold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.tagline && (
                  <p className="mt-1 text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    {item.tagline}
                  </p>
                )}
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-text">
                  {item.name}
                </h3>
                {item.headline && (
                  <p className="mt-3 text-lg font-semibold text-text">
                    {item.headline}
                  </p>
                )}
                <div className="mt-4 space-y-3">
                  {item.body.map((paragraph) => (
                    <p key={paragraph} className="text-text-light leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${item.name} 주요 사양`}>
                  {item.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
