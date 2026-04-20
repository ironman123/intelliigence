"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";
import SchedulingModal from "./SchedulingModal";
import
{
    Linkedin,
    Twitter,
    Youtube,
    Facebook,
    ArrowUpRight,
    MessageCircle,
    Mail,
    LineChart,
    Users,
    GraduationCap,
    Package,
    Activity,
    ChefHat,
    Zap,
    Globe,
    Cpu,
    ArrowRight,
} from "lucide-react";

// ─── PRODUCT DATA ─────────────────────────────────────────────────────────────
const PRODUCTS = [
    {
        id: "financemanager",
        label: "FinanceIQ",
        category: "Financial Management",
        icon: <LineChart size={13} />,
        color: "#3b82f6",
    },
    {
        id: "crmportal",
        label: "NexusCRM",
        category: "Customer Experience",
        icon: <Users size={13} />,
        color: "#10b981",
    },
    {
        id: "schoolmanager",
        label: "ScholarOS",
        category: "Education",
        icon: <GraduationCap size={13} />,
        color: "#8b5cf6",
    },
    {
        id: "inventorymanager",
        label: "InventoryAI",
        category: "Supply Chain",
        icon: <Package size={13} />,
        color: "#f59e0b",
    },
    {
        id: "clinicmanager",
        label: "MediSwarm",
        category: "Healthcare",
        icon: <Activity size={13} />,
        color: "#ef4444",
    },
    {
        id: "kitchendisplaysystem",
        label: "KitchenSync",
        category: "Hospitality",
        icon: <ChefHat size={13} />,
        color: "#f97316",
    },
];

const AI_SOLUTIONS = [
    { label: "Generative AI & RAG Agents", href: "/solutions/core#genai" },
    { label: "Workflow Automation (NLP)", href: "/solutions/core#automation" },
    { label: "Data Engineering & Pipelines", href: "/solutions/core#data" },
    { label: "Predictive ML & Forecasting", href: "/solutions/core#predictive" },
    { label: "AI-Native SaaS Engineering", href: "/solutions/core#native" },
];

const EMERGING = [
    { label: "Precision Diagnostics", href: "/solutions/emerging#healthcare" },
    { label: "Smart Agriculture", href: "/solutions/emerging#agriculture" },
    { label: "Urban Planning & Digital Twins", href: "/solutions/emerging#urban" },
    { label: "Energy Grid Optimization", href: "/solutions/emerging#energy" },
    { label: "Disaster Response AI", href: "/solutions/emerging#climate" },
];

const COMPANY = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

