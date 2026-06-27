"use client";
import React from "react";
import
{
    ArrowRight, Image as ImageIcon,
    Database, Cloud, Code, Cpu, BrainCircuit, Server, Globe, Zap, Layers, Network
} from "lucide-react";
import { motion } from "framer-motion";
import SteamButton from "./SteamButton";
import "../styles/features.css";

const TECH_ICONS = [
    { icon: Database }, { icon: Cloud }, { icon: Code },
    { icon: BrainCircuit }, { icon: Server }, { icon: Cpu },
    { icon: Globe }, { icon: Zap }, { icon: Layers }, { icon: Network }
];

const FeatureRow = ({
    step,
    eyebrow,
    title,
    description,
    imageSrc,
    gradient // New Prop
}) =>
{

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        // APPLY GRADIENT HERE
        <div className="feature-row" style={{ background: gradient }}>

            {/* Background Particles */}
            {[...Array(6)].map((_, i) => (
                <FloatingParticle key={i} index={i} />
            ))}

            {/* Text Column */}
            <motion.div
                className="feature-text-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {step && (
                    <motion.span variants={itemVariants} className="feature-step-indicator">
                        {step}
                    </motion.span>
                )}
                <motion.span variants={itemVariants} className="feature-eyebrow">
                    {eyebrow}
                </motion.span>
                <motion.h2 variants={itemVariants} className="feature-title">
                    {title}
                </motion.h2>
                <motion.p variants={itemVariants} className="feature-desc">
                    {description}
                </motion.p>
                <motion.div variants={itemVariants}>
                    <SteamButton>
                        <a href="/solutions" className="feature-btn">
                            Explore Solutions
                            <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </a>
                    </SteamButton>
                </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
                className="feature-image-col"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {imageSrc ? (
                    <img src={imageSrc} alt={title} loading="lazy" className="feature-real-img" />
                ) : (
                    <div className="feature-img-placeholder">
                        <ImageIcon size={64} strokeWidth={1} />
                    </div>
                )}
            </motion.div>
        </div>
    );
};

// Particle Component (Unchanged)
const FloatingParticle = ({ index }) =>
{
    const RandomIcon = TECH_ICONS[Math.floor(Math.random() * TECH_ICONS.length)].icon;
    const randomTop = Math.floor(Math.random() * 100);
    const randomLeft = Math.floor(Math.random() * 100);
    const duration = 20 + Math.random() * 15;
    const themes = ['particle-blue', 'particle-purple', 'particle-emerald', 'particle-slate'];
    const themeClass = themes[Math.floor(Math.random() * themes.length)];
    const size = 16 + Math.random() * 24;

    return (
        <motion.div
            className={`tech-particle ${themeClass}`}
            style={{ top: `${randomTop}%`, left: `${randomLeft}%` }}
            animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
                rotate: [0, 20, -20, 0],
                opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5
            }}
        >
            <RandomIcon size={size} />
        </motion.div>
    );
};

export default FeatureRow;

