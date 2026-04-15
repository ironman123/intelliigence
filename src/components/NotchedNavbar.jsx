import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import
{
    LineChart, Users, GraduationCap, Activity, ChefHat,
    Satellite, ChevronDown, ArrowUpRight, X,
    Package
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import { navVariants, drawerVariants, notchVariants } from "../animations/navbarAnimations";
import "../styles/navbar.css";

// ─── Products Data ───────────────────────────────────────────────────────────
const SAAS_PRODUCTS = [
    {
        id: "financemanager",
        category: "FINANCIAL MANAGEMENT",
        icon: LineChart,
        iconColor: "#3b82f6",
        iconBg: "rgba(59,130,246,0.12)",
        title: "Finance Manager",
        description: "Accounting, invoicing, tax compliance, and cash flow forecasting.",
        tags: ["GST-ready", "Auto-reconciliation"],
        link: "/products/financemanager",
    },
    {
        id: "crmportal",
        category: "CUSTOMER EXPERIENCE",
        icon: Users,
        iconColor: "#10b981",
        iconBg: "rgba(16,185,129,0.12)",
        title: "CRM Portal",
        description: "Track every deal, automate follow-ups, and personalize every touchpoint.",
        tags: ["Sales pipeline", "WhatsApp integration"],
        link: "/products/crmportal",
    },
    {
        id: "schoolmanager",
        category: "EDUCATION",
        icon: GraduationCap,
        iconColor: "#818cf8",
        iconBg: "rgba(129,140,248,0.12)",
        title: "School Manager",
        description: "LMS optimized for high-stakes competitive exams like KPSC and GATE.",
        tags: ["Mock engines", "Performance analytics"],
        link: "/products/schoolmanager",
    },
    {
        id: "clinicmanager",
        category: "HEALTHCARE",
        icon: Activity,
        iconColor: "#f43f5e",
        iconBg: "rgba(244,63,94,0.12)",
        title: "Clinic Manager",
        description: "Physician-First Automation. No inferences pass without licensed doctor review.",
        tags: ["Physician-in-the-loop", "EMR Integration"],
        link: "/products/clinicmanager",
    },
    {
        id: "kitchendisplaysystem",
        category: "HOSPITALITY",
        icon: ChefHat,
        iconColor: "#f59e0b",
        iconBg: "rgba(245,158,11,0.12)",
        title: "Kitchen Display System",
        description: "Multi-branch KDS engineered for real-time order routing.",
        tags: ["Multi-branch", "Real-time routing"],
        link: "/products/kitchendisplaysystem",
    },
    {
        id: "inventorymanager",
        category: "SUPPLY CHAIN",
        icon: Package,
        iconColor: "#d97709",
        iconBg: "rgba(217,119,9,0.12)",
        title: "Inventory Manager",
        description: "Plug capital leaks with predictive, real-time inventory tracking.",
        tags: ["Predictive Forecasting", "Real-Time Tracking", "Loss Prevention"],
        link: "/products/inventorymanager"
    },
    // {
    //     id: "omnisense",
    //     category: "DEFENSE & INFRA",
    //     icon: Satellite,
    //     iconColor: "#94a3b8",
    //     iconBg: "rgba(148,163,184,0.12)",
    //     title: "OmniSense",
    //     description: "Autonomous sensor fusion and drone management for operational awareness.",
    //     tags: ["Sensor fusion", "Edge AI"],
    //     link: "/products/omnisense",
    // },
];

// ─── Mega Menu ───────────────────────────────────────────────────────────────
const megaMenuVariants = {
    hidden: { opacity: 0, y: -8, scaleY: 0.96, transformOrigin: "top" },
    visible: {
        opacity: 1, y: 0, scaleY: 1,
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
        opacity: 0, y: -6, scaleY: 0.97,
        transition: { duration: 0.15, ease: "easeIn" }
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.04, duration: 0.2, ease: "easeOut" }
    }),
};

