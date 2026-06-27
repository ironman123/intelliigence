import { useEffect, useRef } from "react";

/*
 * Entropic Field — fused particle background for the Hero section.
 *
 * 4 layered systems, zero npm deps, pure Canvas 2D:
 *   1. Flow field atmosphere  (FlowField + trail wipe)
 *   2. Logarithmic spiral tracers  (Spiral, math only)
 *   3. Twinkling fixed stars  (Sparkle, sin-wave opacity)
 *   4. Spring-return interactive particles  (GravityParticles × Entropy)
 *      + click-burst with ripple  (ParticleSpawn)
 */
export default function HeroParticles({ containerRef }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef?.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const TAU = Math.PI * 2;
        const MOBILE = window.innerWidth < 640;
        const S = MOBILE ? 0.45 : 1; // density scale

        // ── Tuning ────────────────────────────────────────────────
        const N_FLOW    = Math.floor(260 * S);
        const N_TWINKLE = Math.floor(55  * S);
        const N_SPRING  = Math.floor(100 * S);
        const N_SPIRAL  = 3;          // spiral arms
        const BURST_N   = 12;         // particles per click burst
        const MO        = 160;        // mouse outer repulsion radius
        const MI        = 80;         // mouse inner (stronger) radius
        const SK        = 0.065;      // spring constant
        const DP        = 0.87;       // velocity damping

        let W, H, CX, CY;
        let frameCount = 0;
        let animId;

        // All particle arrays live in closure — mutated in place each frame
        let flowP   = [];
        let twinkS  = [];
        let spirT   = [];
        let sprP    = [];
        let burstP  = [];
        const mouse = { x: -1000, y: -1000, on: false };

        // ── Resize & rebuild ──────────────────────────────────────
        function resize() {
            const dpr = window.devicePixelRatio || 1;
            W  = container.clientWidth;
            H  = container.clientHeight;
            CX = W / 2;
            CY = H / 2;
            // Setting width/height resets the canvas context completely
            canvas.width  = W * dpr;
            canvas.height = H * dpr;
            ctx.scale(dpr, dpr);
            build();
        }

        function build() {
            // Layer 1a — flow field particles
            flowP = Array.from({ length: N_FLOW }, () => ({
                x:    Math.random() * W,
                y:    Math.random() * H,
                vx:   0,
                vy:   0,
                age:  Math.floor(Math.random() * 200),
                life: 150 + Math.floor(Math.random() * 150),
                lite: Math.random() > 0.88, // 12% lighter blue variant
            }));

            // Layer 1b — twinkling fixed stars
            twinkS = Array.from({ length: N_TWINKLE }, () => ({
                x:     Math.random() * W,
                y:     Math.random() * H,
                r:     0.5 + Math.random() * 1.5,
                ph:    Math.random() * TAU,          // phase offset
                spd:   0.008 + Math.random() * 0.014, // oscillation speed
                white: Math.random() > 0.45,
            }));

            // Layer 2 — logarithmic spiral tracers, arms offset 120°
            spirT = Array.from({ length: N_SPIRAL }, (_, i) => ({
                theta: (TAU / N_SPIRAL) * i,
                trail: [],
            }));

            // Layer 3 — spring-return interactive particles
            sprP = Array.from({ length: N_SPRING }, () => {
                const ox = 30 + Math.random() * (W - 60);
                const oy = 30 + Math.random() * (H - 60);
                return { x: ox, y: oy, ox, oy, vx: 0, vy: 0, r: 1.5 + Math.random() * 0.8 };
            });

            burstP = [];
        }

        // ── Physics update ────────────────────────────────────────

        function stepFlow(p) {
            // Cosine+sine noise angle → organic flowing curves
            const ang = (Math.cos(p.x * 0.004) + Math.sin(p.y * 0.005)) * Math.PI * 1.4;
            p.vx = p.vx * 0.94 + Math.cos(ang) * 0.18;
            p.vy = p.vy * 0.94 + Math.sin(ang) * 0.18;
            p.x += p.vx;
            p.y += p.vy;
            p.age++;
            if (p.age > p.life) {
                p.x = Math.random() * W;  p.y = Math.random() * H;
                p.vx = 0;                 p.vy = 0;
                p.age = 0;
                p.life = 150 + Math.floor(Math.random() * 150);
            }
            // Wrap around
            if (p.x < 0)  p.x += W;
            if (p.x > W)  p.x -= W;
            if (p.y < 0)  p.y += H;
            if (p.y > H)  p.y -= H;
        }

        function stepSpring(p) {
            if (mouse.on) {
                const dx   = p.x - mouse.x;
                const dy   = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                if (dist < MO) {
                    // Two-zone gradient: entropy effect — partial influence at edge, full eruption at center
                    const force = ((MO - dist) / MO) * 3.5 * (dist < MI ? 2.2 : 1);
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
            }
            // Spring pulls toward home; velocity damped each frame
            p.vx = (p.vx + (p.ox - p.x) * SK) * DP;
            p.vy = (p.vy + (p.oy - p.y) * SK) * DP;
            p.x += p.vx;
            p.y += p.vy;
        }

        function stepSpiral(tr) {
            tr.theta += 0.009;
            // r oscillates 45–220 px as theta cycles 0→2π
            const r = 45 + 175 * ((tr.theta % TAU) / TAU);
            tr.trail.push({ x: CX + Math.cos(tr.theta) * r, y: CY + Math.sin(tr.theta) * r });
            if (tr.trail.length > 55) tr.trail.shift();
        }

        // ── Draw calls ────────────────────────────────────────────

        function drawFlow() {
            for (const p of flowP) {
                // Fade in and out: brightest at mid-life
                const ar = Math.max(0, 1 - Math.abs((p.age / p.life) - 0.5) * 2.2);
                ctx.fillStyle = p.lite
                    ? `rgba(147,197,253,${ar * 0.42})`
                    : `rgba(96,165,250,${ar * 0.48})`;
                ctx.fillRect(p.x, p.y, 1, 1);
            }
        }

        function drawTwinkle() {
            for (const s of twinkS) {
                // Pulse between 0.06 and 0.20 opacity
                const a = 0.06 + 0.14 * (Math.sin(frameCount * s.spd + s.ph) * 0.5 + 0.5);
                ctx.globalAlpha = a;
                ctx.fillStyle   = s.white ? "#ffffff" : "#93c5fd";
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, TAU);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        }

        function drawSpiral() {
            for (const tr of spirT) {
                const len = tr.trail.length;
                for (let i = 1; i < len; i++) {
                    // Trail fades from transparent at tail to 0.15 at head
                    ctx.globalAlpha = (i / len) * 0.15;
                    ctx.fillStyle   = "#93c5fd";
                    ctx.beginPath();
                    ctx.arc(tr.trail[i].x, tr.trail[i].y, 1.4, 0, TAU);
                    ctx.fill();
                }
            }
            ctx.globalAlpha = 1;
        }

        function drawSpring() {
            // Precompute displacement from home for each particle
            const disp = sprP.map(p => Math.hypot(p.x - p.ox, p.y - p.oy));

            // Entropy-style connection lines: disturbed particles draw links to nearby disturbed neighbors
            ctx.lineWidth = 0.5;
            for (let i = 0; i < sprP.length; i++) {
                if (disp[i] < 18) continue; // at rest → no lines
                const p = sprP[i];
                let drawn = 0;
                for (let j = 0; j < sprP.length && drawn < 2; j++) {
                    if (j === i || disp[j] < 10) continue;
                    const q = sprP[j];
                    const d = Math.hypot(p.x - q.x, p.y - q.y);
                    if (d > 110) continue;
                    ctx.globalAlpha = Math.min(disp[i] / 80, 1) * 0.12 * (1 - d / 110);
                    ctx.strokeStyle = "#60a5fa";
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.stroke();
                    drawn++;
                }
            }

            // Dots: dim at rest, bright when displaced
            for (let i = 0; i < sprP.length; i++) {
                const p   = sprP[i];
                const vel = Math.hypot(p.vx, p.vy);
                ctx.globalAlpha = 0.22 + Math.min(disp[i] / 75, 1) * 0.73;
                ctx.fillStyle   = "#60a5fa";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r + Math.min(vel * 0.25, 0.9), 0, TAU);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        }

        function drawBurst() {
            for (const p of burstP) {
                // Three phases: fade-in (0-5), full (5-35), fade-out (35-55)
                let a;
                if (p.frame < 5)       a = p.frame / 5;
                else if (p.frame < 35) a = 1;
                else                   a = Math.max(0, 1 - (p.frame - 35) / 20);

                // Color shifts from white toward light blue as the burst ages
                const prog = p.frame / p.life;
                const r2   = Math.round(255 - prog * 108); // 255→147
                const g2   = Math.round(255 - prog * 58);  // 255→197
                ctx.globalAlpha = a * 0.88;
                ctx.fillStyle   = `rgb(${r2},${g2},253)`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, TAU);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
        }

        // ── Click burst + ripple ───────────────────────────────────
        function spawnBurst(bx, by) {
            for (let i = 0; i < BURST_N; i++) {
                const ang = (TAU / BURST_N) * i + (Math.random() - 0.5) * 0.6;
                const spd = 2.5 + Math.random() * 3.2;
                burstP.push({
                    x: bx, y: by,
                    vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
                    r: 1 + Math.random() * 1.4,
                    frame: 0, life: 55,
                });
            }
            // Ripple: kick spring particles outward from the click point, then they spring back
            for (const p of sprP) {
                const d = Math.hypot(p.x - bx, p.y - by);
                if (d < 190) {
                    const force = (1 - d / 190) * 5.5;
                    const ang   = Math.atan2(p.y - by, p.x - bx);
                    p.vx += Math.cos(ang) * force;
                    p.vy += Math.sin(ang) * force;
                }
            }
        }

        // ── Main loop ─────────────────────────────────────────────
        function tick() {
            animId = requestAnimationFrame(tick);
            frameCount++;

            // Trail wipe: instead of a full clear, paint a semi-transparent dark rect
            // This leaves decaying ghosts of previous frames → gossamer trails
            // #020617 = rgb(2, 6, 23) — matches the hero's background color
            ctx.globalAlpha = 1;
            ctx.fillStyle   = "rgba(2,6,23,0.11)";
            ctx.fillRect(0, 0, W, H);

            // Update all systems
            for (const p  of flowP) stepFlow(p);
            for (const tr of spirT) stepSpiral(tr);
            for (const p  of sprP)  stepSpring(p);

            // Burst: step physics, cull expired, reassign
            const alive = [];
            for (const p of burstP) {
                p.frame++;
                if (p.frame >= p.life) continue;
                p.vx *= 0.94; p.vy *= 0.94;
                p.x  += p.vx; p.y  += p.vy;
                alive.push(p);
            }
            burstP = alive;

            // Draw back-to-front so each layer is composited correctly
            drawSpiral();    // deepest — very faint structural geometry
            drawFlow();      // flowing atmosphere
            drawTwinkle();   // fixed stars (repaint cleanly over wipe)
            drawSpring();    // interactive layer with connection lines
            drawBurst();     // click bursts always on top
        }

        // ── Event handlers ────────────────────────────────────────
        const onMove = e => {
            const rc  = container.getBoundingClientRect();
            mouse.x   = e.clientX - rc.left;
            mouse.y   = e.clientY - rc.top;
            mouse.on  = true;
        };
        const onLeave  = () => { mouse.on = false; mouse.x = -1000; mouse.y = -1000; };
        const onClick  = e => {
            const rc = container.getBoundingClientRect();
            spawnBurst(e.clientX - rc.left, e.clientY - rc.top);
        };

        // ── Start ─────────────────────────────────────────────────
        resize();
        tick();

        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseleave", onLeave);
        container.addEventListener("click", onClick);
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animId);
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("mouseleave", onLeave);
            container.removeEventListener("click", onClick);
            window.removeEventListener("resize", resize);
        };
    }, []); // containerRef is a stable React ref object — no deps needed

    return <canvas ref={canvasRef} className="hero-particles" />;
}
