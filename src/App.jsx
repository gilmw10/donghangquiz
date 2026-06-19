import { useState } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import CouponModal from './components/CouponModal';
import MainScreen from './pages/MainScreen';
import QuizScreen from './pages/QuizScreen';
import ResultScreen from './pages/ResultScreen';
import { sampleQuestions } from './lib/quiz';

const COMPLETED_KEY = 'dhq_completed';
const COUPON_KEY = 'dhq_coupon_claimed';

const loadCompleted = () => {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
const saveCompleted = (list) => {
  try {
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(list));
  } catch {
    /* 저장 실패는 무시 */
  }
};
const loadCoupon = () => {
  try {
    return localStorage.getItem(COUPON_KEY) === 'true';
  } catch {
    return false;
  }
};

export default function App() {
  const [screen, setScreen] = useState('main');
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(null);
  const [completed, setCompleted] = useState(loadCompleted);
  const [couponClaimed, setCouponClaimed] = useState(loadCoupon);
  const [showCoupon, setShowCoupon] = useState(false);

  const startQuiz = (selectedTopic) => {
    setTopic(selectedTopic);
    setQuestions(sampleQuestions(selectedTopic.id));
    setResult(null);
    setScreen('quiz');
    window.scrollTo(0, 0);
  };

  const finishQuiz = (quizResult) => {
    setResult(quizResult);
    setScreen('result');
    window.scrollTo(0, 0);

    if (quizResult.passed && topic) {
      const alreadyDone = completed.includes(topic.id);
      const next = alreadyDone ? completed : [...completed, topic.id];
      if (!alreadyDone) {
        setCompleted(next);
        saveCompleted(next);
      }
      if (next.length === 3 && !couponClaimed) {
        setShowCoupon(true);
      }
    }
  };

  const retry = () => topic && startQuiz(topic);

  const goHome = () => {
    setScreen('main');
    window.scrollTo(0, 0);
  };

  const resetProgress = () => {
    setCompleted([]);
    setCouponClaimed(false);
    setShowCoupon(false);
    try {
      localStorage.removeItem(COMPLETED_KEY);
      localStorage.removeItem(COUPON_KEY);
    } catch {
      /* 무시 */
    }
  };

  const closeCoupon = () => {
    setShowCoupon(false);
    setCouponClaimed(true);
    try {
      localStorage.setItem(COUPON_KEY, 'true');
    } catch {
      /* 무시 */
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader onHome={goHome} />

      {screen === 'main' && (
        <MainScreen completedTopics={completed} onStart={startQuiz} onReset={resetProgress} />
      )}
      {screen === 'quiz' && topic && (
        <QuizScreen topic={topic} questions={questions} onFinish={finishQuiz} />
      )}
      {screen === 'result' && topic && result && (
        <ResultScreen topic={topic} result={result} onRetry={retry} onHome={goHome} />
      )}

      <AppFooter />

      {showCoupon && <CouponModal onClose={closeCoupon} />}
    </div>
  );
}