function MegaMenu({ onClose })
{
    return (
        <motion.div
            className="nb-mega"
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseLeave={onClose}
        >
            <div className="nb-mega-inner">
                <div className="nb-mega-header">
                    <span className="nb-mega-eyebrow">PRODUCTS</span>
                    <p className="nb-mega-tagline">Intelligence-grade software for every vertical</p>
                </div>
                <div className="nb-mega-grid">
                    {SAAS_PRODUCTS.map((product, i) =>
                    {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={product.id}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Link
                                    to={product.link}
                                    className="nb-product-card"
                                    onClick={onClose}
                                >
                                    <div className="nb-product-card-top">
                                        <div
                                            className="nb-product-icon"
                                            style={{ background: product.iconBg }}
                                        >
                                            <Icon size={17} color={product.iconColor} strokeWidth={2} />
                                        </div>
                                        <span
                                            className="nb-product-category"
                                            style={{ color: product.iconColor }}
                                        >
                                            {product.category}
                                        </span>
                                        <ArrowUpRight
                                            size={14}
                                            className="nb-product-arrow"
                                            color="rgba(148,163,184,0.4)"
                                        />
                                    </div>
                                    <h4 className="nb-product-title">{product.title}</h4>
                                    <p className="nb-product-desc">{product.description}</p>
                                    <div className="nb-product-tags">
                                        {product.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="nb-product-tag"
                                                style={{
                                                    background: product.iconBg,
                                                    color: product.iconColor
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="nb-mega-footer">
                    <Link to="/solutions" className="nb-mega-cta" onClick={onClose}>
                        View all solutions
                        <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function NotchedNavbar()
{
    const [collapsed, setCollapsed] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const megaTimeoutRef = useRef(null);
    const [isProjectOpen, setIsProjectOpen] = useState(false);


    const location = useLocation();
    const navigate = useNavigate();
    const isSolutionsPage = location.pathname.includes("solutions");
    const isProductsPage = location.pathname.includes("products");

    useEffect(() =>
    {
        const onScroll = () => setCollapsed(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mega on route change
    useEffect(() =>
    {
        setMegaOpen(false);
        setDrawerOpen(false);
    }, [location.pathname]);

    const isExpanded = !collapsed || hovered;

    const handleScrollToSection = (e, sectionId) =>
    {
        e.preventDefault();
        setDrawerOpen(false);
        const scrollLogic = (retries = 0) =>
        {
            const el = document.getElementById(sectionId);
            if (el)
            {
                window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
            } else if (retries < 6)
            {
                setTimeout(() => scrollLogic(retries + 1), 100);
            }
        };
        if (location.pathname === "/") scrollLogic();
        else { navigate("/"); setTimeout(() => scrollLogic(), 100); }
    };

    // Hover delay so the menu doesn't flicker on mouse-over gaps
    const openMega = () =>
    {
        clearTimeout(megaTimeoutRef.current);
        setMegaOpen(true);
    };
    const closeMega = () =>
    {
        megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 120);
    };

    return (
        <>
            <motion.nav
                className="nb-nav"
                variants={navVariants}
                animate={isExpanded ? "expanded" : "collapsed"}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => { setHovered(false); closeMega(); }}
            >
                <div className="nb-inner">
                    {/* Logo */}
                    <Link to="/" className="nb-logo">
                        <img src="/images/logo.png" alt="Logo" className="nb-logo-img" />
                        <span className="nb-logo-text">INTELLIGENCE</span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="nb-links">
                        <li>
                            <Link to="/" className={`nb-link ${location.pathname === "/" ? "nb-link--active" : ""}`}>
                                Home
                            </Link>
                        </li>

                        {/* Products trigger */}
                        <li
                            className="nb-link-products"
                            onMouseEnter={openMega}
                            onMouseLeave={closeMega}
                        >
                            <button
                                className={`nb-link nb-link-btn ${isProductsPage || megaOpen ? "nb-link--active" : ""}`}
                                onClick={() => setMegaOpen(o => !o)}
                                aria-expanded={megaOpen}
                            >
                                Products
                                <motion.span
                                    animate={{ rotate: megaOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ display: "flex" }}
                                >
                                    <ChevronDown size={14} strokeWidth={2.5} />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
                            </AnimatePresence>
                        </li>

                        <li>
                            <Link
                                to="/solutions"
                                className={`nb-link ${isSolutionsPage ? "nb-link--active" : ""}`}
                            >
                                Solutions
                            </Link>
                        </li>

                        {/* <li>
                            <a
                                href="/#discovery"
                                className="nb-link"
                                onClick={(e) => handleScrollToSection(e, "discovery")}
                            >
                                Discovery
                            </a>
                        </li> */}
                    </ul>

                    {/* CTA */}
                    <button onClick={e => { e.stopPropagation(); setIsProjectOpen(true); }} className="nb-cta">
                        Get Started
                    </button>

                    {/* Mobile toggle */}
                    <button className="nb-mobile-toggle" onClick={() => setDrawerOpen(true)}>
                        <span /><span /><span />
                    </button>
                </div>
            </motion.nav>

            {/* Notch */}
            {collapsed && !drawerOpen && (
                <motion.div
                    className="nb-notch"
                    initial="idle"
                    animate={isExpanded ? "active" : "idle"}
                    whileHover="hover"
                    variants={notchVariants}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => setDrawerOpen(true)}
                />
            )}

            {/* Mobile Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        <motion.div
                            className="nb-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                        />
                        <motion.div
                            className="nb-drawer"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <button className="nb-drawer-close" onClick={() => setDrawerOpen(false)}>
                                <X size={22} />
                            </button>

                            <nav className="nb-drawer-nav">
                                <Link to="/" className="nb-drawer-link" onClick={() => setDrawerOpen(false)}>
                                    Home
                                </Link>

                                {/* Mobile products accordion */}
                                <div className="nb-drawer-products">
                                    <button
                                        className="nb-drawer-link nb-drawer-link--btn"
                                        onClick={() => setMobileProductsOpen(o => !o)}
                                    >
                                        Products
                                        <motion.span
                                            animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ display: "flex" }}
                                        >
                                            <ChevronDown size={16} />
                                        </motion.span>
                                    </button>
                                    <AnimatePresence>
                                        {mobileProductsOpen && (
                                            <motion.div
                                                className="nb-drawer-products-list"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                            >
                                                {SAAS_PRODUCTS.map((p) =>
                                                {
                                                    const Icon = p.icon;
                                                    return (
                                                        <Link
                                                            key={p.id}
                                                            to={p.link}
                                                            className="nb-drawer-product-item"
                                                            onClick={() => setDrawerOpen(false)}
                                                        >
                                                            <div
                                                                className="nb-drawer-product-icon"
                                                                style={{ background: p.iconBg }}
                                                            >
                                                                <Icon size={14} color={p.iconColor} />
                                                            </div>
                                                            <div>
                                                                <div className="nb-drawer-product-name">{p.title}</div>
                                                                <div className="nb-drawer-product-cat" style={{ color: p.iconColor }}>
                                                                    {p.category}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link
                                    to="/solutions"
                                    className="nb-drawer-link"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    Solutions
                                </Link>
                                <a
                                    href="/#discovery"
                                    className="nb-drawer-link"
                                    onClick={(e) => handleScrollToSection(e, "discovery")}
                                >
                                    Discovery
                                </a>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <ProjectModal isOpen={isProjectOpen} onClose={() => setIsProjectOpen(false)} />
        </>
    );
}