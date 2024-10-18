import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import DonateForm from "../components/DonateForm";

const Donate = () => {
  const { hash } = useLocation(); // Get the current hash in the URL

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' and get the element by id
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
      }
    } else {
      window.scrollTo(0, 0); // Scroll to the top if no hash is present
    }
  }, [hash]); // Trigger useEffect when the hash changes
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };
  const images = [slider_1, slider_2, slider_3];
  return (
    <>
      {/* <section className="relative h-96 w-full">
        <HeroAll
          settings={settings}
          images={images}
          height="h-96"
          heading_1="Support The Cause"
          text="Your financial support comes in handy"
        />
      </section> */}
      <DonateForm />
    </>
  );
};

export default Donate;
