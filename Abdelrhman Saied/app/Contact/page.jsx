import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Animate from "../components/Animate";
const Contact = () => {
  return (
    <Animate>
      <div className="py-12 px-6 lg:px-24">
        <h1 className="title">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions or want to get in touch? We'd love to hear from you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-500"
                rows="5"
              ></textarea>
            </div>
            <button className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <p className="text-gray-700">
                123 Main Street, City, Country 12345
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <Phone size={24} />
              </div>
              <p className="text-gray-700">+1 (123) 456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <Mail size={24} />
              </div>
              <p className="text-gray-700">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default Contact;
