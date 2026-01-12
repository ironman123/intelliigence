import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "../ProjectModal";      // <--- Import Modal 1
import SchedulingModal from "../SchedulingModal"; // <--- Import Modal 2
import "../../styles/solutions/layer-hero.css";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function LayerHero({ layer, headline, description })
{
    // 1. State for Modals
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    return (
        <>
            <motion.section
                // 2. Dynamic Class for Theming (layer-hero--core, etc.)
                className={`layer-hero layer-hero--${layer}`}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <div className="layer-hero-inner">
                    <motion.h1 variants={item}>
                        {/* 3. Optional: Wrap part of headline in span if you want gradient */}
                        {headline}
                    </motion.h1>

                    <motion.p variants={item} className="layer-hero-description">
                        {description}
                    </motion.p>

                    <motion.div variants={item} className="layer-hero-actions">

                        {/* ACTION 1: Start Project */}
                        <button
                            className="layer-hero-btn primary"
                            onClick={() => setIsProjectOpen(true)}
                        >
                            Start a Project
                        </button>

                        {/* ACTION 2: Strategy Call */}
                        <button
                            className="layer-hero-btn secondary"
                            onClick={() => setIsScheduleOpen(true)}
                        >
                            Book Strategy Call
                        </button>

                    </motion.div>
                </div>
            </motion.section>

            {/* 4. Render Modals */}
            <ProjectModal
                isOpen={isProjectOpen}
                onClose={() => setIsProjectOpen(false)}
            />

            <SchedulingModal
                isOpen={isScheduleOpen}
                onClose={() => setIsScheduleOpen(false)}
            />
        </>
    );
}