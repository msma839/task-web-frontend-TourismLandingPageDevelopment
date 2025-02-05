import React from "react";
import { Plane } from "lucide-react";

const Spinner = () => {
  return (
    <div className="relative h-screen translate-x-[50%] left-[-50%] inset-0 grid place-items-center bg-white z-50">
      <div className="animate-spin rounded-full h-16  border-t-4 border-transparent w-[150px]">
        <Plane className="text-3xl text-orange w-[40px] h-[40px]" />
      </div>
    </div>
  );
};

export default Spinner;
