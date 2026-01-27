import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "ABOUT US", path: "/about-us-1" },
  { name: "AI & ML", path: "/technologies/ai-ml" },
  { name: "CLOUD COMPUTING & DEVOPS", path: "/technologies/cloud-devops" },
  { name: "PYTHON & BACKEND", path: "/technologies/python-backend" },
  { name: "REACT & MODERN FRONTEND", path: "/technologies/react-frontend" },
  { name: "MOBILE TECHNOLOGIES", path: "/technologies/mobile-technologies" },
  { name: "DATA ANALYTICS", path: "/technologies/data-analytics" },
  { name: "CYBERSECURITY", path: "/technologies/cybersecurity" },
  { name: "JAVA ENTERPRISE SOLUTIONS", path: "/technologies/java-enterprise" },
  { name: "BLOCKCHAIN & WEB3", path: "/technologies/blockchain-web3" },
  { name: "AUTOMATED TESTING", path: "/technologies/quality-engineering" },
  { name: "ROBOTIC AUTOMATION", path: "/technologies/robotic-automation" },
  { name: "ENTERPRISE CRM SOLUTIONS", path: "/technologies/crm-solutions" },
  { name: "ERP & SUPPLY CHAIN", path: "/technologies/erp-supply-chain" },
  { name: "UI/UX DESIGN STUDIO", path: "/technologies/ui-ux-design" },
  { name: "E-COMMERCE & RETAIL", path: "/technologies/ecommerce-retail" },
  { name: "IT INFRASTRUCTURE", path: "/technologies/it-infrastructure" },
  { name: "API INTEGRATION", path: "/technologies/api-integration" },
  { name: "INSIGHTS", path: "/insights" },
  { name: "SUCCESS STORIES", path: "/success-stories" },
  { name: "CAREERS", path: "/careers" },
  { name: "CONTACT", path: "/contact" }
];

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white px-6 pt-14 pb-10 border-t border-[#2a2a2a]">

      {/* 1. Navigation Links */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-[15px] uppercase tracking-[0.14em] text-gray-300 hover:text-white transition"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                {link.name}
              </Link>
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