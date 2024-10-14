import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About";
import Projects from "./pages/Projects";
// import Events from "./components/footer-links/Events.jsx";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import "./index.css";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Countries from "./components/Countries.jsx";
import Stories from "./components/media/Stories.jsx"
import Gallery from "./components/media/Gallery.jsx";
import News from "./components/media/News.jsx";
import History from "./components/peace-operations/History.jsx";
import PeacefulConnections from "./components/peace-operations/PeacefulConnections.jsx";
import PeacefulConnectionRwanda from "./components/peace-operations/PeacefulConnectionRwanda.jsx";
import ExpertPool from "./components/peace-operations/ExpertPool.jsx";
import PeaceKeepingOperations from "./components/peace-operations/PeaceKeepingOperations.jsx";
import UnOperations from "./components/peace-operations/UnOperations.jsx";
import PrinciplesOfPeaceking from "./components/peace-operations/PrinciplesOfPeaceking.jsx";
import OurPeacekeepers from "./components/peace-operations/OurPeacekeepers.jsx";
import EnvironmentalClimate from "./components/peace-operations/EnvironmentalClimate.jsx";
import Greening from "./components/peace-operations/Greening.jsx";
import LegalBasis from "./components/peace-operations/LegalBasis.jsx";
import Sdgs from "./components/footer-links/Sdgs.jsx";
import Events from "./components/footer-links/Events.jsx";
import Terms from "./components/footer-links/Terms.jsx";
import PrivacyPolicy from "./components/footer-links/PrivacyPolicy.jsx";
import FraudAlert from "./components/footer-links/FraudAlert.jsx";
import PeaceAfrica from "./components/peace-operations/PeaceAfrica.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/stories",
    element: (
      <Layout>
        <Stories />
      </Layout>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },
  {
    path: "/news",
    element: (
      <Layout>
        <News/>
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
 
  {
    path: "/donate",
    element: (
      <Layout>
        <Donate />
      </Layout>
    ),
  },
  {
    path: "/volunteer",
    element: (
      <Layout>
        <Volunteer />
      </Layout>
    ),
  },
  {
    path: "/history",
    element: (
      <Layout>
        <History />
      </Layout>
    ),
  },
  {
    path: "/peaceful-connections",
    element: (
      <Layout>
        <PeacefulConnections />
      </Layout>
    ),
  },
  {
    path: "/peaceful-connections-rwanda",
    element: (
      <Layout>
        <PeacefulConnectionRwanda />
      </Layout>
    ),
  },
  {
    path: "/expert-pool-civilian",
    element: (
      <Layout>
        <ExpertPool />
      </Layout>
    ),
  },
  {
    path: "/peacekeepingoperations",
    element: (
      <Layout>
        <PeaceKeepingOperations />
      </Layout>
    ),
  },
  {
    path: "/principlesofpeacekeeping",
    element: (
      <Layout>
        <PrinciplesOfPeaceking />
      </Layout>
    ),
  },
  {
    path: "/un-operations",
    element: (
      <Layout>
        <UnOperations />
      </Layout>
    ),
  },
  {
    path: "/roleofpeacekeeping",
    element: (
      <Layout>
        <PeaceAfrica />
      </Layout>
    ),
  },
  {
    path: "/towards-environmental",
    element: (
      <Layout>
        <EnvironmentalClimate />
      </Layout>
    ),
  },
  {
    path: "/greeningbluehelmets",
    element: (
      <Layout>
        <Greening />
      </Layout>
    ),
  },
  {
    path: "/ourpeacekeepers",
    element: (
      <Layout>
        <OurPeacekeepers />
      </Layout>
    ),
  },

  {
    path: "/legalbasis",
    element: (
      <Layout>
        <LegalBasis />
      </Layout>
    ),
  },

  
  {
    path: "/countries",
    element: (
      <Layout>
        <Countries />
      </Layout>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },

  //footer links

  {
    path: "/Sdgs",
    element: (
      <Layout>
        <Sdgs />
      </Layout>
    ),
  },
  {
    path: "/events",
    element: (
      <Layout>
        <Events />
      </Layout>
    ),
  },
  {
    path: "/terms",
    element: (
      <Layout>
        <Terms />
      </Layout>
    ),
  },
  {
    path: "/privacypolicy",
    element: (
      <Layout>
        <PrivacyPolicy />
      </Layout>
    ),
  },
  {
    path: "/fraud",
    element: (
      <Layout>
        <FraudAlert />
      </Layout>
    ),
  },

  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
