import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, BarChart3, Zap, FileText, Check } from "lucide-react";
import "../styles/tools-section.css";

// ─── Visuals ────────────────────────────────────────────────────────────────

const NodeGraphVisual = () => (
    <div className="ts-visual-wrap">
        <svg className="ts-node-svg" viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#10b981" opacity="0.7" />
                </marker>
                <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6" opacity="0.7" />
                </marker>
            </defs>
            {/* Connections */}
            <path d="M 155 105 L 245 155" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5,4" fill="none" opacity="0.6" markerEnd="url(#arrow-green)" />
            <path d="M 155 235 L 245 185" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5,4" fill="none" opacity="0.6" markerEnd="url(#arrow-green)" />
            <path d="M 335 170 L 395 230" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5,4" fill="none" opacity="0.6" markerEnd="url(#arrow-blue)" />
            {/* Nodes */}
            <g transform="translate(40, 80)">
                <rect width="118" height="44" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
                <text x="59" y="26" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="500" fontFamily="monospace">CSV Import</text>
            </g>
            <g transform="translate(40, 208)">
                <rect width="118" height="44" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.2" />
                <text x="59" y="26" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="500" fontFamily="monospace">Database</text>
            </g>
            <g transform="translate(242, 148)">
                <rect width="118" height="44" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.2" />
                <text x="59" y="26" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="500" fontFamily="monospace">Clean Data</text>
            </g>
            <g transform="translate(392, 208)">
                <rect width="118" height="44" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.2" />
                <text x="59" y="26" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="500" fontFamily="monospace">Dashboard</text>
            </g>
            {/* Pulse dots */}
            <circle cx="155" cy="102" r="4" fill="#10b981" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="155" cy="230" r="4" fill="#10b981" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" repeatCount="indefinite" />
            </circle>
        </svg>
    </div>
);

const DashboardVisual = () => (
    <div className="ts-visual-wrap ts-dashboard">
        <div className="ts-db-kpis">
            {[
                { label: "Revenue", value: "$84.2K", color: "#3b82f6", pct: 68 },
                { label: "Customers", value: "1,204", color: "#10b981", pct: 82 },
                { label: "Churn", value: "2.1%", color: "#8b5cf6", pct: 21 },
            ].map(({ label, value, color, pct }) => (
                <div className="ts-kpi-card" key={label}>
                    <span className="ts-kpi-label">{label}</span>
                    <span className="ts-kpi-value" style={{ color }}>{value}</span>
                    <div className="ts-kpi-bar-bg">
                        <div className="ts-kpi-bar-fill" style={{ width: `${pct}%`, background: color }} />
                    </div>
                </div>
            ))}
        </div>
        <div className="ts-db-chart">
            {[42, 68, 51, 89, 73, 95, 61, 100, 78, 88].map((h, i) => (
                <div
                    key={i}
                    className="ts-bar"
                    style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #3b82f6, #60a5fa)`,
                        animationDelay: `${i * 0.05}s`
                    }}
                />
            ))}
        </div>
        <div className="ts-db-footer">
            <span className="ts-db-tag" style={{ color: "#10b981" }}>↑ 14.2% vs last month</span>
            <span className="ts-db-tag" style={{ color: "#64748b" }}>Updated just now</span>
        </div>
    </div>
);

const WorkflowVisual = () => (
    <div className="ts-visual-wrap ts-workflow">
        {[
            { label: "Trigger", text: "New ERP Entry", color: "#f59e0b", icon: "⚡" },
            { label: "Process", text: "AI: Extract & Map Fields", color: "#8b5cf6", icon: "✦" },
            { label: "Action", text: "Sync Inventory", color: "#10b981", icon: "✓" },
        ].map(({ label, text, color, icon }, i) => (
            <React.Fragment key={label}>
                <div className="ts-wf-node">
                    <div className="ts-wf-icon" style={{ color, borderColor: color }}>{icon}</div>
                    <div className="ts-wf-text">
                        <span className="ts-wf-tag" style={{ color }}>{label}</span>
                        <span className="ts-wf-name">{text}</span>
                    </div>
                </div>
                {i < 2 && (
                    <div className="ts-wf-connector">
                        <div className="ts-wf-line" />
                        <div className="ts-wf-arrow">↓</div>
                    </div>
                )}
            </React.Fragment>
        ))}
    </div>
);

const ReportVisual = () => (
    <div className="ts-visual-wrap ts-report">
        <div className="ts-report-doc">
            <div className="ts-report-header">
                <div className="ts-report-title-block">
                    <div className="ts-report-pill" style={{ background: "#fef3c7", color: "#d97706" }}>WEEKLY REPORT</div>
                    <div className="ts-report-headline">Sales Performance</div>
                    <div className="ts-report-sub">Generated Mon, Apr 14 · Auto-sent to 6 recipients</div>
                </div>
            </div>
            <div className="ts-report-body">
                {[
                    { label: "Total Revenue", value: "$128,400", delta: "+12%", up: true },
                    { label: "New Deals", value: "34", delta: "+5", up: true },
                    { label: "Avg. Deal Size", value: "$3,776", delta: "-2%", up: false },
                ].map(({ label, value, delta, up }) => (
                    <div className="ts-report-row" key={label}>
                        <span className="ts-report-metric">{label}</span>
                        <span className="ts-report-val">{value}</span>
                        <span className="ts-report-delta" style={{ color: up ? "#10b981" : "#f87171" }}>{delta}</span>
                    </div>
                ))}
            </div>
            <div className="ts-report-channels">
                <span className="ts-channel-badge slack">Slack</span>
                <span className="ts-channel-badge email">Email</span>
                <span className="ts-channel-badge whatsapp">WhatsApp</span>
            </div>
        </div>
    </div>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const TOOLS_DATA = [
    {
        id: "databuilder",
        tag: "NO-CODE",
        title: "DataBlend Pipeline",
        description: "Connect spreadsheets, databases, and SaaS tools. Drag-and-drop to clean, merge and transform data — no SQL required.",
        bullets: ["Merge sales + CRM data", "Clean supplier sheets", "Automate weekly data pulls"],
        icon: <Database size={22} />,
        themeColor: "emerald",
        Visual: NodeGraphVisual,
    },
    {
        id: "pulsebi",
        tag: "REAL-TIME",
        title: "PulseBI Live Metrics",
        description: "Build live dashboards for any metric that matters. Share reports or embed them directly in your existing workflows.",
        bullets: ["Revenue dashboards", "Operations KPIs", "Custom client reports"],
        icon: <BarChart3 size={22} />,
        themeColor: "blue",
        Visual: DashboardVisual,
    },
    {
        id: "flowforge",
        tag: "AI-ASSISTED",
        title: "FlowForge Automation",
        description: "Set rules, triggers, and schedules to move and transform data automatically. AI suggests optimizations as your data grows.",
        bullets: ["Auto-sync inventory to ERP", "Alert on anomalies", "Nightly reconciliation"],
        icon: <Zap size={22} />,
        themeColor: "purple",
        Visual: WorkflowVisual,
    },
    {
        id: "reportmate",
        tag: "AUTOMATED",
        title: "ReportMate",
        description: "Generate and distribute professional reports on a schedule. Deliver KPI summaries to Slack, email or WhatsApp automatically.",
        bullets: ["Weekly sales summaries", "Monthly performance review", "Threshold alerts"],
        icon: <FileText size={22} />,
        themeColor: "amber",
        Visual: ReportVisual,
    },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ToolsSection()
{
    const [activeCard, setActiveCard] = useState(0);
    const cardRefs = useRef([]);
    const sectionRef = useRef(null);

    const handleScroll = useCallback(() =>
    {
        const mid = window.innerHeight / 2;
        let best = 0;
        let bestDist = Infinity;

        cardRefs.current.forEach((el, i) =>
        {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const dist = Math.abs(rect.top + rect.height / 2 - mid);
            if (dist < bestDist)
            {
                bestDist = dist;
                best = i;
            }
        });

        setActiveCard(best);
    }, []);

    useEffect(() =>
    {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const activeData = TOOLS_DATA[activeCard];

    return (
        <section className="ts-section" ref={sectionRef}>
            <div className="ts-container">

                {/* ── Left ── */}
                <div className="ts-left">
                    <div className="ts-header">
                        <span className="ts-eyebrow">DATA PLATFORM</span>
                        <h2 className="ts-title">Turn raw data into decisions — no data team required</h2>
                        <p className="ts-subtitle">
                            A unified workspace that connects your data sources, cleans your records,
                            and surfaces insights your team can actually act on.
                        </p>
                    </div>

                    <div className="ts-cards">
                        {TOOLS_DATA.map((tool, index) =>
                        {
                            const isActive = activeCard === index;
                            return (
                                <div
                                    key={tool.id}
                                    ref={el => cardRefs.current[index] = el}
                                    className={`ts-card ts-card--${tool.themeColor} ${isActive ? "ts-card--active" : ""}`}
                                    onClick={() =>
                                    {
                                        setActiveCard(index);
                                        cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                                    }}
                                >
                                    <div className="ts-card-accent" />
                                    <div className="ts-card-top">
                                        <div className={`ts-card-icon ts-card-icon--${tool.themeColor}`}>
                                            {tool.icon}
                                        </div>
                                        <span className={`ts-card-tag ts-card-tag--${tool.themeColor}`}>{tool.tag}</span>
                                    </div>
                                    <h3 className="ts-card-title">{tool.title}</h3>
                                    <p className="ts-card-desc">{tool.description}</p>
                                    <ul className="ts-card-bullets">
                                        {tool.bullets.map((b) => (
                                            <li key={b}>
                                                <Check size={14} className={`ts-check ts-check--${tool.themeColor}`} />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Right (Sticky) ── */}
                <div className="ts-right">
                    <div className="ts-sticky">
                        <div className="ts-viewer">
                            {/* Window chrome */}
                            <div className="ts-viewer-bar">
                                <div className="ts-viewer-dots">
                                    <span style={{ background: "#ef4444" }} />
                                    <span style={{ background: "#eab308" }} />
                                    <span style={{ background: "#22c55e" }} />
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={activeCard}
                                        className="ts-viewer-label"
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {activeData.title}
                                    </motion.span>
                                </AnimatePresence>
                                <div className={`ts-viewer-status ts-viewer-status--${activeData.themeColor}`}>
                                    <span className="ts-viewer-dot-live" />
                                    Live
                                </div>
                            </div>

                            {/* Content */}
                            <div className="ts-viewer-body">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCard}
                                        className="ts-viewer-frame"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <activeData.Visual />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Progress tabs */}
                            <div className="ts-viewer-tabs">
                                {TOOLS_DATA.map((t, i) => (
                                    <button
                                        key={t.id}
                                        className={`ts-tab ts-tab--${t.themeColor} ${activeCard === i ? `ts-tab--active` : ""}`}
                                        onClick={() =>
                                        {
                                            setActiveCard(i);
                                            cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}