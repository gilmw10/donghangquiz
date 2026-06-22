const PROGRAM_URL = 'https://didong.kr/program/1';

export default function AppHeader({ onHome }) {
  return (
    <header className="rounded-b-2xl bg-brand-soft">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-10">
        {/* 좌측: 서울특별시 심볼 + 동행플라자 로고 (비율 유지, 높이 기준) */}
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-3 sm:gap-4"
          aria-label="서울특별시 · 서울디지털동행플라자 · 처음으로"
        >
          <img
            src="/seoul-symbol.svg"
            alt="서울특별시"
            className="h-8 w-auto sm:h-9"
          />
          <span className="h-7 w-px bg-ink/20" aria-hidden="true" />
          <img
            src="/logo.png"
            alt="서울디지털동행플라자"
            className="h-9 w-auto sm:h-10"
          />
        </button>

        {/* 우측: 프로그램 소개 */}
        <a
          href={PROGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-[1.5px] border-ink/30 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white/50"
        >
          프로그램 소개
        </a>
      </div>
    </header>
  );
}
