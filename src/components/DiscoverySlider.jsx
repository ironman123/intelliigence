"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DISCOVERY_CARDS } from "../data/discovery";
import "../styles/discovery.css";

export default function DiscoverySlider()
{
    const [activeTab, setActiveTab] = useState("core");
    const scrollContainerRef = useRef(null);

    const scroll = (direction) =>
    {
        if (scrollContainerRef.current)
        {
            const scrollAmount = 600;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const currentData = DISCOVERY_CARDS[activeTab];

    return (
        <section className="discovery-section">
            <FloatingParticles theme={activeTab} />

            <div className="discovery-container">
                {/* HEADER */}
                <div className="discovery-header">
                    <div>
                        <h2 className="discovery-title">Explore Our Capabilities</h2>
                        <div className="tab-container">
                            {['core', 'emerging', 'vision'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() =>
                                    {
                                        setActiveTab(tab);
                                        if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
                                    }}
                                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                                    data-theme={tab}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* DESKTOP NAV: Top Right (Hidden on Mobile) */}
                    <div className="nav-arrows desktop-only">
                        <button onClick={() => scroll('left')} className="arrow-btn"><ChevronLeft /></button>
                        <button onClick={() => scroll('right')} className="arrow-btn"><ChevronRight /></button>
                    </div>
                </div>

                {/* SLIDER */}
                <div className="slider-track" ref={scrollContainerRef}>
                    <AnimatePresence mode="wait">
                        {currentData.map((card, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`}
                                className="discovery-card"
                                data-theme={activeTab}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover="hover"
                            >
                                {card.image ? (
                                    <motion.img
                                        src={card.image}
                                        alt={card.title}
                                        className="card-bg-img"
                                        variants={{ hover: { scale: 1.1 } }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                ) : (
                                    <div className="card-bg-img" style={{ background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <ImageIcon color="#475569" size={64} />
                                    </div>
                                )}
                                <div className="card-gradient" />
                                <div className="card-content">
                                    <motion.div
                                        variants={{ hover: { y: -8 } }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className="card-tagline">{card.tagline}</span>
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-desc">{card.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* MOBILE NAV: Bottom Center (Hidden on Desktop) */}
                <div className="nav-arrows mobile-only">
                    <button onClick={() => scroll('left')} className="arrow-btn"><ChevronLeft /></button>
                    <button onClick={() => scroll('right')} className="arrow-btn"><ChevronRight /></button>
                </div>
            </div>
        </section>
    );
}


// --- Background Particles Sub-Component ---
const FloatingParticles = ({ theme }) =>
{
    const colors = {
        core: "#60a5fa",
        emerging: "#34d399",
        vision: "#a78bfa"
    };
    const currentColor = colors[theme];

    return (
        <div className="particle-field">
            {[...Array(12)].map((_, i) => (
                <Particle key={i} color={currentColor} />
            ))}
        </div>
    );
};

const Particle = ({ color }) =>
{
    const size = Math.random() * 60 + 20;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 10;

    return (
        <motion.div
            className="particle"
            style={{ width: size, height: size, top: `${top}%`, left: `${left}%`, backgroundColor: color }}
            animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        />
    );
};