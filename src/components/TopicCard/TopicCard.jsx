import './TopicCard.css'

function TopicCard({ title, subtopics, variant, icon, onStart }) {
  return (
    <div className={`topic-card topic-card--${variant}`}>
      <div className="topic-card__icon-wrap">
        {icon}
      </div>
      <div className="topic-card__text">
        <div className="topic-card__title">{title}</div>
        <div className="topic-card__subtopics">
          {subtopics.map((sub) => (
            <span key={sub}>{sub}</span>
          ))}
        </div>
      </div>
      <button className="topic-card__btn" onClick={onStart}>
        시작하기
      </button>
    </div>
  )
}

export default TopicCard
