import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/video-interlude.css";

export default function VideoInterlude()
{
    const wrapperRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start end", "end start"],
    });

    /* ---------- Motion mapping (LOGIC ONLY) ---------- */

    const scale = useTransform(
        scrollYProgress,
        [0, 0.25, 0.7, 1],
        [0.3, 1, 1, 0.6]
    );

    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [24, 8, 8, 16]
    );

    const backgroundColor = useTransform(
        scrollYProgress,
        [0.4, 1],
        ["#dcdcdc", "#0a0a0a"]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        ["#ffffff", "#e3e3e3ff"]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [0.3, 0.4, 1],
        [0.3, 1, 0.9]
    );

    /* ---------- STRUCTURE ONLY ---------- */

    return (
        <section ref={wrapperRef} className="video-interlude-wrapper">
            <motion.div
                className="video-sticky-layer"
                style={{ backgroundColor }}
            >
                <motion.div
                    className="video-frame"
                    style={{ scale, borderRadius }}
                >
                    <video
                        className="video-element"
                        src="/src/assets/videos/pageVideo2.mp4"
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                    />

                    <motion.div
                        className="video-overlay"
                        style={{ color: textColor, opacity: textOpacity }}
                    >
                        <h1 className="outlined-text" style={{ textShadow: "0 0 3px #4a4a4aff" }}>
                            Intelligent Software
                            Built for Real-World Control
                        </h1>
                        <p className="outlined-subtext" style={{ textShadow: "0 0 3px #4a4a4aff" }}>
                            Intelligence deployed across machines, people,
                            and infrastructure — reliably, at scale.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}


