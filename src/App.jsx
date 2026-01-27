import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

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
            
            {/* Future pages can be added here, e.g.:
                <Route path="/about-us" element={<About />} /> 
            */}
          </Routes>
        </main>

      </div>
    </Router>
  )
}

export default App