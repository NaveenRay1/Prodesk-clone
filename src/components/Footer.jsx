import React from "react";

const links = [
  "ABOUT US", "AI & ML", "CLOUD COMPUTING & DEVOPS", "PYTHON & BACKEND",
  "REACT & MODERN FRONTEND", "MOBILE TECHNOLOGIES", "DATA ANALYTICS",
  "CYBERSECURITY", "JAVA ENTERPRISE SOLUTIONS", "BLOCKCHAIN & WEB3",
  "AUTOMATED TESTING", "ROBOTIC AUTOMATION", "ENTERPRISE CRM SOLUTIONS",
  "ERP & SUPPLY CHAIN", "UI/UX DESIGN STUDIO", "E-COMMERCE & RETAIL",
  "IT INFRASTRUCTURE", "API INTEGRATION", "INSIGHTS", "SUCCESS STORIES",
  "CAREERS", "CONTACT"
];

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white px-6 pt-14 pb-10 border-t border-[#2a2a2a]">

      {/* 1. Navigation Links */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-[15px] uppercase tracking-[0.14em] text-gray-300 hover:text-white transition"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Company Info */}
      <div className="text-center mb-20 space-y-4">

        <h2
          className="text-[12px] font-semibold uppercase tracking-[0.22em]"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Prodesk IT
        </h2>

        <p
          className="text-[12px] uppercase tracking-[0.12em] text-gray-400 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          4th Floor, 91springboard building, Plot No. D, 107, Vyapar Marg,
          D Block, Sector 2, Noida, Uttar Pradesh 201301
        </p>

        <p
          className="text-[12px] tracking-[0.12em] text-gray-400"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          <a href="tel:8851407750" className="hover:text-white">
            8851407750
          </a>
        </p>
      </div>

      {/* 3. Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-y-4 text-[11px] tracking-[0.12em] uppercase text-gray-500">

        <div className="text-center md:text-left leading-snug">
          <p>Copyright © 2026 Prodesk IT</p>
          <p>All Rights Reserved.</p>
        </div>

        <div className="text-center md:text-right">
          <p>Powered by Net Solutions</p>
        </div>

      </div>
    </footer>
  );
}
