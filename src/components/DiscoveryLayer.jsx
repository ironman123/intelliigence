import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CategoryToggle from "./discovery/CategoryToggle";
import "../styles/discovery-layer.css";
import CardStage from "./discovery/CardStage";
import { DISCOVERY_CARDS } from "../data/discoveryCards";


const CATEGORIES = [
    {
        key: "core",
        label: "Core",
        heading: "Our Core Capabilities",
        subheading: "Solutions we actively deliver to our Global Clients",
    },
    {
        key: "emerging",
        label: "Emerging",
        heading: "Emerging AI solutions",
        subheading: "Alongside our core offering, we are actively developing and piloting AI solutions in selected high-growth sectors",
    },
    {
        key: "vision",
        label: "Vision",
        heading: "Our Vision: Building AI for broader Impact",
        subheading: "As we scale responsibly, we aim to expand our AI capabilites into High-Impact Global Problem Areas",
    },
];

export default function DiscoveryLayer()
{
    const [activeIndex, setActiveIndex] = useState(0);
    const [cardsVisible, setCardsVisible] = useState(false);

    const active = CATEGORIES[activeIndex];
    const wrapperRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start end", "end start"],
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0.4, 0.9],
        ["#909090", "#565656"]
    );

    useEffect(() =>
    {
        const unsubscribe = scrollYProgress.on("change", (v) =>
        {

            // 1. Calculate new values
            const newIndex = Math.min(
                CATEGORIES.length - 1,
                Math.floor(v * CATEGORIES.length)
            );

            const isVisible = v > 0.12 && v < 0.99;

            // 2. Conditional Updates (Prevents laggy re-renders)
            setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
            setCardsVisible((prev) => (prev !== isVisible ? isVisible : prev));
        });
        return unsubscribe;
    }, [scrollYProgress]);

    return (
        <section ref={wrapperRef} className="discovery-wrapper" id="discovery">
            <motion.div
                className="discovery-sticky"
                style={{ backgroundColor }}
            >
                {/* HEADER */}
                <div className="discovery-header">
                    <div className="discovery-text">
                        <h1>{active.heading}</h1>
                        <p>{active.subheading}</p>
                    </div>

                    <CategoryToggle
                        categories={CATEGORIES}
                        activeIndex={activeIndex}
                        onChange={setActiveIndex}
                    />
                </div>

                {/* CARDS */}
                {cardsVisible && (
                    <CardStage
                        categoryKey={active.key}
                        cards={DISCOVERY_CARDS[active.key]}
                    />
                )}
            </motion.div>

            <div className="discovery-spacer" />
        </section>
    );
}
