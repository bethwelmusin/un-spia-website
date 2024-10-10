import React from "react";
import slider_1 from "../assets/Landing 1.png";
import slider_2 from "../assets/Landing 2.png";
import slider_3 from "../assets/Landing 3.png";
import HeroAll from "./HeroAll";

const HomeHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  const images = [slider_1, slider_2, slider_3];

  return (
    <section className="relative h-screen w-full">
      <HeroAll
        settings={settings}
        images={images}
        height="h-screen"
        heading_1="Bridging Divides, Building Peace"
        text="Together for a Peaceful Tomorrow."
      />
    </section>
  );
};

export default HomeHero;
