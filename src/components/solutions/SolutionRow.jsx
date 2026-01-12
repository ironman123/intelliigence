import { motion } from "framer-motion";
import "../../styles/solutions/solution-row.css";

const container = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function SolutionRow({ solution, reverse })
{
    return (
        <motion.section
            id={solution.id}
            className={`solution-row ${reverse ? "reverse" : ""}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* IMAGE */}
            <motion.div
                className="solution-image"
                variants={item}
            >
                <div className="solution-image-frame">
                    <img src={solution.image} alt="" />
                </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
                className="solution-text"
                variants={stagger}
            >
                <motion.h3 variants={item}>
                    {solution.headline}
                </motion.h3>

                <motion.p variants={item}>
                    {solution.description}
                </motion.p>

                {solution.points && (
                    <motion.ul variants={stagger}>
                        {solution.points.map((point, i) => (
                            <motion.li key={i} variants={item}>
                                {point}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </motion.div>
        </motion.section>
    );
}
