import { useEffect, useRef } from "react";

// ── Shape drawers ─────────────────────────────────────────────────────────────

function drawGradCap(ctx, x, y, s, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x - s * 0.28, y - s * 0.42, s * 0.56, s * 0.40);
    ctx.fillRect(x - s * 0.54, y - s * 0.08, s * 1.08, s * 0.20);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x + s * 0.28, y + s * 0.12);
    ctx.lineTo(x + s * 0.28, y + s * 0.38);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + s * 0.28, y + s * 0.42, s * 0.09, 0, Math.PI * 2);
    ctx.fill();
}

function drawFlame(ctx, x, y, s, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.52);
    ctx.bezierCurveTo(x - s * 0.36, y + s * 0.18, x - s * 0.42, y - s * 0.08, x - s * 0.04, y - s * 0.52);
    ctx.bezierCurveTo(x - s * 0.04, y - s * 0.08, x + s * 0.14, y - s * 0.14, x + s * 0.06, y - s * 0.52);
    ctx.bezierCurveTo(x + s * 0.42, y - s * 0.08, x + s * 0.36, y + s * 0.18, x, y + s * 0.52);
    ctx.fill();
}

function drawStar(ctx, x, y, r, color) {
    const inner = r * 0.42;
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const a = (Math.PI / 4) * i - Math.PI / 2;
        const rad = i % 2 === 0 ? r : inner;
        i === 0
            ? ctx.moveTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad)
            : ctx.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad);
    }
    ctx.closePath();
    ctx.fill();
}

function drawBox(ctx, x, y, s, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x - s / 2, y - s / 2, s, s);
    ctx.beginPath();
    ctx.moveTo(x - s / 2, y - s * 0.18);
    ctx.lineTo(x + s / 2, y - s * 0.18);
    ctx.stroke();
}

function drawCross(ctx, x, y, s, color) {
    const half = s / 2;
    ctx.fillStyle = color;
    ctx.fillRect(x - 1.8, y - half, 3.6, s);
    ctx.fillRect(x - half, y - 1.8, s, 3.6);
}

// ── Particle init & update ────────────────────────────────────────────────────

const FINANCE_SYMBOLS = ["$", "₹", "€", "%", "▲", "▼", "+"];

function initP(type, W, H) {
    const p = {
        x: Math.random() * W,
        y: Math.random() * H,
        alpha: 0,
        baseAlpha: 0.14 + Math.random() * 0.20,
        age: Math.floor(Math.random() * 150),
        maxAge: 160 + Math.floor(Math.random() * 120),
        size: 8 + Math.random() * 9,
        speed: 0.28 + Math.random() * 0.40,
        phase: Math.random() * Math.PI * 2,
        type,
        twinkleFreq:  1.5 + Math.random() * 3.0,
        twinklePhase: Math.random() * Math.PI * 2,
    };

    if (type === "finance") {
        p.symbol = FINANCE_SYMBOLS[Math.floor(Math.random() * FINANCE_SYMBOLS.length)];
        p.freq = 0.5 + Math.random() * 0.7;
        p.dir = Math.random() < 0.65 ? -1 : 1;
    } else if (type === "crm") {
        p.orbitR = 28 + Math.random() * 55;
        p.ox = Math.random() * W;
        p.oy = Math.random() * H;
        p.angle = Math.random() * Math.PI * 2;
        p.angSpeed = (0.003 + Math.random() * 0.005) * (Math.random() < 0.5 ? 1 : -1);
        p.size = 3.5 + Math.random() * 4;
    } else if (type === "school") {
        p.isCap = Math.random() < 0.45;
        p.speed = 0.30 + Math.random() * 0.30;
    } else if (type === "clinic") {
        p.dist = Math.random() * 180;
        p.maxDist = 200 + Math.random() * 160;
        p.angle = Math.random() * Math.PI * 2;
        p.baseAlpha = 0.18 + Math.random() * 0.20;
        p.alpha = p.baseAlpha * (1 - p.dist / p.maxDist);
    } else if (type === "inventory") {
        p.speed = 0.22 + Math.random() * 0.28;
    } else if (type === "kitchen") {
        p.isFlame = Math.random() < 0.55;
        p.flickerFreq = 2.5 + Math.random() * 3;
        p.speed = 0.42 + Math.random() * 0.50;
    }
    return p;
}

