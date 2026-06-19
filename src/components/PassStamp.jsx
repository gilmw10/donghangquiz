// 빨간 인장 느낌의 '통과' 도장. 크기/글자 크기는 className으로 조절.
export default function PassStamp({ className = '', label = '통과' }) {
  return (
    <span
      className={`pointer-events-none flex rotate-12 items-center justify-center rounded-full border-[3.5px] border-stamp bg-white/95 font-black text-stamp ${className}`}
    >
      {label}
    </span>
  );
}
