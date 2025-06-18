import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Zinc from './pages/Zinc'
import Galio from './pages/Galio'
import Germanio from './pages/Germanio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Zinc />} />
        <Route path="/galio" element={<Galio />} />
        <Route path="/germanio" element={<Germanio />} />
      </Routes>
    </Router>
  )
}

export default App
