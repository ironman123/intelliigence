import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMITMENTS = [
    {
        key: "nolockin",
        number: "01",
        title: "No lock-in, ever.",
        short: "Your data, your exit",
        description:
            "On any SaaS plan, you can export your complete data at any time in standard formats. Cancel anytime. We don't hold your data hostage, charge exit fees, or make migration painful.",
        detail: "For custom AI builds, full source code and model weights transfer to you at delivery. No ongoing licence dependency unless you want managed hosting.",
    },
    {
        key: "physician",
        number: "02",
        title: "AI assists. Humans decide.",
        short: "Human-in-the-loop",
        description:
            "In every system we build for healthcare, finance, or compliance — no inference reaches a user without a qualified human in the review chain. Hard-locked at the architecture level, not a policy afterthought.",
        detail: "MediSwarm is architecturally incapable of passing a diagnostic output to a patient without licensed doctor sign-off.",
    },
    {
        key: "transparency",
        number: "03",
        title: "No black boxes in production.",
        short: "Explainable outputs",
        description:
            "Every AI decision in a compliance-critical system includes a traceable reasoning path. If a system can't explain its output in plain terms, it doesn't go to production.",
        detail: "We instrument all AI outputs with confidence scores, data lineage, and audit logs — queryable by your compliance or finance team at any time.",
    },
    {
        key: "data",
        number: "04",
        title: "Your data never trains our models.",
        short: "Data isolation",
        description:
            "Customer data is never used to improve our general models, shared with third parties, or retained beyond the agreed window. Every tenant runs on isolated infrastructure.",
        detail: "We support on-premise and air-gapped deployments for clients in healthcare, defense, and financial services who require zero data egress.",
    },
    {
        key: "bias",
        number: "05",
        title: "We tell you what the system gets wrong.",
        short: "Honest limitations",
        description:
            "Before any model ships, we run adversarial testing, edge-case stress tests, and demographic parity checks. We document the failure modes — and we tell you about them upfront.",
        detail: "Known limitations are disclosed in plain language in every handover. Not buried in documentation. Not omitted because it's uncomfortable.",
    },
    {
        key: "compliance",
        number: "06",
        title: "Built for a borderless regulatory reality.",
        short: "Global compliance",
        description:
            "GDPR, SOC 2, HIPAA, and complex regional data frameworks — built in from day one, not retrofitted at launch when it costs ten times more to fix.",
        detail: "We track regulatory shifts across jurisdictions and verticals. When global or local laws change, your system adapts seamlessly — included in your plan.",
    },
];

const fade = {
    enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
};

