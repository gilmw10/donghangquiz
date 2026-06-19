# 체험확인 퀴즈 메인화면 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 서울디지털동행플라자 체험확인 퀴즈 앱의 메인화면(주제 선택 화면)을 React로 구현한다.

**Architecture:** 라우터 없는 단일 페이지. App → AppHeader + MainScreen + AppFooter. MainScreen이 TopicCard 3개를 렌더링. 컴포넌트별 JSX + CSS 파일 분리. CSS 컬러는 variant 클래스 방식으로 관리.

**Tech Stack:** React 18, JavaScript (JSX), plain CSS files, Vite

---

### Task 1: Vite + React 프로젝트 스캐폴딩

**Files:**
- Create: 프로젝트 루트 (Vite scaffold)
- Modify: `src/App.jsx` (보일러플레이트 제거)
- Modify: `src/App.css` (초기화)
- Modify: `index.html` (페이지 타이틀)

- [ ] **Step 1: Vite React 프로젝트 생성**

`C:\Users\user\OneDrive\바탕 화면\project\donghangquiz` 에서 실행:
```bash
npm create vite@latest . -- --template react
```
"Current directory is not empty" 프롬프트 → **Ignore files and continue** 선택 (docs 폴더 유지)

- [ ] **Step 2: 의존성 설치**

```bash
npm install
```

- [ ] **Step 3: App.jsx 보일러플레이트 제거**

`src/App.jsx` 전체를 아래로 교체:
```jsx
function App() {
  return <div />;
}

export default App;
```

- [ ] **Step 4: App.css 초기화**

`src/App.css` 전체를 아래로 교체:
```css
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
```

- [ ] **Step 5: index.html 타이틀 변경**

`index.html` 에서 `<title>Vite + React</title>` 를:
```html
<title>체험확인 퀴즈 — 서울디지털동행플라자</title>
```
로 교체.

- [ ] **Step 6: 개발 서버 확인**

```bash
npm run dev
```
Expected: `http://localhost:5173` 에서 빈 페이지, 콘솔 에러 없음.

- [ ] **Step 7: 커밋**

```bash
git init
git add .
git commit -m "chore: scaffold Vite React project"
```

---

### Task 2: 전역 스타일 설정

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: index.css 전역 리셋 작성**

`src/index.css` 전체를 아래로 교체:
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', sans-serif;
  background: #f8faff;
  color: #0f172a;
  min-height: 100vh;
}
```

- [ ] **Step 2: App.jsx에 App.css import 추가**

`src/App.jsx` 를 아래로 교체:
```jsx
import './App.css';

function App() {
  return (
    <div className="app">
    </div>
  );
}

export default App;
```

- [ ] **Step 3: 커밋**

```bash
git add src/index.css src/App.jsx src/App.css
git commit -m "chore: add global styles and app shell"
```

---

### Task 3: AppHeader 컴포넌트

**Files:**
- Create: `src/components/AppHeader/AppHeader.jsx`
- Create: `src/components/AppHeader/AppHeader.css`

- [ ] **Step 1: AppHeader.css 작성**

새 파일 `src/components/AppHeader/AppHeader.css`:
```css
.app-header {
  background: #1d4ed8;
  padding: 0 48px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.app-header__icon {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-header__title {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.3px;
}

.app-header__subtitle {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
}

.app-header__badge {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 20px;
}
```

- [ ] **Step 2: AppHeader.jsx 작성**

새 파일 `src/components/AppHeader/AppHeader.jsx`:
```jsx
import './AppHeader.css';

function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__brand">
        <div className="app-header__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <div>
          <div className="app-header__title">서울디지털동행플라자</div>
          <div className="app-header__subtitle">디지털 기기, 이제 자신있게!</div>
        </div>
      </div>
      <div className="app-header__badge">체험확인 퀴즈</div>
    </header>
  );
}

export default AppHeader;
```

- [ ] **Step 3: App.jsx에 임시로 추가해서 시각 확인**

`src/App.jsx` 를 아래로 교체:
```jsx
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';

function App() {
  return (
    <div className="app">
      <AppHeader />
    </div>
  );
}

