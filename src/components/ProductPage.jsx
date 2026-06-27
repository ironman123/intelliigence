import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import
    {
        ArrowRight, CheckCircle2, Star, Quote,
        Calculator, ShieldCheck, Receipt, TrendingUp, CreditCard, LineChart,
        Target, BrainCircuit, MessageCircle, Users, Zap, Mail,
        Coins, Calendar, GraduationCap, Bell, BarChart,
        Radar, BarChart3, Building2, Truck, ScanLine,
        FileText, Pill,
        MonitorPlay, Network, Timer, PackageMinus, Activity, TerminalSquare, ClipboardList,
        CalendarCheck
    } from "lucide-react";
import ProjectModal from "./ProjectModal";
import ProductParticles from "./ProductParticles";
import SteamButton from "./SteamButton";

// ─── RESPONSIVE HOOK ─────────────────────────────────────────────────────────
// SSR-safe: each flag comes from matchMedia via useSyncExternalStore, so the
// server and the first client (hydration) render return the SAME values
// (desktop defaults), then update after mount. No hydration mismatch, no snap.
function useBreakpoint()
{
    const isMobile = useMediaQuery("(max-width: 639px)");
    const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
    const isDesktop = useMediaQuery("(min-width: 1024px)", true);
    return { isMobile, isTablet, isDesktop };
}

