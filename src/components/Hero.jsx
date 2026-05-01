"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SchedulingModal from "./SchedulingModal";
import "../styles/hero.css";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
    })
};

export default function Hero()
{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <section className="hero-section">
                <div className="video-container">
                    <video
                        className="hero-bg-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/videos/Pagevideo2.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-left">

                        <motion.div
                            className="hero-badge"
                            custom={0} initial="hidden" animate="visible" variants={fadeUp}
                        >
                            <span className="badge-dot"></span>
                            INTELLIIGENCE
                        </motion.div>

                        <motion.h1
                            className="hero-headline"
                            custom={1} initial="hidden" animate="visible" variants={fadeUp}
                        >
                            Practical solutions.<br />
                            <span className="hero-highlight">Built for real-world control.</span>
                        </motion.h1>

                        <motion.p
                            className="hero-subtext"
                            custom={2} initial="hidden" animate="visible" variants={fadeUp}
                        >
                            We engineer intelligent infrastructure that helps organizations reduce manual effort,
                            execute decisive actions, and scale efficiently. No black boxes—just robust software
                            designed for the physical world.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            custom={3} initial="hidden" animate="visible" variants={fadeUp}
                        >
                            <button
                                className="btn-primary"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Talk to Our Engineers
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SchedulingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}