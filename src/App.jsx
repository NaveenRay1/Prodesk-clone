import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Values from './pages/Values';
import Vision from './pages/Vision';
function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen flex">
        
        {/* The Sidebar stays visible on ALL pages */}
        <Sidebar />

        {/* The Main Content Area changes based on the URL */}
        <main className="lg:ml-80 flex-1 relative z-0 bg-white">
          <Routes>
            {/* Redirect root "/" to "/home" */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* The Home Page Route */}
            <Route path="/home" element={<Home />} />
              <Route path="/about-us-1" element={<About />}/>
            <Route path="/our-values" element={<Values />} />
            <Route path="/our-vision-1" element={<Vision />} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App