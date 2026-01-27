import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-black min-h-screen">
      
      <Sidebar />

      {/* Main Content */}
      {/* ml-80 pushes this content to the right, exactly the width of the Sidebar */}
      <main className="ml-80 w-[calc(100%-20rem)] relative z-0">
        <Hero />
      </main>

    </div>
  )
}

export default App