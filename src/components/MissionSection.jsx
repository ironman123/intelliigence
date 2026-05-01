import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, ShieldCheck, Maximize } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
    })
};

const PILLARS = [
    {
        icon: <Cpu size={22} color="#3b82f6" />,
        label: "Adaptive Infrastructure",
        text: "Systems that don't just execute, but evolve. We build resilient pipelines that adapt instantly to your growing intelligence needs."
    },
    {
        icon: <ShieldCheck size={22} color="#8b5cf6" />,
        label: "Absolute Sovereignty",
        text: "No black-box dependencies. You retain complete ownership of the entire stack—from the database architecture to the final interface."
    },
    {
        icon: <Maximize size={22} color="#10b981" />,
        label: "Frictionless Scale",
        text: "Turn complexity into a straight line. Our architecture is engineered to handle massive throughput without accumulating technical debt."
    }
];

export default function MissionSection()
{
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section style={styles.section} ref={ref}>
            <div style={styles.container}>

                {/* --- LEFT COLUMN: Editorial & Vision --- */}
                <div style={styles.leftColumn}>
                    <motion.div
                        style={styles.badge}
                        variants={fadeUp} initial="hidden"
                        animate={inView ? "visible" : "hidden"} custom={0}
                    >
                        <span style={styles.badgeDot} />
                        <span style={styles.badgeText}>OUR VISION</span>
                    </motion.div>

                    {/* NEW: Split the headline into two distinct hierarchical elements */}
                    <motion.h2
                        style={styles.headline}
                        variants={fadeUp} initial="hidden"
                        animate={inView ? "visible" : "hidden"} custom={1}
                    >
                        We build systems that <br />
                        <span style={styles.highlight}>think ahead.</span>
                    </motion.h2>

                    <motion.h3
                        style={styles.subHeadline}
                        variants={fadeUp} initial="hidden"
                        animate={inView ? "visible" : "hidden"} custom={1.5}
                    >
                        So your business never has to catch up.
                    </motion.h3>

                    <motion.p
                        style={styles.sub}
                        variants={fadeUp} initial="hidden"
                        animate={inView ? "visible" : "hidden"} custom={2}
                    >
                        More than just software, we engineer evolving ecosystems.
                        Crafted for modern teams operating at the cutting edge, our platform
                        turns operational drag into compounding momentum—bridging the gap
                        between raw ideas and scalable impact.
                    </motion.p>
                </div>

                {/* --- RIGHT COLUMN: The Pillars --- */}
                <motion.div
                    style={styles.rightColumn}
                    variants={fadeUp} initial="hidden"
                    animate={inView ? "visible" : "hidden"} custom={3}
                >
                    {PILLARS.map((p, index) => (
                        <motion.div
                            key={p.label}
                            style={styles.pillarCard}
                            whileHover={{
                                y: -4,
                                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)",
                                borderColor: "#e2e8f0"
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={styles.iconWrapper}>
                                {p.icon}
                            </div>
                            <div style={styles.pillarContent}>
                                <h3 style={styles.pillarLabel}>{p.label}</h3>
                                <p style={styles.pillarText}>{p.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

const styles = {
    section: {
        background: "#fafafa", // Slightly off-white for premium feel
        padding: "120px 24px",
        fontFamily: "'Inter', system-ui, sans-serif",
        borderBottom: "1px solid #f1f5f9",
        display: "flex",
        justifyContent: "center",
    },
    container: {
        width: "100%",
        maxWidth: 1200,
        display: "flex",
        flexWrap: "wrap",
        gap: "64px",
        alignItems: "center",
    },
    leftColumn: {
        flex: "1 1 450px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
    },
    rightColumn: {
        flex: "1 1 500px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    badge: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 999,
        padding: "6px 16px",
        marginBottom: 32,
        boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
    },
    badgeDot: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#0f172a", // Darked dot for a sleeker look
        display: "block",
    },
    badgeText: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.15em",
        color: "#64748b",
    },
    headline: {
        fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", // Slightly larger for impact
        fontWeight: 800,
        lineHeight: 1.1,
        color: "#0f172a",
        letterSpacing: "-0.04em",
        margin: "0 0 12px", // Tightened bottom margin to connect to subHeadline
    },
    highlight: {
        color: "#3b82f6",
    },
    subHeadline: {
        fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", // Smaller than main hook, larger than paragraph
        fontWeight: 600,
        color: "#64748b", // Muted slate color to create contrast
        lineHeight: 1.3,
        letterSpacing: "-0.02em",
        margin: "0 0 32px", // Space before the paragraph begins
    },
    sub: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "#64748b",
        maxWidth: 520,
        margin: "0",
    },
    pillarCard: {
        background: "#ffffff",
        padding: "32px",
        borderRadius: 16,
        border: "1px solid #f1f5f9",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        boxShadow: "0 4px 20px -10px rgba(0,0,0,0.03)",
        cursor: "default",
    },
    iconWrapper: {
        background: "#f8fafc",
        padding: "12px",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #f1f5f9",
        flexShrink: 0,
    },
    pillarContent: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    pillarLabel: {
        fontSize: 16,
        fontWeight: 700,
        color: "#0f172a",
        margin: 0,
        letterSpacing: "-0.01em",
    },
    pillarText: {
        fontSize: 14,
        lineHeight: 1.6,
        color: "#64748b",
        margin: 0,
    },
};