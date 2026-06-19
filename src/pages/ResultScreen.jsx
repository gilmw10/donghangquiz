import { RotateCcw, ArrowRight } from 'lucide-react';
import { PASS_SCORE, MAX_SCORE } from '../lib/quiz';

export default function ResultScreen({ topic, result, onRetry, onHome }) {
  const { score, correctCount, total, passed } = result;
  const remaining = Math.max(0, PASS_SCORE - score);

  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col items-center justify-center gap-5 px-5 py-10 text-center sm:px-10">
      {/* 메달 / 도장 */}
      {passed ? (
        <span className="flex h-32 w-32 rotate-[8deg] items-center justify-center rounded-full border-4 border-stamp bg-[#fef2f2] text-[44px] font-black text-stamp sm:h-[150px] sm:w-[150px] sm:text-5xl">
          통과
        </span>
      ) : (
        <span className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-text-muted bg-bg-soft sm:h-[150px] sm:w-[150px]">
          <RotateCcw className="h-14 w-14 text-text-secondary sm:h-16 sm:w-16" strokeWidth={2.2} />
        </span>
      )}

      {/* 헤드라인 */}
      <h1 className="text-[26px] font-extrabold leading-snug text-ink sm:text-4xl">
        {passed ? '잘하셨어요! 통과하셨습니다!' : '아쉬워요! 다시 한번 체험해보고 올까요?'}
      </h1>
      <p className="text-[15px] text-text-secondary sm:text-[17px]">
        {passed
          ? `${topic.name} 주제를 통과해 도장을 받았어요.`
          : '조금만 더 하면 도장을 받을 수 있어요. 체험 후 다시 도전해 보세요!'}
      </p>

      {/* 점수 카드 */}
      <div className="mt-1 flex flex-col items-center gap-1.5 rounded-2xl border-[1.5px] border-border-soft bg-bg-soft px-12 py-6 sm:px-16">
        <span className="text-sm font-semibold text-text-muted">획득 점수</span>
        <div className="flex items-end gap-1.5">
          <span
            className="text-4xl font-extrabold sm:text-[46px]"
            style={{ color: passed ? topic.color : '#475569' }}
          >
            {score.toLocaleString()}
          </span>
          <span className="pb-1 text-lg font-bold text-text-muted sm:text-xl">
            / {MAX_SCORE.toLocaleString()}점
          </span>
        </div>
        <span className="text-sm font-medium text-text-secondary">
          {passed
            ? `${total}문제 중 ${correctCount}개 정답 · 1,000점 통과선 달성`
            : `${total}문제 중 ${correctCount}개 정답 · 통과까지 ${remaining.toLocaleString()}점 남았어요`}
        </span>
      </div>

      {/* 버튼 */}
      <div className="mt-3 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
        {passed ? (
          <>
            <button
              type="button"
              onClick={onHome}
              className="flex items-center justify-center gap-2 rounded-xl px-9 py-4 text-base font-bold text-white transition hover:brightness-95"
              style={{ backgroundColor: topic.color }}
            >
              다른 주제 선택하기
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
            </button>
            <button
              type="button"
              onClick={onRetry}
              className="flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-border-soft bg-white px-9 py-4 text-base font-bold text-text-secondary transition hover:bg-bg-soft"
            >
              <RotateCcw className="h-[18px] w-[18px]" strokeWidth={2.2} />
              다시 풀기
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={onRetry}
              className="flex items-center justify-center gap-2 rounded-xl px-9 py-4 text-base font-bold text-white transition hover:brightness-95"
              style={{ backgroundColor: topic.color }}
            >
              <RotateCcw className="h-[18px] w-[18px]" strokeWidth={2.2} />
              다시 풀기
            </button>
            <button
              type="button"
              onClick={onHome}
              className="rounded-xl border-[1.5px] border-border-soft bg-white px-9 py-4 text-base font-bold text-text-secondary transition hover:bg-bg-soft"
            >
              다른 주제 선택
            </button>
          </>
        )}
      </div>
    </main>
  );
}
