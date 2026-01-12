import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navVariants, drawerVariants, notchVariants } from "../animations/navbarAnimations";
import "../styles/navbar.css";

export default function NotchedNavbar()
{
    const [collapsed, setCollapsed] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isSolutionsPage = location.pathname.includes("solutions");

    useEffect(() =>
    {
        const onScroll = () =>
        {
            setCollapsed(window.scrollY > 80);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isExpanded = !collapsed || hovered;

    // --- ROBUST SCROLL HANDLER (With Retry Logic) ---
    const handleScrollToSection = (e, sectionId) =>
    {
        e.preventDefault();
        setDrawerOpen(false);

        const scrollLogic = (retries = 0) =>
        {
            const element = document.getElementById(sectionId);

            if (element)
            {
                // Element found! Scroll to it with offset
                const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            } else if (retries < 6)
            {
                // Element not found yet? Wait 100ms and try again (up to 6 times)
                setTimeout(() => scrollLogic(retries + 1), 100);
            }
        };

        if (location.pathname === "/")
        {
            // If already on Home, scroll immediately
            scrollLogic();
        } else
        {
            // If elsewhere, Navigate first, then start looking
            navigate("/");
            // Give React Router a moment to switch context before we start polling
            setTimeout(() => scrollLogic(), 100);
        }
    };

    return (
        <>
            <motion.nav
                className="notched-nav"
                variants={navVariants}
                animate={isExpanded ? "expanded" : "collapsed"}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="nav-inner">
                    <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                        INTELLIGENCE
                    </Link>

                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>

                        <li>
                            <Link
                                to="/solutions"
                                className={isSolutionsPage ? "active-link" : ""}
                                style={{ color: isSolutionsPage ? "#fff" : "" }}
                            >
                                Solutions
                            </Link>
                        </li>

                        <li>
                            <a
                                href="/#discovery"
                                onClick={(e) => handleScrollToSection(e, "discovery")}
                                style={{ cursor: "pointer" }}
                            >
                                Discovery
                            </a>
                        </li>
                    </ul>

                    <button
                        className="mobile-toggle"
                        onClick={() => setDrawerOpen(true)}
                    >
                        ☰
                    </button>
                </div>
            </motion.nav>

            {/* Notch and Drawer Logic remains the same... */}
            {collapsed && !drawerOpen && (
                <motion.div
                    className="nav-notch"
                    initial="idle"
                    animate={isExpanded ? "active" : "idle"}
                    whileHover="hover"
                    variants={notchVariants}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => setDrawerOpen(true)}
                />
            )}

            <AnimatePresence>
                {drawerOpen && (
                    <>
                        <motion.div
                            className="drawer-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                        />

                        <motion.div
                            className="mobile-drawer"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <ul>
                                <li onClick={() => { navigate("/"); setDrawerOpen(false); }}>
                                    Home
                                </li>
                                <li onClick={() => { navigate("/solutions"); setDrawerOpen(false); }}>
                                    Solutions
                                </li>
                                {/* UPDATED MOBILE LINK */}
                                <li>
                                    <a
                                        href="/#discovery"
                                        onClick={(e) => handleScrollToSection(e, "discovery")}
                                    >
                                        Discovery
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}