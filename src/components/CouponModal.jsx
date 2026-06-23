import { Coffee, Check, Gift } from 'lucide-react';
import { TOPICS } from '../data/topics';

export default function CouponModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coupon-title"
    >
      <div className="w-full max-w-[560px] rounded-[28px] bg-white p-7 text-center shadow-2xl sm:p-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fef3c7]">
          <Coffee className="h-10 w-10 text-amber" strokeWidth={2.2} />
        </div>

        <h2 id="coupon-title" className="mt-5 text-2xl font-extrabold text-ink sm:text-[26px]">
          3개 주제를 모두 통과했어요!
        </h2>
        <p className="mt-2 text-base text-text-secondary">
          열심히 체험해 주셔서 감사합니다. 작은 선물로 커피 쿠폰을 드려요!
        </p>

        {/* 3개 주제 완료 칩 */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {TOPICS.map((t) => (
            <span
              key={t.id}
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold"
              style={{ backgroundColor: t.tint, color: t.accent }}
            >
              <Check className="h-4 w-4" strokeWidth={3} />
              {t.name.replace(/\s.*$/, '')}
            </span>
          ))}
        </div>

        {/* 쿠폰 카드 */}
        <div className="mt-6 flex items-center gap-4 rounded-2xl border-[1.5px] border-amber bg-[#fffbeb] p-4 text-left">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber">
            <Coffee className="h-7 w-7 text-white" strokeWidth={2.2} />
          </span>
          <div className="flex-1">
            <p className="text-base font-extrabold text-ink sm:text-lg">아메리카노 1잔 무료 교환권</p>
            <p className="text-xs text-text-secondary sm:text-sm">
              서울디지털동행플라자 카페에서 사용 가능
            </p>
          </div>
          <span className="rounded-full bg-amber px-3.5 py-2 text-sm font-extrabold text-white">
            무료
          </span>
        </div>

        {/* 버튼 */}
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand px-9 py-3.5 text-base font-bold text-white transition hover:brightness-95"
          >
            <Gift className="h-[18px] w-[18px]" strokeWidth={2.4} />
            쿠폰 받기
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border-[1.5px] border-border-soft bg-white px-9 py-3.5 text-base font-bold text-text-secondary transition hover:bg-bg-soft"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
