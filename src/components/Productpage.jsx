"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Check, ChevronRight, Star, Play } from "lucide-react";

// ─── PRODUCT DATA ────────────────────────────────────────────────────────────
// Each product defines: hero, stats, features (6 cards), capabilities (4 groups), quote, cta
const PRODUCT_DATA = {
    financeiq: {
        badge: "FINANCIAL MANAGEMENT",
        title: "FinanceIQ",
        tagline: "Financial management that thinks ahead",
        description:
            "Complete accounting, invoicing, tax compliance and cash flow forecasting — all in one intelligent platform designed for modern businesses.",
        theme: {
            primary: "#2563eb",
            light: "#eff6ff",
            border: "#bfdbfe",
            accent: "#1d4ed8",
            soft: "rgba(37,99,235,0.08)",
            glow: "rgba(37,99,235,0.15)",
        },
        heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        stats: [
            { value: "5 Days → 6 Hours", label: "Month-end close time" },
            { value: "92%", label: "Faster invoice processing" },
            { value: "100%", label: "GST compliance rate" },
        ],
        features: [
            {
                icon: "📊",
                title: "Smart Accounting",
                desc: "Automated bookkeeping with AI-powered categorization and reconciliation that learns from your business patterns.",
            },
            {
                icon: "📋",
                title: "GST Compliance",
                desc: "Built-in GST filing, automatic tax calculations, and compliance reports that keep you audit-ready.",
            },
            {
                icon: "💳",
                title: "Invoice Management",
                desc: "Create, send, and track invoices with automated payment reminders and multi-currency support.",
            },
            {
                icon: "📈",
                title: "Cash Flow Forecasting",
                desc: "AI-driven predictions help you anticipate cash flow gaps and make informed financial decisions.",
            },
            {
                icon: "🧾",
                title: "Expense Tracking",
                desc: "Capture receipts, categorize expenses, and manage reimbursements with mobile-first workflows.",
            },
            {
                icon: "📉",
                title: "Financial Reports",
                desc: "Real-time P&L, balance sheets, and cash flow statements with drill-down capabilities.",
            },
        ],
        capabilities: [
            {
                title: "Core Accounting",
                items: [
                    "General ledger with multi-currency support",
                    "Accounts payable and receivable automation",
                    "Bank reconciliation with AI matching",
                    "Chart of accounts customization",
                    "Journal entries and audit trails",
                ],
            },
            {
                title: "Tax & Compliance",
                items: [
                    "GST, TDS, and income tax calculations",
                    "Automated GSTR-1, GSTR-3B filing",
                    "Form 26AS reconciliation",
                    "E-way bill generation",
                    "Compliance calendar and reminders",
                ],
            },
            {
                title: "Invoicing & Payments",
                items: [
                    "Professional invoice templates",
                    "Payment gateway integration",
                    "Recurring invoices and subscriptions",
                    "Automatic payment reminders",
                    "Credit note and debit note management",
                ],
            },
            {
                title: "Analytics & Insights",
                items: [
                    "Cash flow forecasting with AI",
                    "Profit margin analysis by product/service",
                    "Customer payment behavior insights",
                    "Budget vs actuals comparison",
                    "Custom financial dashboards",
                ],
            },
        ],
        testimonial: {
            quote:
                "FinanceIQ cut our month-end close from 5 days to 6 hours. Our CA now just reviews instead of doing manual entry. It's been transformational for our finance team.",
            name: "Arjun Mehta",
            role: "CFO, Meridian Exports",
        },
    },

    nexuscrm: {
        badge: "CUSTOMER RELATIONSHIP MANAGEMENT",
        title: "NexusCRM",
        tagline: "Customer relationships powered by intelligence",
        description:
            "Track every deal, automate follow-ups, and personalise every customer touchpoint with AI-driven insights that close more sales.",
        theme: {
            primary: "#059669",
            light: "#ecfdf5",
            border: "#a7f3d0",
            accent: "#047857",
            soft: "rgba(5,150,105,0.08)",
            glow: "rgba(5,150,105,0.15)",
        },
        heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        stats: [
            { value: "3x", label: "Increase in lead conversion" },
            { value: "45%", label: "Faster response time" },
            { value: "89%", label: "Customer retention rate" },
        ],
        features: [
            {
                icon: "🎯",
                title: "Sales Pipeline",
                desc: "Visual deal tracking with customizable stages, automatic reminders, and revenue forecasting.",
            },
            {
                icon: "🤖",
                title: "AI Lead Scoring",
                desc: "Machine learning ranks leads by conversion probability, helping your team focus on what matters.",
            },
            {
                icon: "💬",
                title: "WhatsApp Integration",
                desc: "Send quotes, collect payments, and engage customers directly through WhatsApp Business API.",
            },
            {
                icon: "👥",
                title: "Contact Management",
                desc: "Centralized customer database with interaction history, preferences, and communication logs.",
            },
            {
                icon: "⚡",
                title: "Automation Workflows",
                desc: "Trigger emails, tasks, and notifications based on customer actions and deal milestones.",
            },
            {
                icon: "📧",
                title: "Email Campaigns",
                desc: "Design, send, and track email campaigns with templates, A/B testing, and analytics.",
            },
        ],
        capabilities: [
            {
                title: "Lead Management",
                items: [
                    "Multi-channel lead capture (web, email, phone)",
                    "AI-powered lead scoring and qualification",
                    "Automatic lead assignment and routing",
                    "Lead nurturing campaigns",
                    "Duplicate detection and merging",
                ],
            },
            {
                title: "Sales Automation",
                items: [
                    "Customizable sales pipelines and stages",
                    "Deal probability and revenue forecasting",
                    "Activity tracking and reminders",
                    "Quote and proposal generation",
                    "Sales performance dashboards",
                ],
            },
            {
                title: "Customer Engagement",
                items: [
                    "WhatsApp, SMS, and email integration",
                    "Customer portal for self-service",
                    "Support ticket management",
                    "Customer satisfaction surveys",
                    "Loyalty program integration",
                ],
            },
            {
                title: "Analytics & Reporting",
                items: [
                    "Sales funnel conversion analysis",
                    "Team performance metrics",
                    "Customer lifetime value tracking",
                    "Campaign ROI measurement",
                    "Custom report builder",
                ],
            },
        ],
        testimonial: {
            quote:
                "NexusCRM's AI lead scoring helped us prioritize high-value prospects. Our conversion rate tripled and our sales team is closing deals faster than ever before.",
            name: "Vikram Patel",
            role: "Head of Sales, TechVentures India",
        },
    },

    scholaros: {
        badge: "EDUCATION MANAGEMENT",
        title: "ScholarOS",
        tagline: "School management that empowers educators",
        description:
            "Run admissions, fees, timetables, exams, and parent communication from a single system built for modern educational institutions.",
        theme: {
            primary: "#7c3aed",
            light: "#f5f3ff",
            border: "#ddd6fe",
            accent: "#6d28d9",
            soft: "rgba(124,58,237,0.08)",
            glow: "rgba(124,58,237,0.15)",
        },
        heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        stats: [
            { value: "4 Tools → 1", label: "Systems consolidated" },
            { value: "50%", label: "Reduction in admin time" },
            { value: "98%", label: "Parent app adoption" },
        ],
        features: [
            {
                icon: "📝",
                title: "Admissions Portal",
                desc: "Online application forms, document verification, and automated enrollment workflows that save weeks of admin time.",
            },
            {
                icon: "💰",
                title: "Fee Management",
                desc: "Flexible fee structures, online payment collection, and automated receipt generation with parent portal access.",
            },
            {
                icon: "🗓️",
                title: "Timetable Engine",
                desc: "Intelligent scheduling that handles teacher availability, room allocation, and subject conflicts automatically.",
            },
            {
                icon: "🎓",
                title: "Exam & Results",
                desc: "Grade management, report card generation, and parent-teacher meeting scheduling in one integrated system.",
            },
            {
                icon: "🔔",
                title: "Parent Communication",
                desc: "Automated notifications, event updates, and two-way messaging via app, SMS, and email.",
            },
            {
                icon: "📊",
                title: "Analytics Dashboard",
                desc: "Track student performance, attendance trends, and fee collection metrics in real-time.",
            },
        ],
        capabilities: [
            {
                title: "Student Management",
                items: [
                    "Complete student profiles and records",
                    "Attendance tracking with biometric integration",
                    "Disciplinary records and behavior tracking",
                    "Medical records and emergency contacts",
                    "Alumni database and engagement",
                ],
            },
            {
                title: "Academic Operations",
                items: [
                    "Curriculum planning and lesson tracking",
                    "Assignment and homework management",
                    "Internal assessment and grading",
                    "Report card customization",
                    "Certificate and bonafide generation",
                ],
            },
            {
                title: "Fee & Finance",
                items: [
                    "Multi-tier fee structures",
                    "Online payment gateway integration",
                    "Fee concessions and scholarships",
                    "Late fee calculation and reminders",
                    "Detailed financial reports for trustees",
                ],
            },
            {
                title: "Communication Hub",
                items: [
                    "Mobile app for parents and students",
                    "Push notifications for important updates",
                    "Parent-teacher meeting scheduler",
                    "Event calendar and announcements",
                    "Emergency broadcast messaging",
                ],
            },
        ],
        testimonial: {
            quote:
                "ScholarOS replaced 4 separate tools. Parents love the app and our staff spends half the time on admin tasks. We can finally focus on what matters — teaching.",
            name: "Priya Sharma",
            role: "Principal, Delhi Modern School",
        },
    },

    inventoryai: {
        badge: "SUPPLY CHAIN MANAGEMENT",
        title: "InventoryAI",
        tagline: "Supply chain intelligence that anticipates demand",
        description:
            "Real-time stock tracking with AI demand forecasting across multiple warehouses, eliminating stockouts and reducing excess inventory.",
        theme: {
            primary: "#d97706",
            light: "#fffbeb",
            border: "#fde68a",
            accent: "#b45309",
            soft: "rgba(217,119,6,0.08)",
            glow: "rgba(217,119,6,0.15)",
        },
        heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
        stats: [
            { value: "35%", label: "Reduction in excess stock" },
            { value: "89%", label: "Forecast accuracy" },
            { value: "50%", label: "Faster order fulfillment" },
        ],
        features: [
            {
                icon: "📡",
                title: "Real-Time Tracking",
                desc: "Monitor stock levels across all locations with automatic reorder alerts and low-stock notifications.",
            },
            {
                icon: "🔮",
                title: "Demand Forecasting",
                desc: "AI predicts future demand based on historical sales, seasonality, and market trends to optimize inventory.",
            },
            {
                icon: "🏭",
                title: "Multi-Warehouse",
                desc: "Manage inventory across multiple locations with inter-warehouse transfers and consolidated reporting.",
            },
            {
                icon: "🚚",
                title: "Supplier Portal",
                desc: "Streamline procurement with supplier catalogs, automated POs, and delivery tracking.",
            },
            {
                icon: "📷",
                title: "Barcode Integration",
                desc: "Mobile scanning for receiving, picking, and cycle counting with batch and serial number tracking.",
            },
            {
                icon: "📊",
                title: "Analytics Dashboard",
                desc: "Track inventory turnover, carrying costs, and stockout rates with actionable insights.",
            },
        ],
        capabilities: [
            {
                title: "Inventory Control",
                items: [
                    "Multi-location stock management",
                    "Batch and serial number tracking",
                    "Barcode and QR code scanning",
                    "Cycle counting and stock adjustments",
                    "Inventory valuation (FIFO, LIFO, Weighted Average)",
                ],
            },
            {
                title: "Procurement",
                items: [
                    "Automated purchase order generation",
                    "Supplier catalog and price comparison",
                    "Vendor performance tracking",
                    "Three-way matching (PO, GRN, Invoice)",
                    "Procurement analytics and spend visibility",
                ],
            },
            {
                title: "Warehouse Operations",
                items: [
                    "Bin location management",
                    "Pick, pack, and ship workflows",
                    "Inter-warehouse transfers",
                    "Goods receipt and quality check",
                    "Mobile app for warehouse staff",
                ],
            },
            {
                title: "AI & Forecasting",
                items: [
                    "Demand forecasting with machine learning",
                    "Automatic reorder point calculation",
                    "Seasonal trend analysis",
                    "Dead stock and slow-moving item alerts",
                    "Optimal stock level recommendations",
                ],
            },
        ],
        testimonial: {
            quote:
                "InventoryAI's demand forecasting reduced our excess stock by 35% while eliminating stockouts. We finally have the right products at the right time.",
            name: "Rajesh Kumar",
            role: "Supply Chain Director, Bharat Retail Group",
        },
    },

    mediswarm: {
        badge: "HEALTHCARE MANAGEMENT",
        title: "MediSwarm",
        tagline: "Healthcare management that prioritizes patient care",
        description:
            "Patient records, appointments, lab reports and billing built for clinics and diagnostics, with hard-locked physician oversight ensuring compliance at every step.",
        theme: {
            primary: "#dc2626",
            light: "#fef2f2",
            border: "#fecaca",
            accent: "#b91c1c",
            soft: "rgba(220,38,38,0.08)",
            glow: "rgba(220,38,38,0.15)",
        },
        heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        stats: [
            { value: "60%", label: "Reduction in no-shows" },
            { value: "100%", label: "Digital report delivery" },
            { value: "40%", label: "Faster claim processing" },
        ],
        features: [
            {
                icon: "📄",
                title: "Electronic Medical Records",
                desc: "Complete patient history, prescriptions, and clinical notes accessible from any device with HIPAA-compliant security.",
            },
            {
                icon: "📅",
                title: "Appointment Scheduling",
                desc: "Online booking, SMS reminders, and calendar sync to reduce no-shows and optimize doctor schedules.",
            },
            {
                icon: "🔬",
                title: "Lab Integration",
                desc: "Order tests, track samples, and deliver digital reports directly to patients via mobile app.",
            },
            {
                icon: "👤",
                title: "Patient Portal",
                desc: "Empower patients with access to their records, test results, and appointment history on mobile.",
            },
            {
                icon: "💳",
                title: "Billing & Insurance",
                desc: "Generate bills, process insurance claims, and track payments with automated reconciliation.",
            },
            {
                icon: "💊",
                title: "Prescription Management",
                desc: "Digital prescriptions with drug database, dosage validation, and interaction warnings.",
            },
        ],
        capabilities: [
            {
                title: "Clinical Operations",
                items: [
                    "OPD and IPD patient management",
                    "Doctor consultation notes and templates",
                    "Treatment plans and care protocols",
                    "Medication and allergy tracking",
                    "Vital signs and clinical observations",
                ],
            },
            {
                title: "Diagnostics & Lab",
                items: [
                    "Lab test ordering and tracking",
                    "Sample collection and barcode labeling",
                    "Result entry and validation",
                    "Digital report delivery to patients",
                    "Quality control and audit trails",
                ],
            },
            {
                title: "Revenue Cycle",
                items: [
                    "Registration and billing workflows",
                    "Insurance verification and pre-authorization",
                    "Claim submission and tracking",
                    "Payment collection and receipts",
                    "Revenue and collection reports",
                ],
            },
            {
                title: "Patient Engagement",
                items: [
                    "Online appointment booking",
                    "Automated SMS and email reminders",
                    "Patient mobile app access",
                    "Telemedicine consultation",
                    "Health education and follow-up campaigns",
                ],
            },
        ],
        testimonial: {
            quote:
                "MediSwarm streamlined our entire workflow. From appointments to lab reports to billing, everything is connected. Our patients love the mobile app and we've seen dramatic improvements in efficiency.",
            name: "Dr. Sunita Rao",
            role: "Medical Director, Apollo Diagnostics Centre",
        },
    },

    kitchensync: {
        badge: "HOSPITALITY MANAGEMENT",
        title: "KitchenSync",
        tagline: "Kitchen intelligence that never misses an order",
        description:
            "Production-ready Kitchen Display System engineered for multi-branch synchronization and real-time order routing across every station.",
        theme: {
            primary: "#f59e0b",
            light: "#fffbeb",
            border: "#fde68a",
            accent: "#d97706",
            soft: "rgba(245,158,11,0.08)",
            glow: "rgba(245,158,11,0.15)",
        },
        heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        stats: [
            { value: "40%", label: "Faster ticket resolution" },
            { value: "99.9%", label: "Order accuracy rate" },
            { value: "0", label: "Lost orders since launch" },
        ],
        features: [
            {
                icon: "📺",
                title: "Kitchen Display System",
                desc: "Real-time order display with color-coded priority routing across grill, prep, and expo stations.",
            },
            {
                icon: "🔗",
                title: "Multi-Branch Sync",
                desc: "Centralized control across all your locations with branch-specific menus and unified reporting.",
            },
            {
                icon: "⏱️",
                title: "Order Routing",
                desc: "Smart routing sends each item to the right station automatically, eliminating kitchen confusion.",
            },
            {
                icon: "📦",
                title: "Inventory Depletion",
                desc: "Real-time ingredient tracking with automatic 86 alerts when items run low during service.",
            },
            {
                icon: "📊",
                title: "Performance Analytics",
                desc: "Track ticket times, station efficiency, and peak hour performance to continuously optimize operations.",
            },
            {
                icon: "🔌",
                title: "POS Integration",
                desc: "Native integrations with Petpooja, Posist, and all major POS systems with zero manual re-entry.",
            },
        ],
        capabilities: [
            {
                title: "Order Management",
                items: [
                    "Real-time order display and routing",
                    "Multi-station kitchen coordination",
                    "Course and modifier management",
                    "Order bump and recall controls",
                    "Dine-in, takeaway, and delivery streams",
                ],
            },
            {
                title: "Branch Operations",
                items: [
                    "Centralized multi-location management",
                    "Branch-specific menu and pricing",
                    "Inter-branch inventory transfers",
                    "Consolidated performance reporting",
                    "Remote monitoring and alerts",
                ],
            },
            {
                title: "Inventory & Recipes",
                items: [
                    "Recipe costing and yield management",
                    "Real-time ingredient consumption tracking",
                    "Automated purchase order triggers",
                    "Waste logging and variance reports",
                    "Supplier management and ordering",
                ],
            },
            {
                title: "Analytics & Reporting",
                items: [
                    "Average ticket time by station and shift",
                    "Menu item performance analysis",
                    "Peak hour demand forecasting",
                    "Staff productivity metrics",
                    "Food cost and margin reports",
                ],
            },
        ],
        testimonial: {
            quote:
                "KitchenSync eliminated the chaos in our kitchen. Orders route to the right station instantly and our ticket times dropped by 40%. It's the backbone of our restaurant operations now.",
            name: "Chef Anand Krishnamurthy",
            role: "Executive Chef, Spice Route Restaurants (12 branches)",
        },
    },
};

