import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
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
    path: "/events",
    element: (
      <Layout>
        <Events />
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
    path: "/history",
    element: (
      <Layout>
        <History />
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
