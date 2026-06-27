import
{
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { Link, useLocation } from "react-router";
import "../../styles/solutions/solutions-toggle.css";

const LAYERS = [
    { key: "core", label: "Core" },
    { key: "emerging", label: "Emerging" },
    { key: "vision", label: "Vision" },
];

export default function SolutionsLayerToggle()
{
    const location = useLocation();
    const active = location.pathname.split("/").pop();

    /* ──────────────────────────────
       Scroll-driven motion (stable)
    ────────────────────────────── */

    const { scrollY } = useScroll();

    // 1ï¸âƒ£ Detect scroll direction (NOT velocity)
    const direction = useTransform(scrollY, (latest, prev) =>
    {
        if (latest > prev) return 1;   // scrolling down
        if (latest < prev) return -1;  // scrolling up
        return 0;
    });

    // 2ï¸âƒ£ Direction → target X offset
    const rawX = useTransform(direction, [-1, 0, 1], [0, 0, 64]);

    // 3ï¸âƒ£ Smooth it (prevents jitter)
    const x = useSpring(rawX, {
        stiffness: 180,
        damping: 26,
        mass: 0.9,
    });

    // 4ï¸âƒ£ Follow navbar collapse vertically
    const rawY = useTransform(scrollY, [0, 140], [0, -60]);
    const y = useSpring(rawY, {
        stiffness: 160,
        damping: 28,
    });

    return (
        <motion.div
            className="solutions-toggle"
            style={{ x, y }}
        >
            <div className="solutions-toggle-inner">
                {/* Sliding indicator */}
                <motion.div
                    className="solutions-toggle-indicator"
                    layout
                    transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                    }}
                    style={{
                        width: `${100 / LAYERS.length}%`,
                        left: `${(100 / LAYERS.length) *
                            LAYERS.findIndex((l) => l.key === active)
                            }%`,
                    }}
                />

                {LAYERS.map((layer) => (
                    <Link
                        key={layer.key}
                        className={`solutions-toggle-pill ${active === layer.key ? "active" : ""
                            }`}
                        to={`/solutions/${layer.key}`}
                        style={{ textDecoration: 'none' }}
                    >
                        {layer.label}
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}


