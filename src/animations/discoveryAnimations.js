/* =========================
   Card container orchestration
========================= */

import { scale } from "framer-motion";

export const discoveryContainer = {
    hidden: {
        opacity: 0,
        scale: 0.6
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0,
        },
    },
};

/* =========================
   Individual card emergence
========================= */

export const discoveryCardItem = {
    hidden: {
        opacity: 0,
        y: 40,
        x: -20,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
            opacity: { duration: 0.35 },
            y: {
                duration: 0.45,
                ease: [0.12, 1, 0.3, 1],
            },
            x: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
            },
            scale: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
            }
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: -30,
        transition: {
            duration: 0.19,
            ease: "easeInOut",
        },
    },
};


