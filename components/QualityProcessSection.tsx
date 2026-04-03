"use client";

const steps = [
  {
    step: "01",
    title: "주문 접수",
    description: "제품 사양, 수량, 납기 일정을 확인하고 최적의 생산 계획을 수립합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "기획 / 디자인",
    description: "소재와 인쇄 방식에 맞춰 디자인을 최적화하고 기술적 적합성을 검토합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "시안 검토",
    description: "샘플 출력 후 색상, 레이아웃, 규격 적합성을 면밀히 검토합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "제판 검사",
    description: "CTP 및 디지털 출력으로 정밀한 제판 작업 후 품질을 검사합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "초도 테스트",
    description: "첫 번째 생산분의 인쇄 품질, 색상 정확도를 집중 점검합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "중간 검사",
    description: "생산 과정 중 품질 편차를 실시간으로 모니터링하고 보정합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    step: "07",
    title: "고객 컨펌",
    description: "완성된 샘플을 고객에게 전달하여 최종 승인을 받습니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    step: "08",
    title: "최종검사 / 납품",
    description: "전수 검사 완료 후 안전하게 포장하여 납기에 맞춰 납품합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

const row1 = steps.slice(0, 4);
const row2 = [...steps.slice(4, 8)].reverse();

function StepConnector({ direction }: { direction: "right" | "left" }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-10 shrink-0">
      <div className="flex items-center gap-1">
        <div className="w-6 h-px bg-primary/30" />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary/50">
          {direction === "right" ? (
            <path d="M2 6h8m0 0L7 3m3 3L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M10 6H2m0 0l3-3M2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </div>
    </div>
  );
}

function StepCard({ item }: { item: (typeof steps)[number] }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100/80 overflow-hidden">
        {/* 아이콘 오버레이 */}
        <div className="absolute right-2 top-0 w-28 h-28 text-primary/[0.07] pointer-events-none">
          <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
            {item.icon}
          </div>
        </div>

        {/* 넘버 */}
        <div className="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md shadow-primary/25 shrink-0 mb-4">
          {item.step}
        </div>

        {/* 제목 */}
        <h3 className="text-base font-bold text-text mb-2 relative">{item.title}</h3>

        {/* 설명 */}
        <p className="text-sm text-text-light leading-relaxed relative" style={{ wordBreak: "keep-all" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

function MobileStep({ item, isLast }: { item: (typeof steps)[number]; isLast: boolean }) {
  return (
    <div className="flex gap-3">
      {/* 좌측: 넘버 + 세로선 */}
      <div className="flex flex-col items-center pt-1">
        <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-md shadow-primary/25 shrink-0 z-10">
          {item.step}
        </div>
        {!isLast && <div className="w-px flex-1 bg-primary/20 my-1" />}
      </div>

      {/* 우측: 카드 */}
      <div className="flex-1 pb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100/80">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0 [&>svg]:w-4 [&>svg]:h-4">
              {item.icon}
            </div>
            <h3 className="text-[15px] font-semibold text-text">{item.title}</h3>
          </div>
          <p className="text-sm text-text-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
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

        {/* ── 데스크톱: 2행 스텝퍼 ── */}
        <div className="hidden lg:block">
          {/* 1행: 01→02→03→04 */}
          <div className="flex items-stretch">
            {row1.map((item, i) => (
              <div key={item.step} className="contents">
                <StepCard item={item} />
                {i < row1.length - 1 && <StepConnector direction="right" />}
              </div>
            ))}
          </div>

          {/* 연결 화살표 */}
          <div className="flex justify-end pr-[calc(12.5%-20px)]">
            <div className="flex flex-col items-center gap-1">
              <div className="h-6 w-px bg-primary/30" />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary/50">
                <path d="M6 2v8m0 0L3 7m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* 2행: 08←07←06←05 */}
          <div className="flex items-stretch">
            {row2.map((item, i) => (
              <div key={item.step} className="contents">
                <StepCard item={item} />
                {i < row2.length - 1 && <StepConnector direction="left" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── 모바일: 세로 타임라인 ── */}
        <div className="lg:hidden">
          {steps.map((item, i) => (
            <MobileStep key={item.step} item={item} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
