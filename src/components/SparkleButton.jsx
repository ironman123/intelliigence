import { useRef, useEffect } from "react";

const TAU = Math.PI * 2;
const PAD = 10; // canvas bleeds PAD px beyond the button on every side

const DEFAULT_COLS = ["#ffffff", "#dbeafe", "#bfdbfe", "#93c5fd", "#f0f9ff"];

export default function SparkleButton({ children, sparkColors, className, style })
{
    const wrapRef = useRef(null);
    const cvRef = useRef(null);
    const stRef = useRef({ p: [], mode: "idle", t: 0, raf: null, W: 0, H: 0 });
    const COLS = sparkColors || DEFAULT_COLS;

    useEffect(() =>
    {
        const wrap = wrapRef.current;
        const cv = cvRef.current;
        if (!wrap || !cv) return;
        const ctx = cv.getContext("2d");
        const st = stRef.current;

        function resize()
        {
            const dpr = window.devicePixelRatio || 1;
            const r = wrap.getBoundingClientRect();
            st.W = r.width; st.H = r.height;
            cv.width = Math.round((st.W + PAD * 2) * dpr);
            cv.height = Math.round((st.H + PAD * 2) * dpr);
            cv.style.width = st.W + PAD * 2 + "px";
            cv.style.height = st.H + PAD * 2 + "px";
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }

        function spawn()
        {
            const { W, H } = st;
            const perim = 2 * (W + H);
            const d = Math.random() * perim;
            let bx, by, nx, ny;
            if (d < W) { bx = PAD + d; by = PAD; nx = 0; ny = -1; }
            else if (d < W + H) { bx = PAD + W; by = PAD + d - W; nx = 1; ny = 0; }
            else if (d < 2 * W + H) { bx = PAD + W - (d - W - H); by = PAD + H; nx = 0; ny = 1; }
            else { bx = PAD; by = PAD + H - (d - 2 * W - H); nx = -1; ny = 0; }
            const s = (Math.random() - 0.5) * PAD * 1.6;
            return {
                x: bx + nx * s,
                y: by + ny * s,
                vx: (Math.random() - 0.5) * 0.12,
                vy: -(Math.random() * 0.07 + 0.02),
                sz: 0.38 + Math.random() * 0.82,
                life: 0,
                maxL: 80 + Math.random() * 120,
                ph: Math.random() * TAU,
                ts: 0.09 + Math.random() * 0.14,
                col: COLS[Math.floor(Math.random() * COLS.length)],
                burst: false,
            };
        }

        function tick()
        {
            st.raf = requestAnimationFrame(tick);
            st.t++;
            ctx.clearRect(0, 0, st.W + PAD * 2, st.H + PAD * 2);

            if (st.mode === "hover")
            {
                const live = st.p.filter(p => !p.burst).length;
                if (live < 33) for (let i = 0; i < 3; i++) st.p.push(spawn());
            }

            for (let i = st.p.length - 1; i >= 0; i--)
            {
                const p = st.p[i];
                p.x += p.vx; p.y += p.vy; p.life++;

                let alpha;
                if (!p.burst)
                {
                    const prog = p.life / p.maxL;
                    const fadeIn = Math.min(prog * 7, 1);
                    const maxL = st.mode === "idle" ? p.maxL * 0.48 : p.maxL;
                    if (p.life > maxL) { st.p.splice(i, 1); continue; }
                    const fadeOut = prog > 0.6 ? Math.max(1 - (prog - 0.6) / 0.4, 0) : 1;
                    const twinkle = 0.28 + 0.72 * Math.abs(Math.sin(st.t * p.ts + p.ph));
                    alpha = fadeIn * fadeOut * twinkle * 0.86;
                } else
                {
                    p.vx *= 0.89; p.vy *= 0.89;
                    alpha = Math.max(1 - p.life / 28, 0);
                    if (alpha <= 0) { st.p.splice(i, 1); continue; }
                }

                ctx.globalAlpha = alpha;
                ctx.fillStyle = p.col;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.sz, 0, TAU);
                ctx.fill();
            }

            ctx.globalAlpha = 1;
            if (st.mode === "idle" && st.p.length === 0)
            {
                cancelAnimationFrame(st.raf);
                st.raf = null;
            }
        }

        const start = () => { if (!st.raf) st.raf = requestAnimationFrame(tick); };
        const enter = () => { st.mode = "hover"; start(); };
        const leave = () => { st.mode = "idle"; };
        const click = () =>
        {
            const cx = PAD + st.W * 0.5;
            const cy = PAD + st.H * 0.5;
            for (const p of st.p)
            {
                if (p.burst) continue;
                p.burst = true; p.life = 0;
                const dx = p.x - cx, dy = p.y - cy;
                const d = Math.hypot(dx, dy) || 1;
                const sp = 3 + Math.random() * 4.5;
                p.vx = (dx / d) * sp + (Math.random() - 0.5);
                p.vy = (dy / d) * sp + (Math.random() - 0.5);
            }
            st.mode = "idle";
            start();
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(wrap);
        wrap.addEventListener("mouseenter", enter);
        wrap.addEventListener("mouseleave", leave);
        wrap.addEventListener("click", click);

        return () =>
        {
            if (st.raf) cancelAnimationFrame(st.raf);
            ro.disconnect();
            wrap.removeEventListener("mouseenter", enter);
            wrap.removeEventListener("mouseleave", leave);
            wrap.removeEventListener("click", click);
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
                    position: "absolute",
                    top: -PAD + "px",
                    left: -PAD + "px",
                    pointerEvents: "none",
                    zIndex: 9,
                }}
            />
            {children}
        </div>
    );
}
