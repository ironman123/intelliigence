import { useEffect, useRef } from "react";

/*
 * COSMIC DUAL VORTEX — QUANTUM VACUUM EDITION
 *
 * Virtual particle-antiparticle pairs spontaneously emerge from empty
 * space (vacuum fluctuation), drift along cosmic currents, seek their
 * partner, and annihilate in a flash when they meet. A constant cycle
 * of creation and destruction — the universe breathing.
 *
 * Mouse disrupts the vacuum: repulsion + angular spin + directional wake
 * fling particles into chaos. New pairs spawn wherever void is created.
 *
 * Props:
 *   containerRef  — section element to size against and attach events to
 *   scheme        — "dark" | "light"
 */
export default function EntropicCanvas({ containerRef, scheme = "light" })
{
    const canvasRef = useRef(null);

    useEffect(() =>
    {
        const canvas = canvasRef.current;
        const container = containerRef?.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const TAU = Math.PI * 2;
        const MOBILE = window.innerWidth < 700;

        // ── Palettes ──────────────────────────────────────────────────────────
        const C = scheme === "dark" ? {
            dust: [96, 165, 250],
            star: [219, 234, 254],
            chaos: [147, 197, 253],
            line: [96, 165, 250],
        } : {
            dust: [37, 99, 235],
            star: [29, 78, 216],
            chaos: [37, 99, 235],
            line: [59, 130, 246],
        };

        const rgba = ([r, g, b], a) => `rgba(${r},${g},${b},${a.toFixed(3)})`;

        // ── Config ─────────────────────────────────────────────────────────────
        const TARGET_N = MOBILE ? 24 : 150;    // particle target count
        const CONN_DIST = MOBILE ? 60 : 100;   // max connection distance
        const MOUSE_R = 145;
        const MOUSE_RI = 52;
        const FLOW_F = 0.015;
        const MAX_SPD = 1.9;
        const MAX_SPD_C = 9.0;
        const DAMP = 0.984;

        // Quantum vacuum config
        const MIN_LIFE = 380;   // frames a particle lives (ordered phase)
        const MAX_LIFE = 820;
        const SEEK_R = 170;   // radius to scan for annihilation partner
        const MAX_SEEK = 240;   // frames to spend seeking before dying alone
        const SPAWN_INT = MOBILE ? 5 : 3; // spawn 1 pair every N frames

        // Particle states
        const ALIVE = 0;
        const SEEKING = 1;   // life ended, looking for partner
        const CONVERGING = 2;   // paired — homing in toward each other
        const DEAD = 3;

        let W, H;
        let animId = null;
        let frameT = 0;
        let nextId = 0;
        let particles = [];
        let events = [];   // birth / death flash events
        let isVisible = true;

        let gc1 = { x: 0, y: 0 };
        let gc2 = { x: 0, y: 0 };
        let cGC1 = { x: 0, y: 0 };
        let cGC2 = { x: 0, y: 0 };

        const mouse = { x: -9999, y: -9999, on: false, vx: 0, vy: 0, speed: 0 };

        // ── Dual-vortex flow field — no atan2, pure vector ────────────────────
        // GC1 spins counter-clockwise, GC2 clockwise.
        // Weighted by inverse distance → interference lanes emerge between them.
        function vortexXY(px, py)
        {
            const dx1 = px - cGC1.x, dy1 = py - cGC1.y;
            const r1 = Math.hypot(dx1, dy1) || 1;
            const w1 = 1 / (r1 + 85);
            const vx1 = (-dy1 / r1) + (dx1 / r1) * 0.06;
            const vy1 = (dx1 / r1) + (dy1 / r1) * 0.06;

            const dx2 = px - cGC2.x, dy2 = py - cGC2.y;
            const r2 = Math.hypot(dx2, dy2) || 1;
            const w2 = 1 / (r2 + 85);
            const vx2 = (dy2 / r2) + (dx2 / r2) * 0.06;
            const vy2 = (-dx2 / r2) + (dy2 / r2) * 0.06;

            const wt = w1 + w2;
            return { x: (vx1 * w1 + vx2 * w2) / wt, y: (vy1 * w1 + vy2 * w2) / wt };
        }

        // ── Particle factory ──────────────────────────────────────────────────
        function makeParticle(x, y, vx, vy, isStar)
        {
            return {
                id: nextId++,
                x, y, vx, vy,
                size: isStar ? 1.4 + Math.random() * 1.0 : 0.65 + Math.random() * 0.6,
                brightness: isStar ? 0.50 + Math.random() * 0.40 : 0.10 + Math.random() * 0.14,
                twinkleHz: 0.018 + Math.random() * 0.055,
                sparkHz: 0.007 + Math.random() * 0.018,
                phX: Math.random() * TAU,
                phY: Math.random() * TAU,
                isStar,
                chaos: false,
                state: ALIVE,
                age: 0,
                lifespan: MIN_LIFE + Math.floor(Math.random() * (MAX_LIFE - MIN_LIFE)),
                partner: null,
            };
        }

        // ── Quantum pair creation — two particles from the void ───────────────
        function spawnPair(silent = false)
        {
            const x = Math.random() * W;
            const y = Math.random() * H;
            const angle = Math.random() * TAU;
            const sp = 0.2 + Math.random() * 0.5;
            const isStar = Math.random() < 0.13;

            particles.push(
                makeParticle(x, y, Math.cos(angle) * sp, Math.sin(angle) * sp, isStar),
                makeParticle(x, y, -Math.cos(angle) * sp, -Math.sin(angle) * sp, isStar)
            );

            if (!silent) events.push({ x, y, t: frameT, type: "birth" });
        }

        // ── Resize / rebuild ──────────────────────────────────────────────────
        function resize()
        {
            const dpr = window.devicePixelRatio || 1;
            W = container.clientWidth;
            H = container.clientHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            ctx.scale(dpr, dpr);
            gc1 = { x: W * 0.35, y: H * 0.5 };
            gc2 = { x: W * 0.65, y: H * 0.5 };
            cGC1 = { ...gc1 };
            cGC2 = { ...gc2 };
            build();
        }

        function build()
        {
            particles = [];
            events = [];
            nextId = 0;
            const numPairs = Math.floor(TARGET_N / 2);
            for (let i = 0; i < numPairs; i++) spawnPair(true); // no birth flashes on init
        }

        // ── Per-particle physics helpers ──────────────────────────────────────
        function applyFlow(p)
        {
            const f = vortexXY(p.x, p.y);
            const ff = p.isStar ? FLOW_F * 0.28 : FLOW_F;
            p.vx += f.x * ff;
            p.vy += f.y * ff;
        }

        function applyMouse(p)
        {
            if (!mouse.on) return;
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const d = Math.sqrt(dx * dx + dy * dy) || 1;
            if (d >= MOUSE_R) return;
            const frac = (MOUSE_R - d) / MOUSE_R;
            const boost = d < MOUSE_RI ? 3.5 : 1;
            const repF = frac * boost * 7.5;
            // Repulsion + cosmic tangential spin + random chaos kick
            p.vx += (dx / d) * repF + (-dy / d) * frac * 5 + (Math.random() - 0.5) * repF * 0.7;
            p.vy += (dy / d) * repF + (dx / d) * frac * 5 + (Math.random() - 0.5) * repF * 0.7;
            // Directional stream wake
            if (mouse.speed > 0.8)
            {
                const ss = Math.min(mouse.speed * 0.55, 14) * frac;
                p.vx += (mouse.vx / mouse.speed) * ss;
                p.vy += (mouse.vy / mouse.speed) * ss;
            }
            p.chaos = true;
        }

        function applyDampWrap(p)
        {
            const spd = Math.hypot(p.vx, p.vy);
            const cap = p.chaos ? MAX_SPD_C : MAX_SPD;
            if (spd > cap) { p.vx = p.vx / spd * cap; p.vy = p.vy / spd * cap; }
            p.vx *= DAMP;
            p.vy *= DAMP;
            p.x += p.vx;
            p.y += p.vy;
            const PAD = 8;
            if (p.x < -PAD) p.x = W + PAD; else if (p.x > W + PAD) p.x = -PAD;
            if (p.y < -PAD) p.y = H + PAD; else if (p.y > H + PAD) p.y = -PAD;
            if (p.chaos && !mouse.on && Math.hypot(p.vx, p.vy) < 0.95) p.chaos = false;
        }

        // ── Quantum lifecycle + physics step ──────────────────────────────────
        function step(p)
        {
            if (p.state === DEAD) return;
            p.age++;

            // ── CONVERGING: ignore flow field, move straight toward partner ──
            if (p.state === CONVERGING)
            {
                const q = p.partner;
                if (!q || q.state === DEAD) { p.state = DEAD; return; }

                const dx = q.x - p.x, dy = q.y - p.y;
                const d = Math.hypot(dx, dy) || 1;

                if (d < 4)
                {
                    // Annihilation — both particles vanish in a flash
                    events.push({ x: (p.x + q.x) * 0.5, y: (p.y + q.y) * 0.5, t: frameT, type: "death" });
                    p.state = DEAD;
                    q.state = DEAD;
                    return;
                }

                const spd = Math.min(2.2, d * 0.13 + 0.4);
                p.vx = (dx / d) * spd;
                p.vy = (dy / d) * spd;
                p.x += p.vx;
                p.y += p.vy;
                return;
            }

            // ── ALIVE + SEEKING: normal vortex + mouse physics ──
            applyFlow(p);
            applyMouse(p);
            applyDampWrap(p);

            // Age → SEEKING transition
            if (p.state === ALIVE && p.age >= p.lifespan)
            {
                p.state = SEEKING;
            }

            // ── SEEKING: scan every 8 frames for a partner ──
            if (p.state === SEEKING)
            {
                const seekAge = p.age - p.lifespan;
                if (seekAge > MAX_SEEK) { p.state = DEAD; return; }

                if (seekAge % 8 === 0 && p.partner === null)
                {
                    let best = null, bestD = SEEK_R;
                    for (const q of particles)
                    {
                        if (q === p || q.state !== SEEKING || q.partner !== null) continue;
                        const d = Math.hypot(q.x - p.x, q.y - p.y);
                        if (d < bestD) { bestD = d; best = q; }
                    }
                    if (best)
                    {
                        // Pair found — both converge toward each other
                        p.state = CONVERGING;
                        p.partner = best;
                        best.state = CONVERGING;
                        best.partner = p;
                    }
                }
            }
        }

        // ── Render ────────────────────────────────────────────────────────────
        function draw()
        {
            ctx.clearRect(0, 0, W, H);
            const speeds = particles.map(p =>
                p.state === CONVERGING ? Math.hypot(p.vx, p.vy) : Math.hypot(p.vx, p.vy)
            );

            // Nebula glow at vortex centers (dark scheme only)
            if (scheme === "dark")
            {
                for (const gc of [cGC1, cGC2])
                {
                    const gr = ctx.createRadialGradient(gc.x, gc.y, 0, gc.x, gc.y, Math.min(W, H) * 0.38);
                    gr.addColorStop(0, rgba(C.dust, 0.055));
                    gr.addColorStop(1, rgba(C.dust, 0));
                    ctx.fillStyle = gr;
                    ctx.globalAlpha = 1;
                    ctx.beginPath();
                    ctx.arc(gc.x, gc.y, Math.min(W, H) * 0.38, 0, TAU);
                    ctx.fill();
                }
            }

            // ── Birth / death flash events ──
            for (const ev of events)
            {
                const age = frameT - ev.t;
                if (age > 30) continue;
                const prog = age / 30;

                if (ev.type === "birth")
                {
                    // Expanding ring — vacuum tears open, pair emerges
                    ctx.strokeStyle = rgba(C.star, 1);
                    ctx.lineWidth = 1;
                    ctx.globalAlpha = (1 - prog) * 0.5;
                    ctx.beginPath(); ctx.arc(ev.x, ev.y, prog * 22, 0, TAU); ctx.stroke();
                    ctx.fillStyle = rgba(C.star, 1);
                    ctx.globalAlpha = Math.max(1 - prog * 2.5, 0) * 0.55;
                    ctx.beginPath(); ctx.arc(ev.x, ev.y, Math.max((1 - prog * 2) * 7, 0.5), 0, TAU); ctx.fill();
                } else
                {
                    // Annihilation — bright collapse then expanding shockwave
                    const flash = Math.max(1 - prog * 2.2, 0);
                    ctx.fillStyle = rgba(C.star, 1);
                    ctx.globalAlpha = flash * 0.9;
                    ctx.beginPath(); ctx.arc(ev.x, ev.y, flash * 14 + 1, 0, TAU); ctx.fill();
                    ctx.strokeStyle = rgba(C.chaos, 1);
                    ctx.lineWidth = 1.5;
                    ctx.globalAlpha = (1 - prog) * 0.5;
                    ctx.beginPath(); ctx.arc(ev.x, ev.y, prog * 30, 0, TAU); ctx.stroke();
                }
            }
            events = events.filter(ev => frameT - ev.t <= 30);

            // ── Connection lines ──
            for (let i = 0; i < particles.length; i++)
            {
                const pi = particles[i];
                if (pi.state === DEAD) continue;
                let links = 0;
                for (let j = i + 1; j < particles.length && links < 4; j++)
                {
                    const pj = particles[j];
                    if (pj.state === DEAD) continue;
                    const d = Math.hypot(pi.x - pj.x, pi.y - pj.y);
                    if (d > CONN_DIST) continue;

                    const proximity = 1 - d / CONN_DIST;
                    const avgSpd = (speeds[i] + speeds[j]) * 0.5;
                    const chaosBoost = Math.min(avgSpd / 4, 1);

                    // Converging pair gets a bright thread — the last connection before annihilation
                    const isPair = pi.state === CONVERGING && pi.partner === pj;
                    if (isPair)
                    {
                        ctx.lineWidth = 1.2;
                        ctx.globalAlpha = Math.min(proximity * 0.85, 0.8);
                        ctx.strokeStyle = rgba(C.star, 1);
                    } else
                    {
                        ctx.lineWidth = 0.55;
                        ctx.globalAlpha = Math.min(proximity * (0.06 + chaosBoost * 0.65), 0.78);
                        ctx.strokeStyle = rgba(C.line, 1);
                    }
                    ctx.beginPath();
                    ctx.moveTo(pi.x, pi.y);
                    ctx.lineTo(pj.x, pj.y);
                    ctx.stroke();
                    links++;
                }
            }

            // ── Particles ──
            for (let i = 0; i < particles.length; i++)
            {
                const p = particles[i];
                if (p.state === DEAD) continue;
                const spd = speeds[i];

                // Per-particle breathing + sparkle
                const breathe = 0.5 + 0.5 * Math.abs(Math.sin(frameT * p.twinkleHz + p.phX));
                const spark = Math.sin(frameT * p.sparkHz + p.phY * 1.8) > (p.isStar ? 0.91 : 0.97) ? 1.85 : 1.0;
                const baseA = p.brightness * breathe * spark;

                // Birth fade-in (first 22 frames)
                const birthFade = Math.min(p.age / 22, 1.0);

                // Death fade-out while seeking
                let deathFade = 1.0;
                if (p.state === SEEKING)
                {
                    const seekAge = p.age - p.lifespan;
                    deathFade = Math.max(1 - seekAge / MAX_SEEK, 0.12);
                }

                // Converging particles glow brighter — imminent annihilation
                const convergBoost = p.state === CONVERGING ? 1.4 : 1.0;

                const a = Math.min(baseA * (p.chaos ? 1 + spd * 0.08 : 1) * birthFade * deathFade * convergBoost, 1.0);
                const r = p.size * (1 + 0.07 * spark + (p.chaos ? Math.min(spd * 0.07, 0.55) : 0));
                const col = p.chaos ? C.chaos : (p.state === CONVERGING ? C.star : (p.isStar ? C.star : C.dust));

                ctx.fillStyle = rgba(col, 1);

                // Velocity trail — makes cosmic streams and wakes visible
                if (spd > 0.65)
                {
                    const tLen = p.chaos ? 4 : 2;
                    for (let k = 1; k <= tLen; k++)
                    {
                        ctx.globalAlpha = a * (1 - k / (tLen + 1)) * 0.33;
                        ctx.beginPath();
                        ctx.arc(
                            p.x - p.vx * k * 1.8,
                            p.y - p.vy * k * 1.8,
                            Math.max(r * (1 - k * 0.22), 0.12),
                            0, TAU
                        );
                        ctx.fill();
                    }
                }

                // Soft glow halo (stars, chaos, converging)
                if (p.isStar || (p.chaos && spd > 1.2) || p.state === CONVERGING)
                {
                    ctx.globalAlpha = a * 0.09;
                    ctx.beginPath(); ctx.arc(p.x, p.y, r * 6.5, 0, TAU); ctx.fill();
                    ctx.globalAlpha = a * 0.21;
                    ctx.beginPath(); ctx.arc(p.x, p.y, r * 3.2, 0, TAU); ctx.fill();
                }

                // Core dot
                ctx.globalAlpha = Math.min(a, 0.95);
                ctx.beginPath();
                ctx.arc(p.x, p.y, r, 0, TAU);
                ctx.fill();
            }

            ctx.globalAlpha = 1;
        }

        // ── Animation loop ────────────────────────────────────────────────────
        function tick()
        {
            frameT++;

            // Lissajous drift — vortex centers trace slow figures, field breathes
            const t = frameT * 0.00017;
            cGC1 = { x: gc1.x + Math.sin(t * 1.3) * 26, y: gc1.y + Math.cos(t * 0.71) * 14 };
            cGC2 = { x: gc2.x + Math.cos(t * 0.88) * 26, y: gc2.y + Math.sin(t * 1.07) * 14 };

            for (const p of particles) step(p);

            // Spawn pairs to maintain population (quantum vacuum replenishment)
            if (frameT % SPAWN_INT === 0)
            {
                const alive = particles.filter(p => p.state !== DEAD).length;
                if (alive < TARGET_N) spawnPair();
            }

            // Periodic cleanup of dead particles
            if (frameT % 90 === 0)
            {
                particles = particles.filter(p => p.state !== DEAD);
            }

            draw();

            if (isVisible) animId = requestAnimationFrame(tick);
            else animId = null;
        }

        // ── Input events ──────────────────────────────────────────────────────
        const onMove = e =>
        {
            const rc = container.getBoundingClientRect();
            const nx = e.clientX - rc.left, ny = e.clientY - rc.top;
            mouse.vx = nx - mouse.x; mouse.vy = ny - mouse.y;
            mouse.speed = Math.hypot(mouse.vx, mouse.vy);
            mouse.x = nx; mouse.y = ny; mouse.on = true;
        };
        const onLeave = () =>
        {
            mouse.on = false; mouse.x = -9999; mouse.y = -9999; mouse.speed = 0;
        };
        const onTouchMove = e =>
        {
            const t = e.touches[0]; if (!t) return;
            const rc = container.getBoundingClientRect();
            const nx = t.clientX - rc.left, ny = t.clientY - rc.top;
            mouse.vx = nx - mouse.x; mouse.vy = ny - mouse.y;
            mouse.speed = Math.hypot(mouse.vx, mouse.vy);
            mouse.x = nx; mouse.y = ny; mouse.on = true;
        };
        const onTouchEnd = () =>
        {
            mouse.on = false; mouse.x = -9999; mouse.y = -9999; mouse.speed = 0;
        };

        // IntersectionObserver — pause loop when section scrolls off screen
        const observer = new IntersectionObserver(entries =>
        {
            const was = isVisible;
            isVisible = entries[0].isIntersecting;
            if (isVisible && !was && animId === null) animId = requestAnimationFrame(tick);
        }, { threshold: 0.01 });
        observer.observe(container);

        resize();
        animId = requestAnimationFrame(tick);
        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseleave", onLeave);
        container.addEventListener("touchmove", onTouchMove, { passive: true });
        container.addEventListener("touchend", onTouchEnd);
        window.addEventListener("resize", resize);

        return () =>
        {
            if (animId !== null) cancelAnimationFrame(animId);
            observer.disconnect();
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("mouseleave", onLeave);
            container.removeEventListener("touchmove", onTouchMove);
            container.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("resize", resize);
        };
    }, [containerRef, scheme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                display: "block", pointerEvents: "none", zIndex: 0,
            }}
        />
    );
}
