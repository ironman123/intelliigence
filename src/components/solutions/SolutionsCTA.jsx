import { motion } from "framer-motion";
import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";
import { Link } from "react-router";
import "../../styles/solutions/solutions-cta.css";

const ECOSYSTEM_MAP = {
    core: {
        icon: <Layers size={32} />,
        label: "The Foundation",
        headline: "From Infrastructure to Innovation",
        text: "Core automation isn't just about efficiency—it's the stable bedrock required to deploy autonomous agents safely.",
        next: { label: "See what you can build next", path: "/solutions/emerging" }
    },
    emerging: {
        icon: <Zap size={32} />,
        label: "The Application",
        headline: "From Agents to Autonomy",
        text: "Once you have active agents, the next step is untethering them from the screen to impact the physical world.",
        next: { label: "View our Vision Roadmap", path: "/solutions/vision" }
    },
    vision: {
        icon: <Cpu size={32} />,
        label: "The Future",
        headline: "Grounded in Reality",
        text: "We don't build sci-fi. We build R&D prototypes today using the same robust data pipelines from our Core solutions.",
        next: { label: "Back to Core Solutions", path: "/solutions/core" }
    },
};

const container = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
};

export default function SolutionsCTA({ layer })
{
    const data = ECOSYSTEM_MAP[layer];

    if (!data) return null;

    return (
        <motion.section
            className={`solutions-cta solutions-cta--${layer}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="solutions-cta-inner">
                {/* 1. New "Badge" Look */}
                <div className="cta-icon-badge">
                    <div>{data.icon}</div>
                    <span>{data.label}</span>
                </div>

                {/* 2. Philosophy Text (No "Sales" Pitch) */}
                <h1>{data.headline}</h1>
                <p>{data.text}</p>

                {/* 3. The "Bridge" Link (Subtle Navigation) */}
                <Link
                    className="cta-bridge-link"
                    to={data.next.path}
                    style={{ textDecoration: 'none' }}
                >
                    <span>{data.next.label}</span>
                    <ArrowRight size={18} />
                </Link>
            </div>
        </motion.section>
    );
}

