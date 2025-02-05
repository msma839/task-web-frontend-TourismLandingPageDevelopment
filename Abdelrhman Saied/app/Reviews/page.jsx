"use client";

import TestimonialCard from "../components/TestimonialCard";
import { useEffect, useState } from "react";
import getReviews from "../Data/getData";
import Spinner from "../components/Spinner";
import Animate from "../components/Animate";
const page = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getReviews();
      setReviews(response);
      setLoading(false);
    };
    fetchData();
  }, [getReviews]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Animate>
          <div className="bg-[url('/plans.png')]">
            <h1 className="title">Reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
              {reviews.map((review) => (
                <TestimonialCard
                  key={review.id}
                  name={review.name}
                  comment={review.comment}
                  rating={review.rating}
                />
              ))}
            </div>
          </div>
        </Animate>
      )}
    </>
  );
};

export default page;
