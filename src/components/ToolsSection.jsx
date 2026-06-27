import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, BarChart3, Zap, FileText, Check } from "lucide-react";
import EntropicCanvas from "./EntropicCanvas";
import "../styles/tools-section.css";

// ─── Visual 1: DataBlend Pipeline ────────────────────────────────────────────
// Animated data-packet flow: 3 sources → AI core → 2 outputs.

const PIPE_PATHS = [
    "M 130 50 C 188 50 188 140 220 140",    // DB → AI
    "M 130 140 L 220 140",                   // CRM → AI
    "M 130 230 C 188 230 188 140 220 140",   // Files → AI
    "M 298 140 C 338 140 338 100 378 100",   // AI → Warehouse
    "M 298 140 C 338 140 338 200 378 200",   // AI → Dashboard
];

const NodeGraphVisual = () => (
    <div className="ts-visual-wrap" style={{ padding: "1rem" }}>
        <svg viewBox="0 0 500 280" style={{ width: "100%", height: "100%", maxHeight: 280 }}>
            <defs>
                <filter id="pipe-glow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="2.5" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* Edge paths */}
            {PIPE_PATHS.map((d, i) => (
                <path key={i} d={d} stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.22" fill="none" />
            ))}

            {/* Data packets — 2 per edge, staggered */}
            {PIPE_PATHS.map((d, i) => [0, 0.7].map((offset, k) => (
                <circle key={`${i}-${k}`} r={k === 0 ? 3 : 2} fill="#10b981" filter="url(#pipe-glow)">
                    <animateMotion dur={`${1.4 + i * 0.18}s`} repeatCount="indefinite" begin={`${i * 0.38 + offset}s`} calcMode="linear" path={d} />
                    <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.07;0.87;1" dur={`${1.4 + i * 0.18}s`} repeatCount="indefinite" begin={`${i * 0.38 + offset}s`} />
                </circle>
            )))}

            {/* Source nodes */}
            {[["PostgreSQL", "SQL · live sync", 30], ["Salesforce CRM", "REST · real-time", 120], ["CSV / Excel", "batch · daily", 210]].map(([label, sub, y], i) => (
                <g key={i}>
                    <rect x="10" y={y} width="120" height="40" rx="8" fill="#040d10" stroke="#10b981" strokeWidth="1" strokeOpacity="0.45" />
                    <circle cx="25" cy={y + 20} r="3.5" fill="#10b981" opacity="0.75">
                        <animate attributeName="opacity" values="0.75;0.25;0.75" dur={`${1.8 + i * 0.35}s`} repeatCount="indefinite" />
                    </circle>
                    <text x="70" y={y + 15} textAnchor="middle" fill="#4ade80" fontSize="10" fontFamily="monospace">{label}</text>
                    <text x="70" y={y + 29} textAnchor="middle" fill="#10b981" fontSize="8.5" fontFamily="monospace" opacity="0.55">{sub}</text>
                </g>
            ))}

            {/* AI Core node */}
            <g transform="translate(259, 140)">
                {/* Outer pulse rings */}
                <circle r="56" fill="none" stroke="#10b981" strokeWidth="0.8" opacity="0.07">
                    <animate attributeName="r" values="50;66;50" dur="3.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.07;0;0.07" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle r="44" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.16">
                    <animate attributeName="r" values="40;54;40" dur="2.8s" begin="0.45s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.16;0;0.16" dur="2.8s" begin="0.45s" repeatCount="indefinite" />
                </circle>
                {/* Spinning dashed ring */}
                <circle r="36" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="7.5 3.5" strokeOpacity="0.38">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
                </circle>
                {/* Core fill */}
                <circle r="31" fill="#060f12" stroke="#10b981" strokeWidth="1.5" />
                {/* Labels */}
                <text textAnchor="middle" fill="#4ade80" fontSize="11" fontFamily="monospace" fontWeight="700" y="-6">AI Core</text>
                <text textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.55" y="8">v2.4-stable</text>
            </g>

            {/* Output nodes */}
            {[["Data Warehouse", 80], ["Live Dashboard", 180]].map(([label, y], i) => (
                <g key={i}>
                    <rect x="378" y={y} width="112" height="40" rx="8" fill="#040d10" stroke="#10b981" strokeWidth="1" strokeOpacity="0.45" />
                    {label.split(" ").map((word, wi) => (
                        <text key={wi} x="434" y={y + 14 + wi * 14} textAnchor="middle" fill="#4ade80" fontSize="10" fontFamily="monospace">{word}</text>
                    ))}
                </g>
            ))}
        </svg>
    </div>
);

