import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-16" id="gallery">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Our <span className="text-orange-500">Gallery</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src={"/gallery-1.png"}
            alt="photo"
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src={"/gallery-2.png"}
            alt="photo"
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
        <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <Image
            src={"/gallery-3.png"}
            alt="photo"
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
