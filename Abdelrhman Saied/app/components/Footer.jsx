// components/Footer.js
import { Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-orange-light py-8 px-4 text-center md:text-left">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
        <div className="sm:col-span-2">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image src={logo} alt="logo" width={102} height={40} />
          </div>
          <p className="text-gray text-sm md:text-base">
            We believe brand interaction is key in communication. Real
            innovations and a positive.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start mt-4">
            <Twitter className="text-orange cursor-pointer" />
            <Instagram className="text-orange cursor-pointer" />
            <Youtube className="text-orange cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4 text-sm md:text-base">
            About us
          </h4>
          <ul className="space-y-2">
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Features
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              FAQ's
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              News
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Pricing
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4 text-sm md:text-base">
            Company
          </h4>
          <ul className="space-y-2">
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Core values
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Partner w/ us
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Blog
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4 text-sm md:text-base">
            Support
          </h4>
          <ul className="space-y-2">
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Support center
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Feedback
            </li>
            <li className="text-gray cursor-pointer hover:text-orange text-sm md:text-base">
              Accessibility
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4 text-sm md:text-base">
            Get in touch
          </h4>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email here..."
              className="w-full px-4 py-2 bg-light border border-gray-light rounded-md text-gray focus:outline-none focus:ring-2 focus:ring-orange text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full bg-orange text-white py-2 rounded-md hover:bg-opacity-90 transition text-sm md:text-base"
            >
              Get Access
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-light pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray text-xs md:text-sm text-center md:text-left">
            TravelAgent © 2022 All Rights Reserved
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray text-xs md:text-sm">
            <span className="cursor-pointer hover:text-orange">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-orange">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
