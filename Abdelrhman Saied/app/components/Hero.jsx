import Image from "next/image";
import SearchBar from "./SearchBar";
import { Plane } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mb-6">
      <div className="w-[90%] md:w-[70%] bg-[url('/plans.png')] bg-cover bg-center relative bg-white container mx-auto py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            It’s a Big World Out There,
            <span className="text-orange-500"> Go Explore</span>
          </h1>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center md:items-start">
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Time Tracking Software Used By Millions. A Simple Time Tracker And
            Timesheet App That Lets You Track Work Hours Across Projects......
          </p>
          <Link href={"#about"} className="btn flex items-center gap-2">
            <span> DISCOVER NOW</span>
            <span>
              <Plane />
            </span>
          </Link>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/heroImg.png"}
          alt="heroImg"
          width={1150}
          height={200}
          className="m-auto rounded-lg"
        />
        <h1 className="absolute text-xl md:text-3xl text-white inset-0 flex justify-center items-center text-center px-4">
          See the world, <span className="text-orange">With us</span>
        </h1>
      </div>
      <div className="relative mt-6">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
