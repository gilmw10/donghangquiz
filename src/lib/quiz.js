import { QUESTIONS } from '../data/questions';

// 점수 / 통과 규칙
export const POINTS = { normal: 100, hard: 300 };
export const NORMAL_PICK = 8; // 일반 문제 추출 개수
export const HARD_PICK = 2; // 고난도 문제 추출 개수 (무조건 2문제)
export const TOTAL_QUESTIONS = NORMAL_PICK + HARD_PICK; // 10
export const MAX_SCORE = NORMAL_PICK * POINTS.normal + HARD_PICK * POINTS.hard; // 1400
export const PASS_SCORE = 1000; // 통과 기준

export const pointsFor = (question) => POINTS[question.difficulty] ?? POINTS.normal;

// Fisher–Yates 셔플 (원본 배열 보존)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr, n) {
  return shuffle(arr).slice(0, n);
}

// 한 주제에서 일반 8 + 고난도 2 = 10문제를 무작위로 뽑아 순서를 섞어 반환
export function sampleQuestions(topicId) {
  const pool = QUESTIONS[topicId] ?? [];
  const normal = pool.filter((q) => q.difficulty === 'normal');
  const hard = pool.filter((q) => q.difficulty === 'hard');
  const selected = [...pick(normal, NORMAL_PICK), ...pick(hard, HARD_PICK)];
  return shuffle(selected);
}

// answers: { [questionId]: 'O' | 'X' }
export function gradeQuiz(questions, answers) {
  let score = 0;
  let correctCount = 0;
  for (const q of questions) {
    if (answers[q.id] === q.answer) {
      score += pointsFor(q);
      correctCount += 1;
    }
  }
  return {
    score,
    correctCount,
    total: questions.length,
    passed: score >= PASS_SCORE,
  };
}
