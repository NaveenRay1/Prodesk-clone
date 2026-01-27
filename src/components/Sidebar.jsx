import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// Make sure you have the logo.webp or logo.png in your public folder

// 1. DATA STRUCTURES (Exact lists you provided)
const subMenus = {
  about: [
    { name: 'About Us', href: '#' },
    { name: 'Our Values', href: '#' },
    { name: 'Our Vision', href: '#' },
    { name: 'Who We Are', href: '#' },
    { name: 'What We Do', href: '#' },
  ],
  products: [
    { name: 'Software Development', href: '#' },
    { name: 'Web Development', href: '#' },
    { name: 'Mobile App Development', href: '#' },
    { name: 'CRM Solutions', href: '#' },
    { name: 'HRM Software', href: '#' },
    { name: 'Healthcare Systems', href: '#' },
    { name: 'Cloud Services', href: '#' },
    { name: 'Data Analytics', href: '#' },
    { name: 'AI & Machine Learning', href: '#' },
    { name: 'Consulting & IT Strategy', href: '#' },
    { name: 'Cybersecurity Services', href: '#' },
    { name: 'Logo Design', href: '#' },
    { name: 'Internet of Things (IoT)', href: '#' },
  ],
  technologies: [
    { name: 'AI & ML', href: '#' },
    { name: 'Cloud Computing & DevOps', href: '#' },
    { name: 'Python & Backend', href: '#' },
    { name: 'React & Modern Frontend', href: '#' },
    { name: 'Mobile Technologies', href: '#' },
    { name: 'Java Enterprise Solutions', href: '#' },
    { name: 'Blockchain & Web3', href: '#' },
    { name: 'API Integration', href: '#' },
    { name: 'Internet of Things (IoT)', href: '#' },
    { name: 'Cybersecurity', href: '#' },
    { name: 'IT Infrastructure', href: '#' },
    { name: 'Automated Testing', href: '#' },
    { name: 'Robotic Automation', href: '#' },
    { name: 'Data Analytics', href: '#' },
    { name: 'Enterprise CRM Solutions', href: '#' },
    { name: 'ERP & Supply Chain', href: '#' },
    { name: 'UI/UX Design Studio', href: '#' },
    { name: 'E-Commerce & Retail', href: '#' },
    { name: 'Digital Marketing', href: '#' },
  ]
};

export default function Sidebar() {
  // activeMenu tracks WHICH slide-out panel is open ('about', 'products', 'technologies', or null)
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    // If clicking the same menu, close it. Otherwise, open the new one.
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  return (
    <>
      {/* --- MAIN SIDEBAR (Fixed Left) --- */}
      <div className="fixed left-0 top-0 h-screen w-80 bg-black text-white z-50 flex flex-col border-r border-gray-900">
        
        {/* Logo Section */}
        <div className="p-10 flex justify-center">
          <img 
            src="/logo.webp" 
            alt="Prodesk Logo" 
            className="w-48 h-auto object-contain" 
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-8 space-y-6 mt-4">
          
          {/* HOME */}
          <a href="#" className="block text-sm font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-colors">
            Home
          </a>

          {/* ABOUT US (Trigger) */}
          <button 
            onClick={() => handleMenuClick('about')}
            className={`w-full flex items-center justify-between text-sm font-bold tracking-widest uppercase transition-colors ${activeMenu === 'about' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
          >
            <span>About Us</span>
            <ChevronRightIcon className={`h-4 w-4 transition-transform ${activeMenu === 'about' ? 'rotate-90' : ''}`} />
          </button>

          {/* PRODUCTS (Trigger) */}
          <button 
            onClick={() => handleMenuClick('products')}
            className={`w-full flex items-center justify-between text-sm font-bold tracking-widest uppercase transition-colors ${activeMenu === 'products' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
          >
            <span>Products</span>
            <ChevronRightIcon className={`h-4 w-4 transition-transform ${activeMenu === 'products' ? 'rotate-90' : ''}`} />
          </button>

          {/* TECHNOLOGIES (Trigger) */}
          <button 
            onClick={() => handleMenuClick('technologies')}
            className={`w-full flex items-center justify-between text-sm font-bold tracking-widest uppercase transition-colors ${activeMenu === 'technologies' ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
          >
            <span>Technologies</span>
            <ChevronRightIcon className={`h-4 w-4 transition-transform ${activeMenu === 'technologies' ? 'rotate-90' : ''}`} />
          </button>

          {/* Other Static Links */}
          <a href="#" className="block text-sm font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-colors">
            Insights
          </a>
          <a href="#" className="block text-sm font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-colors">
            Success Stories
          </a>
          <a href="#" className="block text-sm font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-colors">
            Careers
          </a>
          <a href="#" className="block text-sm font-bold tracking-widest text-gray-400 hover:text-white uppercase transition-colors">
            Contact
          </a>
        </nav>

        {/* LinkedIn Icon (Bottom) */}
        <div className="p-8 mt-auto">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
             <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
             </svg>
          </a>
        </div>
      </div>

      {/* --- SLIDE-OUT PANEL (Absolute Positioned) --- */}
      {/* This panel sits exactly to the right of the sidebar (left-80) */}
      <div 
        className={`fixed top-0 left-80 h-screen w-80 bg-[#1a1a1a] border-l border-gray-800 z-40 transform transition-transform duration-300 ease-in-out ${activeMenu ? 'translate-x-0' : '-translate-x-full'}`}
        // The negative translate-x-full hides it BEHIND the main sidebar when closed
        style={{ 
            // Ensures it doesn't accidentally cover the main sidebar if z-index is messed up
            boxShadow: '5px 0 15px rgba(0,0,0,0.5)' 
        }}
      >
        <div className="h-full overflow-y-auto p-8">
            {/* We render the content dynamically based on 'activeMenu'.
               We use a simple mapping to choose which list to show.
            */}
            {activeMenu && subMenus[activeMenu].map((item, index) => (
                <a 
                    key={index}
                    href={item.href}
                    className="block py-3 text-sm font-medium text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 border-b border-gray-800 last:border-0"
                >
                    {item.name}
                </a>
            ))}
        </div>
      </div>
    </>
  );
}