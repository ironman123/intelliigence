// src/components/SolutionsGateway.jsx
import { motion } from "framer-motion";
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

export default function SolutionsGateway()
{
    return (
        <section className="solutions-gateway">
            {SOLUTION_LAYERS.map((layer, index) => (
                <SolutionPanel
                    key={layer.key}
                    layer={layer}
                    index={index}
                />
            ))}
        </section>
    );
}


