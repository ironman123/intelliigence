import { motion } from "framer-motion";
import { tickerReveal, tickerRoll } from "../animations/ticker";
import "../styles/ticker.css";

const TEXT = "PYTHON • PYTORCH • LANGCHAIN • DOCKER • KUBERNETES • RAY • HUGGING FACE • vLLM • OLLAMA • LLAMAINDEX • FASTAPI • TERRAFORM • CUDA • POSTGRESQL • KAFKA";
export default function Ticker()
{
    return (
        <motion.section
            className="ticker-section"
            variants={tickerReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
        >
            <div className="ticker-wrapper">
                <motion.div
                    className="ticker-track"
                    animate="animate"
                    whileHover="paused"
                    variants={tickerRoll}
                >
                    <span>{TEXT}</span>
                    <span>{TEXT}</span>
                </motion.div>
            </div>
        </motion.section>
    );
}
