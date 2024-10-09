import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Feature from "./components/Feature";
import HomeHero from "./components/HomeHero";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import "./App.css";
import Footer from "./components/Footer";
import {
  
  Routes,
  Route,
  
} from 'react-router-dom';
import About from "./pages/About";


const App = () => {
  return (
    <>
      <HomeHero />
      <Feature />
      <CTA />
      <Stats />
      <Blog />
      <Testimonial />
      
{/* 
    <Routes>
      <Route path="/about-us" element={<About  />} />
   
     
    </Routes> */}

    </>
  );
};

export default App;
