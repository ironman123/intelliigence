import EthicsPill from "./EthicsPill";
import "../styles/trust-ethics.css";

const ETHICS_PILLARS = [
    { icon: "🔒", title: "Data Privacy & Security" },
    { icon: "⚖️", title: "Bias-aware Development" },
    { icon: "🔍", title: "Transparent Systems" },
    { icon: "🧠", title: "Human-in-the-loop Design" },
];

export default function TrustEthicsSection()
{
    return (
        <section className="trust-section">
            <div className="trust-header">
                <h2>Responsible AI, Built with Care</h2>
                <p>
                    Trust is foundational. Our systems are designed to be ethical,
                    transparent, and accountable at every layer.
                </p>
            </div>

            <div className="ethics-pill-grid">
                {ETHICS_PILLARS.map((pill, i) => (
                    <EthicsPill key={pill.title} {...pill} index={i} />
                ))}
            </div>
        </section>
    );
}
