import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import AppFooter from './components/AppFooter/AppFooter'
import MainScreen from './pages/MainScreen/MainScreen'

function App() {
  return (
    <div className="app">
      <AppHeader />
      <MainScreen />
      <AppFooter />
    </div>
  )
}

export default App
