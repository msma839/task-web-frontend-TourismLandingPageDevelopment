import React from "react";
import { Plane, Hotel, Globe, Ticket } from "lucide-react";
import Link from "next/link";
import Animate from "../components/Animate";

const Services = () => {
  const services = [
    {
      title: "Travel Planning",
      description:
        "We help you plan the perfect vacation tailored to your needs.",
      icon: <Plane size={32} />,
    },
    {
      title: "Hotel Booking",
      description: "Find the best hotels with exclusive deals and discounts.",
      icon: <Hotel size={32} />,
    },
    {
      title: "Tour Packages",
      description: "Explore our curated tour packages for your next adventure.",
      icon: <Globe size={32} />,
    },
    {
      title: "Flight Tickets",
      description: "Book flights easily with competitive pricing.",
      icon: <Ticket size={32} />,
    },
  ];

  return (
    <Animate>
      <div className="py-12 px-6 lg:px-24">
        <h1 className="title">Our Services</h1>
        <p className="text-center text-gray-600 mb-12">
          We provide a variety of services to make your journey unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
            >
              <div className="mb-4 text-orange-500">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href={"/Contact"} className="btn ">
            Contact Us
          </Link>
        </div>
      </div>
    </Animate>
  );
};

export default Services;
