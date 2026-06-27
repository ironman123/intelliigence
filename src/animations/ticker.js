import { motion as t } from "./tokens";

export const tickerReveal = {
    hidden: {
        scaleX: 0,
        scaleY: 0.85,
        opacity: 0,
        y: -10,
        transformOrigin: "center",
    },

    visible: {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        y: "15%", // moves DOWN relative to itself
        transition: {
            // 1ï¸âƒ£ ribbon unfolds
            scaleX: {
                duration: 0.3,
                ease: "easeOut",
            },

            scaleY: {
                delay: 0.12,
                duration: 0.2,
                ease: "easeOut",
            },

            // 2ï¸âƒ£ ticker rolls down AFTER it exists
            y: {
                delay: 0.3,
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    },
};


export const tickerRoll = {
    animate: {
        x: ["0%", "-50%"],
        skewX: [0, -3, 0],
        transition: {
            x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
            },
            skewX: {
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    },

    paused: {
        x: "0%",
        transition: {
            x: {
                duration: 0,
                repeat: Infinity,
                ease: "linear",
            },
        },
    },
}


