// 주제(토픽) 메타데이터 — 색상, 아이콘, 세부 항목
export const TOPICS = [
  {
    id: 'kiosk',
    name: '키오스크 사용법',
    color: '#1d4ed8',
    tint: 'rgba(29, 78, 216, 0.12)',
    iconKey: 'monitor',
    subtopics: ['기차표 예약', '은행 ATM', '음식점 주문'],
  },
  {
    id: 'phone',
    name: '스마트폰 교육',
    color: '#0891b2',
    tint: 'rgba(8, 145, 178, 0.12)',
    iconKey: 'smartphone',
    subtopics: ['카카오톡', '네이버 검색', '유튜브'],
  },
  {
    id: 'leisure',
    name: '디지털 여가활동',
    color: '#7c3aed',
    tint: 'rgba(124, 58, 237, 0.12)',
    iconKey: 'camera',
    subtopics: ['무인 사진관', '스크린 골프', '전자칠판'],
  },
];

export const getTopic = (id) => TOPICS.find((t) => t.id === id);
