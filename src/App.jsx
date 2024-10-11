import CTA from "./components/CTA";
import Feature from "./components/Feature";
import HomeHero from "./components/HomeHero";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import "./App.css";
import Footer from "./components/Footer"
import News from "./components/media/News";
import AboutHome from "./pages/AboutHome";



const App = () => {
  return (
    <>
    
      <HomeHero />
      <Feature />
      <AboutHome />
      <CTA />
      <Stats />
      <News />
      {/* <Testimonial /> */}
      


    </>
  );
};

export default App;
