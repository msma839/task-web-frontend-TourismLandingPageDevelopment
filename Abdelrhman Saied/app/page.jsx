"use client";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Places from "./components/Places";
import Chooseus from "./components/Chooseus";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Blog from "./components/Blog";
import Animate from "./components/Animate";

export default function Home() {
  return (
    <>
      <Animate>
        <Hero />
      </Animate>

      <Animate>
        <Aboutus />
      </Animate>

      <Animate>
        <Places />
      </Animate>

      <Animate>
        <Chooseus />
      </Animate>

      <Animate>
        <Gallery />
      </Animate>

      <Animate>
        <Review />
      </Animate>

      <Animate>
        <Blog />
      </Animate>
      <Animate>
        <img src="/sponsors.png" alt="sponsors" className="m-auto my-[30px]" />
      </Animate>
    </>
  );
}
