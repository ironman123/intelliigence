"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import
{
    ArrowRight, CheckCircle2, Play, Star, Quote,
    Calculator, ShieldCheck, Receipt, TrendingUp, CreditCard, LineChart,
    Target, BrainCircuit, MessageCircle, Users, Zap, Mail,
    BookOpen, Coins, Calendar, GraduationCap, Bell, BarChart,
    Radar, BarChart3, Building2, Truck, ScanLine,
    FileText, CalendarDays, Microscope, Smartphone, Pill,
    MonitorPlay, Network, Timer, PackageMinus, Activity, TerminalSquare
} from "lucide-react";

// ─── PRODUCT DATA ────────────────────────────────────────────────────────────
const PRODUCT_DATA = {
    financemanager: {
        badge: "FINANCIAL MANAGEMENT",
        title: "Finance Manager",
        tagline: "Financial management that thinks ahead.",
        description: "Complete accounting, invoicing, tax compliance and cash flow forecasting — all in one intelligent platform designed for modern businesses.",
        theme: { primary: "#2563eb", light: "#eff6ff", border: "#bfdbfe", accent: "#1d4ed8", soft: "rgba(37,99,235,0.08)", glow: "rgba(37,99,235,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
        stats: [
            { value: "6 Hours", label: "Month-end close time", prior: "from 5 days" },
            { value: "92%", label: "Faster invoice processing", prior: "automated" },
            { value: "100%", label: "GST compliance rate", prior: "audit-ready" },
        ],
        features: [
            { icon: Calculator, title: "Smart Accounting", desc: "Automated bookkeeping with AI-powered categorization and reconciliation that learns from your business patterns." },
            { icon: ShieldCheck, title: "GST Compliance", desc: "Built-in GST filing, automatic tax calculations, and compliance reports that keep you audit-ready." },
            { icon: Receipt, title: "Invoice Management", desc: "Create, send, and track invoices with automated payment reminders and multi-currency support." },
            { icon: TrendingUp, title: "Cash Flow Forecasting", desc: "AI-driven predictions help you anticipate cash flow gaps and make informed financial decisions." },
            { icon: CreditCard, title: "Expense Tracking", desc: "Capture receipts, categorize expenses, and manage reimbursements with mobile-first workflows." },
            { icon: LineChart, title: "Financial Reports", desc: "Real-time P&L, balance sheets, and cash flow statements with drill-down capabilities." },
        ],
        capabilities: [
            { title: "Core Accounting", items: ["General ledger with multi-currency support", "Accounts payable and receivable automation", "Bank reconciliation with AI matching", "Chart of accounts customization", "Journal entries and audit trails"] },
            { title: "Tax & Compliance", items: ["GST, TDS, and income tax calculations", "Automated GSTR-1, GSTR-3B filing", "Form 26AS reconciliation", "E-way bill generation", "Compliance calendar and reminders"] },
            { title: "Invoicing & Payments", items: ["Professional invoice templates", "Payment gateway integration", "Recurring invoices and subscriptions", "Automatic payment reminders", "Credit and debit note management"] },
            { title: "Analytics & Insights", items: ["Cash flow forecasting with AI", "Profit margin analysis by product/service", "Customer payment behavior insights", "Budget vs actuals comparison", "Custom financial dashboards"] },
        ],
        testimonial: { quote: "Finance Manager cut our month-end close from 5 days to 6 hours. Our CA now just reviews instead of doing manual entry. It's been transformational.", name: "Arjun Mehta", role: "CFO, Meridian Exports" },
    },

    crmportal: {
        badge: "CUSTOMER RELATIONSHIP",
        title: "CRM Portal",
        tagline: "Relationships powered by intelligence.",
        description: "Track every deal, automate follow-ups, and personalise every customer touchpoint with AI-driven insights that close more sales.",
        theme: { primary: "#059669", light: "#ecfdf5", border: "#a7f3d0", accent: "#047857", soft: "rgba(5,150,105,0.08)", glow: "rgba(5,150,105,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
        stats: [
            { value: "3x", label: "Increase in lead conversion", prior: "qualified pipeline" },
            { value: "45%", label: "Faster response time", prior: "automated routing" },
            { value: "89%", label: "Customer retention rate", prior: "engaged base" },
        ],
        features: [
            { icon: Target, title: "Sales Pipeline", desc: "Visual deal tracking with customizable stages, automatic reminders, and revenue forecasting." },
            { icon: BrainCircuit, title: "AI Lead Scoring", desc: "Machine learning ranks leads by conversion probability, helping your team focus on what matters." },
            { icon: MessageCircle, title: "WhatsApp Integration", desc: "Send quotes, collect payments, and engage customers directly through WhatsApp Business API." },
            { icon: Users, title: "Contact Management", desc: "Centralized customer database with interaction history, preferences, and communication logs." },
            { icon: Zap, title: "Automation Workflows", desc: "Trigger emails, tasks, and notifications based on customer actions and deal milestones." },
            { icon: Mail, title: "Email Campaigns", desc: "Design, send, and track email campaigns with templates, A/B testing, and analytics." },
        ],
        capabilities: [
            { title: "Lead Management", items: ["Multi-channel lead capture (web, email, phone)", "AI-powered lead scoring and qualification", "Automatic lead assignment and routing", "Lead nurturing campaigns", "Duplicate detection and merging"] },
            { title: "Sales Automation", items: ["Customizable sales pipelines and stages", "Deal probability and revenue forecasting", "Activity tracking and reminders", "Quote and proposal generation", "Sales performance dashboards"] },
            { title: "Customer Engagement", items: ["WhatsApp, SMS, and email integration", "Customer portal for self-service", "Support ticket management", "Customer satisfaction surveys", "Loyalty program integration"] },
            { title: "Analytics & Reporting", items: ["Sales funnel conversion analysis", "Team performance metrics", "Customer lifetime value tracking", "Campaign ROI measurement", "Custom report builder"] },
        ],
        testimonial: { quote: "CRM Portal's AI lead scoring helped us prioritize high-value prospects. Our conversion rate tripled and our sales team is closing deals faster than ever before.", name: "Vikram Patel", role: "Head of Sales, TechVentures India" },
    },

    schoolmanager: {
        badge: "EDUCATION MANAGEMENT",
        title: "School Manager",
        tagline: "Management that empowers educators.",
        description: "Run admissions, fees, timetables, exams, and parent communication from a single system built for modern educational institutions.",
        theme: { primary: "#7c3aed", light: "#f5f3ff", border: "#ddd6fe", accent: "#6d28d9", soft: "rgba(124,58,237,0.08)", glow: "rgba(124,58,237,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
        stats: [
            { value: "4 to 1", label: "Systems consolidated", prior: "unified platform" },
            { value: "50%", label: "Reduction in admin time", prior: "automated workflows" },
            { value: "98%", label: "Parent app adoption", prior: "active engagement" },
        ],
        features: [
            { icon: BookOpen, title: "Admissions Portal", desc: "Online application forms, document verification, and automated enrollment workflows that save weeks of admin time." },
            { icon: Coins, title: "Fee Management", desc: "Flexible fee structures, online payment collection, and automated receipt generation with parent portal access." },
            { icon: Calendar, title: "Timetable Engine", desc: "Intelligent scheduling that handles teacher availability, room allocation, and subject conflicts automatically." },
            { icon: GraduationCap, title: "Exam & Results", desc: "Grade management, report card generation, and parent-teacher meeting scheduling in one integrated system." },
            { icon: Bell, title: "Parent Communication", desc: "Automated notifications, event updates, and two-way messaging via app, SMS, and email." },
            { icon: BarChart, title: "Analytics Dashboard", desc: "Track student performance, attendance trends, and fee collection metrics in real-time." },
        ],
        capabilities: [
            { title: "Student Management", items: ["Complete student profiles and records", "Attendance tracking with biometric integration", "Disciplinary records and behavior tracking", "Medical records and emergency contacts", "Alumni database and engagement"] },
            { title: "Academic Operations", items: ["Curriculum planning and lesson tracking", "Assignment and homework management", "Internal assessment and grading", "Report card customization", "Certificate and bonafide generation"] },
            { title: "Fee & Finance", items: ["Multi-tier fee structures", "Online payment gateway integration", "Fee concessions and scholarships", "Late fee calculation and reminders", "Detailed financial reports for trustees"] },
            { title: "Communication Hub", items: ["Mobile app for parents and students", "Push notifications for important updates", "Parent-teacher meeting scheduler", "Event calendar and announcements", "Emergency broadcast messaging"] },
        ],
        testimonial: { quote: "School Manager replaced 4 separate tools. Parents love the app and our staff spends half the time on admin tasks. We can finally focus on what matters — teaching.", name: "Priya Sharma", role: "Principal, Delhi Modern School" },
    },

    inventorymanager: {
        badge: "SUPPLY CHAIN",
        title: "Inventory Manager",
        tagline: "Intelligence that anticipates demand.",
        description: "Real-time stock tracking with AI demand forecasting across multiple warehouses, eliminating stockouts and reducing excess inventory.",
        theme: { primary: "#d97706", light: "#fffbeb", border: "#fde68a", accent: "#b45309", soft: "rgba(217,119,6,0.08)", glow: "rgba(217,119,6,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
        stats: [
            { value: "35%", label: "Reduction in excess stock", prior: "optimized capital" },
            { value: "89%", label: "Forecast accuracy", prior: "AI-driven models" },
            { value: "50%", label: "Faster order fulfillment", prior: "streamlined routing" },
        ],
        features: [
            { icon: Radar, title: "Real-Time Tracking", desc: "Monitor stock levels across all locations with automatic reorder alerts and low-stock notifications." },
            { icon: BarChart3, title: "Demand Forecasting", desc: "AI predicts future demand based on historical sales, seasonality, and market trends to optimize inventory." },
            { icon: Building2, title: "Multi-Warehouse", desc: "Manage inventory across multiple locations with inter-warehouse transfers and consolidated reporting." },
            { icon: Truck, title: "Supplier Portal", desc: "Streamline procurement with supplier catalogs, automated POs, and delivery tracking." },
            { icon: ScanLine, title: "Barcode Integration", desc: "Mobile scanning for receiving, picking, and cycle counting with batch and serial number tracking." },
            { icon: LineChart, title: "Analytics Dashboard", desc: "Track inventory turnover, carrying costs, and stockout rates with actionable insights." },
        ],
        capabilities: [
            { title: "Inventory Control", items: ["Multi-location stock management", "Batch and serial number tracking", "Barcode and QR code scanning", "Cycle counting and stock adjustments", "Inventory valuation (FIFO, LIFO, Weighted Average)"] },
            { title: "Procurement", items: ["Automated purchase order generation", "Supplier catalog and price comparison", "Vendor performance tracking", "Three-way matching (PO, GRN, Invoice)", "Procurement analytics and spend visibility"] },
            { title: "Warehouse Operations", items: ["Bin location management", "Pick, pack, and ship workflows", "Inter-warehouse transfers", "Goods receipt and quality check", "Mobile app for warehouse staff"] },
            { title: "AI & Forecasting", items: ["Demand forecasting with machine learning", "Automatic reorder point calculation", "Seasonal trend analysis", "Dead stock and slow-moving item alerts", "Optimal stock level recommendations"] },
        ],
        testimonial: { quote: "Inventory Managers's demand forecasting reduced our excess stock by 35% while eliminating stockouts. We finally have the right products at the right time.", name: "Rajesh Kumar", role: "Supply Chain Director, Bharat Retail Group" },
    },

    clinicmanager: {
        badge: "PHYSICIAN-FIRST AUTOMATION",
        title: "Clinic Manager",
        tagline: "Management that prioritizes patient care.",
        description: "Patient records, appointments, lab reports and billing built for clinics and diagnostics, with hard-locked physician oversight ensuring compliance at every step.",
        theme: { primary: "#dc2626", light: "#fef2f2", border: "#fecaca", accent: "#b91c1c", soft: "rgba(220,38,38,0.08)", glow: "rgba(220,38,38,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
        stats: [
            { value: "60%", label: "Reduction in no-shows", prior: "automated scheduling" },
            { value: "100%", label: "Digital report delivery", prior: "secure portal" },
            { value: "40%", label: "Faster claim processing", prior: "unified billing" },
        ],
        features: [
            { icon: FileText, title: "Electronic Medical Records", desc: "Complete patient history, prescriptions, and clinical notes accessible from any device with HIPAA-compliant security." },
            { icon: CalendarDays, title: "Appointment Scheduling", desc: "Online booking, SMS reminders, and calendar sync to reduce no-shows and optimize doctor schedules." },
            { icon: Microscope, title: "Lab Integration", desc: "Order tests, track samples, and deliver digital reports directly to patients via mobile app." },
            { icon: Smartphone, title: "Patient Portal", desc: "Empower patients with access to their records, test results, and appointment history on mobile." },
            { icon: CreditCard, title: "Billing & Insurance", desc: "Generate bills, process insurance claims, and track payments with automated reconciliation." },
            { icon: Pill, title: "Prescription Management", desc: "Digital prescriptions with drug database, dosage validation, and interaction warnings." },
        ],
        capabilities: [
            { title: "Clinical Operations", items: ["OPD and IPD patient management", "Doctor consultation notes and templates", "Treatment plans and care protocols", "Medication and allergy tracking", "Vital signs and clinical observations"] },
            { title: "Diagnostics & Lab", items: ["Lab test ordering and tracking", "Sample collection and barcode labeling", "Result entry and validation", "Digital report delivery to patients", "Quality control and audit trails"] },
            { title: "Revenue Cycle", items: ["Registration and billing workflows", "Insurance verification and pre-authorization", "Claim submission and tracking", "Payment collection and receipts", "Revenue and collection reports"] },
            { title: "Patient Engagement", items: ["Online appointment booking", "Automated SMS and email reminders", "Patient mobile app access", "Telemedicine consultation", "Health education and follow-up campaigns"] },
        ],
        testimonial: { quote: "Clinic Manager streamlined our entire workflow. From appointments to lab reports to billing, everything is connected. Our patients love the mobile app and we've seen dramatic improvements in efficiency.", name: "Dr. Sunita Rao", role: "Medical Director, Apollo Diagnostics Centre" },
    },

    kitchendisplaysystem: {
        badge: "HOSPITALITY",
        title: "Kitchen Display System",
        tagline: "Kitchen system that never misses an order.",
        description: "Production-ready Kitchen Display System engineered for multi-branch synchronization and real-time order routing across every station.",
        theme: { primary: "#f59e0b", light: "#fffbeb", border: "#fde68a", accent: "#d97706", soft: "rgba(245,158,11,0.08)", glow: "rgba(245,158,11,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
        stats: [
            { value: "40%", label: "Faster ticket resolution", prior: "optimized routing" },
            { value: "99.9%", label: "Order accuracy rate", prior: "digital tracking" },
            { value: "0", label: "Lost orders since launch", prior: "100% reliable" },
        ],
        features: [
            { icon: MonitorPlay, title: "Kitchen Display System", desc: "Real-time order display with color-coded priority routing across grill, prep, and expo stations." },
            { icon: Network, title: "Multi-Branch Sync", desc: "Centralized control across all your locations with branch-specific menus and unified reporting." },
            { icon: Timer, title: "Order Routing", desc: "Smart routing sends each item to the right station automatically, eliminating kitchen confusion." },
            { icon: PackageMinus, title: "Inventory Depletion", desc: "Real-time ingredient tracking with automatic 86 alerts when items run low during service." },
            { icon: Activity, title: "Performance Analytics", desc: "Track ticket times, station efficiency, and peak hour performance to continuously optimize operations." },
            { icon: TerminalSquare, title: "POS Integration", desc: "Native integrations with Petpooja, Posist, and all major POS systems with zero manual re-entry." },
        ],
        capabilities: [
            { title: "Order Management", items: ["Real-time order display and routing", "Multi-station kitchen coordination", "Course and modifier management", "Order bump and recall controls", "Dine-in, takeaway, and delivery streams"] },
            { title: "Branch Operations", items: ["Centralized multi-location management", "Branch-specific menu and pricing", "Inter-branch inventory transfers", "Consolidated performance reporting", "Remote monitoring and alerts"] },
            { title: "Inventory & Recipes", items: ["Recipe costing and yield management", "Real-time ingredient consumption tracking", "Automated purchase order triggers", "Waste logging and variance reports", "Supplier management and ordering"] },
            { title: "Analytics & Reporting", items: ["Average ticket time by station and shift", "Menu item performance analysis", "Peak hour demand forecasting", "Staff productivity metrics", "Food cost and margin reports"] },
        ],
        testimonial: { quote: "Kitchen Display System eliminated the chaos in our kitchen. Orders route to the right station instantly and our ticket times dropped by 40%. It's the backbone of our operations now.", name: "Chef Anand Krishnamurthy", role: "Executive Chef, Spice Route Restaurants" },
    },
};

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ─── REUSABLE COMPONENTS ─────────────────────────────────────────────────────
const FeatureCard = ({ icon: Icon, title, desc, theme }) => (
    <motion.div
        variants={fadeUp}
        whileHover={{ y: -4, boxShadow: `0 20px 40px -15px ${theme.glow}` }}
        style={{
            background: "#ffffff",
            border: "1px solid #f1f5f9",
            borderRadius: 16,
            padding: "32px",
            transition: "border-color 0.3s ease",
            cursor: "default",
            position: "relative",
            overflow: "hidden"
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.border}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = "#f1f5f9"}
    >
        <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: theme.light, color: theme.primary,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20, border: `1px solid ${theme.soft}`
        }}>
            <Icon size={26} strokeWidth={1.5} />
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 12, letterSpacing: "-0.01em" }}>
            {title}
        </h3>
        <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.6, margin: 0 }}>
            {desc}
        </p>
    </motion.div>
);

