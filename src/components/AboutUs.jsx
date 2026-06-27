import { useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Cpu, Telescope } from "lucide-react";
import EntropicCanvas from "./EntropicCanvas";
import "../styles/about.css";

const LAYERS = [
    {
        key: "core",
        label: "Core",
        title: "Core Solutions",
        description: "Production-grade AI and software foundations — enterprise RAG, automation, and data engineering built to ship.",
        href: "/solutions/core",
        accent: "#3b82f6",
        Icon: Layers,
    },
    {
        key: "emerging",
        label: "Emerging",
        title: "Emerging Solutions",
        description: "Next-wave capabilities — custom LLM development, on-premise AI, and GPU orchestration for teams pushing ahead.",
        href: "/solutions/emerging",
        accent: "#10b981",
        Icon: Cpu,
    },
    {
        key: "vision",
        label: "Vision",
        title: "Vision Solutions",
        description: "Frontier R&D — predictive systems and autonomous workflows that define what's next for your industry.",
        href: "/solutions/vision",
        accent: "#8b5cf6",
        Icon: Telescope,
    },
];

const PRINCIPLES = [
    {
        index: "01",
        title: "Production first",
        text: "We design for the moment a demo becomes a dependency — monitoring, fallbacks, and the unglamorous decisions that keep a system alive at 2 a.m.",
    },
    {
        index: "02",
        title: "No black boxes",
        text: "Every system we ship is explainable end to end: the model, the data, the decision path. You can audit it, extend it, and never wonder what's happening underneath.",
    },
    {
        index: "03",
        title: "Compounding by design",
        text: "Core, Emerging, and Vision aren't three products. They're one architecture — what you build today becomes the foundation for what you build next.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function AboutSection()
{
    const heroRef        = useRef(null);
    const ctaRef         = useRef(null);
    const principlesRef  = useRef(null);
    const layersRef      = useRef(null);

    return (
        <>
            {/* ─── STATEMENT ─── */}
            <section ref={heroRef} className="ab-hero">
                <EntropicCanvas containerRef={heroRef} scheme="dark" />
                <div className="ab-glow" aria-hidden="true" />
                <motion.div
                    className="ab-hero-inner"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span variants={fadeUp} className="ab-eyebrow">About Entropic System</motion.span>
                    <motion.h1 variants={fadeUp} className="ab-headline">
                        We build intelligence<br />
                        that ships — and stays shipped.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="ab-lede">
                        Entropic System designs and ships production AI — retrieval systems, workflow automation,
                        predictive models, and the SaaS products that run on top of them. We measure success after
                        launch, not at the demo.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <Link to="/contact" className="ab-link">
                            Talk to our engineers <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* ─── PRINCIPLES ─── */}
            <section ref={principlesRef} className="ab-principles" style={{ position: "relative", overflow: "hidden" }}>
                <EntropicCanvas containerRef={principlesRef} scheme="dark" />
                <div className="ab-principles-inner">
                    <motion.span
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}
                        className="ab-eyebrow"
                    >
                        How we build
                    </motion.span>

                    <div className="ab-principle-list">
                        {PRINCIPLES.map((p) => (
                            <motion.div
                                key={p.index}
                                className="ab-principle-row"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <span className="ab-principle-index">{p.index}</span>
                                <h3 className="ab-principle-title">{p.title}</h3>
                                <p className="ab-principle-text">{p.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHAT WE BUILD ─── */}
            <section ref={layersRef} className="ab-layers" style={{ position: "relative", overflow: "hidden" }}>
                <EntropicCanvas containerRef={layersRef} scheme="dark" />
                <div className="ab-layers-inner">
                    <motion.div
                        className="ab-layers-header"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}
                    >
                        <span className="ab-eyebrow">What we build</span>
                        <h2 className="ab-layers-title">Three layers. One architecture.</h2>
                        <p className="ab-layers-sub">
                            Every engagement plugs into one of three layers — each engineered to work with
                            the others as your needs grow.
                        </p>
                    </motion.div>

                    <motion.div
                        className="ab-layers-grid"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {LAYERS.map(({ key, label, title, description, href, accent, Icon }) => (
                            <motion.div key={key} variants={fadeUp}>
                                <Link to={href} className="ab-layer-card" style={{ "--layer-accent": accent }}>
                                    <Icon size={20} className="ab-layer-icon" />
                                    <span className="ab-layer-label">{label}</span>
                                    <h3 className="ab-layer-title">{title}</h3>
                                    <p className="ab-layer-desc">{description}</p>
                                    <span className="ab-layer-link">
                                        Explore <ArrowRight size={14} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── CLOSING ─── */}
            <section ref={ctaRef} className="ab-cta" style={{ position: "relative", overflow: "hidden" }}>
                <EntropicCanvas containerRef={ctaRef} scheme="dark" />
                <motion.div
                    className="ab-cta-inner"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <motion.h2 variants={fadeUp}>Have something worth building?</motion.h2>
                    <motion.p variants={fadeUp}>
                        Tell us what's slowing your team down. We'll tell you whether AI is actually
                        the answer — sometimes it isn't.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <Link to="/contact" className="ab-link">
                            Start a conversation <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
