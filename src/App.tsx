import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Atlas from './atlas'
import Submitty from './submitty'
import Grindhaus from './grindhaus'
import Optima from './optima'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/atlas" element={<Atlas />} />
      <Route path="/submitty" element={<Submitty />} />
      <Route path="/grindhaus" element={<Grindhaus />} />
      <Route path="/optima" element={<Optima />} />
    </Routes>
  )
}

export default App