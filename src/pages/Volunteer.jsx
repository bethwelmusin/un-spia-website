import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import VolunteerForm from "../components/VolunteerForm";
import FAQ from "../components/FAQ";

const Volunteer = () => {
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
 
  return (
    <>
    
      <VolunteerForm />
    </>
  );
};

export default Volunteer;
