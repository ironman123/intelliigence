import React, { useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import EntropicCanvas from "./EntropicCanvas";
import
{
    Activity,
    ChefHat,
    GraduationCap,
    Package,
    LineChart,
    Users,
    ArrowRight
} from "lucide-react";
import "../styles/saas.css";

const SAAS_PRODUCTS = [
    {
        id: "financemanager",
        category: "FINANCIAL MANAGEMENT",
        icon: <LineChart size={20} strokeWidth={2} className="text-blue-500" />,
        iconBg: "bg-blue-50",
        themeColor: "#3b82f6",
        title: "Finance Manager",
        description: "Accounting, invoicing, tax compliance, and cash flow forecasting powered by intelligent document processing.",
        tags: ["GST-ready", "Auto-reconciliation", "Multi-currency"],
        link: "/products/financemanager"
    },
    {
        id: "crmportal",
        category: "CUSTOMER EXPERIENCE",
        icon: <Users size={20} strokeWidth={2} className="text-emerald-500" />,
        iconBg: "bg-emerald-50",
        themeColor: "#10b981",
        title: "CRM Portal",
        description: "Track every deal, automate follow-ups, and personalize every customer touchpoint with highly constrained agentic workflows.",
        tags: ["Sales pipeline", "Lead scoring", "WhatsApp integration"],
        link: "/products/crmportal"
    },
    {
        id: "schoolmanager",
        category: "EDUCATION",
        icon: <GraduationCap size={20} strokeWidth={2} className="text-indigo-500" />,
        iconBg: "bg-indigo-50",
        themeColor: "#6366f1",
        title: "School Manager",
        description: "All-in-one school management platform covering admissions, attendance, fees, exams, and parent communication — built for institutions that want to run smarter.",
        tags: ["Admissions", "Fee automation", "Parent portal"],
        link: "/products/schoolmanager"
    },
    {
        id: "clinicmanager",
        category: "HEALTHCARE",
        icon: <Activity size={20} strokeWidth={2} className="text-rose-500" />,
        iconBg: "bg-rose-50",
        themeColor: "#f43f5e",
        title: "Clinic Manager",
        description: "End-to-end clinic operations software with appointment scheduling, patient records, billing, and prescription management — designed for solo practitioners and multi-branch clinics alike.",
        tags: ["Appointments", "EMR & billing", "Prescription tracking"],
        link: "/products/clinicmanager"
    },
    {
        id: "kitchendisplaysystem",
        category: "HOSPITALITY",
        icon: <ChefHat size={20} strokeWidth={2} className="text-amber-500" />,
        iconBg: "bg-amber-50",
        themeColor: "#f59e0b",
        title: "Kitchen Display System",
        description: "Production-ready Kitchen Display System (KDS) engineered for multi-branch synchronization and real-time order routing.",
        tags: ["Multi-branch", "Real-time routing", "Inventory tracking"],
        link: "/products/kitchendisplaysystem"
    },
    {
        id: "inventorymanager",
        category: "SUPPLY CHAIN",
        icon: <Package size={20} strokeWidth={2} className="text-orange-700" />,
        iconBg: "bg-orange-50",
        themeColor: "#d97709",
        title: "Inventory Manager",
        description: "Hidden stockouts and dead inventory are quietly draining your capital. Plug the leaks with real-time tracking and predictive demand forecasting that exposes blind spots before they cost you.",
        tags: ["Predictive Forecasting", "Real-Time Tracking", "Loss Prevention"],
        link: "/products/inventorymanager"
    }
    // {
    //     id: "omnisense",
    //     category: "DEFENSE & INFRA",
    //     icon: <Satellite size={20} strokeWidth={2} className="text-slate-700" />,
    //     iconBg: "bg-slate-100",
    //     themeColor: "#334155",
    //     title: "OmniSense",
    //     description: "Autonomous sensor fusion and drone management systems designed for robust operational awareness and asset tracking.",
    //     tags: ["Sensor fusion", "Edge AI", "AaaS"],
    //     link: "/products/omnisense"
    // }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function SaaSSection()
{
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="saas-section">
            <EntropicCanvas containerRef={sectionRef} scheme="light" />
            <div className="saas-header" style={{ position: "relative", zIndex: 1 }}>
                <span className="saas-eyebrow">ENTROPIC BUSINESS ECOSYSTEM</span>
                <h2 className="saas-title">Equip every team with purpose-built software</h2>
                <p className="saas-subtitle">
                    Six intelligent products — finance, sales, education, operations, healthcare, and hospitality — each built for the teams that use them daily.
                </p>
            </div>

            <motion.div
                className="saas-grid"
                style={{ position: "relative", zIndex: 1 }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {SAAS_PRODUCTS.map((product) => (
                    <motion.div key={product.id} className="saas-card" variants={cardVariants} style={{ "--card-theme": product.themeColor }}>
                        <div className="saas-card-header">
                            <div className={`saas-icon-wrapper ${product.iconBg}`}>
                                {product.icon}
                            </div>
                            <span className="saas-category">{product.category}</span>
                        </div>

                        <div className="saas-card-body">
                            <h3 className="saas-card-title">{product.title}</h3>
                            <p className="saas-card-description">{product.description}</p>
                        </div>

                        <div className="saas-tags">
                            {product.tags.map((tag, index) => (
                                <span key={index} className="saas-tag">{tag}</span>
                            ))}
                        </div>

                        <div className="saas-card-footer">
                            <Link to={product.link} className="saas-explore-link">
                                Explore <ArrowRight size={16} className="arrow-icon" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

