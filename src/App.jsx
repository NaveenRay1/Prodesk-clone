import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Values from './pages/Values';
import Vision from './pages/Vision';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import Insights from './pages/Insights';
import SuccessStories from './pages/SuccessStories';
import Careers from './pages/Careers';
function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen flex flex-col lg:flex-row"> {/* Changed flex-direction */}
        
        <Sidebar />

        {/* Main Content */}
        {/* Added 'pt-20' for mobile top bar spacing, removed it on desktop 'lg:pt-0' */}
        <main className="lg:ml-80 flex-1 relative z-0 bg-white pt-20 lg:pt-0">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us-1" element={<About />} />
            <Route path="/our-values" element={<Values />} />
            <Route path="/our-vision-1" element={<Vision />} />
            <Route path="/who-we-are-1" element={<WhoWeAre />} />
            <Route path="/what-we-do-1" element={<WhatWeDo />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}
export default App