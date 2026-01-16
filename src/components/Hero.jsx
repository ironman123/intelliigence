"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { heroContainer, heroItem } from "../animations/hero";
import SchedulingModal from "./SchedulingModal";
import "../styles/hero.css";

export default function Hero()
{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <motion.section
                className="hero"
                variants={heroContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {/* Background video */}
                <video
                    className="hero-bg-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/Pagevideo2.mp4" type="video/mp4" />
                </video>

                {/* Content layer */}
                <div className="hero-content">
                    <div className="hero-left">
                        <motion.h1 variants={heroItem}>
                            Practical AI Solutions <br />
                            Built for Real-World Control
                        </motion.h1>

                        <motion.p variants={heroItem}>
                            We design and deploy intelligent AI systems that help Organizations reduce manual effort,
                            make better decisions and grow efficiently.
                        </motion.p>

                        <motion.div className="hero-actions" variants={heroItem}>
                            {/* ACTION 1: Open Strategy Call Modal */}
                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.04 }}
                                onClick={() => setIsModalOpen(true)}
                            >
                                Talk to Us
                            </motion.button>

                            {/* ACTION 2: Navigate to Solutions (using react-router-dom) */}
                            <motion.button
                                className="btn-secondary"
                                onClick={() => navigate("/solutions")}
                                animate={{ opacity: [1, 0.65, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                View Solutions
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Modal Logic */}
            <SchedulingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}