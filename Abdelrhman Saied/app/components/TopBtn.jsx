"use client";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const TopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showTopBtn && (
      <div
        className="w-fit bg-orange-500 rounded-full cursor-pointer fixed right-4 bottom-4 shadow-lg"
        onClick={scrollToTop}
      >
        <ChevronUp className="text-white w-10 h-10" />
      </div>
    )
  );
};

export default TopBtn;
