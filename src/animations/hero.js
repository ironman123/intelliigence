export const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
            when: "beforeChildren",
        },
    },
};

export const heroItem = {
    hidden: {
        opacity: 0,
        y: 90,
        x: -90,
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            opacity: { duration: 0.4 },
            y: { duration: 0.8 },
            duration: 0.8,
            ease: [0.12, 1, 0.3, 1.5],
        },
    },
};

export const heroImage = {
    hidden: {
        opacity: 0,
        scale: 0.92,
        y: 40,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export const heroImageMask = {
    hidden: {
        clipPath: "inset(0 0 100% 0)",
        opacity: 1,
    },
    visible: {
        clipPath: "inset(0 0 0% 0)",
        transition: {
            duration: 1.1,
            ease: [0.77, 0, 0.18, 1],
        },
    },
};

export const heroImageSettle = {
    hidden: {
        opacity: 0,
        y: 40,
        x: 100,
        scale: 0.97,
        borderRadius: "0px",
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        borderRadius: "45pt",
        transition: {
            opacity: { duration: 1.2 },
            y: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
            x: {
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
            },
            scale: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 9],
            },
            borderRadius: {
                delay: 0.15,
                duration: 0.24,
                ease: "easeOut",
            },
        },
    },
};


