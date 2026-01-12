export const panelVariants = {
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.40,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exitLeft: {
        x: -40,
        opacity: 0,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exitRight: {
        x: 40,
        opacity: 0,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
