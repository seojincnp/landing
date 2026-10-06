// Header, Footer 메뉴가 어긋나지 않도록 한 곳에서 관리. page.tsx 섹션 순서도 이 순서를 따른다
export const sections = [
  { id: "hero", label: "홈" },
  { id: "about", label: "회사소개" },
  { id: "portfolio", label: "제작사례" },
  { id: "equipment", label: "보유설비" },
  { id: "process", label: "품질관리" },
  { id: "contact", label: "문의하기" },
] as const;
