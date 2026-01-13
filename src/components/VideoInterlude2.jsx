import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/video-interlude.css";

export default function VideoInterlude2()
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
        [0.1, 0.8],
        ["#ffffff", "#a4a4a4ff"]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [0.1, 0.4, 1],
        [0.3, 1, 0.5]
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
                        src="/videos/ler.mp4"
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
                        <h2 className="outlined-text" style={{ textShadow: "0 0 3px #4a4a4aff" }}>
                            Intelligence built into System
                        </h2>
                        <p className="outlined-subtext" style={{ textShadow: "0 0 3px #4a4a4aff" }}>
                            Combining AI, Data Engineering and modern software to solve operational problems at scale.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
