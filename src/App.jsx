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
import DiscoverySlider from "./components/DsicoverySlider";
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
    <Ticker />
    <MissionSection />
    <FeaturesLayout />
    <VideoInterlude2 />
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
    // 1. Find existing favicon or create a new one
    let link = document.querySelector("link[rel~='icon']");

    if (!link)
    {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    // 2. Set the image source
    // Ensure 'favicon.png' is in your /public folder
    link.href = '/images/favicon.png';

    // Optional: Change title dynamically too
    document.title = "Intelligence";

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