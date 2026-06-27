import { useRef, useEffect } from "react";

const TAU      = Math.PI * 2;
const PAD      = 24;   // canvas bleeds beyond button so particles have room to travel
const MAX_DIST = 20;   // px from birth point — alpha reaches 0 here
const FRICTION = 0.962;
const COLS     = ["#ffffff", "#e8efff", "#dbeafe", "#f0f9ff", "#eff6ff"];

export default function SteamButton({ children, className, style }) {
    const wrapRef = useRef(null);
    const cvRef   = useRef(null);
    const stRef   = useRef({ p: [], mode: "idle", t: 0, raf: null, W: 0, H: 0 });

    useEffect(() => {
        const wrap = wrapRef.current;
        const cv   = cvRef.current;
        if (!wrap || !cv) return;
        const ctx  = cv.getContext("2d");
        const st   = stRef.current;

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            const r   = wrap.getBoundingClientRect();
            st.W = r.width; st.H = r.height;
            cv.width  = Math.round((st.W + PAD * 2) * dpr);
            cv.height = Math.round((st.H + PAD * 2) * dpr);
            cv.style.width  = st.W + PAD * 2 + "px";
            cv.style.height = st.H + PAD * 2 + "px";
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }

        // Spawn a single particle on the button's perimeter.
        // nx/ny = outward normal so the particle immediately exits the button surface.
        function spawn(burst = false) {
            const { W, H } = st;
            const perim = 2 * (W + H);
            const d = Math.random() * perim;
            let bx, by, nx, ny;
            if      (d < W)         { bx = PAD + d;            by = PAD;                nx =  0; ny = -1; }
            else if (d < W + H)     { bx = PAD + W;            by = PAD + (d - W);      nx =  1; ny =  0; }
            else if (d < 2*W + H)   { bx = PAD + W-(d-W-H);   by = PAD + H;            nx =  0; ny =  1; }
            else                    { bx = PAD;                 by = PAD+H-(d-2*W-H);   nx = -1; ny =  0; }

            // Tangent perpendicular to normal: (-ny, nx)
            const tang = (Math.random() - 0.5) * 0.14;
            const spd  = burst
                ? 0.75 + Math.random() * 0.70
                : 0.30 + Math.random() * 0.42;

            return {
                x:    bx,
                y:    by,
                ox:   bx,   // birth x — used for distance calc
                oy:   by,   // birth y
                vx:   nx * spd + (-ny) * tang,
                vy:   ny * spd + ( nx) * tang,
                sz:   burst
                    ? 0.55 + Math.random() * 0.65
                    : 0.28 + Math.random() * 0.50,
                col:  COLS[Math.floor(Math.random() * COLS.length)],
                age:  0,
                maxL: burst
                    ? 55  + Math.random() * 40
                    : 80  + Math.random() * 55,
            };
        }

        function tick() {
            st.raf = requestAnimationFrame(tick);
            st.t++;
            ctx.clearRect(0, 0, st.W + PAD * 2, st.H + PAD * 2);

            if (st.mode === "hover") {
                const alive = st.p.length;
                if (alive < 160) for (let i = 0; i < 4; i++) st.p.push(spawn());
            }

            for (let i = st.p.length - 1; i >= 0; i--) {
                const p = st.p[i];

                // Decelerate — particles cluster tightly near the surface
                p.vx *= FRICTION; p.vy *= FRICTION;
                p.x  += p.vx;    p.y  += p.vy;
                p.age++;

                const dist = Math.hypot(p.x - p.ox, p.y - p.oy);

                // Distance-based fade: dense at surface, dissolves outward
                // Power > 1 makes the falloff steeper at the far edge
                const distFade = Math.pow(Math.max(0, 1 - dist / MAX_DIST), 1.15);

                // Very gentle time fade so stalled particles don't persist forever
                const ageFade  = Math.pow(Math.max(0, 1 - p.age / p.maxL), 0.35);

                const alpha = distFade * ageFade * 0.68;

                if (alpha < 0.006 || p.age > p.maxL) { st.p.splice(i, 1); continue; }

                ctx.globalAlpha = alpha;
                ctx.fillStyle   = p.col;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.sz, 0, TAU);
                ctx.fill();
            }

            ctx.globalAlpha = 1;
            if (st.mode === "idle" && st.p.length === 0) {
                cancelAnimationFrame(st.raf);
                st.raf = null;
            }
        }

        const start = () => { if (!st.raf) st.raf = requestAnimationFrame(tick); };
        const enter = ()  => { st.mode = "hover"; start(); };
        const leave = ()  => { st.mode = "idle"; };
        const click = ()  => {
            // Eruption: 45 burst particles launch simultaneously from all edges
            for (let i = 0; i < 45; i++) st.p.push(spawn(true));
            start();
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(wrap);
        wrap.addEventListener("mouseenter", enter);
        wrap.addEventListener("mouseleave", leave);
        wrap.addEventListener("click",      click);

        return () => {
            if (st.raf) cancelAnimationFrame(st.raf);
            ro.disconnect();
            wrap.removeEventListener("mouseenter", enter);
            wrap.removeEventListener("mouseleave", leave);
            wrap.removeEventListener("click",      click);
        };
    }, []);

    return (
        <div
            ref={wrapRef}
            className={className}
            style={{ position: "relative", display: "inline-flex", ...style }}
        >
            <canvas
                ref={cvRef}
                aria-hidden="true"
                style={{
                    position:      "absolute",
                    top:           -PAD + "px",
                    left:          -PAD + "px",
                    pointerEvents: "none",
                    zIndex:        9,
                }}
            />
            {children}
        </div>
    );
}
