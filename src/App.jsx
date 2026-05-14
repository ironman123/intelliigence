// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import { ProductPage, ProductPageDemo } from "./components/ProductPage";
import SEO from "./components/SEO";

//Create a wrapper for the Home page to keep App.js clean
const Home = () => (
  <>
    <SEO
      title="Entropic Solutions | Smart Software Systems & Data Pipelines"
      description="Transform raw data into action with our advanced Entropic systems. We build robust data pipelines and custom Smart Software solutions that reason, adapt, and evolve."
      type="website"
    />
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
function AnimatedRoutes() {
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
          <Route path="/products/financemanager" element={<ProductPage productId="financemanager" />} />
          <Route path="/products/crmportal" element={<ProductPage productId="crmportal" />} />
          <Route path="/products/schoolmanager" element={<ProductPage productId="schoolmanager" />} />
          <Route path="/products/inventorymanager" element={<ProductPage productId="inventorymanager" />} />
          <Route path="/products/clinicmanager" element={<ProductPage productId="clinicmanager" />} />
          <Route path="/products/kitchendisplaysystem" element={<ProductPage productId="kitchendisplaysystem" />} />

          {/* <Route path="/products/demo-playground" element={<ProductPageDemo />} /> */}

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <NotchedNavbar /> {/* Navbar stays on all pages */}
      <ChatWidget />
      <AnimatedRoutes />
      <Footer /> {/* Footer stays on all pages */}
    </Router>
  );
}