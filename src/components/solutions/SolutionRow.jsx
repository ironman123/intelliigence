import { motion } from "framer-motion";
import "../../styles/solutions/solution-row.css";

const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0 } },
};

const ulVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.22 } },
};

export default function SolutionRow({ solution, reverse, index = 0 })
{
    // Directional variants computed per instance
    const imgVariants = {
        hidden: {
            clipPath: reverse ? "inset(0 0% 0 100%)" : "inset(0 100% 0 0%)",
            opacity: 0.5,
        },
        visible: {
            clipPath: "inset(0 0% 0 0%)",
            opacity: 1,
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: reverse ? 28 : -28 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const bulletVariants = {
        hidden: { opacity: 0, x: reverse ? 16 : -16 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <motion.section
            id={solution.id}
            className={`solution-row ${reverse ? "reverse" : ""}`}
            data-num={String(index + 1).padStart(2, "0")}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            {/* IMAGE */}
            <motion.div className="solution-image" variants={imgVariants}>
                <div className="solution-image-frame">
                    <img src={solution.image} alt={solution.headline} loading="lazy" />
                    <div className="solution-image-shimmer" aria-hidden="true" />
                </div>
            </motion.div>

            {/* TEXT */}
            <motion.div className="solution-text" variants={sectionVariants}>
                <motion.div className="solution-tag" variants={textVariants}>
                    {String(index + 1).padStart(2, "0")}
                </motion.div>

                <motion.h3 variants={textVariants}>
                    {solution.headline}
                </motion.h3>

                <motion.p variants={{ ...textVariants, visible: { ...textVariants.visible, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 } } }}>
                    {solution.description}
                </motion.p>

                {solution.points && (
                    <motion.ul variants={ulVariants}>
                        {solution.points.map((point, i) => (
                            <motion.li key={i} variants={bulletVariants}>
                                {point}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </motion.div>
        </motion.section>
    );
}
