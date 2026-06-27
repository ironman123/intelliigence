import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectModal from "../ProjectModal";
import SchedulingModal from "../SchedulingModal";
import SparkleButton from "../SparkleButton";
import SteamButton from "../SteamButton";
import EntropicCanvas from "../EntropicCanvas";
import "../../styles/solutions/layer-hero.css";

const EYEBROW = {
    core:     "Core AI Infrastructure",
    emerging: "Applied AI · Real-World Impact",
    vision:   "Vision R&D · The Future",
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const item = {
    hidden:   { opacity: 0, y: 32 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function LayerHero({ layer, headline, description })
{
    const [isProjectOpen,  setIsProjectOpen]  = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const heroRef = useRef(null);

    return (
        <>
            <motion.section
                ref={heroRef}
                className={`layer-hero layer-hero--${layer}`}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {/* Ambient particle canvas */}
                <EntropicCanvas containerRef={heroRef} scheme="dark" />

                {/* Theme-specific pattern overlay (grid / dots / stars) */}
                <div className="lh-pattern" aria-hidden="true" />

                {/* Atmospheric glow orbs */}
                <div className="lh-orb lh-orb-1" aria-hidden="true" />
                <div className="lh-orb lh-orb-2" aria-hidden="true" />

                <div className="layer-hero-inner">
                    {/* Eyebrow */}
                    <motion.div variants={item} className="lh-eyebrow">
                        <span className="lh-eyebrow-dot" aria-hidden="true" />
                        {EYEBROW[layer]}
                    </motion.div>

                    <motion.h1 variants={item}>{headline}</motion.h1>

                    <motion.p variants={item} className="layer-hero-description">
                        {description}
                    </motion.p>

                    <motion.div variants={item} className="layer-hero-actions">
                        <SteamButton>
                            <button
                                className="layer-hero-btn primary"
                                onClick={() => setIsProjectOpen(true)}
                            >
                                Start a Project
                            </button>
                        </SteamButton>

                        <SparkleButton>
                            <button
                                className="layer-hero-btn secondary"
                                onClick={() => setIsScheduleOpen(true)}
                            >
                                Book Strategy Call
                            </button>
                        </SparkleButton>
                    </motion.div>
                </div>
            </motion.section>

            <ProjectModal  isOpen={isProjectOpen}  onClose={() => setIsProjectOpen(false)} />
            <SchedulingModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
        </>
    );
}
