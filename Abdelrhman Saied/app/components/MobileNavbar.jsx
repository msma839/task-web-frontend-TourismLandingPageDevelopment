"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const MobileNavbar = ({ links, activeLink, handleLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:hidden pe-2">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-700 focus:outline-none"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 p-4">
          <div className="flex flex-col gap-4 font-bold text-sm uppercase">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  handleLinkClick(link.name);
                  setIsMenuOpen(false);
                }}
                className={`transition-colors duration-300 ${
                  activeLink === link.name
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 text-orange-500 mt-6">
            <Phone />
            <span>+91 123 456 7890</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
