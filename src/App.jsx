import './App.css'
import Page1 from "./components/pageFirst"
import Page2 from "./components/pageSecond"
import Page3 from "./components/pageThird"
import Page4 from "./components/pageFourth"
import Page5 from "./components/pageFifth"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </Router>
  )
}

export default App
