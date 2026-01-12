import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, setStartIndex } from "react";
import
{
    discoveryContainer,
    discoveryCardItem,
} from "../../animations/discoveryAnimations";
import DiscoveryCard from "./DiscoveryCard";
import "../../styles/discovery-layer.css"; // Ensure CSS is imported

export default function CardStage({ cards, categoryKey })
{
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 2; // How many cards to show at once

    // Reset slider to start when the category changes
    useEffect(() =>
    {
        setStartIndex(0);
    }, [categoryKey]);

    const hasMore = cards.length > visibleCount;

    // Slice the array to get the currently visible cards
    // If not a slider, just show all cards (which is <= 2)
    const visibleCards = hasMore
        ? cards.slice(startIndex, startIndex + visibleCount)
        : cards;

    const handleNext = () =>
    {
        if (startIndex + visibleCount < cards.length)
        {
            setStartIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () =>
    {
        if (startIndex > 0)
        {
            setStartIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="stage-wrapper">
            {/* LEFT ARROW - Only show if slider is active and not at start */}
            {hasMore && (
                <button
                    className="slider-nav prev"
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
            )}

            <AnimatePresence mode="wait">
                <motion.div
                    key={categoryKey + startIndex} // Key change triggers animation
                    className="card-grid"
                    variants={discoveryContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    layout="position"
                >
                    {visibleCards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={discoveryCardItem}
                            layout
                        >
                            <DiscoveryCard {...card} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* RIGHT ARROW - Only show if slider is active and not at end */}
            {hasMore && (
                <button
                    className="slider-nav next"
                    onClick={handleNext}
                    disabled={startIndex + visibleCount >= cards.length}
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            )}
        </div>
    );
}