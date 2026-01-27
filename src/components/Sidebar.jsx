import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const subMenus = {
  about: [
    { name: "About Us", href: "/about-us-1" },
    { name: "Our Values", href: "/our-values" },
    { name: "Our Vision", href: "/our-vision-1" },
    { name: "Who We Are", href: "/who-we-are-1" },
    { name: "What We Do", href: "/what-we-do-1" },
  ],
  products: [
    { name: "Software Development", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Mobile App Development", href: "#" },
    { name: "CRM Solutions", href: "#" },
    { name: "HRM Software", href: "#" },
    { name: "Healthcare Systems", href: "#" },
    { name: "Cloud Services", href: "#" },
    { name: "Data Analytics", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
  ],
  technologies: [
    { name: "AI & ML", href: "#" },
    { name: "Cloud Computing & DevOps", href: "#" },
    { name: "Python & Backend", href: "#" },
    { name: "React & Modern Frontend", href: "#" },
    { name: "Mobile Technologies", href: "#" },
    { name: "Java Enterprise Solutions", href: "#" },
    { name: "Blockchain & Web3", href: "#" },
    { name: "API Integration", href: "#" },
    { name: "IoT", href: "#" },
    { name: "Cybersecurity", href: "#" },
  ],
};

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const toggleMenu = (menu) =>
    setActiveMenu(activeMenu === menu ? null : menu);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <>
      {/*                  MOBILE TOP BAR                  */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-black text-white z-50 border-b border-gray-800">
        <div className="h-32 flex items-center justify-center relative px-6">
          <button
            className="absolute left-6 p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>

          <Link to="/home" onClick={closeMobileMenu}>
            <img
              src="/logo.webp"
              alt="Prodesk"
              className="h-24 sm:h-28 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black z-[100] text-white overflow-y-auto lg:hidden">
          <nav className="min-h-screen flex flex-col items-center justify-center space-y-8 py-20 text-lg tracking-widest font-bold">
            <Link to="/home" onClick={closeMobileMenu}>HOME</Link>

            {["about", "products", "technologies"].map((menu) => (
              <div key={menu} className="text-center w-full px-10">
                <button
                  onClick={() => toggleMenu(menu)}
                  className="flex items-center justify-center gap-2 mx-auto uppercase"
                >
                  {menu}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      activeMenu === menu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMenu === menu && (
                  <div className="mt-6 space-y-4 text-sm text-gray-400">
                    {subMenus[menu].map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="block hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          <Link to="/insights">INSIGHTS</Link> 
           <Link to="/success-stories" onClick={closeMobileMenu} className="hover:text-gray-400 uppercase">SUCCESS STORIES</Link>
           <Link to="/careers" onClick={closeMobileMenu} className="hover:text-gray-400 uppercase">CAREERS</Link> 
           <Link to="/contact">CONTACT</Link>
          </nav>

          <button
            className="fixed bottom-10 left-1/2 -translate-x-1/2"
            onClick={closeMobileMenu}
          >
            <XMarkIcon className="h-8 w-8 text-gray-400" />
          </button>
        </div>
      )}

      {/* ================= DESKTOP SIDEBAR ================= */}
      <div className="hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-black text-white z-50 flex-col border-r border-gray-900">
        
        {/* LOGO (FIXED) */}
        <div className="px-8 py-10 flex justify-center shrink-0">
          <Link to="/home">
            <img
              src="/logo.webp"
              alt="Prodesk Logo"
              className="w-[220px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* SCROLLABLE MENU */}
        <nav className="flex-1 overflow-y-auto px-8 space-y-6 pb-10 tracking-widest text-sm">
          <Link to="/home" className="block text-gray-400 hover:text-white">
            HOME
          </Link>

          {["about", "products", "technologies"].map((menu) => (
            <button
              key={menu}
              onClick={() => toggleMenu(menu)}
              className="w-full flex justify-between text-gray-400 hover:text-white uppercase"
            >
              {menu}
              <ChevronRightIcon
                className={`h-4 w-4 transition-transform ${
                  activeMenu === menu ? "rotate-90" : ""
                }`}
              />
            </button>
          ))}

          {/* EXTRA ITEMS (ADDED) */}
          <Link to="/insights" className="block text-gray-400 hover:text-white"> 
  INSIGHTS
</Link>
         <Link to="/success-stories" className="block text-gray-400 hover:text-white uppercase transition-colors"> 
  SUCCESS STORIES
</Link>
          <Link to="/careers" className="block text-gray-400 hover:text-white uppercase transition-colors">
  CAREERS
</Link>
         <Link to="/contact" className="block text-gray-400 hover:text-white">
      CONTACT
    </Link>
        </nav>
      </div>

      {/* ================= DESKTOP SUBMENU PANEL ================= */}
      <div
        className={`hidden lg:block fixed top-0 left-80 h-screen w-80 bg-[#1a1a1a] z-40 transition-transform duration-300 ${
          activeMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto p-8">
          {activeMenu &&
            subMenus[activeMenu].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-sm text-gray-400 hover:text-white border-b border-gray-800"
                onClick={() => setActiveMenu(null)}
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
