import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router";

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

export default function SolutionPanel({ layer, index })
{
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const lightBackground = useTransform(
        [mouseX, mouseY],
        ([x, y]) =>
            `radial-gradient(
        500px at ${x}px ${y}px,
        rgba(255,255,255,0.22),
        rgba(255,255,255,0.08),
        transparent 60%
      )`
    );

    function handleMouseMove(e)
    {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    function handleMouseLeave()
    {
        mouseX.set(-999);
        mouseY.set(-999);
    }

    return (
        <MotionLink
            className="solution-panel"
            to={layer.route}
            style={{ backgroundImage: `url(${layer.image})`, textDecoration: 'none' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.07 }}
        >
            {/* Cursor-follow light */}
            <motion.div
                className="solution-light"
                style={{ background: lightBackground }}
            />

            {/* Glass overlay */}
            <motion.div
                className="solution-glass"
                whileHover={{
                    backdropFilter: "blur(14px)",
                    backgroundColor: "rgba(255,255,255,0.18)",
                }}
                transition={{ duration: 0.35 }}
            />

            {/* Content */}
            <div className="solution-content">
                <h1>{layer.label}</h1>
                <p>{layer.tagline}</p>
            </div>
        </MotionLink>
    );
}


