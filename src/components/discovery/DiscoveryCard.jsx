import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import "../../styles/discovery-card.css";

// Added 'link' prop here 👇
export default function DiscoveryCard({ title, tagline, description, image, link })
{
    const navigate = useNavigate(); // <--- 2. Initialize Hook

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(smoothY, [-0.4, 0.4], [-12, 12]);
    const rotateY = useTransform(smoothX, [-0.4, 0.4], [12, -12]);

    const rafRef = useRef(null);
    const pendingXY = useRef({ x: 0, y: 0 });

    function handlePointerMove(e)
    {
        const rect = e.currentTarget.getBoundingClientRect();
        let x = (e.clientX - rect.left) / rect.width - 0.5;
        let y = (e.clientY - rect.top) / rect.height - 0.5;
        pendingXY.current.x = Math.max(-0.4, Math.min(0.4, x));
        pendingXY.current.y = Math.max(-0.4, Math.min(0.4, y));
        if (rafRef.current !== null) return;
        rafRef.current = requestAnimationFrame(() => {
            rafRef.current = null;
            mouseX.set(pendingXY.current.x);
            mouseY.set(pendingXY.current.y);
        });
    }

    function handlePointerLeave()
    {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        mouseX.set(0);
        mouseY.set(0);
    }

    // 3. Handle Navigation Click
    const handleViewMore = (e) =>
    {
        e.stopPropagation(); // Prevent card tilt interference
        if (link)
        {
            // Check if it's an external link or internal route
            if (link.startsWith("http"))
            {
                window.open(link, "_blank", "noopener,noreferrer");
            } else
            {
                navigate(link);
                // Force scroll if there is a hash
                if (link.includes("#"))
                {
                    setTimeout(() =>
                    {
                        const id = link.split("#")[1];
                        const element = document.getElementById(id);
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }
            }
        }
    };

    const [active, setActive] = useState(false);

    return (
        <motion.div
            className="discovery-card"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onHoverStart={() => setActive(true)}
            onHoverEnd={() => setActive(false)}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 900,
                willChange: "transform",
            }}
            initial="hidden"
            animate={active ? "visible" : "hidden"}
            transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.9 }}
        >
            <div className="card-bg">
                <img src={image} alt={title} loading="lazy" />
                <div className="card-overlay" />
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3>{title}</h3>
                    <p className="tagline">{tagline}</p>
                </div>
                <div className="card-body">
                    <motion.p
                        className="description"
                        variants={{
                            hidden: { opacity: 0, y: 14, scale: 0.96 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {description}
                    </motion.p>

                    {/* 4. Link Trigger */}
                    {link && link.startsWith("http") ? (
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="view-more" 
                            style={{ textDecoration: 'none' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            View more
                        </a>
                    ) : (
                        <Link 
                            to={link || "#"} 
                            className="view-more" 
                            style={{ textDecoration: 'none' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            View more
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

