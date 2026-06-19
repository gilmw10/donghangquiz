import { ArrowRight, Check } from 'lucide-react';
import TopicIcon from './TopicIcon';
import PassStamp from './PassStamp';

export default function TopicCard({ topic, completed, onStart }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[20px] border-[1.5px] border-border-soft bg-white shadow-sm transition hover:shadow-md">
      {/* 상단 컬러바 */}
      <div className="h-1.5 w-full" style={{ backgroundColor: topic.color }} />

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ backgroundColor: topic.tint }}
        >
          <TopicIcon iconKey={topic.iconKey} className="h-7 w-7" style={{ color: topic.color }} />
        </span>

        <h3 className="text-xl font-extrabold text-ink sm:text-[22px]">{topic.name}</h3>

        <ul className="flex flex-1 flex-col gap-2.5">
          {topic.subtopics.map((sub) => (
            <li
              key={sub}
              className="flex items-center gap-2 text-[15px] font-medium text-text-secondary"
            >
              <Check className="h-4 w-4 shrink-0 text-text-muted" strokeWidth={2.4} />
              {sub}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onStart(topic)}
          className="mt-1 flex items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold text-white transition hover:brightness-95"
          style={{ backgroundColor: topic.color }}
        >
          {completed ? '다시 풀기' : '시작하기'}
          <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
        </button>
      </div>

      {completed && (
        <PassStamp className="absolute right-5 top-[58px] h-[84px] w-[84px] text-[28px]" />
      )}
    </div>
  );
}
