import BlurFade from "@/components/BlurFade";
import GridPattern from "@/components/GridPattern";
import NumberTicker from "@/components/NumberTicker";
import ShimmerButton from "@/components/ShimmerButton";
import TextAnimate from "@/components/TextAnimate";
import HeroCarousel from "@/components/HeroCarousel";

const FOUNDED_YEAR = 1996;
const STEP = 0.05;

const paragraphs = [
  ["라벨의 기획부터 인쇄, 후가공, 품질관리까지", "서진씨앤피가 한 곳에서 책임집니다."],
  ["축적된 인쇄 기술과 생산 경험으로", "제품의 완성도를 높이는 라벨을 만듭니다."],
];

export default function HeroSection() {
  // 정적 페이지라 빌드 시점 연도로 계산된다. 해가 바뀌면 재배포 필요
  const stats = [
    { value: new Date().getFullYear() - FOUNDED_YEAR, unit: "년", label: "라벨 인쇄 업력" },
    { value: 8, unit: "단계", label: "품질관리 공정" },
    { value: 10, unit: "색", label: "다색 인쇄 대응" },
  ];

  // 제목 단어가 먼저 올라오고, 문단 2개, CTA, 수치 띠 순서로 0.05초씩 지연
  const paragraphDelay = STEP * 3;
  const ctaDelay = paragraphDelay + STEP * paragraphs.length;
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
            <TextAnimate
              as="h1"
              by="word"
              animation="blurInUp"
              startOnView={false}
              duration={0.5}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
              style={{ wordBreak: "keep-all" }}
            >
              좋은 제품은 좋은 라벨에서 시작됩니다.
            </TextAnimate>

            <div className="space-y-4 mb-10">
              {paragraphs.map(([first, second], i) => (
                <BlurFade key={first} delay={paragraphDelay + STEP * i}>
                  <p
                    className="text-base sm:text-lg text-white/85 leading-relaxed"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {first}
                    {/* 원문 줄바꿈은 넓은 화면에서만 유지 */}
                    <br className="hidden sm:block" />{" "}
                    {second}
                  </p>
                </BlurFade>
              ))}
            </div>

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
