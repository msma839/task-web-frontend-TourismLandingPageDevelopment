"use client";
import Filter from "./Filter";
import Card from "./Card";
import Link from "next/link";
import { useState } from "react";

const Places = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const placesCard = [
    {
      img: "/place1.png",
      country: "Maldives",
      text: "Hurawalhi Island",
      time: "7 Days Tour on 2 person",
      price: 620,
      category: "Special Deals",
    },
    {
      img: "/place2.png",
      country: "Indonesia",
      text: "Bali Province",
      time: "4 days 2 person",
      price: 780,
      category: "Populer",
    },
    {
      img: "/place3.png",
      country: "Spain",
      text: "Barcelona city beach",
      time: "4 days 4 person",
      price: 850,
      category: "Recommendation",
    },
    {
      img: "/place4.png",
      country: "Maldives",
      text: "Hurawalhi Island",
      time: "7 Days Tour on 2 person",
      price: 620,
      category: "Special Deals",
    },
    {
      img: "/place5.png",
      country: "Canada",
      text: "St. John's",
      time: "7 Days Tour on 2 person",
      price: 620,
      category: "Best Price",
    },
    {
      img: "/place6.png",
      country: "Peru",
      text: "Machu Picchu",
      time: "7 Days Tour on 2 person",
      price: 820,
      category: "Recommendation",
    },
    {
      img: "/place7.png",
      country: "French Polynesia",
      text: "Bora Bora Island",
      time: "7 Days Tour on 2 person",
      price: 550,
      category: "Populer",
    },
    {
      img: "/place8.png",
      country: "Australia",
      text: "Sydney Opera House",
      time: "7 Days Tour on 2 person",
      price: 310,
      category: "Best Price",
    },
  ];

  const filteredPlaces =
    activeFilter === "All"
      ? placesCard
      : placesCard.filter((place) => place.category === activeFilter);

  return (
    <div className="my-[20px] px-3" id="tour-packages">
      <div className="bg-[url('/plans.png')]">
        <h1 className="text-center text-[54px] font-bold">
          The <span className="text-orange">best place for</span> vacation
        </h1>
        <Filter setActiveFilter={setActiveFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredPlaces.map((place, index) => (
          <Card
            key={index}
            img={place.img}
            country={place.country}
            text={place.text}
            time={place.time}
            price={place.price}
          />
        ))}
      </div>
      <div className="text-center mt-3">
        <Link
          href={"/TourDestinations"}
          className="btn mt-8 mx-auto block w-fit"
        >
          Tour Destinations
        </Link>
      </div>
    </div>
  );
};

export default Places;
