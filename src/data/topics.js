// 주제(토픽) 메타데이터 — 색상, 아이콘, 세부 항목
// color   : 포인트 색 (상단 바, 진행 바, 버튼 배경 등 큰 면적)
// tint    : color 의 연한 배경색 (아이콘 칩 배경 등)
// accent  : 밝은/연한 배경 위에 올리는 전경색 (아이콘·칩 글자·점수 등). 노랑처럼 밝은 색은 진하게.
// onColor : color 배경 위에 올리는 글자색 (버튼 텍스트 등)
export const TOPICS = [
  {
    id: 'kiosk',
    name: '키오스크 사용법',
    color: '#009739',
    tint: 'rgba(0, 151, 57, 0.12)',
    accent: '#009739',
    onColor: '#ffffff',
    iconKey: 'monitor',
    subtopics: ['기차표 예약', '은행 ATM', '음식점 주문'],
  },
  {
    id: 'phone',
    name: '스마트폰 교육',
    color: '#FEDD00',
    tint: 'rgba(254, 221, 0, 0.14)',
    accent: '#8A6D00',
    onColor: '#0f172a',
    iconKey: 'smartphone',
    subtopics: ['카카오톡', '네이버 검색', '유튜브'],
  },
  {
    id: 'leisure',
    name: '디지털 여가활동',
    color: '#012169',
    tint: 'rgba(1, 33, 105, 0.12)',
    accent: '#012169',
    onColor: '#ffffff',
    iconKey: 'camera',
    subtopics: ['무인 사진관', '스크린 골프', '전자칠판'],
  },
];

export const getTopic = (id) => TOPICS.find((t) => t.id === id);