const CapabilityGroup = ({ title, items, theme }) => (
    <motion.div variants={fadeUp}>
        <h4 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.primary }} />
            {title}
        </h4>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {items.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#475569", lineHeight: 1.5 }}>
                    <CheckCircle2 size={18} style={{ color: theme.primary, marginTop: 2, flexShrink: 0, opacity: 0.8 }} strokeWidth={2} />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

// ─── MAIN PRODUCT PAGE COMPONENT ─────────────────────────────────────────────
export default function ProductPage({ productId })
{
    const data = PRODUCT_DATA[productId];

    if (!data) return <div style={{ padding: 80, textAlign: "center" }}>Product not found.</div>;
    const { theme } = data;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={productId}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#f8fafc" }}
            >
                {/* ── HERO ───────────────────────────────────────────────────────── */}
                <section style={{ background: "#020617", paddingTop: 180, position: "relative", overflow: "hidden" }}>
                    {/* Architectural Ambient Glow */}
                    <div style={{ position: "absolute", right: "-10%", top: "-10%", width: "70%", height: "100%", background: `radial-gradient(ellipse at center, ${theme.glow} 0%, transparent 60%)`, pointerEvents: "none", opacity: 0.6 }} />
                    <div style={{ position: "absolute", left: "-5%", bottom: 0, width: "40%", height: "50%", background: `radial-gradient(circle at bottom, ${theme.soft} 0%, transparent 70%)`, pointerEvents: "none", opacity: 0.4 }} />

                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "center" }}>

                            {/* Left Content */}
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ paddingBottom: 100, position: "relative", zIndex: 10 }}>
                                <motion.div variants={fadeUp} style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                                    color: theme.border, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em",
                                    padding: "6px 16px", borderRadius: 100, marginBottom: 32
                                }}>
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: theme.primary, boxShadow: `0 0 10px ${theme.primary}` }} />
                                    {data.badge}
                                </motion.div>

                                <motion.h1 variants={fadeUp} style={{ fontSize: 64, fontWeight: 800, color: "#ffffff", lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
                                    {data.title}
                                </motion.h1>

                                <motion.p variants={fadeUp} style={{ fontSize: 24, color: "#e2e8f0", fontWeight: 400, marginBottom: 24, lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                                    {data.tagline}
                                </motion.p>

                                <motion.p variants={fadeUp} style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.7, marginBottom: 48, maxWidth: 520 }}>
                                    {data.description}
                                </motion.p>

                                <motion.div variants={fadeUp} style={{ display: "flex", gap: 16 }}>
                                    <button style={{
                                        display: "flex", alignItems: "center", gap: 8,
                                        background: theme.primary, color: "#fff", border: "none",
                                        borderRadius: 10, padding: "16px 32px", fontSize: 15, fontWeight: 600,
                                        cursor: "pointer", transition: "all 0.2s", boxShadow: `0 8px 24px -8px ${theme.primary}`
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = theme.primary; e.currentTarget.style.transform = "translateY(0)"; }}
                                    >
                                        Book a Demo <ArrowRight size={18} />
                                    </button>
                                    {/* <button style={{
                                        display: "flex", alignItems: "center", gap: 8,
                                        background: "rgba(255,255,255,0.05)", color: "#f8fafc",
                                        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10,
                                        padding: "16px 32px", fontSize: 15, fontWeight: 500,
                                        cursor: "pointer", transition: "all 0.2s", backdropFilter: "blur(10px)"
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                                    >
                                        <Play size={16} /> Watch Demo
                                    </button> */}
                                </motion.div>
                            </motion.div>

                            {/* Right Hero Image */}
                            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ position: "relative", zIndex: 10 }}>
                                <div style={{
                                    borderRadius: "24px 24px 0 0", overflow: "hidden",
                                    border: `1px solid rgba(255,255,255,0.1)`, borderBottom: "none",
                                    boxShadow: "0 -20px 60px rgba(0,0,0,0.5)", position: "relative", height: 460
                                }}>
                                    <img src={data.heroImage} alt={data.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }} />
                                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to top, #020617, transparent)" }} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── STATS BAR ─────────────────────────────────────────────────── */}
                <section style={{ background: "#ffffff", borderBottom: "1px solid #f1f5f9", position: "relative", zIndex: 20 }}>
                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                            {data.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        padding: "48px 40px",
                                        borderRight: i < 2 ? "1px solid #f1f5f9" : "none",
                                        textAlign: "center" // ← Added this property to center the content
                                    }}
                                >
                                    <div style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                                        {stat.prior}
                                    </div>
                                    <div style={{ fontSize: 48, fontWeight: 800, color: theme.primary, letterSpacing: "-0.03em", marginBottom: 8, lineHeight: 1 }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: 16, color: "#475569", fontWeight: 500 }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FEATURES GRID ────────────────────────────────────────────── */}
                <section style={{ padding: "120px 0" }}>
                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ textAlign: "center", marginBottom: 80 }}>
                            <motion.h2 variants={fadeUp} style={{ fontSize: 42, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", margin: "0 0 16px" }}>
                                Everything you need to succeed.
                            </motion.h2>
                            <motion.p variants={fadeUp} style={{ fontSize: 18, color: "#64748b", margin: 0, maxWidth: 600, marginInline: "auto", lineHeight: 1.6 }}>
                                Purpose-built features designed to work together seamlessly, giving your team the ultimate operational advantage.
                            </motion.p>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
                        >
                            {data.features.map((f, i) => (<FeatureCard key={i} {...f} theme={theme} />))}
                        </motion.div>
                    </div>
                </section>

                {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
                <section style={{ background: "#ffffff", padding: "120px 0", borderTop: "1px solid #f1f5f9" }}>
                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px 0 90px" }}>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                            <motion.div variants={fadeUp} style={{ marginBottom: 64 }}>
                                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: theme.primary, textTransform: "uppercase" }}>
                                    Deep Infrastructure
                                </span>
                                <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", margin: "12px 0 0" }}>
                                    Built for complex workflows.
                                </h2>
                            </motion.div>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "64px 100px" }}>
                                {data.capabilities.map((cap, i) => (<CapabilityGroup key={i} {...cap} theme={theme} />))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
                <section style={{ background: theme.primary, padding: "100px 0", position: "relative", overflow: "hidden" }}>
                    {/* Background Pattern */}
                    <div style={{ position: "absolute", inset: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px", textAlign: "center", position: "relative", zIndex: 10 }}>
                        <Quote size={48} color="rgba(255,255,255,0.2)" style={{ margin: "0 auto 32px" }} />
                        <blockquote style={{ fontSize: 28, fontWeight: 400, color: "#ffffff", lineHeight: 1.5, margin: "0 0 40px", letterSpacing: "-0.01em" }}>
                            "{data.testimonial.quote}"
                        </blockquote>
                        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 16 }}>
                            {[...Array(5)].map((_, i) => (<Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />))}
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{data.testimonial.name}</div>
                        <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)" }}>{data.testimonial.role}</div>
                    </div>
                </section>

                {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
                <section style={{ background: "#020617", padding: "120px 0", textAlign: "center" }}>
                    <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 40px" }}>
                        <h2 style={{ fontSize: 44, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", margin: "0 0 20px" }}>
                            Ready to take control?
                        </h2>
                        <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 48, lineHeight: 1.6 }}>
                            Join the industry leaders using {data.title} to transform their daily operations.
                        </p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                            <button style={{
                                background: theme.primary, color: "#fff", border: "none", borderRadius: 10,
                                padding: "16px 36px", fontSize: 16, fontWeight: 600, cursor: "pointer",
                                transition: "all 0.2s", boxShadow: `0 8px 24px -8px ${theme.primary}`
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = theme.primary; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                Book a Demo
                            </button>
                        </div>
                        <p style={{ fontSize: 14, color: "#475569", marginTop: 24, fontWeight: 500 }}>
                            No credit card required · Free forever plan available
                        </p>
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>
    );
}

// ─── DEMO WRAPPER ────────────────────────────────────────────────────────────
const PRODUCTS = [
    { id: "financemanager", label: "Finance Manager", color: "#2563eb" },
    { id: "crmportal", label: "CRM Portal", color: "#059669" },
    { id: "schoolmanager", label: "School Manager", color: "#7c3aed" },
    { id: "inventoryai", label: "InventoryAI", color: "#d97706" },
    { id: "clinicmanager", label: "Clinic Manager", color: "#dc2626" },
    { id: "kitchendisplaysystem", label: "Kitchen Display System", color: "#f59e0b" },
];

export function ProductPageDemo()
{
    const [active, setActive] = useState("financemanager");

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <nav style={{
                position: "sticky", top: 0, zIndex: 100, background: "rgba(2, 6, 23, 0.8)",
                backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex", justifyContent: "center", gap: 8, padding: "16px", flexWrap: "wrap"
            }}>
                {PRODUCTS.map((p) => (
                    <button
                        key={p.id} onClick={() => setActive(p.id)}
                        style={{
                            background: active === p.id ? "rgba(255,255,255,0.1)" : "transparent",
                            color: active === p.id ? "#fff" : "#94a3b8",
                            border: `1px solid ${active === p.id ? "rgba(255,255,255,0.15)" : "transparent"}`,
                            borderRadius: 100, padding: "8px 20px", fontSize: 14, fontWeight: 600,
                            cursor: "pointer", transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => { if (active !== p.id) e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { if (active !== p.id) e.currentTarget.style.color = "#94a3b8"; }}
                    >
                        {p.label}
                    </button>
                ))}
            </nav>
            <ProductPage productId={active} />
        </div>
    );
}