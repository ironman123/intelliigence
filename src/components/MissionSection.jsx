import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EntropicCanvas from "./EntropicCanvas";

// ─── Minimalist Palette ──────────────────────────────────────────
const P = {
    bg: "#f9f9f7",        // Paper-white background
    ink: "#0f0f0f",       // Near-black
    inkMuted: "#666666",  // Grey for subtext
    accent: "#2563eb",    // Primary blue (used sparingly)
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }
    }),
};

export default function MissionSection()
{
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const sectionRef = useRef(null);
    const combinedRef = el => { ref.current = el; sectionRef.current = el; };

    return (
        <>
            <style>{`
        @keyframes adGhostOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

            <section ref={combinedRef} style={{
                background: P.bg,
                padding: "180px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontFamily: "'Inter', sans-serif",
                position: "relative",
                overflow: "hidden",
                minHeight: "80vh"
            }}>

                {/* ── ORDER → CHAOS → CONNECTIONS particle field ── */}
                <EntropicCanvas containerRef={sectionRef} scheme="light" />

                {/* ── Blurred Background "Ghost" Object ── */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "600px",
                    height: "600px",
                    border: "1px solid rgba(0,0,0,0.03)",
                    borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                    filter: "blur(80px)",
                    animation: "adGhostOrbit 25s linear infinite",
                    background: "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.05), transparent)",
                    pointerEvents: "none",
                    zIndex: 0
                }} />

                <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>

                    {/* ── Main Headline ── */}
                    <motion.h2
                        variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0}
                        style={{
                            fontSize: "clamp(48px, 8vw, 92px)",
                            fontWeight: 800,
                            color: P.ink,
                            lineHeight: 0.95,
                            letterSpacing: "-0.04em",
                            margin: "0 0 32px"
                        }}
                    >
                        S<span style={{ color: P.accent }}>aa</span>S: System <br />
                        as a Service
                    </motion.h2>

                    {/* ── Subtext ── */}
                    <motion.p
                        variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}
                        style={{
                            fontFamily: "'Newsreader', serif",
                            fontSize: "clamp(18px, 2.5vw, 26px)",
                            fontStyle: "italic",
                            color: P.ink,
                            lineHeight: 1.5,
                            maxWidth: "640px",
                            margin: "0 auto 64px"
                        }}
                    >
                        We build systems that think ahead—so your business never has to catch up. More than just software, we create an evolving ecosystem that grows with your ambitions.
                    </motion.p>

                    {/* ── Pillars (Simple Text) ── */}
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "40px",
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                        paddingTop: "40px"
                    }}>
                        {[
                            { label: "Adaptive Infrastructure", value: "Evolving pipelines" },
                            { label: "Absolute Sovereignty", value: "Zero black-box" },
                            { label: "Frictionless Scale", value: "Massive throughput" }
                        ].map((p, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={2 + i * 0.1}
                                style={{ textAlign: "left" }}
                            >
                                <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: P.accent, marginBottom: "4px" }}>
                                    {p.label}
                                </div>
                                <div style={{ fontSize: "16px", color: P.inkMuted }}>
                                    {p.value}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

