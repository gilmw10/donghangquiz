import { useState } from 'react';
import TopicIcon from '../components/TopicIcon';
import PointBadge from '../components/PointBadge';
import AnswerButton from '../components/AnswerButton';
import QuizFeedbackModal from '../components/QuizFeedbackModal';
import { gradeQuiz } from '../lib/quiz';

export default function QuizScreen({ topic, questions, onFinish }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState(null); // { choice, correct }

  const question = questions[index];
  const isHard = question.difficulty === 'hard';
  const total = questions.length;
  const isLast = index + 1 === total;
  const progressPct = ((index + 1) / total) * 100;

  const handleAnswer = (choice) => {
    if (feedback) return;
    setAnswers((prev) => ({ ...prev, [question.id]: choice }));
    setFeedback({ choice, correct: choice === question.answer });
  };

  const handleNext = () => {
    if (isLast) {
      onFinish(gradeQuiz(questions, answers));
      return;
    }
    setIndex((i) => i + 1);
    setFeedback(null);
  };

  const buttonState = (type) => {
    if (!feedback) return 'idle';
    if (type === question.answer) return 'correct';
    if (type === feedback.choice) return 'wrong';
    return 'dim';
  };

  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col justify-center gap-6 px-5 py-8 sm:px-10">
      {/* 상단: 주제 칩 + 진행 개수 */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold"
          style={{ backgroundColor: topic.tint, color: topic.color }}
        >
          <TopicIcon iconKey={topic.iconKey} className="h-4 w-4" />
          {topic.name}
        </span>
        <span className="text-[15px] font-bold text-text-secondary sm:text-base">
          문제 {index + 1} / {total}
        </span>
      </div>

      {/* 진행 바 */}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-border-soft">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%`, backgroundColor: topic.color }}
        />
      </div>

      {/* 문제 카드 */}
      <div
        className={`flex flex-col items-center gap-4 rounded-3xl px-6 py-8 text-center sm:gap-5 sm:px-14 sm:py-10 ${
          isHard
            ? 'border-2 border-amber bg-[#fffdf7]'
            : 'border-[1.5px] border-border-soft bg-white'
        }`}
      >
        <PointBadge difficulty={question.difficulty} />
        <span className="text-sm font-bold text-text-muted">{index + 1}번 문제</span>
        <p className="max-w-[760px] text-[21px] font-bold leading-relaxed text-ink sm:text-[27px]">
          {question.statement}
        </p>
      </div>

      {/* O / X 버튼 */}
      <div className="mx-auto grid w-full max-w-[720px] grid-cols-2 gap-4 sm:gap-6">
        <AnswerButton
          type="O"
          state={buttonState('O')}
          disabled={!!feedback}
          onClick={() => handleAnswer('O')}
        />
        <AnswerButton
          type="X"
          state={buttonState('X')}
          disabled={!!feedback}
          onClick={() => handleAnswer('X')}
        />
      </div>

      {/* 채점 결과 + 해설 모달 */}
      {feedback && (
        <QuizFeedbackModal
          topic={topic}
          correct={feedback.correct}
          correctAnswer={question.answer}
          explanation={question.explanation}
          isLast={isLast}
          onNext={handleNext}
        />
      )}
    </main>
  );
}
