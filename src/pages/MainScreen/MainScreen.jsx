import './MainScreen.css'
import TopicCard from '../../components/TopicCard/TopicCard'

const KioskIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <rect x="8" y="14" width="8" height="5" rx="1" />
  </svg>
)

const SmartphoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="7" y="2" width="10" height="20" rx="3" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
)

const LeisureIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const TOPICS = [
  {
    id: 'kiosk',
    title: '키오스크 사용법',
    subtopics: ['기차표 예약', '은행 ATM', '음식점 주문'],
    variant: 'blue',
    icon: <KioskIcon />,
  },
  {
    id: 'smartphone',
    title: '스마트폰 교육',
    subtopics: ['카카오톡', '네이버 검색', '유튜브'],
    variant: 'teal',
    icon: <SmartphoneIcon />,
  },
  {
    id: 'leisure',
    title: '디지털 여가활동',
    subtopics: ['무인 사진관', '스크린 골프', '전자칠판'],
    variant: 'violet',
    icon: <LeisureIcon />,
  },
]

function MainScreen() {
  function handleStart(topicId) {
    console.log('선택한 주제:', topicId)
  }

  return (
    <main className="main-screen">
      <div className="main-screen__title-area">
        <div className="main-screen__label">QUIZ</div>
        <h1 className="main-screen__title">주제를 선택하세요</h1>
      </div>

      <div className="main-screen__topic-list">
        {TOPICS.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            subtopics={topic.subtopics}
            variant={topic.variant}
            icon={topic.icon}
            onStart={() => handleStart(topic.id)}
          />
        ))}
      </div>
    </main>
  )
}

export default MainScreen
