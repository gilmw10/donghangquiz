import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const labelOf = (a) => (a === 'O' ? '맞아요 (O)' : '아니에요 (X)');

// 문제 채점 결과 + 해설 모달
export default function QuizFeedbackModal({
  topic,
  correct,
  correctAnswer,
  explanation,
  isLast,
  onNext,
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-title"
    >
      <div className="w-full max-w-[440px] rounded-[28px] bg-white p-7 text-center shadow-2xl sm:p-8">
        {/* 결과 아이콘 */}
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${
            correct ? 'bg-[#ecfdf5]' : 'bg-[#fef2f2]'
          }`}
        >
          {correct ? (
            <CheckCircle2 className="h-11 w-11 text-answer-o" strokeWidth={2.3} />
          ) : (
            <XCircle className="h-11 w-11 text-answer-x" strokeWidth={2.3} />
          )}
        </div>

        {/* 결과 문구 */}
        <h2
          id="feedback-title"
          className={`mt-4 text-2xl font-extrabold sm:text-[26px] ${
            correct ? 'text-answer-o' : 'text-answer-x'
          }`}
        >
          {correct ? '정답이에요!' : '아쉬워요, 오답이에요'}
        </h2>

        {!correct && (
          <p className="mt-1 text-base font-bold text-ink">
            정답은 ‘{labelOf(correctAnswer)}’ 예요
          </p>
        )}

        {/* 해설 */}
        <div className="mt-4 rounded-2xl bg-bg-soft px-5 py-4 text-left">
          <p className="mb-1 text-sm font-bold text-text-muted">해설</p>
          <p className="text-[15px] leading-relaxed text-text-secondary sm:text-base">
            {explanation}
          </p>
        </div>

        {/* 다음 */}
        <button
          type="button"
          onClick={onNext}
          autoFocus
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-bold text-white transition hover:brightness-95"
          style={{ backgroundColor: topic.color }}
        >
          {isLast ? '결과 보기' : '다음 문제'}
          <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
