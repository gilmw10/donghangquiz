import { Coffee, Check } from 'lucide-react';
import { TOPICS } from '../data/topics';

// 실제 규격이 아닌, 느낌만 내는 가짜 바코드 (검정 막대 폭 패턴)
const BARCODE = [
  3, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3,
  1, 1, 2, 1, 2, 3, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1,
  1, 2, 1, 1, 3, 1, 2, 1, 1, 2,
];

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
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border-[1.5px] border-amber bg-[#fffbeb] p-4 text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber">
              <Coffee className="h-6 w-6 text-white" strokeWidth={2.2} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-bold text-ink">아메리카노 1잔 무료 교환권</p>
              <p className="text-xs text-text-secondary">서울디지털동행플라자 카페에서 사용 가능</p>
            </div>
            <span className="rounded-full bg-amber px-3 py-1.5 text-xs font-extrabold text-white">
              무료
            </span>
          </div>

          {/* 가짜 바코드 */}
          <div className="rounded-xl bg-white px-4 py-3">
            <div className="flex h-12 items-stretch justify-center gap-px">
              {BARCODE.map((w, i) => (
                <span
                  key={i}
                  className={i % 2 === 0 ? 'bg-ink' : 'bg-white'}
                  style={{ width: `${w * 2}px` }}
                />
              ))}
            </div>
            <p className="mt-1.5 text-center text-xs tracking-[0.3em] text-text-muted">
              DDHP-2026-004519
            </p>
          </div>
        </div>

        {/* 버튼 */}
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-brand px-16 py-3.5 text-base font-bold text-white transition hover:brightness-95"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