export default function EthicsSection()
{
    const [activeKey, setActiveKey] = useState(null);
    const [expanded, setExpanded] = useState(null);
    const activeItem = COMMITMENTS.find((c) => c.key === activeKey);

    return (
        <section style={S.section}>

            {/* ── HEADER ── */}
            <div style={S.header}>
                <div style={S.eyebrow}>
                    <span style={S.eyebrowLine} />
                    <span style={S.eyebrowText}>How we operate</span>
                </div>
                <h2 style={S.headline}>
                    Six commitments we make<br />
                    to every client.
                </h2>
                <p style={S.headlineSub}>
                    Not a values statement. A list of things you can hold us to.
                </p>
            </div>

            {/* ── DESKTOP: hover grid + detail panel ── */}
            <div style={S.desktopBody} className="ethics-desktop">
                <div style={S.grid}>
                    {COMMITMENTS.map((item) =>
                    {
                        const isActive = activeKey === item.key;
                        return (
                            <div
                                key={item.key}
                                style={{ ...S.tile, ...(isActive ? S.tileActive : {}) }}
                                onMouseEnter={() => setActiveKey(item.key)}
                                onMouseLeave={() => setActiveKey(null)}
                            >
                                <span style={{ ...S.tileNum, ...(isActive ? S.tileNumActive : {}) }}>
                                    {item.number}
                                </span>
                                <span style={S.tileShort}>{item.short}</span>
                                <span style={{ ...S.tileTitle, ...(isActive ? S.tileTitleActive : {}) }}>
                                    {item.title}
                                </span>
                                <div style={{
                                    ...S.tileBar,
                                    opacity: isActive ? 1 : 0,
                                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                                }} />
                            </div>
                        );
                    })}
                </div>

                <div style={S.panel}>
                    <AnimatePresence mode="wait">
                        {!activeItem ? (
                            <motion.div key="default" variants={fade} initial="exit" animate="enter" exit="exit" style={S.panelDefault}>
                                <div style={S.pIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <p style={S.pHint}>Hover any commitment to read the detail.</p>
                            </motion.div>
                        ) : (
                            <motion.div key={activeItem.key} variants={fade} initial="exit" animate="enter" exit="exit" style={S.panelContent}>
                                <span style={S.pNum}>{activeItem.number}</span>
                                <h3 style={S.pTitle}>{activeItem.title}</h3>
                                <p style={S.pDesc}>{activeItem.description}</p>
                                <div style={S.pDivider} />
                                <p style={S.pDetail}>{activeItem.detail}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* ── MOBILE: tap-to-expand accordion ── */}
            <div style={S.mobileList} className="ethics-mobile">
                {COMMITMENTS.map((item, i) =>
                {
                    const isOpen = expanded === item.key;
                    const isLast = i === COMMITMENTS.length - 1;
                    return (
                        <div
                            key={item.key}
                            style={{ ...S.accordionWrap, ...(isLast ? {} : S.accordionBorder) }}
                        >
                            <button
                                style={{ ...S.accordionBtn, ...(isOpen ? S.accordionBtnOpen : {}) }}
                                onClick={() => setExpanded(isOpen ? null : item.key)}
                            >
                                <div style={S.accordionLeft}>
                                    <span style={{
                                        fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                                        color: isOpen ? "#3b82f6" : "#cbd5e1",
                                        fontFamily: "monospace", flexShrink: 0,
                                    }}>
                                        {item.number}
                                    </span>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                                        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94a3b8" }}>
                                            {item.short}
                                        </span>
                                        <span style={{ fontSize: 14, fontWeight: 600, color: isOpen ? "#0f172a" : "#475569", lineHeight: 1.35 }}>
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"
                                    style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="body"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                                        exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <div style={S.accordionBody}>
                                            <p style={S.pDesc}>{item.description}</p>
                                            <div style={S.pDivider} />
                                            <p style={S.pDetail}>{item.detail}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            <style>{`
                @media (min-width: 768px) { .ethics-mobile { display: none !important; } }
                @media (max-width: 767px) { .ethics-desktop { display: none !important; } }
            `}</style>
        </section>
    );
}

const S = {
    section: {
        background: "#fafafa",
        borderTop: "1px solid #f1f5f9",
        borderBottom: "1px solid #f1f5f9",
        padding: "80px 6vw",
        fontFamily: "'Inter', system-ui, sans-serif",
    },
    header: { maxWidth: 600, marginBottom: 48 },
    eyebrow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 18 },
    eyebrowLine: { display: "block", width: 28, height: 1, background: "#cbd5e1" },
    eyebrowText: { fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8" },
    headline: { fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.15, color: "#0f172a", letterSpacing: "-0.03em", margin: "0 0 12px" },
    headlineSub: { fontSize: 14.5, color: "#94a3b8", margin: 0, fontStyle: "italic" },

    // Desktop
    desktopBody: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" },
    grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#e2e8f0", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden" },
    tile: { background: "#fff", padding: "20px 18px 16px", display: "flex", flexDirection: "column", gap: 3, cursor: "default", position: "relative", overflow: "hidden", transition: "background 0.18s" },
    tileActive: { background: "#f8fafc" },
    tileNum: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#cbd5e1", transition: "color 0.18s", fontFamily: "monospace" },
    tileNumActive: { color: "#3b82f6" },
    tileShort: { fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 2 },
    tileTitle: { fontSize: 13, fontWeight: 600, color: "#64748b", lineHeight: 1.45, transition: "color 0.18s" },
    tileTitleActive: { color: "#0f172a" },
    tileBar: { position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "#3b82f6", transformOrigin: "left", transition: "opacity 0.2s, transform 0.25s ease" },
    panel: { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "32px 28px", minHeight: 280, display: "flex", alignItems: "stretch" },
    panelDefault: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, width: "100%" },
    panelContent: { display: "flex", flexDirection: "column", gap: 10, width: "100%" },
    pIcon: { width: 48, height: 48, borderRadius: 10, background: "#f8fafc", border: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" },
    pHint: { fontSize: 12, color: "#cbd5e1", textAlign: "center", margin: 0, maxWidth: 180, lineHeight: 1.6 },
    pNum: { fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#3b82f6", fontFamily: "monospace" },
    pTitle: { fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.3, margin: "0 0 2px" },
    pDesc: { fontSize: 14, lineHeight: 1.75, color: "#475569", margin: 0 },
    pDivider: { height: 1, background: "#f1f5f9", margin: "6px 0" },
    pDetail: { fontSize: 12.5, lineHeight: 1.7, color: "#94a3b8", margin: 0, fontStyle: "italic" },

    // Mobile accordion
    mobileList: { border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden" },
    accordionWrap: {},
    accordionBorder: { borderBottom: "1px solid #f1f5f9" },
    accordionBtn: {
        width: "100%", background: "#fff", border: "none",
        padding: "16px 16px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 12, cursor: "pointer",
        transition: "background 0.15s", textAlign: "left",
    },
    accordionBtnOpen: { background: "#f8fafc" },
    accordionLeft: { display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 },
    accordionBody: { padding: "4px 16px 20px 40px", background: "#f8fafc", display: "flex", flexDirection: "column", gap: 8 },
};