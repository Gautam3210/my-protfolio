import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import ProjectDetail from './components/ProjectDetail'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
