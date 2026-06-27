import { useRef } from "react";
import EntropicCanvas from "./EntropicCanvas";
import "../styles/testimonials.css";

const TESTIMONIALS = [
    {
        quote: "We replaced three separate finance tools with Finance Manager. The AI cash-flow forecasting alone has saved us from two near-miss crunch situations. Our team actually uses it — which says everything.",
        name: "Priya R.",
        role: "CFO, D2C Health Brand · Series A",
        initials: "PR",
        product: "Finance Manager",
        accent: "#3b82f6",
        accentRgb: "59,130,246",
    },
    {
        quote: "The RAG agent Entropic built processes 14,000 policy documents our teams used to search manually. Response quality beats our senior analysts on routine queries, and every answer cites its source.",
        name: "Karan M.",
        role: "VP Engineering, InsurTech Startup",
        initials: "KM",
        product: "Custom RAG System",
        accent: "#8b5cf6",
        accentRgb: "139,92,246",
    },
    {
        quote: "CRM Portal gave our sales team deal-stage AI nudges that match how we actually sell. Follow-up reminders went from being ignored to being acted on. Pipeline visibility is finally real-time.",
        name: "Neha S.",
        role: "Head of Sales, B2B SaaS Company",
        initials: "NS",
        product: "CRM Portal",
        accent: "#10b981",
        accentRgb: "16,185,129",
    },
    {
        quote: "The workflow automation they built for our procurement cycle cut PO processing time from four days to six hours. What impressed us most — they told us exactly where the model would be uncertain before we went live.",
        name: "Arjun T.",
        role: "COO, Manufacturing Firm · 800+ employees",
        initials: "AT",
        product: "Workflow Automation",
        accent: "#f59e0b",
        accentRgb: "245,158,11",
    },
];

const onCardMove  = e => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width  * 100).toFixed(2) + "%");
    e.currentTarget.style.setProperty("--my", ((e.clientY - r.top)  / r.height * 100).toFixed(2) + "%");
};
const onCardEnter = e => e.currentTarget.style.setProperty("--go", "1");
const onCardLeave = e => e.currentTarget.style.setProperty("--go", "0");

export default function TestimonialsSection() {
    const sectionRef = useRef(null);
    const smokeRef   = useRef(null);

    const onMouseMove = e => {
        if (!smokeRef.current) return;
        const rc = e.currentTarget.getBoundingClientRect();
        smokeRef.current.style.setProperty("--sx", ((e.clientX - rc.left) / rc.width  * 100).toFixed(2) + "%");
        smokeRef.current.style.setProperty("--sy", ((e.clientY - rc.top)  / rc.height * 100).toFixed(2) + "%");
        smokeRef.current.style.opacity = "1";
    };
    const onMouseLeave = () => {
        if (smokeRef.current) smokeRef.current.style.opacity = "0";
    };

    return (
        <section
            ref={sectionRef}
            className="tst-section"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <EntropicCanvas containerRef={sectionRef} scheme="dark" />
            <div ref={smokeRef} className="tst-smoke" aria-hidden="true" />

            <div className="tst-content">
                <div className="tst-header">
                    <span className="tst-eyebrow">Client Results</span>
                    <h2 className="tst-headline">
                        Software that ships —<br />and <em>keeps working.</em>
                    </h2>
                </div>

                <div className="tst-grid">
                    {TESTIMONIALS.map(t => (
                        <article
                            key={t.name}
                            className="tst-card"
                            style={{ "--accent": t.accent, "--accent-rgb": t.accentRgb }}
                            onMouseMove={onCardMove}
                            onMouseEnter={onCardEnter}
                            onMouseLeave={onCardLeave}
                        >
                            {/* Top row: product + stars */}
                            <div className="tst-card-top">
                                <span className="tst-product-pill">
                                    <span className="tst-product-dot" />
                                    {t.product}
                                </span>
                                <div className="tst-stars" aria-label="5 out of 5 stars">
                                    {"★★★★★".split("").map((s, i) => (
                                        <span key={i} className="tst-star" aria-hidden="true">{s}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="tst-quote">
                                {t.quote}
                            </blockquote>

                            {/* Author */}
                            <footer className="tst-author">
                                <div className="tst-avatar" aria-hidden="true">{t.initials}</div>
                                <div className="tst-meta">
                                    <span className="tst-name">{t.name}</span>
                                    <span className="tst-role">{t.role}</span>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
