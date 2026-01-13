"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/footer.css";
import ProjectModal from "./ProjectModal";
import
{
    Facebook,
    Linkedin,
    Twitter,
    Youtube,
    ArrowUpRight,
    Cpu,
    Globe,
    Zap
} from "lucide-react";
import SchedulingModal from "./SchedulingModal";

export default function Footer()
{
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false); // For Strategy Call
    const [isProjectOpen, setIsProjectOpen] = useState(false); // <--- 2. ADD THIS STATE

    return (
        <footer className="site-footer">
            <div className="footer-container">

                {/* --- TOP ROW: BRANDING & CTA --- */}
                <div className="footer-top">
                    <div className="footer-brand-lockup">
                        {/* 1. Use /images/... (remove public) 
        2. Use 'style' (not styles) 
        3. Increased width to be visible */}
                        <img
                            src="/images/logo.png"
                            alt="Company Logo"
                            style={{ width: '10rem', marginBottom: '1rem' }}
                        />

                        <h1 className="footer-headline">
                            Intelligence, <br />
                            {/* If you want the gradient back, wrap this in the span again */}
                            Engineered.
                        </h1>

                        <p className="footer-subhead">
                            From enterprise RAG systems to autonomous robotics.
                            We build the infrastructure for the next decade.
                        </p>
                    </div>
                    <div className="footer-cta-wrapper">
                        {/* ACTION 1: Start a Project (Go to Page) */}
                        <button
                            // 1. ADD relative, z-50, and pointer-events-auto to force clickability
                            className="footer-cta-btn primary relative z-50 pointer-events-auto"
                            onClick={(e) =>
                            {
                                // 2. Prevent bubbling issues
                                e.stopPropagation();
                                console.log("Opening Project Modal...");
                                setIsProjectOpen(true);
                            }}
                        >
                            Start a Project <ArrowUpRight size={18} />
                        </button>

                        {/* ACTION 2: Strategy Call (Open Modal) */}
                        <button
                            className="footer-cta-btn secondary"
                            onClick={() =>
                            {
                                console.log("Button Clicked!"); // <--- Check console for this
                                setIsModalOpen(true);
                            }}
                        >
                            Book Strategy Call
                        </button>
                    </div>
                </div>

                <div className="footer-divider" />

                {/* --- MAIN GRID --- */}
                <div className="footer-grid">

                    {/* COLUMN 1: NAVIGATION & COMPANY */}
                    <div className="footer-col nav-col">
                        <h4 className="col-header">Company</h4>
                        <ul className="link-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">Our Story</a></li>
                            <li><a href="/case-studies">Case Studies</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 2: CORE (Enterprise Ready) */}
                    <div className="footer-col">
                        <h4 className="col-header">
                            <Zap size={16} className="col-icon" /> Core Solutions
                        </h4>
                        <ul className="link-list">
                            <li><a href="/solutions/core#genai">Generative AI & RAG Agents</a></li>
                            <li><a href="/solutions/core#data">Data Engineering & Pipelines</a></li>
                            <li><a href="/solutions/core#automation">Workflow Automation (NLP)</a></li>
                            <li><a href="/solutions/core#predictive">Predictive ML & Forecasting</a></li>
                            <li><a href="/solutions/core#native">AI-Native SaaS Engineering</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: EMERGING (Industry Verticals) */}
                    <div className="footer-col">
                        <h4 className="col-header">
                            <Globe size={16} className="col-icon" /> Emerging Tech
                        </h4>
                        <ul className="link-list">
                            <li><a href="/solutions/emerging#healthcare">Precision Diagnostics</a></li>
                            <li><a href="/solutions/emerging#agriculture">Smart Agriculture</a></li>
                            <li><a href="/solutions/emerging#urban">Urban Planning & Digital Twins</a></li>
                            <li><a href="/solutions/emerging#energy">Energy Grid Optimization</a></li>
                            <li><a href="/solutions/emerging#climate">Disaster Response AI</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: VISION (Future R&D) */}
                    <div className="footer-col">
                        <h4 className="col-header">
                            <Cpu size={16} className="col-icon" /> Vision R&D
                        </h4>
                        <ul className="link-list">
                            <li><a href="/solutions/vision#embodied">Embodied AI & Robotics</a></li>
                            <li><a href="/solutions/vision#swarms">Autonomous Agent Swarms</a></li>
                            <li><a href="/solutions/vision#simulators">Generative World Models</a></li>
                            <li><a href="/solutions/vision#neuro">Neuro-Symbolic Reasoning</a></li>
                            <li><a href="/solutions/vision#bci">Brain-Computer Interfaces</a></li>
                        </ul>
                    </div>

                </div>

                {/* --- BOTTOM ROW: LEGAL & SOCIAL --- */}
                <div className="footer-bottom">
                    <div className="footer-socials">
                        <a href="#" aria-label="LinkedIn" className="social-link"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Twitter" className="social-link"><Twitter size={20} /></a>
                        <a href="#" aria-label="YouTube" className="social-link"><Youtube size={20} /></a>
                        <a href="#" aria-label="Facebook" className="social-link"><Facebook size={20} /></a>
                    </div>

                    <div className="footer-legal">
                        <span>&copy; {currentYear} Company Inc. All rights reserved.</span>
                        <div className="legal-links">
                            <a href="/privacy">Privacy Policy</a>
                            <span className="separator">•</span>
                            <a href="/terms">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MODAL INJECTION POINT --- */}
            <SchedulingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <ProjectModal
                isOpen={isProjectOpen}
                onClose={() => setIsProjectOpen(false)}
            />
        </footer>
    );
}