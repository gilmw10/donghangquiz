import './AppHeader.css'

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
  )
}

export default AppHeader
