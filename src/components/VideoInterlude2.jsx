import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import
{
    Cpu,
    Database,
    Globe,
    Zap,
    Server,
    Code2,
    Layers
} from "lucide-react";
import "../styles/video-interlude.css";

// Configuration for the floating background particles
const PARTICLES = [
    { Icon: Cpu, top: "10%", left: "5%", delay: 0, duration: 8 },
    { Icon: Database, top: "70%", left: "10%", delay: 2, duration: 12 },
    { Icon: Globe, top: "20%", left: "80%", delay: 1, duration: 10 },
    { Icon: Zap, top: "80%", left: "85%", delay: 4, duration: 9 },
    { Icon: Server, top: "40%", left: "40%", delay: 0, duration: 15 },
    { Icon: Code2, top: "15%", left: "50%", delay: 3, duration: 11 },
    { Icon: Layers, top: "60%", left: "60%", delay: 1.5, duration: 13 },
];

export default function VideoInterlude()
{
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax: Text moves slightly differently than video
    const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const yVideo = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <section ref={sectionRef} className="interlude-section">
            {/* Background Layer: Grid + Particles */}
            <div className="interlude-bg">
                <div className="bg-grid-pattern" />
                {PARTICLES.map((item, i) => (
                    <motion.div
                        key={i}
                        className="floating-icon-wrapper"
                        style={{ top: item.top, left: item.left }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay,
                        }}
                    >
                        <item.Icon className="glowing-icon" size={32} />
                    </motion.div>
                ))}
            </div>

            <div className="interlude-container">

                {/* Video Card (Left) */}
                <motion.div
                    className="video-card-layer"
                    style={{ y: yVideo }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <video
                        src="/videos/ler.mp4"
                        muted
                        autoPlay
                        loop
                        playsInline
                        className="cinematic-video"
                    />
                    {/* Subtle blue gradient overlay to blend with theme */}
                    <div className="video-tint" />
                </motion.div>

                {/* Glass Text Card (Right, Overlapping) */}
                <motion.div
                    className="glass-card-layer"
                    style={{ y: yText }}
                >
                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-content">
                            <h1>
                                Thinking, not just <br />
                                <span className="highlight-text">processing.</span>
                            </h1>
                            <p className="glass-subtext">
                                Raw data is silence. Intelligence is the signal. We engineer the
                                architecture that filters the noise and refines your information
                                into an <strong>unfair competitive advantage.</strong>
                            </p>
                        </div>

                        {/* Decorative "shiny" edge */}
                        <div className="shine-edge" />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}