function updateP(p, W, H, t) {
    const { type } = p;

    if (type === "finance") {
        p.x += p.dir * p.speed;
        p.y += Math.sin(t * p.freq + p.phase) * 0.40;
        if (p.dir < 0 && p.x < -30) { p.x = W + 30; p.y = 60 + Math.random() * (H - 120); }
        if (p.dir > 0 && p.x > W + 30) { p.x = -30; p.y = 60 + Math.random() * (H - 120); }
    } else if (type === "crm") {
        p.angle += p.angSpeed;
        p.x = p.ox + Math.cos(p.angle) * p.orbitR;
        p.y = p.oy + Math.sin(p.angle) * p.orbitR;
        p.ox += Math.sin(t * 0.14 + p.phase) * 0.07;
        p.oy += Math.cos(t * 0.11 + p.phase) * 0.07;
        p.ox = Math.max(70, Math.min(W - 70, p.ox));
        p.oy = Math.max(70, Math.min(H - 70, p.oy));
    } else if (type === "school") {
        p.y -= p.speed;
        p.x += Math.sin(t * 0.38 + p.phase) * 0.32;
        if (p.y < -30) { p.y = H + 30; p.x = Math.random() * W; }
    } else if (type === "clinic") {
        p.dist += p.speed * 0.75;
        p.x = W * 0.5 + Math.cos(p.angle) * p.dist;
        p.y = H * 0.5 + Math.sin(p.angle) * p.dist;
        p.alpha = Math.max(0, p.baseAlpha * Math.pow(1 - p.dist / p.maxDist, 1.4));
        if (p.dist > p.maxDist) { p.dist = 0; p.angle = Math.random() * Math.PI * 2; }
        p.alpha *= 0.65 + 0.35 * (0.5 + 0.5 * Math.sin(t * p.twinkleFreq + p.twinklePhase));
        return; // skip age alpha
    } else if (type === "inventory") {
        p.y += p.speed;
        if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
    } else if (type === "kitchen") {
        p.y -= p.speed;
        p.x += Math.sin(t * p.flickerFreq + p.phase) * 0.9;
        if (p.y < -30) { p.y = H + 30; p.x = Math.random() * W; }
    }

    p.age = (p.age + 1) % p.maxAge;
    const q = p.maxAge * 0.18;
    if (p.age < q) p.alpha = p.baseAlpha * (p.age / q);
    else if (p.age > p.maxAge - q) p.alpha = p.baseAlpha * ((p.maxAge - p.age) / q);
    else p.alpha = p.baseAlpha;

    p.alpha *= 0.65 + 0.35 * (0.5 + 0.5 * Math.sin(t * p.twinkleFreq + p.twinklePhase));
}

function drawP(ctx, p, color) {
    if (p.alpha <= 0.005) return;
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.shadowColor = color;
    ctx.shadowBlur  = p.alpha * 18;

    switch (p.type) {
        case "finance":
            ctx.fillStyle = color;
            ctx.font = `500 ${p.size}px 'Inter', monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(p.symbol, p.x, p.y);
            break;
        case "crm":
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
        case "school":
            p.isCap ? drawGradCap(ctx, p.x, p.y, p.size, color) : drawStar(ctx, p.x, p.y, p.size * 0.5, color);
            break;
        case "clinic":
            drawCross(ctx, p.x, p.y, p.size, color);
            break;
        case "inventory":
            drawBox(ctx, p.x, p.y, p.size, color);
            break;
        case "kitchen":
            p.isFlame
                ? drawFlame(ctx, p.x, p.y, p.size, color)
                : (ctx.strokeStyle = color, ctx.lineWidth = 1.5,
                   ctx.beginPath(), ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2), ctx.stroke(),
                   ctx.beginPath(), ctx.arc(p.x, p.y, p.size * 0.3, 0, Math.PI * 2), ctx.stroke());
            break;
    }
    ctx.shadowBlur = 0;
    ctx.restore();
}

// ── Config map ────────────────────────────────────────────────────────────────

const TYPE_MAP = {
    financemanager:      { type: "finance",   count: 52 },
    crmportal:           { type: "crm",       count: 32 },
    schoolmanager:       { type: "school",    count: 46 },
    clinicmanager:       { type: "clinic",    count: 50 },
    inventorymanager:    { type: "inventory", count: 42 },
    kitchendisplaysystem:{ type: "kitchen",   count: 44 },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function ProductParticles({ productId, primaryColor }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const cfg = TYPE_MAP[productId];
        if (!cfg) return;

        const { type, count } = cfg;
        let particles = [];
        let animId;
        let t = 0;

        function resize() {
            const parent = canvas.parentElement;
            if (!parent) return;
            canvas.width  = parent.clientWidth;
            canvas.height = parent.clientHeight;
            particles = Array.from({ length: count }, () =>
                initP(type, canvas.width, canvas.height)
            );
        }

        function drawCrmLines() {
            ctx.lineWidth = 0.9;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d  = Math.sqrt(dx * dx + dy * dy);
                    if (d < 95) {
                        ctx.globalAlpha = (1 - d / 95) * 0.13;
                        ctx.strokeStyle = primaryColor;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;
        }

        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t += 0.016;
            if (type === "crm") drawCrmLines();
            for (const p of particles) {
                updateP(p, canvas.width, canvas.height, t);
                drawP(ctx, p, primaryColor);
            }
            animId = requestAnimationFrame(loop);
        }

        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement);
        resize();
        loop();

        return () => { cancelAnimationFrame(animId); ro.disconnect(); };
    }, [productId, primaryColor]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 4,
                opacity: 0.55,
            }}
        />
    );
}
