import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { panelVariants } from "../animations/ethicsPanelAnimations";
import "../styles/ethics-section.css";

const ETHICS = [
    {
        key: "privacy",
        title: "Data Privacy & Security",
        icon: "🔒",
        description:
            "Enterprise-grade safeguards ensure confidentiality, integrity, and regulatory compliance across the entire data lifecycle.",
    },
    {
        key: "bias",
        title: "Bias-aware Development",
        icon: "⚖️",
        description:
            "We continuously audit datasets and models to identify, measure, and mitigate bias in real-world deployments.",
    },
    {
        key: "transparency",
        title: "Transparent Systems",
        icon: "🔍",
        description:
            "Clear system behavior, explainability, and traceable decision paths are built into every layer.",
    },
    {
        key: "human",
        title: "Human-in-the-loop Design",
        icon: "🧠",
        description:
            "Critical decisions always retain human oversight, review mechanisms, and override control.",
    },
];

export default function EthicsSection()
{
    const [activeKey, setActiveKey] = useState(null);
    const activeItem = ETHICS.find((e) => e.key === activeKey);

    return (
        <section className="ethics-section">
            {/* LEFT PANEL */}
            <div className="ethics-left">
                <AnimatePresence mode="wait">
                    {!activeItem && (
                        <motion.div
                            key="default"
                            variants={panelVariants}
                            initial="exitLeft"
                            animate="enter"
                            exit="exitRight"
                            className="ethics-text"
                        >
                            <h1>Responsible AI, Built with Care</h1>
                            <p>
                                Trust is foundational. Our systems are designed to be ethical,
                                transparent, and accountable at every layer.
                            </p>
                        </motion.div>
                    )}

                    {activeItem && (
                        <motion.div
                            key={activeItem.key}
                            variants={panelVariants}
                            initial="exitRight"
                            animate="enter"
                            exit="exitLeft"
                            className="ethics-text"
                        >
                            <h1>{activeItem.title}</h1>
                            <p>{activeItem.description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* RIGHT GRID */}
            <div className="ethics-grid">
                {ETHICS.map((item) => (
                    <div
                        key={item.key}
                        className="ethics-tile"
                        onMouseEnter={() => setActiveKey(item.key)}
                        onMouseLeave={() => setActiveKey(null)}
                    >
                        <span className="ethics-icon">{item.icon}</span>
                        <span className="ethics-label">{item.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
