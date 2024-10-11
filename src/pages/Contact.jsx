import { useEffect } from "react";
import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/spia-about.jpg";
import ContactDetails from "../components/ContactDetails";
import ContactFormMap from "../components/ContactFormMap";
// import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
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
  const images = [slider_1];
  return (
    <>
      <section className="relative h-96 w-full">
        <HeroAll
          settings={settings}
          images={images}
          height="h-96"
          heading_1="Talk To Us Now"
          text="We are Online 24/7"
        />
      </section>
      <ContactDetails />
      <ContactFormMap />
      {/* <FAQ /> */}
      <CTA />
      {/* <Testimonial /> */}
    </>
  );
};

export default Contact;
