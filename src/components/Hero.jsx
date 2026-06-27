"use client";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import SchedulingModal from "./SchedulingModal";
import SteamButton from "./SteamButton";
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
                            ENTROPIC SYSTEM
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
                            <SteamButton>
                                <button
                                    className="btn-primary"
                                    onClick={() => setIsModalOpen(true)}
                                    onMouseMove={e => {
                                        const r = e.currentTarget.getBoundingClientRect();
                                        e.currentTarget.style.setProperty("--gx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
                                        e.currentTarget.style.setProperty("--gy", ((e.clientY - r.top)  / r.height * 100).toFixed(1) + "%");
                                    }}
                                >
                                    <span className="btn-text">Talk to Our Engineers</span>
                                </button>
                            </SteamButton>
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

