import React from "react";
import { ArrowRight, Sparkles, Layers, TrendingUp, Zap, Target, Activity } from "lucide-react";
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
                        Our Vision
                    </div>

                    {/* H1 Headline: Visionary and bold */}
                    <h1 className="about-headline">
                        We build systems that <span className="collapse-gradient">think ahead</span>—<br />
                        so your business never has to catch up.
                    </h1>

                    {/* Descriptive Text: The new copy */}
                    <div className="space-y-6 text-lg leading-relaxed max-w-xl" style={{ color: '#a1a1aa' }}>
                        <p>
                            More than just software, we create an <strong>evolving ecosystem</strong> that grows with your ambitions.
                        </p>
                        <p>
                            Crafted for modern teams who move fast and think bigger, our platform turns complexity into momentum and ideas into scalable impact.
                        </p>
                    </div>

                    {/* Feature List: Updated to match the "momentum/scaling" theme */}
                    <div className="about-features">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Layers size={24} />
                            </div>
                            <div className="feature-text">
                                <h4>Evolving Ecosystems</h4>
                                <p style={{ color: '#71717a' }}>
                                    Architecture designed to adapt, scale, and seamlessly support your long-term goals.
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon purple">
                                <TrendingUp size={24} />
                            </div>
                            <div className="feature-text">
                                <h4>Scalable Momentum</h4>
                                <p style={{ color: '#71717a' }}>
                                    We remove friction so your team can focus on what matters: executing big ideas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="about-link group">
                            Discover the Platform <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* --- RIGHT: Visuals (The "Momentum" Metaphor) --- */}
                <div className="visual-container particle-field">
                    <div className="grid-pattern" />

                    {/* VISUAL STORY: Momentum, Growth, and Future-proofing */}

                    {/* Top: Innovation/Ideas */}
                    <div className="particle-icon p1 purple">
                        <Sparkles size={24} />
                    </div>

                    {/* Middle: Action/Momentum */}
                    <div className="particle-icon p3 blue">
                        <Target size={28} />
                    </div>
                    <div className="particle-icon p5 blue">
                        <Activity size={20} />
                    </div>

                    {/* Bottom: Foundation/Scaling */}
                    <div className="particle-icon p2 purple">
                        <Layers size={20} />
                    </div>
                    <div className="particle-icon p4 purple">
                        <Zap size={18} />
                    </div>

                    {/* Overlay Text showing the new "Action" */}
                    <div className="code-overlay">
                        {`> initializing_ecosystem`} <br />
                        {`> compiling_ideas -> momentum`} <br />
                        {`> status: IMPACT_SCALED`}
                    </div>
                </div>
            </div>
        </section>
    );
}