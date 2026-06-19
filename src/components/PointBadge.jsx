import { Zap } from 'lucide-react';

// 문제 난이도/배점 뱃지
export default function PointBadge({ difficulty }) {
  const hard = difficulty === 'hard';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold ${
        hard ? 'bg-[#fef3c7] text-amber' : 'bg-[#eef2ff] text-brand'
      }`}
    >
      {hard ? (
        <Zap className="h-4 w-4" fill="currentColor" />
      ) : (
        <span className="h-2 w-2 rounded-full bg-brand" />
      )}
      {hard ? '고난도 · 300점' : '일반 · 100점'}
    </span>
  );
}
