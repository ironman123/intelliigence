// src/components/SolutionsGateway.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SolutionPanel from "./SolutionPanel";
import "../styles/solutions-gateway.css";

const SOLUTION_LAYERS = [
    {
        key: "core",
        label: "CORE",
        route: "/solutions/core",
        image: "/images/pexels-jakubzerdzicki-35501928.webp",
        tagline: "Operational Intelligence",
    },
    {
        key: "emerging",
        label: "EMERGING",
        route: "/solutions/emerging",
        image: "/images/pexels-artempodrez-5726706.webp",
        tagline: "Agentic & Adaptive Systems",
    },
    {
        key: "vision",
        label: "VISION",
        route: "/solutions/vision",
        image: "/images/pexels-pavel-danilyuk-8294683.webp",
        tagline: "Governance & Trust",
    },
];

import SEO from "./SEO";

export default function SolutionsGateway() {
    const navigate = useNavigate();

    return (
        <section className="solutions-gateway">
            <SEO
                title="Entropic System | Advance Software Solutions"
                description="Explore our core, emerging, and vision solutions for operational intelligence, agentic systems, and governance."
                type="website"
            />
            {SOLUTION_LAYERS.map((layer, index) => (
                <SolutionPanel
                    key={layer.key}
                    layer={layer}
                    index={index}
                    onClick={() => navigate(layer.route)}
                />
            ))}
        </section>
    );
}
