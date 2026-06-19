import { GraduationCap } from 'lucide-react';

const PROGRAM_URL = 'https://didong.kr/program/1';

export default function AppHeader({ onHome }) {
  return (
    <header className="rounded-b-2xl bg-brand-soft">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-10">
        {/* 좌측: 브랜드 (로고) */}
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-3 text-left"
          aria-label="처음으로"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 shadow-sm sm:h-11 sm:w-11">
            <GraduationCap className="h-6 w-6 text-brand" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold text-ink sm:text-lg">
              서울디지털동행플라자
            </span>
            <span className="hidden text-xs font-medium text-ink/70 sm:block">
              디지털 기기, 이제 자신있게!
            </span>
          </span>
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
