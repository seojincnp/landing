import BlurFade from "@/components/BlurFade";
import GridPattern from "@/components/GridPattern";
import NumberTicker from "@/components/NumberTicker";
import ShimmerButton from "@/components/ShimmerButton";
import HeroCarousel from "@/components/HeroCarousel";

const FOUNDED_YEAR = 1996;
const STEP = 0.05;

const checklist = [
  "전 공정 통합 운영 (기획 → 인쇄 → 후가공 → 품질)",
  "식품·화장품·의약품 다업종 맞춤 대응",
  "대량 생산부터 정밀 프로젝트까지 유연 생산",
];

export default function HeroSection() {
  // 정적 페이지라 빌드 시점 연도로 계산된다. 해가 바뀌면 재배포 필요
  const stats = [
    { value: new Date().getFullYear() - FOUNDED_YEAR, unit: "년", label: "라벨 인쇄 업력" },
    { value: 8, unit: "단계", label: "품질관리 공정" },
    { value: 10, unit: "색", label: "다색 인쇄 대응" },
  ];

  // 좌측 요소: 제목, 인용문, 구분선, 체크리스트 3줄, CTA 순서로 0.05초씩 지연
  const ctaDelay = STEP * (3 + checklist.length);
  const statsDelay = ctaDelay + STEP;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center pt-26 pb-14 lg:pt-16 lg:pb-0 overflow-hidden"
    >
      {/* 배경: 그라디언트 + 가장자리로 흐려지는 그리드 */}
      <div className="absolute inset-0 hero-gradient" />
      <GridPattern
        width={48}
        height={48}
        className="fill-white/5 stroke-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 텍스트 영역 */}
          <div>
            <BlurFade delay={0}>
              <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
                제품의 가치를 완성하는 기술과 신뢰
              </h1>
            </BlurFade>

            <BlurFade delay={STEP}>
              <blockquote className="relative pl-5 border-l-2 border-white/30 mb-8">
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed italic">
                  &ldquo;브랜드의 가치를 완성하는 디테일,
                  <br />
                  그 차이를 만들어냅니다.&rdquo;
                </p>
              </blockquote>
            </BlurFade>

            <BlurFade delay={STEP * 2}>
              <div className="w-full h-px bg-white/20 mb-7" />
            </BlurFade>

            <ul className="space-y-3 mb-9">
              {checklist.map((text, i) => (
                <li key={text}>
                  <BlurFade
                    delay={STEP * (3 + i)}
                    className="flex items-start gap-1.5 sm:gap-3 text-white/90 text-sm sm:text-base"
                  >
                    <svg className="w-5 h-5 text-white/50 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ wordBreak: "keep-all" }}>{text}</span>
                  </BlurFade>
                </li>
              ))}
            </ul>

            {/* CTA: 견적 문의가 주요 동작 */}
            <BlurFade
              delay={ctaDelay}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4"
            >
              <ShimmerButton
                href="#contact"
                background="#ffffff"
                shimmerColor="#1e5285"
                shimmerSize="4px"
                shimmerDuration="2.5s"
                borderRadius="8px"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-primary shadow-lg"
              >
                견적 문의하기
              </ShimmerButton>
              <a
                href="#portfolio"
                className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/20 transition-colors text-center"
              >
                제작사례 보기
              </a>
            </BlurFade>
          </div>

          {/* 이미지 슬라이드: LCP 요소라 blur와 지연 없이 짧은 fade만 */}
          <BlurFade delay={0} blur="0px" offset={0}>
            <HeroCarousel />
          </BlurFade>
        </div>

        {/* 수치 띠 */}
        <BlurFade delay={statsDelay}>
          <dl className="mt-12 lg:mt-16 grid grid-cols-3 border-t border-white/20 pt-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse text-center ${i > 0 ? "border-l border-white/20" : ""}`}
              >
                <dt className="mt-1.5 text-xs sm:text-sm text-white/70">{stat.label}</dt>
                <dd className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  <NumberTicker
                    value={stat.value}
                    delay={statsDelay + 0.2}
                    className="text-white tracking-tight"
                  />
                  <span className="ml-0.5 text-lg sm:text-2xl font-semibold text-white/80">
                    {stat.unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </BlurFade>
      </div>
    </section>
  );
}
