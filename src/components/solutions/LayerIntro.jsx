import { motion } from "framer-motion";
import "../../styles/solutions/layer-intro.css";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function LayerIntro({ headline, description, bullets })
{
    return (
        <motion.section
            className="layer-intro"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="layer-intro-inner">
                <motion.h1 variants={item}>{headline}</motion.h1>

                <motion.p variants={item} className="layer-intro-description">
                    {description}
                </motion.p>

                {bullets && (
                    <motion.ul variants={container} className="layer-intro-bullets">
                        {bullets.map((bullet, index) => (
                            <motion.li key={index} variants={item}>
                                {bullet}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </motion.section>
    );
}
