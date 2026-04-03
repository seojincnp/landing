"use client";

import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "주문 접수",
    description: "제품 사양, 수량, 납기 일정을 확인하고 최적의 생산 계획을 수립합니다.",
    image: "/process/step-01.jpg",
  },
  {
    step: "02",
    title: "디자인 검토",
    description:
      "소재와 인쇄 방식에 맞춰 디자인을 최적화하고 기술적 적합성을 검토합니다.",
    image: "/process/step-02.jpg",
  },
  {
    step: "03",
    title: "시안 컨펌",
    description: "샘플 출력 후 고객 확인을 거쳐 최종 시안을 확정합니다.",
    image: "/process/step-03.jpg",
  },
  {
    step: "04",
    title: "제판 · 출력",
    description: "CTP 및 디지털 출력으로 정밀한 제판 작업을 진행합니다.",
    image: "/process/step-04.jpg",
  },
  {
    step: "05",
    title: "인쇄",
    description:
      "로타리, 세미로타리, 디지털 등 최적의 인쇄 방식으로 생산합니다.",
    image: "/process/step-05.jpg",
  },
  {
    step: "06",
    title: "후가공",
    description: "코팅, 박, 형압, 타발 등 제품에 맞는 후가공을 적용합니다.",
    image: "/process/step-06.jpg",
  },
  {
    step: "07",
    title: "검수",
    description:
      "인쇄 품질, 색상, 불량 여부를 전수 검사하여 완성도를 확인합니다.",
    image: "/process/step-07.jpg",
  },
  {
    step: "08",
    title: "출하",
    description: "안전하게 포장하여 약속된 납기에 맞춰 납품합니다.",
    image: "/process/step-08.jpg",
  },
];

/* ── 1행: 01→02→03→04 (왼→오) ── */
const row1 = steps.slice(0, 4);
/* ── 2행: 05→06→07→08 이지만 표시는 08,07,06,05 (오→왼) ── */
const row2 = [...steps.slice(4, 8)].reverse();

function ArrowRight() {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 shrink-0">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className="text-primary"
      >
        <path
          d="M8 14h12m0 0l-4-4m4 4l-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 shrink-0">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className="text-primary"
      >
        <path
          d="M20 14H8m0 0l4-4M8 14l4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Card({ item }: { item: (typeof steps)[number] }) {
  return (
    <div className="group relative bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-1 min-w-0">
      {/* 이미지 */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        {/* 스텝 넘버 */}
        <div className="absolute top-3 left-3 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">
          {item.step}
        </div>
      </div>

      {/* 텍스트 */}
      <div className="p-5">
        <h3 className="text-base font-bold text-text mb-1.5">{item.title}</h3>
        <p className="text-sm text-text-light leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

/* 모바일: 세로 타임라인의 개별 아이템 */
function MobileCard({ item }: { item: (typeof steps)[number] }) {
  return (
    <div className="relative flex gap-4">
      {/* 세로선 + 도트 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shrink-0 z-10">
          {item.step}
        </div>
        <div className="w-px flex-1 bg-primary/20" />
      </div>

      {/* 카드 */}
      <div className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex-1 mb-6">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="text-base font-bold text-text mb-1">{item.title}</h3>
          <p className="text-sm text-text-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QualityProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            Quality Process
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-text">
            품질 관리
          </h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto">
            품질, 공정, 결과까지 설계합니다.
          </p>
        </div>

        {/* ── 데스크톱: 지그재그 S자 흐름 ── */}
        <div className="hidden lg:block">
          {/* 1행: 왼→오 */}
          <div className="flex items-stretch gap-0">
            {row1.map((item, i) => (
              <div key={item.step} className="contents">
                <Card item={item} />
                {i < row1.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>

          {/* 1행→2행 연결 화살표 */}
          <div className="flex justify-end pr-[calc(12.5%-16px)]">
            <div className="flex flex-col items-center">
              <div className="w-px h-1.5" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M12 6v12m0 0l-4-4m4 4l4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="w-px h-1.5" />
            </div>
          </div>

          {/* 2행: 오→왼 (역순 배치) */}
          <div className="flex items-stretch gap-0">
            {row2.map((item, i) => (
              <div key={item.step} className="contents">
                <Card item={item} />
                {i < row2.length - 1 && <ArrowLeft />}
              </div>
            ))}
          </div>
        </div>

        {/* ── 모바일/태블릿: 세로 타임라인 ── */}
        <div className="lg:hidden">
          {steps.map((item) => (
            <MobileCard key={item.step} item={item} />
          ))}
          {/* 타임라인 끝 도트 */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
            <p className="text-sm text-primary font-semibold">완료</p>
          </div>
        </div>
      </div>
    </section>
  );
}