// ─── MAIN FOOTER ──────────────────────────────────────────────────────────────
export default function Footer()
{
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    return (
        <>
            <footer style={styles.footer}>
                {/* ── Subtle grid texture overlay ── */}
                <div style={styles.gridOverlay} aria-hidden="true" />

                <div style={styles.container}>

                    {/* ── TOP CTA BAND ─────────────────────────────────── */}
                    <div style={styles.ctaBand}>
                        <div style={styles.ctaLeft}>
                            <img
                                src="/images/logo.png"
                                alt="Company Logo"
                                style={styles.logo}
                            />
                            <h2 style={styles.headline}>
                                Intelligence,<br />
                                <span style={styles.headlineMuted}>Engineered.</span>
                            </h2>
                            <p style={styles.subhead}>
                                From enterprise RAG systems to production SaaS —
                                we build software that thinks for your business.
                            </p>

                            {/* Contact row */}
                            <div style={styles.contactRow}>
                                <a
                                    href="https://wa.me/917060816597"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.contactChip}
                                    onMouseEnter={e =>
                                    {
                                        e.currentTarget.style.borderColor = "#25d366";
                                        e.currentTarget.style.color = "#25d366";
                                    }}
                                    onMouseLeave={e =>
                                    {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.color = "#a1a1aa";
                                    }}
                                >
                                    <MessageCircle size={14} style={{ color: "#25d366", flexShrink: 0 }} />
                                    +91 70608 16597
                                </a>
                                <a
                                    href="mailto:ai.intelliigence@gmail.com"
                                    style={styles.contactChip}
                                    onMouseEnter={e =>
                                    {
                                        e.currentTarget.style.borderColor = "#3b82f6";
                                        e.currentTarget.style.color = "#3b82f6";
                                    }}
                                    onMouseLeave={e =>
                                    {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.color = "#a1a1aa";
                                    }}
                                >
                                    <Mail size={14} style={{ color: "#3b82f6", flexShrink: 0 }} />
                                    ai.intelliigence@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div style={styles.ctaRight}>
                            <p style={styles.ctaLabel}>Ready to build something intelligent?</p>
                            <div style={styles.ctaBtns}>
                                <button
                                    style={styles.btnPrimary}
                                    onClick={e => { e.stopPropagation(); setIsProjectOpen(true); }}
                                    onMouseEnter={e => e.currentTarget.style.background = "#e2e8f0"}
                                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                                >
                                    Start a Project <ArrowUpRight size={15} />
                                </button>
                                <button
                                    style={styles.btnSecondary}
                                    onClick={() => setIsModalOpen(true)}
                                    onMouseEnter={e =>
                                    {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                                    }}
                                    onMouseLeave={e =>
                                    {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                    }}
                                >
                                    Book Strategy Call
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── HAIRLINE DIVIDER ─────────────────────────────── */}
                    <div style={styles.divider} />

                    {/* ── PRODUCTS STRIP ──────────────────────────────── */}
                    <div style={styles.productsSection}>
                        <p style={styles.productsSectionLabel}>
                            <Zap size={13} style={{ color: "#facc15" }} /> Our Products
                        </p>
                        <div style={styles.productsGrid}>
                            {PRODUCTS.map((p) => (
                                <a
                                    key={p.id}
                                    href={`/products/${p.id}`}
                                    style={styles.productChip}
                                    onMouseEnter={e =>
                                    {
                                        e.currentTarget.style.borderColor = p.color + "60";
                                        e.currentTarget.style.background = p.color + "12";
                                        e.currentTarget.querySelector(".picon").style.color = p.color;
                                    }}
                                    onMouseLeave={e =>
                                    {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                        e.currentTarget.querySelector(".picon").style.color = "#52525b";
                                    }}
                                >
                                    <span className="picon" style={{ color: "#52525b", transition: "color 0.2s", display: "flex" }}>
                                        {p.icon}
                                    </span>
                                    <span style={styles.productChipName}>{p.label}</span>
                                    <span style={styles.productChipCat}>{p.category}</span>
                                    <ArrowRight size={11} style={{ marginLeft: "auto", color: "#3f3f46", flexShrink: 0 }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── HAIRLINE DIVIDER ─────────────────────────────── */}
                    <div style={styles.divider} />

                    {/* ── MAIN LINK GRID ───────────────────────────────── */}
                    <div style={styles.linkGrid}>

                        {/* Company */}
                        <div>
                            <h4 style={styles.colHeader}>Company</h4>
                            <ul style={styles.linkList}>
                                {COMPANY.map(l => (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            style={styles.link}
                                            onMouseEnter={e =>
                                            {
                                                e.currentTarget.style.color = "#fff";
                                                e.currentTarget.style.paddingLeft = "6px";
                                            }}
                                            onMouseLeave={e =>
                                            {
                                                e.currentTarget.style.color = "#71717a";
                                                e.currentTarget.style.paddingLeft = "0";
                                            }}
                                        >{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* AI Solutions */}
                        <div>
                            <h4 style={styles.colHeader}>
                                <Zap size={13} style={{ color: "#facc15" }} /> AI Solutions
                            </h4>
                            <ul style={styles.linkList}>
                                {AI_SOLUTIONS.map(l => (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            style={styles.link}
                                            onMouseEnter={e =>
                                            {
                                                e.currentTarget.style.color = "#fff";
                                                e.currentTarget.style.paddingLeft = "6px";
                                            }}
                                            onMouseLeave={e =>
                                            {
                                                e.currentTarget.style.color = "#71717a";
                                                e.currentTarget.style.paddingLeft = "0";
                                            }}
                                        >{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Emerging Tech */}
                        <div>
                            <h4 style={styles.colHeader}>
                                <Globe size={13} style={{ color: "#34d399" }} /> Emerging Tech
                            </h4>
                            <ul style={styles.linkList}>
                                {EMERGING.map(l => (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            style={styles.link}
                                            onMouseEnter={e =>
                                            {
                                                e.currentTarget.style.color = "#fff";
                                                e.currentTarget.style.paddingLeft = "6px";
                                            }}
                                            onMouseLeave={e =>
                                            {
                                                e.currentTarget.style.color = "#71717a";
                                                e.currentTarget.style.paddingLeft = "0";
                                            }}
                                        >{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vision R&D */}
                        <div>
                            <h4 style={styles.colHeader}>
                                <Cpu size={13} style={{ color: "#a78bfa" }} /> Vision R&D
                            </h4>
                            <ul style={styles.linkList}>
                                {[
                                    { label: "Embodied AI & Robotics", href: "/solutions/vision#embodied" },
                                    { label: "Autonomous Agent Swarms", href: "/solutions/vision#swarms" },
                                    { label: "Generative World Models", href: "/solutions/vision#simulators" },
                                    { label: "Neuro-Symbolic Reasoning", href: "/solutions/vision#neuro" },
                                    { label: "Brain-Computer Interfaces", href: "/solutions/vision#bci" },
                                ].map(l => (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            style={styles.link}
                                            onMouseEnter={e =>
                                            {
                                                e.currentTarget.style.color = "#fff";
                                                e.currentTarget.style.paddingLeft = "6px";
                                            }}
                                            onMouseLeave={e =>
                                            {
                                                e.currentTarget.style.color = "#71717a";
                                                e.currentTarget.style.paddingLeft = "0";
                                            }}
                                        >{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── BOTTOM BAR ───────────────────────────────────── */}
                    <div style={styles.bottomBar}>
                        <div style={styles.socials}>
                            {[
                                { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/company/111516910" },
                                // { icon: <Twitter size={16} />, label: "Twitter", href: "#" },
                                // { icon: <Youtube size={16} />, label: "YouTube", href: "#" },
                                // { icon: <Facebook size={16} />, label: "Facebook", href: "#" },
                                // { icon: <MessageCircle size={16} />, label: "WhatsApp", href: "https://wa.me/917060816597" },
                            ].map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target={s.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    style={styles.socialIcon}
                                    onMouseEnter={e =>
                                    {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={e =>
                                    {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        <div style={styles.legal}>
                            <span style={styles.legalText}>
                                © {currentYear} AI Intelligence Inc. · Made in India 🇮🇳
                            </span>
                            <div style={styles.legalLinks}>
                                {[
                                    { label: "Privacy Policy", href: "/privacy" },
                                    { label: "Terms of Service", href: "/terms" },
                                ].map((l, i) => (
                                    <React.Fragment key={l.href}>
                                        {i > 0 && <span style={{ color: "#27272a" }}>·</span>}
                                        <a
                                            href={l.href}
                                            style={styles.legalLink}
                                            onMouseEnter={e => e.currentTarget.style.color = "#a1a1aa"}
                                            onMouseLeave={e => e.currentTarget.style.color = "#52525b"}
                                        >{l.label}</a>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <SchedulingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ProjectModal isOpen={isProjectOpen} onClose={() => setIsProjectOpen(false)} />
        </>
    );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const styles = {
    footer: {
        background: "#070709",
        color: "#a1a1aa",
        padding: "72px 24px 32px",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
    },
    gridOverlay: {
        position: "absolute",
        inset: 0,
        backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        pointerEvents: "none",
    },
    container: {
        maxWidth: 1280,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
    },

    // ── CTA BAND ──
    ctaBand: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 48,
        marginBottom: 48,
        flexWrap: "wrap",
    },
    ctaLeft: {
        flex: "1 1 360px",
    },
    logo: {
        width: "9rem",
        marginBottom: "1.5rem",
        opacity: 0.9,
    },
    headline: {
        fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
        fontWeight: 800,
        lineHeight: 1.08,
        color: "#fff",
        letterSpacing: "-0.03em",
        margin: "0 0 16px",
    },
    headlineMuted: {
        color: "#3f3f46",
    },
    subhead: {
        fontSize: 15,
        lineHeight: 1.7,
        color: "#52525b",
        maxWidth: 420,
        margin: "0 0 24px",
    },
    contactRow: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
    },
    contactChip: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "8px 14px",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        color: "#a1a1aa",
        fontSize: 13,
        fontWeight: 500,
        textDecoration: "none",
        transition: "border-color 0.2s, color 0.2s",
        cursor: "pointer",
    },
    ctaRight: {
        flex: "0 1 300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        paddingTop: 12,
        gap: 16,
    },
    ctaLabel: {
        fontSize: 13,
        color: "#52525b",
        textAlign: "right",
        margin: 0,
    },
    ctaBtns: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
    },
    btnPrimary: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "#fff",
        color: "#09090b",
        border: "none",
        borderRadius: 8,
        padding: "11px 20px",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",
        transition: "background 0.2s",
        letterSpacing: "-0.01em",
    },
    btnSecondary: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "transparent",
        color: "#a1a1aa",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 8,
        padding: "11px 20px",
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s",
    },

    // ── DIVIDER ──
    divider: {
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
        margin: "0 0 40px",
    },

    // ── PRODUCTS STRIP ──
    productsSection: {
        marginBottom: 40,
    },
    productsSectionLabel: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#3f3f46",
        marginBottom: 16,
    },
    productsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
        gap: 8,
    },
    productChip: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 8,
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s",
        cursor: "pointer",
        minWidth: 0,
    },
    productChipName: {
        fontSize: 13,
        fontWeight: 600,
        color: "#d4d4d8",
        whiteSpace: "nowrap",
    },
    productChipCat: {
        fontSize: 11,
        color: "#52525b",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    // ── LINK GRID ──
    linkGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "40px 32px",
        marginBottom: 48,
    },
    colHeader: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: "#e4e4e7",
        marginBottom: 16,
        display: "flex",
        alignItems: "center",
        gap: 6,
    },
    linkList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    link: {
        color: "#71717a",
        textDecoration: "none",
        fontSize: 13.5,
        lineHeight: 1.5,
        transition: "color 0.15s, padding-left 0.15s",
        display: "block",
    },

    // ── BOTTOM BAR ──
    bottomBar: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,0.05)",
    },
    socials: {
        display: "flex",
        gap: 8,
    },
    socialIcon: {
        width: 36,
        height: 36,
        borderRadius: 8,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#71717a",
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
    },
    legal: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 6,
    },
    legalText: {
        fontSize: 12,
        color: "#3f3f46",
    },
    legalLinks: {
        display: "flex",
        gap: 12,
        alignItems: "center",
    },
    legalLink: {
        fontSize: 12,
        color: "#52525b",
        textDecoration: "none",
        transition: "color 0.15s",
    },
};