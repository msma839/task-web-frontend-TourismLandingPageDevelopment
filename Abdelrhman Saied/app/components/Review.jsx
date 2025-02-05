import TestimonialCard from "./TestimonialCard";
import Link from "next/link";

const Review = () => {
  const reviews = [
    {
      name: "Benjamin Robert",
      comment:
        "Wow, what a fun vacation with Oelinken, guided by professional people",
      rating: 80000,
      avatar: "/avatar.png",
    },
    {
      name: "Annette Black",
      comment:
        "It's an amazing experience to be able to vacation to a new place,thank you Oelinken",
      rating: 80000,
      avatar: "/avatar2.png",
    },
    {
      name: "Kathryn Murphy ",
      comment:
        "At first I was lazy but that thought disappeared after being accompanied by a pleasant guide",
      rating: 80000,
      avatar: "/avatar3.png",
    },
    {
      name: "Guy Hawkins",
      comment: "New story in my life, really amazing and also affordable",
      rating: 80000,
      avatar: "/avatar4.png",
    },
  ];
  return (
    <div className="p-6">
      <div className="text-center mb-3">
        <h1 className="text-4xl font-bold ">
          Contact us to review{" "}
          <span className="text-orange"> your experience</span> with us
        </h1>
        <p className="text-black">
          Give us feedback and let us know what experiences you had while on
          vacation with us
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {reviews.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href={"/Reviews"} className="btn ">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Review;