export default App;
```

`npm run dev` → `http://localhost:5173`
Expected: 파란 64px 헤더, 좌측 "서울디지털동행플라자", 우측 "체험확인 퀴즈" 뱃지.

- [ ] **Step 4: 커밋**

```bash
git add src/components/AppHeader/ src/App.jsx
git commit -m "feat: add AppHeader component"
```

---

### Task 4: AppFooter 컴포넌트

**Files:**
- Create: `src/components/AppFooter/AppFooter.jsx`
- Create: `src/components/AppFooter/AppFooter.css`

- [ ] **Step 1: AppFooter.css 작성**

새 파일 `src/components/AppFooter/AppFooter.css`:
```css
.app-footer {
  text-align: center;
  padding: 18px;
  font-size: 12px;
  color: #94a3b8;
  border-top: 1px solid #e2e8f0;
  background: #f8faff;
  flex-shrink: 0;
}
```

- [ ] **Step 2: AppFooter.jsx 작성**

새 파일 `src/components/AppFooter/AppFooter.jsx`:
```jsx
import './AppFooter.css';

function AppFooter() {
  return (
    <footer className="app-footer">
      서울디지털동행플라자 · 체험확인 퀴즈 시스템
    </footer>
  );
}

export default AppFooter;
```

- [ ] **Step 3: 커밋**

```bash
git add src/components/AppFooter/
git commit -m "feat: add AppFooter component"
```

---

### Task 5: TopicCard 컴포넌트

**Files:**
- Create: `src/components/TopicCard/TopicCard.jsx`
- Create: `src/components/TopicCard/TopicCard.css`

Props:
- `title` (string) — "키오스크 사용법"
- `subtopics` (string[]) — ["기차표 예약", "은행 ATM", "음식점 주문"]
- `variant` ("blue" | "teal" | "violet") — CSS 컬러 테마
- `icon` (JSX element) — SVG 아이콘
- `onStart` (function) — 시작하기 버튼 클릭 핸들러

- [ ] **Step 1: TopicCard.css 작성**

새 파일 `src/components/TopicCard/TopicCard.css`:
```css
.topic-card {
  background: #fff;
  border-radius: 14px;
  padding: 24px 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1.5px solid #e2e8f0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.15s ease, transform 0.1s ease;
}

.topic-card:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.09);
  transform: translateY(-1px);
}

.topic-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
}

.topic-card--blue::before  { background: #1d4ed8; }
.topic-card--blue .topic-card__icon-wrap  { background: #eff6ff; }
.topic-card--blue .topic-card__icon-wrap svg  { color: #1d4ed8; }
.topic-card--blue .topic-card__btn  { background: #1d4ed8; }

.topic-card--teal::before  { background: #0891b2; }
.topic-card--teal .topic-card__icon-wrap  { background: #ecfeff; }
.topic-card--teal .topic-card__icon-wrap svg  { color: #0891b2; }
.topic-card--teal .topic-card__btn  { background: #0891b2; }

.topic-card--violet::before  { background: #7c3aed; }
.topic-card--violet .topic-card__icon-wrap  { background: #f5f3ff; }
.topic-card--violet .topic-card__icon-wrap svg  { color: #7c3aed; }
.topic-card--violet .topic-card__btn  { background: #7c3aed; }

.topic-card__icon-wrap {
  width: 58px;
  height: 58px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.topic-card__text {
  flex: 1;
}

.topic-card__title {
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 6px;
  letter-spacing: -0.4px;
}

.topic-card__subtopics {
  font-size: 14px;
  color: #94a3b8;
}

.topic-card__subtopics span + span::before {
  content: ' · ';
  color: #cbd5e1;
}

.topic-card__btn {
  padding: 11px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  letter-spacing: -0.3px;
  transition: opacity 0.15s ease;
}

.topic-card__btn:hover {
  opacity: 0.88;
}
```

- [ ] **Step 2: TopicCard.jsx 작성**

