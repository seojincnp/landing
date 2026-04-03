import Image from "next/image";

const mainEquipment = [
  {
    name: "HY-R260-12C",
    spec: "12색 간헐 로타리 인쇄기",
    description: "고정밀 12색 인쇄로 다양한 라벨을\n고품질로 생산하는 간헐 로타리 인쇄 설비",
    image: "/equipment/hy-r260-12c.jpg",
  },
  {
    name: "HY-R260 / R460-8C",
    spec: "다색 로타리 인쇄 설비",
    description: "중형부터 대형 라벨까지 대응 가능한\n고속 다색 로타리 인쇄 및 후가공 설비",
    image: "/equipment/hy-r260-r460-8c.jpg",
  },
  {
    name: "세미 로타리 6 M/C (2대)",
    spec: "6색 세미 로타리 인쇄기",
    description: "소량·다품종 라벨 생산에 최적화된\n고정밀 세미 로타리 인쇄 설비",
    image: "/equipment/semi-rotary-6.jpg",
  },
  {
    name: "WJJM-350",
    spec: "고속 로타리 타발기",
    description: "정밀 다이커팅으로 라벨 완제품을\n완성하는 고속 후가공 설비",
    image: "/equipment/wjjm-350.jpg",
  },
];

const subEquipment = [
  { name: "난수마킹설비 3대", image: "/equipment/random-marking.png" },
  { name: "검수 R/W", image: "/equipment/inspection-rw.png" },
  { name: "RFID TAG ENCODER 5대", image: "/equipment/rfid-tag-encoder.png" },
  { name: "평압 레타프레스", image: "/equipment/letterpress.png" },
  { name: "슬래트 3대", image: "/equipment/slat.png" },
  { name: "C T P", image: "/equipment/ctp.png" },
  { name: "디지털 난수", image: "/equipment/digital-random.png" },
];

export default function EquipmentSection() {
  return (
    <section id="equipment" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            Equipment
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-text">
            보유 설비 현황
          </h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto">
            최신 인쇄 설비를 순차적으로 도입하여 어떠한 라벨 인쇄물에도
            대응할 수 있는 생산 체계를 갖추고 있습니다.
          </p>
        </div>

        {/* 메인 장비 4대 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainEquipment.map((item) => (
            <div
              key={item.name}
              className="bg-surface rounded-2xl overflow-hidden"
            >
              {/* 이미지 영역 */}
              <div className="aspect-[4/3] relative bg-white">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text mb-1">
                  {item.name}
                </h3>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full inline-block mb-3">
                  {item.spec}
                </span>
                <p className="text-sm text-text-light leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 보조 장비 7대 */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold text-text-light uppercase tracking-wide mb-6 text-center">
            그 외 보유 설비
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {subEquipment.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl p-5 text-center"
              >
                <div className="w-32 h-32 relative mx-auto mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>
                <p className="text-sm font-medium text-text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
