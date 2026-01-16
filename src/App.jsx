import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import NotchedNavbar from "./components/NotchedNavbar";
import Ticker from "./components/Ticker";
import VideoInterlude from "./components/VideoInterlude";
import VideoInterlude2 from "./components/VideoInterlude2";
import DiscoveryLayer from "./components/DiscoveryLayer";
import DiscoverySlider from "./components/DiscoverySlider";
import EthicsSection from "./components/EthicsSection";
import Footer from "./components/Footer";
import SolutionsPage from "./components/solutions/SolutionsPage";
import SolutionsGateway from "./components/SolutionsGateway";
import MissionSection from "./components/MissionSection";
import FeaturesLayout from "./components/FeatureLayout";
import ToolsSection from "./components/ToolSection";

import ChatWidget from "./components/ChatWidget";

//Create a wrapper for the Home page to keep App.js clean
const Home = () => (
  <>
    <Hero />
    <MissionSection />
    <Ticker />
    <VideoInterlude2 />
    <FeaturesLayout />
    <DiscoverySlider />
    <EthicsSection />
    <ToolsSection />
  </>
);
function AnimatedRoutes()
{
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsGateway />} />

        <Route
          path="/solutions/core"
          element={<SolutionsPage layer="core" />}
        />
        <Route
          path="/solutions/emerging"
          element={<SolutionsPage layer="emerging" />}
        />
        <Route
          path="/solutions/vision"
          element={<SolutionsPage layer="vision" />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App()
{
  useEffect(() =>
  {
    // 1. Manage Favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link)
    {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = '/images/favicon.png';

    // 2. Manage Document Title
    document.title = "Intelligence | Data meets AI";

    // 3. Manage Meta Description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription)
    {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    // Set your description text here
    metaDescription.content = "Transform raw data into real-world action. We engineer systems that combine AI and data architecture to reason, adapt, and evolve.";

  }, []);

  return (
    <Router>
      <NotchedNavbar /> {/* Navbar stays on all pages */}
      <ChatWidget />
      <AnimatedRoutes />
      <Footer /> {/* Footer stays on all pages */}
    </Router>
  );
}