// ─── PRODUCT DATA ────────────────────────────────────────────────────────────
const PRODUCT_DATA = {
    financemanager: {
        badge: "FINANCIAL MANAGEMENT",
        title: "Finance Manager",
        tagline: "Financial management that thinks ahead.",
        description: "Complete accounting, invoicing, tax compliance and cash flow forecasting — all in one intelligent platform designed for modern businesses.",
        theme: { primary: "#2563eb", primaryRgb: "37,99,235", light: "#eff6ff", border: "#bfdbfe", accent: "#1d4ed8", soft: "rgba(37,99,235,0.08)", glow: "rgba(37,99,235,0.15)" },
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
        theme: { primary: "#059669", primaryRgb: "5,150,105", light: "#ecfdf5", border: "#a7f3d0", accent: "#047857", soft: "rgba(5,150,105,0.08)", glow: "rgba(5,150,105,0.15)" },
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
        tagline: "Run your school. Not just your spreadsheets.",
        description: "From the moment a student applies to the day they graduate — admissions, attendance, fees, exams, and parent engagement all managed from one unified platform built for modern schools.",
        theme: { primary: "#6366f1", primaryRgb: "99,102,241", light: "#eef2ff", border: "#c7d2fe", accent: "#4f46e5", soft: "rgba(99,102,241,0.08)", glow: "rgba(99,102,241,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
        stats: [
            { value: "70%", label: "Reduction in manual admin work", prior: "automated workflows" },
            { value: "3x", label: "Faster fee collection cycles", prior: "online payment integration" },
            { value: "95%", label: "Parent app engagement rate", prior: "real-time notifications" },
        ],
        features: [
            { icon: ClipboardList, title: "Admissions Portal", desc: "Digital application forms, document uploads, merit-based shortlisting, and automated enrollment — handle hundreds of applicants without a single paper form." },
            { icon: Users, title: "Student Profiles", desc: "Centralized records for every student: academic history, attendance, health info, emergency contacts, and disciplinary logs in one always-accessible profile." },
            { icon: Coins, title: "Fee Management", desc: "Configure multi-tier fee structures, automate payment reminders, accept online payments, and generate instant receipts — with a full ledger for trustees." },
            { icon: Calendar, title: "Timetable Engine", desc: "Smart scheduling that accounts for teacher availability, subject loads, and room capacity — resolve conflicts in minutes, not days." },
            { icon: GraduationCap, title: "Exams & Report Cards", desc: "Manage internal assessments, publish results, generate customizable report cards, and schedule parent-teacher meetings from one screen." },
            { icon: Bell, title: "Parent Communication", desc: "Push notifications, SMS alerts, event announcements, and two-way messaging — parents stay informed without a single phone call to the front desk." },
        ],
        capabilities: [
            { title: "Student Lifecycle", items: ["Online admissions with document verification", "Biometric-ready attendance tracking", "Health records and emergency contact management", "Disciplinary log and behavior tracking", "Alumni records and engagement tools"] },
            { title: "Academic Operations", items: ["Curriculum and lesson plan management", "Homework and assignment tracking", "Internal grading and mark entry", "Customizable report card templates", "Certificate and bonafide letter generation"] },
            { title: "Finance & Fees", items: ["Flexible, multi-tier fee structures", "Online payment gateway integration", "Scholarship and concession management", "Automated late fee calculation", "Real-time financial reports for management"] },
            { title: "Communication & Engagement", items: ["Parent and student mobile app", "Push, SMS, and email notification channels", "Event calendar and school announcements", "Parent-teacher meeting scheduler", "Emergency broadcast messaging"] },
        ],
        testimonial: { quote: "We replaced three different tools with School Manager. Our admin team saves hours every day, fee collection went from chaotic to seamless, and parents actually know what's happening — that alone was worth it.", name: "Rekha Nair", role: "Principal, Greenfield International School" },
    },

    clinicmanager: {
        badge: "HEALTHCARE MANAGEMENT",
        title: "Clinic Manager",
        tagline: "Less paperwork. More patient care.",
        description: "A complete clinic operations platform — appointments, patient records, prescriptions, billing, and follow-ups — built for solo practitioners and growing multi-branch clinics.",
        theme: { primary: "#f43f5e", primaryRgb: "244,63,94", light: "#fff1f2", border: "#fecdd3", accent: "#e11d48", soft: "rgba(244,63,94,0.08)", glow: "rgba(244,63,94,0.15)" },
        heroImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
        stats: [
            { value: "60%", label: "Drop in scheduling conflicts", prior: "smart appointment engine" },
            { value: "40%", label: "Faster patient billing cycles", prior: "integrated invoicing" },
            { value: "80%", label: "Reduction in missed follow-ups", prior: "automated reminders" },
        ],
        features: [
            { icon: CalendarCheck, title: "Appointment Scheduling", desc: "Online and walk-in booking with real-time slot availability, doctor-wise calendars, and automated patient reminders via SMS and WhatsApp." },
            { icon: FileText, title: "Electronic Medical Records", desc: "Structured patient histories, visit notes, lab results, and uploaded documents — all searchable and accessible across branches in seconds." },
            { icon: Pill, title: "Prescription Management", desc: "Digital prescriptions with a drug database, dosage templates, and one-click refills. Print or share with patients instantly." },
            { icon: Receipt, title: "Billing & Invoicing", desc: "Generate itemized invoices, track payments, manage insurance claims, and produce GST-compliant receipts — all from within the patient visit flow." },
            { icon: Bell, title: "Follow-up Automation", desc: "Scheduled reminders for post-visit follow-ups, medication renewals, and preventive care — sent automatically so no patient falls through the cracks." },
            { icon: BarChart, title: "Clinic Analytics", desc: "Track patient footfall, revenue trends, doctor performance, and appointment no-show rates with dashboards built for clinic owners and administrators." },
        ],
        capabilities: [
            { title: "Patient Management", items: ["Complete patient registration and profiles", "Visit history and clinical notes", "Lab and diagnostic report uploads", "Allergy and chronic condition flags", "Family and dependent record linking"] },
            { title: "Clinical Workflow", items: ["Doctor-wise appointment queues", "Digital prescription with drug database", "Referral letter and certificate generation", "Procedure and treatment tracking", "Vitals and nursing notes capture"] },
            { title: "Billing & Compliance", items: ["Itemized invoice and receipt generation", "Insurance and TPA claim management", "GST-compliant billing", "Payment tracking and outstanding reports", "Audit trail for every transaction"] },
            { title: "Operations & Growth", items: ["Multi-branch management from one dashboard", "Staff scheduling and shift management", "Inventory tracking for consumables and medicines", "Patient satisfaction surveys", "Revenue and growth analytics"] },
        ],
        testimonial: { quote: "Before Clinic Manager, we were managing appointments on paper and billing on a separate system. Now everything is in one place, our staff is less stressed, and patients actually get their follow-up reminders. It changed how we run the clinic.", name: "Dr. Arjun Mehta", role: "Founder, Mehta Family Clinic (3 branches)" },
    },

    inventorymanager: {
        badge: "SUPPLY CHAIN",
        title: "Inventory Manager",
        tagline: "Intelligence that anticipates demand.",
        description: "Real-time stock tracking with AI demand forecasting across multiple warehouses, eliminating stockouts and reducing excess inventory.",
        theme: { primary: "#d97706", primaryRgb: "217,119,6", light: "#fffbeb", border: "#fde68a", accent: "#b45309", soft: "rgba(217,119,6,0.08)", glow: "rgba(217,119,6,0.15)" },
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
        testimonial: { quote: "Inventory Manager's demand forecasting reduced our excess stock by 35% while eliminating stockouts. We finally have the right products at the right time.", name: "Rajesh Kumar", role: "Supply Chain Director, Bharat Retail Group" },
    },

    kitchendisplaysystem: {
        badge: "HOSPITALITY",
        title: "Kitchen Display System",
        tagline: "Kitchen system that never misses an order.",
        description: "Production-ready Kitchen Display System engineered for multi-branch synchronization and real-time order routing across every station.",
        theme: { primary: "#f59e0b", primaryRgb: "245,158,11", light: "#fffbeb", border: "#fde68a", accent: "#d97706", soft: "rgba(245,158,11,0.08)", glow: "rgba(245,158,11,0.15)" },
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

// ─── PER-PRODUCT SECTION PATTERNS ───────────────────────────────────────────
// Subtle, product-appropriate micro-patterns carried into the feature/capability sections
// so that each product's page feels visually distinct beyond just accent color.
const SECTION_PATTERNS = {
    financemanager:       (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px)`,           // ledger lines
    crmportal:            (rgb) => `radial-gradient(circle, rgba(${rgb},0.055) 1px, transparent 1px)`,  // network nodes
    schoolmanager:        (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px)`,            // notebook ruled
    clinicmanager:        (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.025) 1px, transparent 1px)`, // medical grid
    inventorymanager:     (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.03) 1px, transparent 1px)`,  // warehouse grid
    kitchendisplaysystem: (rgb) => `repeating-linear-gradient(45deg, rgba(${rgb},0.025) 0px, rgba(${rgb},0.025) 1px, transparent 1px, transparent 22px)`,      // diagonal heat
};

const SECTION_PATTERN_SIZES = {
    financemanager:       "100% 28px",
    crmportal:            "26px 26px",
    schoolmanager:        "100% 30px",
    clinicmanager:        "100% 32px, 32px 100%",
    inventorymanager:     "100% 36px, 36px 100%",
    kitchendisplaysystem: "auto",
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
const FeatureCard = ({ icon: Icon, title, desc, theme, index }) => (
    // Outer shell provides the gradient border via padding:1px + gradient background
    <motion.div
        variants={fadeUp}
        style={{
            position: "relative",
            borderRadius: 22,
            padding: "1px",
            background: `linear-gradient(145deg,
                rgba(255,255,255,0.32) 0%,
                rgba(${theme.primaryRgb},0.48) 28%,
                rgba(255,255,255,0.04) 60%,
                rgba(${theme.primaryRgb},0.22) 100%)`,
            boxShadow: `0 18px 56px -14px rgba(0,0,0,0.58), 0 4px 18px rgba(${theme.primaryRgb},0.10)`,
            cursor: "default",
            transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04) translateY(-5px)";
            e.currentTarget.style.boxShadow = `0 36px 80px -14px rgba(0,0,0,0.68), 0 8px 28px rgba(${theme.primaryRgb},0.30)`;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
            e.currentTarget.style.boxShadow = `0 18px 56px -14px rgba(0,0,0,0.58), 0 4px 18px rgba(${theme.primaryRgb},0.10)`;
        }}
    >
        {/* Inner glass surface */}
        <div style={{
            borderRadius: 21,
            overflow: "hidden",
            backdropFilter: "blur(22px) saturate(180%) brightness(1.06)",
            WebkitBackdropFilter: "blur(22px) saturate(180%) brightness(1.06)",
            background: `linear-gradient(165deg,
                rgba(${theme.primaryRgb},0.14) 0%,
                rgba(${theme.primaryRgb},0.04) 42%,
                rgba(6,8,18,0.90) 100%)`,
            boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.22)",
            position: "relative",
        }}>
            {/* Specular highlight — glass lens reflection at the top edge */}
            <div style={{
                position: "absolute",
                top: 0, left: "10%", right: "10%", height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.70) 35%, rgba(255,255,255,0.70) 65%, transparent)",
                filter: "blur(0.8px)",
                zIndex: 10, pointerEvents: "none",
            }} />

            {/* ── Tinted header band ── */}
            <div style={{
                height: 112,
                background: `linear-gradient(135deg, rgba(${theme.primaryRgb},0.26) 0%, rgba(${theme.primaryRgb},0.07) 100%)`,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "flex", alignItems: "center",
                padding: "0 24px",
                position: "relative", overflow: "hidden",
            }}>
                {/* Faint index number in the band */}
                <div style={{
                    position: "absolute", right: 14, top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "clamp(3.8rem,6vw,5rem)", fontWeight: 800,
                    color: `rgba(${theme.primaryRgb},0.22)`, lineHeight: 1,
                    userSelect: "none", pointerEvents: "none",
                    letterSpacing: "-0.05em", fontVariantNumeric: "tabular-nums"
                }}>
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* Glass icon box */}
                <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `rgba(${theme.primaryRgb},0.26)`,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.26)",
                    boxShadow: `inset 0 1.5px 0 rgba(255,255,255,0.34), 0 6px 20px rgba(${theme.primaryRgb},0.52)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#ffffff", flexShrink: 0,
                }}>
                    <Icon size={24} strokeWidth={1.5} />
                </div>
            </div>

            {/* ── Content zone ── */}
            <div style={{ padding: "22px 24px 28px" }}>
                <h3 style={{
                    fontSize: 17, fontWeight: 700, color: "#f1f5f9",
                    marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.2
                }}>
                    {title}
                </h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.72, margin: 0 }}>
                    {desc}
                </p>
            </div>
        </div>
    </motion.div>
);

const CapabilityGroup = ({ title, items, theme }) => (
    <motion.div variants={fadeUp} style={{ position: "relative", paddingLeft: "1.75rem" }}>
        {/* Animated left accent border */}
        <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 2,
            background: `linear-gradient(to bottom, ${theme.primary}, rgba(${theme.primaryRgb},0.08) 80%, transparent)`,
        }} />
        {/* Glowing dot at top of border */}
        <div style={{
            position: "absolute", left: "-4px", top: "3px",
            width: 10, height: 10, borderRadius: "50%",
            background: theme.primary,
            boxShadow: `0 0 14px 4px rgba(${theme.primaryRgb},0.55)`,
        }} />

        <h4 style={{
            fontSize: 11, fontWeight: 700, color: theme.primary,
            marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.12em",
            margin: "0 0 20px"
        }}>
            {title}
        </h4>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
            {items.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#94a3b8", lineHeight: 1.62 }}>
                    <div style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: theme.primary, flexShrink: 0,
                        marginTop: 7, opacity: 0.65
                    }} />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

// ─── MAIN PRODUCT PAGE COMPONENT ─────────────────────────────────────────────
export function ProductPage({ productId })
{
    const data = PRODUCT_DATA[productId];
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const { isMobile, isTablet, isDesktop } = useBreakpoint();

    if (!data) return <div style={{ padding: 80, textAlign: "center" }}>Product not found.</div>;
    const { theme } = data;

    // Derived layout helpers
    const px = isMobile ? "20px" : isTablet ? "32px" : "40px";
    const sectionPy = isMobile ? "72px 0" : "120px 0";
    const featuresColumns = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
    const capabilitiesColumns = isMobile ? "1fr" : "repeat(2, 1fr)";
    const statsColumns = isMobile ? "1fr" : "repeat(3, 1fr)";

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={productId}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#020617" }}
            >
                {/* ── HERO ───────────────────────────────────────────────────── */}
                <section style={{
                    background: "#020617",
                    paddingTop: isMobile ? 100 : 140,
                    position: "relative",
                    overflow: "hidden"
                }}>
                    {/* Ambient Glows */}
                    <div style={{ position: "absolute", right: "-10%", top: "-10%", width: "70%", height: "100%", background: `radial-gradient(ellipse at center, ${theme.glow} 0%, transparent 60%)`, pointerEvents: "none", opacity: 0.8 }} />
                    <div style={{ position: "absolute", left: "-5%", bottom: 0, width: "40%", height: "50%", background: `radial-gradient(circle at bottom, ${theme.soft} 0%, transparent 70%)`, pointerEvents: "none", opacity: 0.6 }} />
                    {/* Product-specific particles */}
                    <ProductParticles productId={productId} primaryColor={theme.primary} />

                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: isDesktop ? "1.1fr 0.9fr" : "1fr",
                            gap: isDesktop ? 80 : 48,
                            alignItems: "center"
                        }}>
                            {/* Left Content */}
                            <motion.div
                                initial="hidden" animate="visible" variants={staggerContainer}
                                style={{ paddingBottom: isMobile ? 40 : 80, position: "relative", zIndex: 10 }}
                            >
                                <motion.div variants={fadeUp} style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                                    color: theme.border, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                                    padding: "6px 14px", borderRadius: 100, marginBottom: 24
                                }}>
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: theme.primary, boxShadow: `0 0 10px ${theme.primary}` }} />
                                    {data.badge}
                                </motion.div>

                                <motion.h1 variants={fadeUp} style={{
                                    fontSize: isMobile ? 38 : isTablet ? 52 : 64,
                                    fontWeight: 800, color: "#ffffff",
                                    lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-0.03em"
                                }}>
                                    {data.title}
                                </motion.h1>

                                <motion.p variants={fadeUp} style={{
                                    fontSize: isMobile ? 18 : 22,
                                    color: "#e2e8f0", fontWeight: 400,
                                    marginBottom: 16, lineHeight: 1.4, letterSpacing: "-0.01em"
                                }}>
                                    {data.tagline}
                                </motion.p>

                                <motion.p variants={fadeUp} style={{
                                    fontSize: isMobile ? 15 : 17,
                                    color: "#94a3b8", lineHeight: 1.7,
                                    marginBottom: 36, maxWidth: 520
                                }}>
                                    {data.description}
                                </motion.p>

                                <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                                    <SteamButton>
                                    <button
                                        style={{
                                            display: "flex", alignItems: "center", gap: 8,
                                            background: theme.primary, color: "#fff", border: "none",
                                            borderRadius: 10, padding: isMobile ? "14px 24px" : "16px 32px",
                                            fontSize: isMobile ? 14 : 15, fontWeight: 600,
                                            cursor: "pointer", transition: "all 0.2s",
                                            boxShadow: `0 8px 24px -8px ${theme.primary}`,
                                            width: isMobile ? "100%" : "auto",
                                            justifyContent: isMobile ? "center" : "flex-start"
                                        }}
                                        onClick={e => { e.stopPropagation(); setIsProjectOpen(true); }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = theme.primary; e.currentTarget.style.transform = "translateY(0)"; }}
                                    >
                                        Book a Demo <ArrowRight size={17} />
                                    </button>
                                    </SteamButton>
                                </motion.div>
                            </motion.div>

                            {/* Right Hero Image — hidden on mobile to avoid cramping */}
                            {!isMobile && (
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    style={{ position: "relative", zIndex: 10 }}
                                >
                                    <div style={{
                                        borderRadius: "24px 24px 0 0", overflow: "hidden",
                                        border: "1px solid rgba(255,255,255,0.1)", borderBottom: "none",
                                        boxShadow: "0 -20px 60px rgba(0,0,0,0.5)", position: "relative",
                                        height: isTablet ? 320 : 420
                                    }}>
                                        <img
                                            src={data.heroImage} alt={data.title}
                                            fetchpriority="high"
                                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }}
                                        />
                                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to top, #020617, transparent)" }} />
                                    </div>
                                </motion.div>
                            )}

                            {/* Mobile hero image — full-width strip at bottom of hero */}
                            {isMobile && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    style={{ position: "relative", zIndex: 10, marginLeft: -20, marginRight: -20 }}
                                >
                                    <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                                        <img
                                            src={data.heroImage} alt={data.title}
                                            fetchpriority="high"
                                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) contrast(1.1)" }}
                                        />
                                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, #020617, transparent)" }} />
                                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, #020617, transparent)" }} />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── STATS BAR ─────────────────────────────────────────────── */}
                <section style={{ background: `linear-gradient(to bottom, rgba(${theme.primaryRgb},0.10) 0%, rgba(${theme.primaryRgb},0.03) 100%), #06080e`, borderBottom: `1px solid rgba(${theme.primaryRgb},0.18)`, position: "relative", zIndex: 20 }}>
                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: statsColumns,
                        }}>
                            {data.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12 }}
                                    style={{
                                        padding: isMobile ? "36px 20px" : "56px 40px",
                                        borderRight: !isMobile && i < 2 ? `1px solid rgba(${theme.primaryRgb},0.12)` : "none",
                                        borderBottom: isMobile && i < 2 ? `1px solid rgba(${theme.primaryRgb},0.12)` : "none",
                                        textAlign: "center",
                                        position: "relative", overflow: "hidden"
                                    }}
                                >
                                    {/* Per-stat bottom glow */}
                                    <div style={{
                                        position: "absolute", inset: 0,
                                        background: `radial-gradient(ellipse 90% 80% at 50% 110%, rgba(${theme.primaryRgb},0.13), transparent)`,
                                        pointerEvents: "none"
                                    }} />
                                    {/* "Prior" pill badge */}
                                    <div style={{
                                        display: "inline-flex", alignItems: "center", gap: 5,
                                        fontSize: 10, fontWeight: 700, color: theme.primary,
                                        textTransform: "uppercase", letterSpacing: "0.10em",
                                        padding: "3px 11px", borderRadius: 100,
                                        border: `1px solid rgba(${theme.primaryRgb},0.32)`,
                                        background: `rgba(${theme.primaryRgb},0.09)`,
                                        marginBottom: 14, position: "relative"
                                    }}>
                                        {stat.prior}
                                    </div>
                                    {/* Big stat number */}
                                    <div style={{
                                        fontSize: isMobile ? 44 : 58, fontWeight: 800,
                                        color: theme.primary, letterSpacing: "-0.04em",
                                        lineHeight: 1, marginBottom: 12, position: "relative",
                                        fontVariantNumeric: "tabular-nums"
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: 13, color: "#71717a", fontWeight: 500, lineHeight: 1.45, position: "relative" }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FEATURES GRID ─────────────────────────────────────────── */}
                <section style={{
                    padding: sectionPy,
                    backgroundImage: [
                        SECTION_PATTERNS[productId]?.(theme.primaryRgb),
                        `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(${theme.primaryRgb},0.08) 0%, transparent 60%)`
                    ].filter(Boolean).join(", "),
                    backgroundSize: [
                        SECTION_PATTERN_SIZES[productId] ?? "auto",
                        "100% 100%"
                    ].join(", "),
                    backgroundColor: "#020617"
                }}>
                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
                        <motion.div
                            initial="hidden" whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}
                            style={{ marginBottom: isMobile ? 48 : 72, position: "relative" }}
                        >
                            {/* Decorative large background text */}
                            <div style={{
                                position: "absolute", top: "50%", left: "50%",
                                transform: "translate(-50%,-50%)",
                                fontSize: "clamp(4rem,8vw,7rem)", fontWeight: 900,
                                color: `rgba(${theme.primaryRgb},0.035)`,
                                letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
                                whiteSpace: "nowrap", lineHeight: 1
                            }}>
                                {data.title.toUpperCase()}
                            </div>

                            <motion.div variants={fadeUp} style={{
                                display: "flex", alignItems: "center", gap: 12,
                                marginBottom: 20, justifyContent: "center"
                            }}>
                                <div style={{ height: 1, width: 48, background: `linear-gradient(to right, transparent, rgba(${theme.primaryRgb},0.45))` }} />
                                <span style={{
                                    fontSize: 11, fontWeight: 700, color: theme.primary,
                                    textTransform: "uppercase", letterSpacing: "0.12em"
                                }}>Core Features</span>
                                <div style={{ height: 1, width: 48, background: `linear-gradient(to left, transparent, rgba(${theme.primaryRgb},0.45))` }} />
                            </motion.div>

                            <motion.h2 variants={fadeUp} style={{
                                fontSize: isMobile ? 28 : isTablet ? 34 : 42,
                                fontWeight: 800, color: "#f1f5f9",
                                letterSpacing: "-0.03em", margin: "0 0 14px",
                                textAlign: "center"
                            }}>
                                Built for every edge case.
                            </motion.h2>
                            <motion.p variants={fadeUp} style={{
                                fontSize: isMobile ? 15 : 17,
                                color: "#64748b", margin: 0,
                                maxWidth: 520, marginInline: "auto", lineHeight: 1.65,
                                textAlign: "center"
                            }}>
                                Purpose-built features that work together seamlessly — designed around how your team actually operates.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden" whileInView="visible"
                            viewport={{ once: true }} variants={staggerContainer}
                            style={{ display: "grid", gridTemplateColumns: featuresColumns, gap: isMobile ? 16 : 22 }}
                        >
                            {data.features.map((f, i) => (<FeatureCard key={i} {...f} theme={theme} index={i} />))}
                        </motion.div>
                    </div>
                </section>

                {/* ── CAPABILITIES ──────────────────────────────────────────── */}
                <section style={{
                    padding: sectionPy,
                    borderTop: `1px solid rgba(${theme.primaryRgb},0.10)`,
                    backgroundImage: [
                        SECTION_PATTERNS[productId]?.(theme.primaryRgb),
                        `linear-gradient(to right, rgba(${theme.primaryRgb},0.07) 0%, transparent 55%)`
                    ].filter(Boolean).join(", "),
                    backgroundSize: [
                        SECTION_PATTERN_SIZES[productId] ?? "auto",
                        "100% 100%"
                    ].join(", "),
                    backgroundColor: "#06080e"
                }}>
                    <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }}>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                            <motion.div variants={fadeUp} style={{ marginBottom: isMobile ? 40 : 64, position: "relative" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                                    <div style={{
                                        width: 32, height: 32, borderRadius: 8,
                                        background: `rgba(${theme.primaryRgb},0.12)`,
                                        border: `1px solid rgba(${theme.primaryRgb},0.30)`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0
                                    }}>
                                        <div style={{ width: 10, height: 10, borderRadius: 3, background: theme.primary, opacity: 0.85 }} />
                                    </div>
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: theme.primary, textTransform: "uppercase" }}>
                                        Full Capability Stack
                                    </span>
                                </div>
                                <h2 style={{
                                    fontSize: isMobile ? 26 : isTablet ? 32 : 42,
                                    fontWeight: 800, color: "#f1f5f9",
                                    letterSpacing: "-0.03em", margin: "0 0 12px",
                                    maxWidth: 560
                                }}>
                                    Built for complex workflows.
                                </h2>
                                <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.65, margin: 0, maxWidth: 480 }}>
                                    Every feature connects. Every workflow is accounted for.
                                </p>
                            </motion.div>

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: capabilitiesColumns,
                                gap: isMobile ? "40px 0" : "56px 80px"
                            }}>
                                {data.capabilities.map((cap, i) => (<CapabilityGroup key={i} {...cap} theme={theme} />))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── TESTIMONIAL ───────────────────────────────────────────── */}
                <section style={{ background: theme.primary, padding: isMobile ? "72px 0" : "100px 0", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

                    <div style={{ maxWidth: 820, margin: "0 auto", padding: `0 ${px}`, textAlign: "center", position: "relative", zIndex: 10 }}>
                        <Quote size={isMobile ? 36 : 48} color="rgba(255,255,255,0.2)" style={{ margin: "0 auto 28px" }} />
                        <blockquote style={{
                            fontSize: isMobile ? 18 : 24,
                            fontWeight: 400, color: "#ffffff",
                            lineHeight: 1.6, margin: "0 0 32px", letterSpacing: "-0.01em"
                        }}>
                            "{data.testimonial.quote}"
                        </blockquote>
                        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 14 }}>
                            {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />))}
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{data.testimonial.name}</div>
                        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{data.testimonial.role}</div>
                    </div>
                </section>

                {/* ── FINAL CTA ─────────────────────────────────────────────── */}
                <section style={{ background: "#020617", padding: isMobile ? "72px 0" : "120px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 80% at 50% 100%, ${theme.glow}, transparent)`, pointerEvents: "none" }} />
                    <div style={{ maxWidth: 600, margin: "0 auto", padding: `0 ${px}`, position: "relative", zIndex: 1 }}>
                        <h2 style={{
                            fontSize: isMobile ? 30 : 42,
                            fontWeight: 800, color: "#ffffff",
                            letterSpacing: "-0.03em", margin: "0 0 16px"
                        }}>
                            Ready to take control?
                        </h2>
                        <p style={{ fontSize: isMobile ? 15 : 17, color: "#94a3b8", marginBottom: 40, lineHeight: 1.6 }}>
                            Join the industry leaders using {data.title} to transform their daily operations.
                        </p>
                        <SteamButton>
                        <button
                            style={{
                                background: theme.primary, color: "#fff", border: "none",
                                borderRadius: 10, padding: isMobile ? "14px 28px" : "16px 36px",
                                fontSize: isMobile ? 15 : 16, fontWeight: 600, cursor: "pointer",
                                transition: "all 0.2s", boxShadow: `0 8px 24px -8px ${theme.primary}`,
                                width: isMobile ? "100%" : "auto"
                            }}
                            onClick={e => { e.stopPropagation(); setIsProjectOpen(true); }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = theme.primary; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                            Book a Demo
                        </button>
                        </SteamButton>
                        <p style={{ fontSize: 13, color: "#475569", marginTop: 20, fontWeight: 500 }}>
                            No credit card required · Free forever plan available
                        </p>
                    </div>
                </section>
            </motion.div>

            <ProjectModal isOpen={isProjectOpen} onClose={() => setIsProjectOpen(false)} />
        </AnimatePresence>
    );
}

// ─── DEMO WRAPPER ────────────────────────────────────────────────────────────
const PRODUCTS = [
    { id: "financemanager", label: "Finance Manager", color: "#2563eb" },
    { id: "crmportal", label: "CRM Portal", color: "#059669" },
    { id: "schoolmanager", label: "School Manager", color: "#7c3aed" },
    { id: "inventorymanager", label: "Inventory Manager", color: "#d97706" },
    { id: "clinicmanager", label: "Clinic Manager", color: "#dc2626" },
    { id: "kitchendisplaysystem", label: "Kitchen Display System", color: "#f59e0b" },
];

export function ProductPageDemo()
{
    const [active, setActive] = useState("financemanager");
    const { isMobile } = useBreakpoint();

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <nav style={{
                position: "sticky", top: 0, zIndex: 100,
                background: "rgba(2, 6, 23, 0.9)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                padding: "12px 16px",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                /* hide scrollbar on mobile but keep functionality */
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}>
                <div style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: isMobile ? "nowrap" : "wrap",
                    justifyContent: isMobile ? "flex-start" : "center",
                    minWidth: "max-content",
                    margin: isMobile ? "0" : "0 auto",
                }}>
                    {PRODUCTS.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setActive(p.id)}
                            style={{
                                background: active === p.id ? "rgba(255,255,255,0.1)" : "transparent",
                                color: active === p.id ? "#fff" : "#94a3b8",
                                border: `1px solid ${active === p.id ? "rgba(255,255,255,0.15)" : "transparent"}`,
                                borderRadius: 100,
                                padding: isMobile ? "7px 14px" : "8px 20px",
                                fontSize: isMobile ? 13 : 14,
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.2s",
                                whiteSpace: "nowrap",
                                flexShrink: 0,
                            }}
                            onMouseEnter={(e) => { if (active !== p.id) e.currentTarget.style.color = "#fff"; }}
                            onMouseLeave={(e) => { if (active !== p.id) e.currentTarget.style.color = "#94a3b8"; }}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </nav>
            <ProductPage productId={active} />
        </div>
    );
}

