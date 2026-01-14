import React from "react";
import { ArrowRight, BrainCircuit, Cpu, Database, Network, ShieldCheck, Zap } from "lucide-react";
import "../styles/about.css";

export default function AboutSection()
{
    return (
        <section className="about-section">
            {/* Background Ambient Glow */}
            <div className="about-glow blue" />
            <div className="about-glow purple" />

            <div className="about-container">
                {/* --- LEFT: Text Content --- */}
                <div className="space-y-8 about-content" style={{ zIndex: 20 }}>
                    <div className="about-tag">
                        <span className="pulse-dot" />
                        Our Role
                    </div>

                    {/* H1 Headline: Clear and strong */}
                    <h1 className="about-headline">
                        We are the architectural layer between <br />
                        <span className="collapse-gradient">
                            your data and artificial intelligence.
                        </span>
                    </h1>

                    {/* Descriptive Text: Explaining the "Connection" */}
                    <div className="space-y-6 text-lg leading-relaxed max-w-xl" style={{ color: '#a1a1aa' }}>
                        <p>
                            Raw AI models—like GPT or Claude—are powerful, but they don't know your business. They don't know your customers, your inventory, or your history. <strong>That is where we come in.</strong>
                        </p>
                        <p>
                            Our role is to build the secure "nervous system" that connects these advanced AI models to your company's private data. We engineer the pipelines that clean your information, the databases that store it, and the custom software that allows AI to reason and act on your behalf.
                        </p>
                        <p>
                            Whether it is a predictive engine for agriculture or an automated workflow for finance, we transform abstract algorithms into reliable, industry-specific tools that plug directly into your daily operations.
                        </p>
                    </div>

                    {/* Feature List: Highlighting the mechanics of the connection */}
                    <div className="about-features">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Network size={24} />
                            </div>
                            <div className="feature-text">
                                <h4>The Integration Layer</h4>
                                <p style={{ color: '#71717a' }}>
                                    We integrate AI agents directly into your existing software ecosystem (CRMs, ERPs, and Cloud Storage).
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon purple">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="feature-text">
                                <h4>Sovereignty & Security</h4>
                                <p style={{ color: '#71717a' }}>
                                    We ensure your data remains yours. We build private, secure environments where AI works for you, not the other way around.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="about-link group">
                            See How We Connect You <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* --- RIGHT: Visuals (The "Connection" Metaphor) --- */}
                <div className="visual-container particle-field">
                    <div className="grid-pattern" />

                    {/* VISUAL STORY: 
                        Blue nodes = Client Data
                        Purple nodes = AI Intelligence
                        The lines (implied by proximity) = Your Company connecting them
                    */}

                    {/* Top: The "Brain" (AI) */}
                    <div className="particle-icon p1 purple">
                        <BrainCircuit size={24} />
                    </div>

                    {/* Middle: The Connection (You) */}
                    <div className="particle-icon p3 blue">
                        <Cpu size={28} />
                    </div>
                    <div className="particle-icon p5 blue">
                        <Network size={20} />
                    </div>

                    {/* Bottom: The Data (The Client) */}
                    <div className="particle-icon p2 purple">
                        <Database size={20} />
                    </div>
                    <div className="particle-icon p4 purple">
                        <Zap size={18} />
                    </div>

                    {/* Overlay Text showing the "Action" */}
                    <div className="code-overlay">
                        {`> connecting_source: CLIENT_DB`} <br />
                        {`> injecting_context: PRIVATE_VECTORS`} <br />
                        {`> status: INTELLIGENCE_BRIDGED`}
                    </div>
                </div>
            </div>
        </section>
    );
}