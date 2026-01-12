import { motion } from "framer-motion";
import { ethicsPill } from "../animations/ethicsPillAnimations";
import "../styles/ethics-pill.css";

export default function EthicsPill({ icon, title, description, index })
{
    const fromLeft = index < 2;

    return (
        <motion.div
            className="ethics-pill"
            variants={ethicsPill}
            initial={fromLeft ? "hiddenLeft" : "hiddenRight"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            whileHover="hover"
        >
            <div className="pill-main">
                <span className="ethics-icon">{icon}</span>
                <span className="ethics-title">{title}</span>
            </div>

            <motion.p
                className="ethics-description"
                variants={{
                    hover: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    },
                }}
                initial={{ opacity: 0, y: 10 }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
}