새 파일 `src/components/TopicCard/TopicCard.jsx`:
```jsx
import './TopicCard.css';

function TopicCard({ title, subtopics, variant, icon, onStart }) {
  return (
    <div className={`topic-card topic-card--${variant}`}>
      <div className="topic-card__icon-wrap">
        {icon}
      </div>
      <div className="topic-card__text">
        <div className="topic-card__title">{title}</div>
        <div className="topic-card__subtopics">
          {subtopics.map((sub) => (
            <span key={sub}>{sub}</span>
          ))}
        </div>
      </div>
      <button className="topic-card__btn" onClick={onStart}>
        시작하기
      </button>
    </div>
  );
}

export default TopicCard;
```

- [ ] **Step 3: 커밋**

```bash
git add src/components/TopicCard/
git commit -m "feat: add TopicCard component"
```

---

### Task 6: MainScreen 페이지

**Files:**
- Create: `src/pages/MainScreen/MainScreen.jsx`
- Create: `src/pages/MainScreen/MainScreen.css`

- [ ] **Step 1: MainScreen.css 작성**

새 파일 `src/pages/MainScreen/MainScreen.css`:
```css
.main-screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
}

.main-screen__title-area {
  text-align: center;
  margin-bottom: 40px;
}

.main-screen__label {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.main-screen__title {
  font-size: 34px;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -1px;
}

.main-screen__topic-list {
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

- [ ] **Step 2: MainScreen.jsx 작성**

새 파일 `src/pages/MainScreen/MainScreen.jsx`:
```jsx
import './MainScreen.css';
import TopicCard from '../../components/TopicCard/TopicCard';

const KioskIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <rect x="8" y="14" width="8" height="5" rx="1" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="7" y="2" width="10" height="20" rx="3" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

const LeisureIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const TOPICS = [
  {
    id: 'kiosk',
    title: '키오스크 사용법',
    subtopics: ['기차표 예약', '은행 ATM', '음식점 주문'],
    variant: 'blue',
    icon: <KioskIcon />,
  },
  {
    id: 'smartphone',
    title: '스마트폰 교육',
    subtopics: ['카카오톡', '네이버 검색', '유튜브'],
    variant: 'teal',
    icon: <SmartphoneIcon />,
  },
  {
    id: 'leisure',
    title: '디지털 여가활동',
    subtopics: ['무인 사진관', '스크린 골프', '전자칠판'],
    variant: 'violet',
    icon: <LeisureIcon />,
  },
];

function MainScreen() {
  function handleStart(topicId) {
    // 퀴즈 화면은 추후 구현 — 현재는 선택된 주제 ID를 로깅
    console.log('선택한 주제:', topicId);
  }

  return (
    <main className="main-screen">
      <div className="main-screen__title-area">
        <div className="main-screen__label">QUIZ</div>
        <h1 className="main-screen__title">주제를 선택하세요</h1>
      </div>

      <div className="main-screen__topic-list">
        {TOPICS.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            subtopics={topic.subtopics}
            variant={topic.variant}
            icon={topic.icon}
            onStart={() => handleStart(topic.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default MainScreen;
```

- [ ] **Step 3: 커밋**

```bash
git add src/pages/
git commit -m "feat: add MainScreen page"
```

---

### Task 7: App.jsx 최종 연결 및 전체 레이아웃 확인

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: App.jsx 최종 버전으로 교체**

`src/App.jsx` 전체를 아래로 교체:
```jsx
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import MainScreen from './pages/MainScreen/MainScreen';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <MainScreen />
      <AppFooter />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: 개발 서버에서 전체 레이아웃 확인**

```bash
npm run dev
```

`http://localhost:5173` 에서 아래를 확인:
- 파란 64px 헤더: 좌측 "서울디지털동행플라자" + 아이콘, 우측 "체험확인 퀴즈" 뱃지
- "주제를 선택하세요" 34px 굵은 타이틀 (중앙)
- 3개 흰색 카드: 좌측 컬러 선(파랑/청록/보라), SVG 아이콘, 제목 20px, 세부항목, 시작하기 버튼
- 카드 hover 시 살짝 뜨는 효과
- "시작하기" 클릭 시 브라우저 콘솔에 `선택한 주제: kiosk` 등 출력
- 하단 푸터: "서울디지털동행플라자 · 체험확인 퀴즈 시스템"

- [ ] **Step 3: 최종 커밋**

```bash
git add src/App.jsx
git commit -m "feat: wire full main screen layout"
```
