import { motion } from "framer-motion";
import { heroContainer, heroItem, heroImageMask, heroImage, heroImageSettle } from "../animations/hero";
import "../styles/hero.css";

export default function Hero()
{
    return (
        <motion.section
            className="hero"
            variants={heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            {/* Background video */}
            <video
                className="hero-bg-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/Pagevideo2.mp4" type="video/mp4" />
            </video>

            {/* Content layer */}
            <div className="hero-content">
                <div className="hero-left">
                    <motion.h1 variants={heroItem}>
                        Practical AI Solutions <br />
                        Built for Real-World Control
                    </motion.h1>

                    <motion.p variants={heroItem}>
                        We design and deploy intelligent AI systems that help Organizations reduce manual effort,
                        make better decisions and grow efficiently.
                    </motion.p>

                    <motion.div className="hero-actions" variants={heroItem}>
                        <motion.button className="btn-primary" whileHover={{ scale: 1.04 }}>
                            Talk to Us
                        </motion.button>

                        <motion.button
                            className="btn-secondary"
                            animate={{ opacity: [1, 0.65, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            View Solutions
                        </motion.button>
                    </motion.div>
                </div>

                {/* <motion.div
                    className="hero-right"
                    variants={heroImageSettle}
                    style={{ overflow: "hidden" }}
                >
                    <img
                        className="hero-image"
                        src="/src/assets/images/heroImage.webp"
                        alt="AI systems visualization"
                    />
                </motion.div> */}
            </div>
        </motion.section>
    );
}
