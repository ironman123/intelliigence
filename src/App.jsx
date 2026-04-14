// App.jsx
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
import Tools from "./components/Tools";
import SaaSSection from "./components/SaaSSection";
import ToolsSection from "./components/ToolsSection";
import ChatWidget from "./components/ChatWidget";
import ProductPage from "./components/ProductPage";

//Create a wrapper for the Home page to keep App.js clean
const Home = () => (
  <>
    <Hero />
    <MissionSection />
    <Ticker />
    <VideoInterlude2 />
    {/* <FeaturesLayout /> */}
    <SaaSSection />
    <ToolsSection />
    <DiscoverySlider />
    <EthicsSection />
    <Tools />
  </>
);
function AnimatedRoutes()
{
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname} style={{ overflow: "visible" }}>
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



          // In your router:
          <Route path="/products/financeiq" element={<ProductPage productId="financeiq" />} />
          <Route path="/products/nexuscrm" element={<ProductPage productId="nexuscrm" />} />
          <Route path="/products/scholaros" element={<ProductPage productId="scholaros" />} />
          <Route path="/products/inventoryai" element={<ProductPage productId="inventoryai" />} />
          <Route path="/products/mediswarm" element={<ProductPage productId="mediswarm" />} />
          <Route path="/products/kitchensync" element={<ProductPage productId="kitchensync" />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
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
    // OPTIMIZED: Includes "Solutions", "Systems", and "Pipelines" + "Intelligence"
    document.title = "Intelligence Solutions | AI Systems & Data Pipelines";

    // 3. Manage Meta Description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription)
    {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    // OPTIMIZED: Includes all 4 keywords naturally within 155 characters
    metaDescription.content = "Transform raw data into action with our advanced intelligence systems. We build robust data pipelines and custom AI solutions that reason, adapt, and evolve.";

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