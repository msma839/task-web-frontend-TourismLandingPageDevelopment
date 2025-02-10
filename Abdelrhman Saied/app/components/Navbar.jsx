"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Phone } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Tour Packages", href: "/#tour-packages" },
    { name: "Services", href: "/Servecies" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/Contact" },
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="flex items-center justify-between container mx-auto p-4">
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={102} height={40} />
      </Link>

      <div className="hidden lg:flex gap-5 font-bold text-sm uppercase">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => handleLinkClick(link.name)}
            className={`transition-colors duration-300 ${
              activeLink === link.name
                ? "active"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-3 text-orange-500">
        <Phone />
        <span>+91 123 456 7890</span>
      </div>

      <MobileNavbar
        links={links}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
      />
    </div>
  );
};

export default Navbar;
