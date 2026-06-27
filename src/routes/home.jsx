import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import Ticker from "../components/Ticker";
import VideoInterlude2 from "../components/VideoInterlude2";
import SaaSSection from "../components/SaaSSection";
import ToolsSection from "../components/ToolsSection";
import DiscoverySlider from "../components/DiscoverySlider";
import EthicsSection from "../components/EthicsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Tools from "../components/Tools";

export const meta = () => [
    { title: "Entropic System | Enterprise Software Solutions" },
    { name: "description", content: "Entropic System builds intelligence-grade software — enterprise RAG systems, workflow automation, predictive ML, and production SaaS that reason, adapt, and evolve for your business." },
    { tagName: "link", rel: "canonical", href: "https://www.entropicsystem.com/" },
    { property: "og:title", content: "Entropic System | Enterprise Software Solutions" },
    { property: "og:description", content: "Entropic System builds intelligence-grade software — enterprise RAG systems, workflow automation, predictive ML, and production SaaS that reason, adapt, and evolve for your business." },
    { property: "og:url", content: "https://www.entropicsystem.com/" },
];

export default function HomeRoute() {
    return (
        <>
            <Hero />
            <MissionSection />
            <Ticker />
            <VideoInterlude2 />
            <SaaSSection />
            <ToolsSection />
            <DiscoverySlider />
            <EthicsSection />
            <TestimonialsSection />
            <Tools />
        </>
    );
}
