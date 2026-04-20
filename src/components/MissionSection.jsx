import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
    })
};

const PILLARS = [
    {
        label: "Built to last",
        text: "No black-box deliverables. Everything we ship is yours to own, maintain, and scale."
    },
    {
        label: "Full-stack thinking",
        text: "From database to AI layer to the interface — we control every layer so nothing gets lost."
    },
    {
        label: "Underserved markets",
        text: "Schools, clinics, kitchens, warehouses. Where enterprise tools are too expensive and generic tools fall short."
    }
];

export default function MissionSection()
{
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section ref={ref} style={styles.section}>

            {/* Badge */}
            <motion.div
                style={styles.badge}
                variants={fadeUp} initial="hidden"
                animate={inView ? "visible" : "hidden"} custom={0}
            >
                <span style={styles.badgeDot} />
                <span style={styles.badgeText}>ABOUT US</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
                style={styles.headline}
                variants={fadeUp} initial="hidden"
                animate={inView ? "visible" : "hidden"} custom={1}
            >
                We build software for the gaps<br />
                <span style={styles.headlineMuted}>the big players left behind.</span>
            </motion.h2>

            {/* Sub copy */}
            <motion.p
                style={styles.sub}
                variants={fadeUp} initial="hidden"
                animate={inView ? "visible" : "hidden"} custom={2}
            >
                We're a focused technology company from India. We make production-grade SaaS
                products for specific industries — and bespoke AI systems for businesses that
                need something the market doesn't offer yet. Small team. Long-term thinking.
            </motion.p>

            {/* Divider */}
            <motion.div
                style={styles.divider}
                variants={fadeUp} initial="hidden"
                animate={inView ? "visible" : "hidden"} custom={3}
            />

            {/* Pillars */}
            <motion.div
                style={styles.pillars}
                variants={fadeUp} initial="hidden"
                animate={inView ? "visible" : "hidden"} custom={4}
            >
                {PILLARS.map((p) => (
                    <div key={p.label} style={styles.pillar}>
                        <span style={styles.pillarLabel}>{p.label}</span>
                        <span style={styles.pillarText}>{p.text}</span>
                    </div>
                ))}
            </motion.div>

        </section>
    );
}

const styles = {
    section: {
        background: "#ffffff",
        padding: "96px 24px 96px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
        borderBottom: "1px solid #f1f5f9",
    },
    badge: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: 999,
        padding: "5px 14px",
        marginBottom: 32,
    },
    badgeDot: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#3b82f6",
        display: "block",
    },
    badgeText: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "#94a3b8",
    },
    headline: {
        fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
        fontWeight: 800,
        lineHeight: 1.15,
        color: "#0f172a",
        letterSpacing: "-0.03em",
        margin: "0 0 20px",
        maxWidth: 640,
    },
    headlineMuted: {
        color: "#94a3b8",
    },
    sub: {
        fontSize: 16,
        lineHeight: 1.75,
        color: "#64748b",
        maxWidth: 560,
        margin: "0 0 48px",
    },
    divider: {
        width: 40,
        height: 1,
        background: "#e2e8f0",
        marginBottom: 48,
    },
    pillars: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 1,
        width: "100%",
        maxWidth: 860,
        background: "#f1f5f9",
        border: "1px solid #f1f5f9",
        borderRadius: 14,
        overflow: "hidden",
    },
    pillar: {
        background: "#ffffff",
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        textAlign: "left",
    },
    pillarLabel: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.05em",
        color: "#0f172a",
        textTransform: "uppercase",
    },
    pillarText: {
        fontSize: 13.5,
        lineHeight: 1.65,
        color: "#64748b",
    },
};