import { CORE_SOLUTIONS } from "../../data/solutionsCore";
import { EMERGING_SOLUTIONS } from "../../data/solutionsEmerging";
import { VISION_SOLUTIONS } from "../../data/solutionsVision";

import SolutionsLayerToggle from "./SolutionsLayerToggle";
import { motion } from "framer-motion";

import LayerHero from "./LayerHero";
import LayerIntro from "./LayerIntro";
import SolutionRow from "./SolutionRow";
import SolutionsCTA from "./SolutionsCTA";
import ComparisonSection from "./ComparisionSection";

import "../../styles/solutions-page.css"

const MAP = {
    core: CORE_SOLUTIONS,
    emerging: EMERGING_SOLUTIONS,
    vision: VISION_SOLUTIONS,
};

const pageVariants = {
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -30,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function SolutionsPage({ layer })
{
    const data = MAP[layer];
    if (!data) return null;

    return (
        <motion.main
            className={`solutions-page theme-${layer}`}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SolutionsLayerToggle />
            <LayerHero layer={layer}{...data.hero} />

            <LayerIntro {...data.intro} />

            {data.solutions.map((s, i) => (
                <SolutionRow
                    key={s.headline}
                    solution={s}
                    reverse={i % 2 === 1}
                />
            ))}
            <ComparisonSection />

            <SolutionsCTA layer={layer} />
        </motion.main>
    );
}
