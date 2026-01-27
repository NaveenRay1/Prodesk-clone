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
import Contact from './pages/Contact';
import AiMl from './pages/technologies/AiMl';
import CloudDevOps from './pages/technologies/CloudDevOps';
import ScrollToTop from "./components/ScrollToTop";
import PythonBackend from './pages/technologies/PythonBackend';
import ReactFrontend from './pages/technologies/ReactFrontend';
import MobileTechnologies from './pages/technologies/MobileTechnologies';
import DataAnalytics from './pages/technologies/DataAnalytics';
import Iot from './pages/technologies/Iot';
import CyberSecurity from './pages/technologies/CyberSecurity';
function App() {
  return (
    
    <Router>
      <div className="bg-black min-h-screen flex flex-col lg:flex-row"> {/* Changed flex-direction */}
        
        <Sidebar />

        {/* Main Content */}
        {/* Added 'pt-20' for mobile top bar spacing, removed it on desktop 'lg:pt-0' */}
        <main className="lg:ml-80 flex-1 relative z-0 bg-white pt-20 lg:pt-0">
          <ScrollToTop />
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/technologies/ai-ml" element={<AiMl />} />
            <Route path="/technologies/cloud-devops" element={<CloudDevOps />} />
            <Route path="/technologies/python-backend" element={<PythonBackend />} />
            <Route path="/technologies/react-frontend" element={<ReactFrontend />} />
            <Route path="/technologies/mobile-technologies" element={<MobileTechnologies />} />
            <Route path="/technologies/data-analytics" element={<DataAnalytics />} />
            <Route path="/technologies/internet-of-things" element={<Iot />} />
            <Route path="/technologies/cybersecurity" element={<CyberSecurity />} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}
export default App