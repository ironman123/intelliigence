export const navVariants = {
    expanded: {
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    collapsed: {
        y: "-100%",
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const notchVariants = {
    idle: {
        // Array values creates the automatic "breathing" loop
        scale: [1, 1.03, 1],
        boxShadow: [
            "0 6px 16px rgba(0,0,0,0.45)",
            "0 12px 24px rgba(0,0,0,0.55)",
            "0 6px 16px rgba(0,0,0,0.45)"
        ],
        // ⚡ Fixes flickering (forces GPU layer)
        z: 0,
        transition: {
            duration: 4, // Slow, subtle 4s cycle
            ease: "easeInOut",
            repeat: Infinity,
        },
    },

    hover: {
        scale: 1.1,
        y: 4, // Slight drop
        boxShadow: "0 12px 32px rgba(0,0,0,0.7)",
        z: 0,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoothness
        },
    },

    active: {
        scale: 0.95, // "Press" effect
        y: 0,
        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
        z: 0,
        transition: {
            duration: 0.1,
            ease: "easeOut",
        },
    },
};

