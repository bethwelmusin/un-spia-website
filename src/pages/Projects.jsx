import HeroAll from "../components/HeroAll";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import ProjectsData from "../components/ProjectsData";
import Team from "../components/Team";
import CTA from "../components/CTA";
import FounderStatement from "../components/FounderStatement";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
  
      <ProjectsData />

    </>
  );
};

export default Projects;
