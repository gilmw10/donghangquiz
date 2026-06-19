import { Circle, X, Check } from 'lucide-react';

// O/X 큰 답변 버튼. type: 'O' | 'X'
// state: 'idle' | 'correct' | 'wrong' | 'dim'  (채점 후 정답/오답 표시)
export default function AnswerButton({ type, onClick, disabled, state = 'idle' }) {
  const isO = type === 'O';
  const color = isO ? '#0e9f6e' : '#e11d48';
  const label = isO ? '맞아요' : '아니에요';

  const dim = state === 'dim';
  const bg = state === 'correct' ? '#ecfdf5' : state === 'wrong' ? '#fef2f2' : '#ffffff';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`relative flex w-full flex-col items-center justify-center gap-4 rounded-2xl border-[2.5px] px-4 py-7 transition sm:py-10 ${
        disabled ? 'cursor-default' : 'hover:-translate-y-0.5 hover:shadow-lg'
      } ${dim ? 'opacity-45' : ''} focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2`}
      style={{ borderColor: color, backgroundColor: bg, '--tw-ring-color': `${color}55` }}
      aria-label={isO ? '맞아요 (O)' : '아니에요 (X)'}
    >
      {/* 정답/오답 코너 표시 */}
      {state === 'correct' && (
        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-answer-o text-white">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      )}
      {state === 'wrong' && (
        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-answer-x text-white">
          <X className="h-4 w-4" strokeWidth={3} />
        </span>
      )}

      <span
        className="flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24"
        style={{ backgroundColor: color }}
      >
        {isO ? (
          <Circle className="h-11 w-11 text-white sm:h-12 sm:w-12" strokeWidth={2.6} />
        ) : (
          <X className="h-12 w-12 text-white sm:h-14 sm:w-14" strokeWidth={2.6} />
        )}
      </span>
      <span className="text-xl font-extrabold text-ink sm:text-2xl">{label}</span>
    </button>
  );
}