// ─── REUSABLE COMPONENTS ─────────────────────────────────────────────────────

const FeatureCard = ({ icon, title, desc, theme }) => (
    <div
        style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: "24px",
            transition: "all 0.2s ease",
            cursor: "default",
        }}
        onMouseEnter={(e) =>
        {
            e.currentTarget.style.borderColor = theme.primary;
            e.currentTarget.style.boxShadow = `0 4px 24px ${theme.glow}`;
            e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) =>
        {
            e.currentTarget.style.borderColor = "#e5e7eb";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
        }}
    >
        <div
            style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: theme.light,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                marginBottom: 14,
            }}
        >
            {icon}
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{desc}</p>
    </div>
);

const CapabilityGroup = ({ title, items, theme }) => (
    <div>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>{title}</h4>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {items.map((item, i) => (
                <li
                    key={i}
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 10,
                        fontSize: 14,
                        color: "#475569",
                    }}
                >
                    <Check size={14} style={{ color: theme.primary, marginTop: 3, flexShrink: 0 }} />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

// ─── MAIN PRODUCT PAGE COMPONENT ─────────────────────────────────────────────

export default function ProductPage({ productId })
{
    const data = PRODUCT_DATA[productId];
    const [visible, setVisible] = useState(false);

    useEffect(() =>
    {
        setVisible(false);
        const t = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(t);
    }, [productId]);

    if (!data)
    {
        return (
            <div style={{ padding: 80, textAlign: "center", color: "#64748b" }}>
                Product not found. Valid IDs: {Object.keys(PRODUCT_DATA).join(", ")}
            </div>
        );
    }

    const { theme } = data;

    return (
        <div
            style={{
                fontFamily: "'Inter', -apple-system, sans-serif",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.45s ease, transform 0.45s ease",
            }}
        >
            {/* ── HERO ───────────────────────────────────────────────────────── */}
            <section
                style={{
                    background: "#0a0a0f",
                    padding: "170px 0 0",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle glow behind image */}
                <div
                    style={{
                        position: "absolute",
                        right: "5%",
                        top: "10%",
                        width: 480,
                        height: 480,
                        background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
                        pointerEvents: "none",
                    }}
                />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 64,
                            alignItems: "center",
                        }}
                    >
                        {/* Left */}
                        <div style={{ paddingBottom: 80 }}>
                            <span
                                style={{
                                    display: "inline-block",
                                    background: theme.soft,
                                    border: `1px solid ${theme.primary}40`,
                                    color: theme.primary,
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    padding: "5px 12px",
                                    borderRadius: 6,
                                    marginBottom: 24,
                                }}
                            >
                                {data.badge}
                            </span>
                            <h1
                                style={{
                                    fontSize: 52,
                                    fontWeight: 800,
                                    color: "#ffffff",
                                    lineHeight: 1.05,
                                    margin: "0 0 16px",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {data.title}
                            </h1>
                            <p
                                style={{
                                    fontSize: 20,
                                    color: "#94a3b8",
                                    fontWeight: 400,
                                    marginBottom: 20,
                                    lineHeight: 1.4,
                                }}
                            >
                                {data.tagline}
                            </p>
                            <p
                                style={{
                                    fontSize: 16,
                                    color: "#64748b",
                                    lineHeight: 1.7,
                                    marginBottom: 36,
                                    maxWidth: 480,
                                }}
                            >
                                {data.description}
                            </p>
                            <div style={{ display: "flex", gap: 12 }}>
                                <button
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: theme.primary,
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 8,
                                        padding: "13px 24px",
                                        fontSize: 15,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "background 0.2s, transform 0.15s",
                                    }}
                                    onMouseEnter={(e) =>
                                    {
                                        e.currentTarget.style.background = theme.accent;
                                        e.currentTarget.style.transform = "translateY(-1px)";
                                    }}
                                    onMouseLeave={(e) =>
                                    {
                                        e.currentTarget.style.background = theme.primary;
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    Start Free Trial <ArrowRight size={16} />
                                </button>
                                <button
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: "transparent",
                                        color: "#e2e8f0",
                                        border: "1px solid #334155",
                                        borderRadius: 8,
                                        padding: "13px 24px",
                                        fontSize: 15,
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        transition: "border-color 0.2s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#64748b")}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#334155")}
                                >
                                    <Play size={15} /> Watch Demo
                                </button>
                            </div>
                        </div>

                        {/* Right — hero image */}
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    borderRadius: "16px 16px 0 0",
                                    overflow: "hidden",
                                    border: `1px solid ${theme.primary}30`,
                                    borderBottom: "none",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={data.heroImage}
                                    alt={data.title}
                                    style={{
                                        width: "100%",
                                        height: 340,
                                        objectFit: "cover",
                                        display: "block",
                                        filter: "brightness(0.88)",
                                    }}
                                />
                                {/* Overlay gradient fading into dark bg */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: 80,
                                        background: "linear-gradient(to top, #0a0a0f, transparent)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ─────────────────────────────────────────────────── */}
            <section style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 0,
                        }}
                    >
                        {data.stats.map((stat, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: "40px 32px",
                                    borderRight: i < 2 ? "1px solid #e2e8f0" : "none",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 36,
                                        fontWeight: 800,
                                        color: theme.primary,
                                        letterSpacing: "-0.02em",
                                        marginBottom: 6,
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: 14, color: "#64748b", fontWeight: 400 }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FEATURES GRID ────────────────────────────────────────────── */}
            <section style={{ background: "#ffffff", padding: "96px 0" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <h2
                            style={{
                                fontSize: 38,
                                fontWeight: 800,
                                color: "#0f172a",
                                letterSpacing: "-0.02em",
                                margin: "0 0 12px",
                            }}
                        >
                            Everything you need to succeed
                        </h2>
                        <p style={{ fontSize: 17, color: "#64748b", margin: 0 }}>
                            Purpose-built features that work together seamlessly.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 20,
                        }}
                    >
                        {data.features.map((f, i) => (
                            <FeatureCard key={i} {...f} theme={theme} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
            <section style={{ background: "#f8fafc", padding: "96px 0" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
                    <div style={{ marginBottom: 56 }}>
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                color: theme.primary,
                                textTransform: "uppercase",
                            }}
                        >
                            Full capabilities
                        </span>
                        <h2
                            style={{
                                fontSize: 34,
                                fontWeight: 800,
                                color: "#0f172a",
                                letterSpacing: "-0.02em",
                                margin: "8px 0 0",
                            }}
                        >
                            Built for every workflow
                        </h2>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "48px 80px",
                        }}
                    >
                        {data.capabilities.map((cap, i) => (
                            <CapabilityGroup key={i} {...cap} theme={theme} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
            <section
                style={{
                    background: theme.primary,
                    padding: "72px 0",
                }}
            >
                <div
                    style={{
                        maxWidth: 800,
                        margin: "0 auto",
                        padding: "0 40px",
                        textAlign: "center",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="#fff" color="#fff" />
                        ))}
                    </div>
                    <blockquote
                        style={{
                            fontSize: 22,
                            fontWeight: 400,
                            color: "#ffffff",
                            lineHeight: 1.6,
                            margin: "0 0 32px",
                            fontStyle: "italic",
                        }}
                    >
                        "{data.testimonial.quote}"
                    </blockquote>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                        {data.testimonial.name}
                    </div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                        {data.testimonial.role}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
            <section
                style={{
                    background: "#0a0a0f",
                    padding: "88px 0",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 40px" }}>
                    <h2
                        style={{
                            fontSize: 40,
                            fontWeight: 800,
                            color: "#ffffff",
                            letterSpacing: "-0.02em",
                            margin: "0 0 16px",
                        }}
                    >
                        Ready to transform your workflow?
                    </h2>
                    <p style={{ fontSize: 16, color: "#64748b", marginBottom: 36 }}>
                        Join hundreds of businesses already using {data.title}
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                        <button
                            style={{
                                background: theme.primary,
                                color: "#fff",
                                border: "none",
                                borderRadius: 8,
                                padding: "14px 28px",
                                fontSize: 15,
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            Start Free Trial
                        </button>
                        <button
                            style={{
                                background: "transparent",
                                color: "#e2e8f0",
                                border: "1px solid #334155",
                                borderRadius: 8,
                                padding: "14px 28px",
                                fontSize: 15,
                                fontWeight: 500,
                                cursor: "pointer",
                            }}
                        >
                            Back to Home
                        </button>
                    </div>
                    <p style={{ fontSize: 13, color: "#475569", marginTop: 20 }}>
                        No credit card required · Cancel anytime · Free forever plan available
                    </p>
                </div>
            </section>
        </div>
    );
}


// ─── DEMO WRAPPER (remove this in production) ────────────────────────────────
// This lets you preview all products with a tab switcher

const PRODUCTS = [
    { id: "financeiq", label: "FinanceIQ", color: "#2563eb" },
    { id: "nexuscrm", label: "NexusCRM", color: "#059669" },
    { id: "scholaros", label: "ScholarOS", color: "#7c3aed" },
    { id: "inventoryai", label: "InventoryAI", color: "#d97706" },
    { id: "mediswarm", label: "MediSwarm", color: "#dc2626" },
    { id: "kitchensync", label: "KitchenSync", color: "#f59e0b" },
];

export function ProductPageDemo()
{
    const [active, setActive] = useState("financeiq");

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Switcher nav */}
            <nav
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    background: "#0a0a0f",
                    borderBottom: "1px solid #1e293b",
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    padding: "12px 16px",
                    flexWrap: "wrap",
                }}
            >
                {PRODUCTS.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => setActive(p.id)}
                        style={{
                            background: active === p.id ? p.color : "transparent",
                            color: active === p.id ? "#fff" : "#64748b",
                            border: `1px solid ${active === p.id ? p.color : "#1e293b"}`,
                            borderRadius: 6,
                            padding: "7px 14px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.2s",
                        }}
                    >
                        {p.label}
                    </button>
                ))}
            </nav>

            <ProductPage productId={active} />
        </div>
    );
}