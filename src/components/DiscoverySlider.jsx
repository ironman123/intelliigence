"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DISCOVERY_CARDS } from "../data/discovery";
import EntropicCanvas from "./EntropicCanvas";
import "../styles/discovery.css";

export default function DiscoverySlider()
{
    const [activeTab, setActiveTab] = useState("core");
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);

    const scroll = (direction) =>
    {
        if (scrollContainerRef.current)
        {
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -580 : 580,
                behavior: "smooth",
            });
        }
    };

    const currentData = DISCOVERY_CARDS[activeTab];

    return (
        <section ref={sectionRef} className="discovery-section">
            <EntropicCanvas containerRef={sectionRef} scheme="dark" />

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

                    <div className="nav-arrows desktop-only">
                        <button onClick={() => scroll('left')} className="arrow-btn"><ChevronLeft size={18} /></button>
                        <button onClick={() => scroll('right')} className="arrow-btn"><ChevronRight size={18} /></button>
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
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.38, delay: index * 0.055 }}
                                whileHover="hover"
                            >
                                {/* Background image */}
                                {card.image ? (
                                    <motion.img
                                        src={card.image}
                                        alt={card.title}
                                        className="card-bg-img"
                                        variants={{ hover: { scale: 1.07 } }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                    />
                                ) : (
                                    <div className="card-bg-img" style={{ background: '#080d1e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <ImageIcon color="#1e293b" size={64} />
                                    </div>
                                )}

                                {/* Animated particle-dot field — drifts diagonally on hover */}
                                <div className="card-field" aria-hidden="true" />

                                {/* Dark gradient fade from bottom */}
                                <div className="card-gradient" />

                                {/* Theme-colored radial bloom from bottom */}
                                <div className="card-theme-glow" aria-hidden="true" />

                                {/* Left glowing accent bar */}
                                <div className="card-accent-bar" aria-hidden="true" />

                                {/* Large faded card number — top-right watermark */}
                                <span className="card-num" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Content */}
                                <div className="card-content">
                                    <motion.div
                                        variants={{ hover: { y: -7 } }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <span className="card-tagline">
                                            <span className="card-tagline-dot" aria-hidden="true" />
                                            {card.tagline}
                                        </span>
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-desc">{card.description}</p>
                                        <a href={card.link} className="card-explore-link">
                                            Explore <ArrowRight size={12} strokeWidth={2.5} />
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* MOBILE NAV */}
                <div className="nav-arrows mobile-only">
                    <button onClick={() => scroll('left')} className="arrow-btn"><ChevronLeft size={18} /></button>
                    <button onClick={() => scroll('right')} className="arrow-btn"><ChevronRight size={18} /></button>
                </div>
            </div>
        </section>
    );
}
