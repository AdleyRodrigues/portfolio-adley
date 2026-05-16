import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AnalyticsScript } from './components/AnalyticsScript'
import { ProjectCasePage } from './pages/ProjectCasePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BackToTopButton } from './components/BackToTopButton'

function App() {
  const location = useLocation()

  return (
    <>
      <AnalyticsScript />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/:slug" element={<ProjectCasePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <BackToTopButton />
    </>
  )
}

export default App
