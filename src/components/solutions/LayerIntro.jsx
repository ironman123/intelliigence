import { motion } from "framer-motion";
import "../../styles/solutions/layer-intro.css";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};

const item = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const lineVariants = {
    hidden:  { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 } },
};

const dotVariants = {
    hidden:  { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut", delay: 0.85 } },
};

export default function LayerIntro({ headline, description, bullets })
{
    return (
        <motion.section
            className="layer-intro"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
        >
            <div className="layer-intro-inner">
                {/* Animated left border line */}
                <motion.div
                    className="layer-intro-line"
                    variants={lineVariants}
                    style={{ transformOrigin: "top center" }}
                />
                {/* Glowing dot that appears after line draws */}
                <motion.div className="layer-intro-dot" variants={dotVariants} />

                <motion.h1 variants={item}>{headline}</motion.h1>

                <motion.p variants={item} className="layer-intro-description">
                    {description}
                </motion.p>

                {bullets && (
                    <motion.ul variants={container} className="layer-intro-bullets">
                        {bullets.map((bullet, i) => (
                            <motion.li key={i} variants={item}>{bullet}</motion.li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </motion.section>
    );
}
