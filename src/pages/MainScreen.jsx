import { Stamp, RotateCcw } from 'lucide-react';
import { TOPICS } from '../data/topics';
import TopicCard from '../components/TopicCard';

export default function MainScreen({ completedTopics, onStart, onReset }) {
  const doneCount = completedTopics.length;

  const handleReset = () => {
    if (window.confirm('통과 기록과 도장을 모두 초기화할까요?')) {
      onReset();
    }
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] flex-1 px-5 py-10 sm:px-10 sm:py-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[28px] font-extrabold text-ink sm:text-[34px]">주제를 선택하세요</h1>
          <p className="mt-2 text-[15px] text-text-secondary sm:text-base">
            체험하신 내용을 퀴즈로 확인해 보세요. 1,000점을 넘기면 도장을 받아요!
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-border-soft bg-bg-soft px-4 py-3">
            <Stamp className="h-5 w-5 text-stamp" strokeWidth={2.2} />
            <span className="font-bold text-ink">완료 {doneCount} / 3</span>
          </div>
          {doneCount > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-xl border-[1.5px] border-border-soft bg-white px-3.5 py-3 text-sm font-semibold text-text-secondary transition hover:bg-bg-soft"
            >
              <RotateCcw className="h-4 w-4" strokeWidth={2.2} />
              기록 초기화
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TOPICS.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            completed={completedTopics.includes(topic.id)}
            onStart={onStart}
          />
        ))}
      </div>
    </main>
  );
}