// ─── Visual 2: Live Telemetry ─────────────────────────────────────────────────
// Animated SVG area chart that draws itself + 3 KPI tiles.

const CHART_POINTS = [8, 28, 16, 55, 40, 72, 52, 88, 66, 82, 70, 94];
const CW = 400, CH = 108;

function buildAreaPath(pts) {
    const linePath = pts.reduce((acc, v, i) => {
        const x = (i / (pts.length - 1)) * CW;
        const y = CH - (v / 100) * CH;
        if (i === 0) return `M ${x} ${y}`;
        const px = ((i - 1) / (pts.length - 1)) * CW;
        const py = CH - (pts[i - 1] / 100) * CH;
        const cpx = (px + x) / 2;
        return acc + ` C ${cpx} ${py} ${cpx} ${y} ${x} ${y}`;
    }, "");
    return { line: linePath, area: linePath + ` L ${CW} ${CH} L 0 ${CH} Z` };
}

const { line: LINE_D, area: AREA_D } = buildAreaPath(CHART_POINTS);

const DashboardVisual = () => (
    <div className="ts-visual-wrap ts-dashboard" style={{ gap: "0.8rem" }}>
        {/* KPI tiles */}
        <div style={{ display: "flex", gap: "0.65rem", width: "100%" }}>
            {[
                { label: "Revenue", value: "$84.2K", delta: "+12%", color: "#3b82f6" },
                { label: "Sessions", value: "14.2K",  delta: "+8%",  color: "#10b981" },
                { label: "Uptime",   value: "99.97%", delta: "stable", color: "#8b5cf6" },
            ].map(({ label, value, delta, color }) => (
                <div key={label} style={{
                    flex: 1,
                    background: "rgba(15,23,42,0.75)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10, padding: "0.7rem 0.75rem",
                }}>
                    <div style={{ fontSize: "0.62rem", color: "#64748b", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 700, color, marginBottom: 3 }}>{value}</div>
                    <div style={{ fontSize: "0.67rem", fontWeight: 600, color: color, opacity: 0.75 }}>{delta}</div>
                </div>
            ))}
        </div>

        {/* Area chart */}
        <div style={{ width: "100%", background: "rgba(15,23,42,0.75)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "0.9rem 1rem 0.6rem", boxSizing: "border-box" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                <span style={{ fontSize: "0.65rem", color: "#64748b", fontFamily: "monospace" }}>revenue · last 12h</span>
                <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.62rem", fontWeight: 700, color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: "ts-pulse 1.5s ease-in-out infinite" }} />
                    LIVE
                </span>
            </div>
            <svg viewBox={`0 0 ${CW} ${CH}`} style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
                <defs>
                    <linearGradient id="db-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
                    </linearGradient>
                </defs>
                <path d={AREA_D} fill="url(#db-fill)" />
                <path d={LINE_D} stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="1200" strokeDashoffset="1200">
                    <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="1.4s" fill="freeze" />
                </path>
                {CHART_POINTS.map((v, i) => {
                    const cx = (i / (CHART_POINTS.length - 1)) * CW;
                    const cy = CH - (v / 100) * CH;
                    return (
                        <circle key={i} cx={cx} cy={cy} r="3" fill="#3b82f6">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.4 + i * 0.22}s`} repeatCount="indefinite" />
                        </circle>
                    );
                })}
                {/* Live pulse on latest point */}
                <circle cx={CW} cy={CH - (CHART_POINTS[CHART_POINTS.length - 1] / 100) * CH} r="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.35">
                    <animate attributeName="r" values="5;11;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.35;0;0.35" dur="2s" repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    </div>
);

// ─── Visual 3: Algorithmic Workflows ─────────────────────────────────────────
// Two-column: 5-stage pipeline (left) + live execution log (right).
// Fills the full 500px+ viewer height.

const WF_STAGES = [
    { label: "Trigger",     sub: "ERP: New PO received",          color: "#f59e0b", icon: "⚡", status: "FIRED"   },
    { label: "Parse",       sub: "Extract: vendor + SKU",         color: "#3b82f6", icon: "⊕", status: "DONE"    },
    { label: "AI Classify", sub: "Confidence: 98.4%",             color: "#8b5cf6", icon: "✦", status: "RUNNING" },
    { label: "Validate",    sub: "Checking 12 business rules",    color: "#06b6d4", icon: "◎", status: "WAITING" },
    { label: "Execute",     sub: "Sync: 3 downstream systems",    color: "#10b981", icon: "✓", status: "WAITING" },
];

const WF_LOG = [
    { id: "PO-8821", time: "14:32", ok: true,  dur: "1.2s" },
    { id: "PO-8820", time: "14:15", ok: true,  dur: "1.4s" },
    { id: "PO-8819", time: "13:58", ok: false, dur: "0.3s" },
    { id: "PO-8818", time: "13:41", ok: true,  dur: "1.1s" },
    { id: "PO-8817", time: "13:22", ok: true,  dur: "1.3s" },
    { id: "PO-8816", time: "13:05", ok: true,  dur: "0.9s" },
];

const WorkflowVisual = () => (
    <div style={{
        width: "100%", height: "100%",
        display: "flex", gap: "0.875rem",
        padding: "1.25rem 1rem",
        boxSizing: "border-box",
        fontFamily: "monospace",
    }}>
        {/* Pipeline column */}
        <div style={{ flex: "0 0 56%", display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", flexShrink: 0 }}>
                <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.12em" }}>PIPELINE</span>
                <div style={{ flex: 1, height: 1, background: "rgba(139,92,246,0.2)" }} />
            </div>
            <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {/* Dashed connector rail */}
                <div style={{ position: "absolute", left: 14, top: 22, bottom: 22, width: 1, borderLeft: "1.5px dashed rgba(139,92,246,0.2)" }} />
                {WF_STAGES.map(({ label, sub, color, icon, status }, i) => {
                    const isRunning = status === "RUNNING";
                    const isWaiting = status === "WAITING";
                    return (
                        <div key={i} style={{
                            display: "flex", alignItems: "center", gap: "0.6rem",
                            background: isRunning ? "rgba(139,92,246,0.07)" : "rgba(5,13,22,0.8)",
                            border: `1px solid ${isWaiting ? "rgba(255,255,255,0.07)" : isRunning ? color : `${color}55`}`,
                            borderRadius: 8, padding: "0.55rem 0.65rem",
                            position: "relative", zIndex: 1,
                        }}>
                            <div style={{
                                width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                                background: isWaiting ? "rgba(15,23,42,0.4)" : `${color}18`,
                                border: `1.5px solid ${isWaiting ? "rgba(255,255,255,0.1)" : color}`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 12, color: isWaiting ? "#334155" : color,
                            }}>{icon}</div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: isWaiting ? "#475569" : "#f1f5f9", marginBottom: 1 }}>{label}</div>
                                <div style={{ fontSize: "0.62rem", color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sub}</div>
                            </div>
                            <div style={{
                                fontSize: "0.56rem", fontWeight: 700, letterSpacing: "0.08em", flexShrink: 0,
                                color: isWaiting ? "#334155" : isRunning ? color : "#10b981",
                            }}>{status}</div>
                            {isRunning && (
                                <div style={{
                                    position: "absolute", inset: -1, borderRadius: 8,
                                    border: `1px solid ${color}`, pointerEvents: "none",
                                    animation: "ts-pulse 1.4s ease-in-out infinite", opacity: 0.4,
                                }} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Execution log column */}
        <div style={{
            flex: 1, display: "flex", flexDirection: "column",
            background: "rgba(5,13,22,0.8)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10, padding: "0.75rem",
            overflow: "hidden",
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.65rem", flexShrink: 0 }}>
                <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.1em" }}>EXEC LOG</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.57rem", color: "#10b981", fontWeight: 700 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", animation: "ts-pulse 1.5s ease-in-out infinite" }} />
                    LIVE
                </span>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
                {WF_LOG.map(({ id, time, ok, dur }) => (
                    <div key={id} style={{
                        display: "flex", alignItems: "center", gap: "0.4rem",
                        padding: "0.32rem 0.5rem",
                        background: "rgba(15,23,42,0.6)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        borderRadius: 6,
                    }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: ok ? "#10b981" : "#ef4444", flexShrink: 0 }} />
                        <span style={{ flex: 1, fontSize: "0.66rem", color: "#94a3b8" }}>{id}</span>
                        <span style={{ fontSize: "0.6rem", color: "#475569" }}>{dur}</span>
                        <span style={{ fontSize: "0.58rem", color: "#334155" }}>{time}</span>
                    </div>
                ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.5rem", marginTop: "0.5rem", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
                <span style={{ fontSize: "0.6rem", color: "#475569" }}>5 success · 1 failed</span>
                <span style={{ fontSize: "0.6rem", color: "#8b5cf6", fontWeight: 700 }}>avg 1.2s</span>
            </div>
        </div>
    </div>
);

// ─── Visual 4: Scheduled Reporting ───────────────────────────────────────────
// Full-height: report header + expanded chart, 2×2 metric grid, send queue.

const REPORT_BARS = [58, 74, 47, 91, 68, 100, 74, 88, 62, 95, 71, 85];

const ReportVisual = () => (
    <div style={{
        width: "100%", height: "100%",
        display: "flex", flexDirection: "column",
        padding: "1rem 1.1rem",
        boxSizing: "border-box",
        gap: "0.6rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    }}>
        {/* Report header + bar chart */}
        <div style={{ background: "#050e1a", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 10, padding: "0.875rem 1rem 0", flexShrink: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <div>
                    <div style={{ fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.12em", color: "#f59e0b", textTransform: "uppercase", marginBottom: 3 }}>WEEKLY REPORT</div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#f8fafc" }}>Sales Performance</div>
                    <div style={{ fontSize: "0.63rem", color: "#475569", marginTop: 2 }}>Jun 2 – Jun 8, 2025</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.57rem", fontWeight: 700, color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 6, padding: "3px 8px", flexShrink: 0 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", animation: "ts-pulse 1.5s ease-in-out infinite" }} />
                    SCHEDULED
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 58 }}>
                {REPORT_BARS.map((h, i) => (
                    <div key={i} style={{
                        flex: 1, borderRadius: "2px 2px 0 0",
                        background: "linear-gradient(to top, #b45309, #f59e0b)",
                        height: `${h}%`,
                        opacity: 0.35 + i * 0.055,
                    }} />
                ))}
            </div>
        </div>

        {/* 2 × 2 metric grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", flexShrink: 0 }}>
            {[
                { label: "Revenue",   value: "$128.4K", delta: "+12%", color: "#f59e0b" },
                { label: "New Deals", value: "34",      delta: "+5",   color: "#10b981" },
                { label: "Avg. Deal", value: "$3,776",  delta: "−2%",  color: "#f87171" },
                { label: "Pipeline",  value: "$840K",   delta: "+18%", color: "#8b5cf6" },
            ].map(({ label, value, delta, color }) => (
                <div key={label} style={{
                    background: "rgba(10,18,30,0.9)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 8, padding: "0.55rem 0.75rem",
                }}>
                    <div style={{ fontSize: "0.57rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#f8fafc", marginBottom: 1 }}>{value}</div>
                    <div style={{ fontSize: "0.63rem", fontWeight: 600, color }}>{delta}</div>
                </div>
            ))}
        </div>

        {/* Send queue — flex: 1 fills remaining height */}
        <div style={{
            flex: 1, background: "rgba(5,14,26,0.95)",
            border: "1px solid rgba(245,158,11,0.2)",
            borderRadius: 10, padding: "0.7rem 0.875rem",
            display: "flex", flexDirection: "column",
            overflow: "hidden",
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", flexShrink: 0 }}>
                <span style={{ fontSize: "0.57rem", color: "#475569", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>SEND QUEUE</span>
                <span style={{ fontSize: "0.62rem", color: "#f59e0b", fontWeight: 600 }}>Mon 09:00</span>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                {[
                    { init: "AN", name: "Ananya N.", role: "CFO",       ok: true  },
                    { init: "RK", name: "Rahul K.",  role: "Sales Head", ok: true  },
                    { init: "PS", name: "Priya S.",  role: "VP Ops",     ok: true  },
                    { init: "MT", name: "Mihail T.", role: "CEO",        ok: false },
                ].map(({ init, name, role, ok }) => (
                    <div key={name} style={{
                        display: "flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.28rem 0",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <div style={{
                            width: 27, height: 27, borderRadius: "50%", flexShrink: 0,
                            background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "0.6rem", fontWeight: 700, color: "#f59e0b",
                        }}>{init}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: "0.72rem", color: "#e2e8f0", fontWeight: 500 }}>{name}</div>
                            <div style={{ fontSize: "0.62rem", color: "#475569" }}>{role}</div>
                        </div>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: ok ? "#10b981" : "#f59e0b", flexShrink: 0 }} />
                    </div>
                ))}
            </div>

            {/* Delivery progress */}
            <div style={{ marginTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.5rem", flexShrink: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: "0.6rem", color: "#475569" }}>Delivery progress</span>
                    <span style={{ fontSize: "0.6rem", color: "#f59e0b", fontWeight: 700 }}>3 / 4 queued</span>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "75%", background: "linear-gradient(to right, #b45309, #f59e0b)", borderRadius: 2 }} />
                </div>
            </div>
        </div>
    </div>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const TOOLS_DATA = [
    {
        id: "databuilder",
        tag: "ARCHITECTURE",
        title: "DataBlend Pipeline",
        description: "Connect isolated databases and external SaaS tools. Engineer robust pipelines to clean, merge, and transform your data seamlessly.",
        bullets: ["Merge disparate CRM data", "Sanitize supplier sheets", "Automate complex data pulls"],
        icon: <Database size={22} />,
        themeColor: "emerald",
        Visual: NodeGraphVisual,
    },
    {
        id: "pulsebi",
        tag: "OBSERVABILITY",
        title: "Live Telemetry",
        description: "Construct real-time dashboards for mission-critical metrics. Embed operational visibility directly into your team's workflow.",
        bullets: ["Live revenue tracking", "Operational health KPIs", "Client-facing reporting"],
        icon: <BarChart3 size={22} />,
        themeColor: "blue",
        Visual: DashboardVisual,
    },
    {
        id: "flowforge",
        tag: "INTELLIGENCE",
        title: "Algorithmic Workflows",
        description: "Deploy logic-driven triggers to automate system actions. Utilize intelligence to identify operational bottlenecks as you scale.",
        bullets: ["Event-driven inventory sync", "Anomaly detection alerts", "Automated reconciliation"],
        icon: <Zap size={22} />,
        themeColor: "purple",
        Visual: WorkflowVisual,
    },
    {
        id: "reportmate",
        tag: "DISTRIBUTION",
        title: "Scheduled Reporting",
        description: "Automate the distribution of critical analytics. Deliver comprehensive KPI summaries securely across your preferred channels.",
        bullets: ["Scheduled performance reviews", "Threshold-based alerting", "Multi-channel delivery"],
        icon: <FileText size={22} />,
        themeColor: "amber",
        Visual: ReportVisual,
    },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ToolsSection() {
    const [activeCard, setActiveCard] = useState(0);
    const cardRefs  = useRef([]);
    const sectionRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (window.innerWidth < 1024) return;
        const mid = window.innerHeight / 2;
        let best = 0, bestDist = Infinity;
        cardRefs.current.forEach((el, i) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const dist = Math.abs(rect.top + rect.height / 2 - mid);
            if (dist < bestDist) { bestDist = dist; best = i; }
        });
        setActiveCard(best);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    const activeData = TOOLS_DATA[activeCard];

    return (
        <section className="ts-section" ref={sectionRef}>
            <EntropicCanvas containerRef={sectionRef} scheme="light" />
            <div className="ts-container" style={{ position: "relative", zIndex: 1 }}>

                {/* Left Column */}
                <div className="ts-left">
                    <div className="ts-header">
                        <span className="ts-eyebrow">CORE ARCHITECTURE</span>
                        <h2 className="ts-title">Operational clarity.<br />Engineered for scale.</h2>
                        <p className="ts-subtitle">
                            A unified infrastructure that bridges isolated data silos, sanitizes records,
                            and surfaces the critical insights your team needs to execute decisively.
                        </p>
                    </div>

                    <div className="ts-cards">
                        {TOOLS_DATA.map((tool, index) => {
                            const isActive = activeCard === index;
                            return (
                                <div
                                    key={tool.id}
                                    ref={el => cardRefs.current[index] = el}
                                    className={`ts-card ts-card--${tool.themeColor} ${isActive ? "ts-card--active" : ""}`}
                                    onClick={() => {
                                        if (window.innerWidth >= 1024) {
                                            setActiveCard(index);
                                            cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                                        }
                                    }}
                                >
                                    <div className="ts-card-accent" />

                                    {/* Mobile visual */}
                                    <div className="ts-mobile-hero">
                                        <div className="ts-mobile-hero-bg" />
                                        <tool.Visual />
                                    </div>

                                    <div className="ts-card-body">
                                        <div className="ts-card-top">
                                            <div className={`ts-card-icon ts-card-icon--${tool.themeColor}`}>{tool.icon}</div>
                                            <span className={`ts-card-tag ts-card-tag--${tool.themeColor}`}>{tool.tag}</span>
                                        </div>
                                        <h3 className="ts-card-title">{tool.title}</h3>
                                        <p className="ts-card-desc">{tool.description}</p>
                                        <ul className="ts-card-bullets">
                                            {tool.bullets.map(b => (
                                                <li key={b}>
                                                    <Check size={14} className={`ts-check ts-check--${tool.themeColor}`} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column — Sticky viewer */}
                <div className="ts-right">
                    <div className="ts-sticky">
                        <div className="ts-viewer">
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

                            <div className="ts-viewer-body">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCard}
                                        className="ts-viewer-frame"
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -14 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <activeData.Visual />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="ts-viewer-tabs">
                                {TOOLS_DATA.map((t, i) => (
                                    <button
                                        key={t.id}
                                        className={`ts-tab ts-tab--${t.themeColor} ${activeCard === i ? "ts-tab--active" : ""}`}
                                        onClick={() => {
                                            setActiveCard(i);
                                            cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                                        }}
                                        aria-label={`View ${t.title}`}
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
