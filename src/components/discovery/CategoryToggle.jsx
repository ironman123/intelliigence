import { motion } from "framer-motion";
import "../../styles/category-toggle.css";

export default function CategoryToggle({
    categories,
    activeIndex,
    onChange,
})
{
    return (
        /* The Track */
        <div className="category-toggle">
            {categories.map((cat, index) =>
            {
                const isActive = index === activeIndex;
                return (
                    <button
                        key={cat.key}
                        className={`toggle-pill ${isActive ? "active" : ""}`}
                        onClick={() => onChange(index)}
                        type="button"
                    >
                        {/* The Sliding White Background */
                            isActive && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="active-pill-bg"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}

                        {/* The Text (z-index above the background) */}
                        <span className="pill-text">{cat.label}</span>
                    </button>
                );
            })}
        </div>
    );
}

