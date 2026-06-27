import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";
import { send } from "@emailjs/browser";
import { createClient } from "@supabase/supabase-js";
import { ArrowRight, CheckCircle, ChevronDown, Clock, Loader2, Mail, MessageCircle } from "lucide-react";
import EntropicCanvas from "./EntropicCanvas";
import "../styles/contact.css";

// ─── ENV ──────────────────────────────────────────────────────────────────
// NOTE: VITE_-prefixed vars are shipped to the browser. VITE_SUPABASE_KEY MUST be
// the anon/publishable key (never service_role), and the `leads` table MUST have
// Row-Level Security enabled with an insert-only policy. See SECURITY.md for the SQL.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

let _supabase = null;
function getSupabase()
{
    if (_supabase) return _supabase;
    if (!supabaseUrl || !supabaseKey) return null;
    _supabase = createClient(supabaseUrl, supabaseKey);
    return _supabase;
}

// ─── VALIDATION ────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 254, details: 4000 };

// ─── OPTION DATA ───────────────────────────────────────────────────────────
const PROJECT_TYPES = [
    {
        group: "Our SaaS Products", options: [
            "Finance Manager Software",
            "CRM Portal Software",
            "School Manager Software",
            "Inventory Manager Software",
            "Clinic Manager Software",
            "Kitchen Display System Software",
        ]
    },
    {
        group: "AI & Automation Services", options: [
            "AI Agents & RAG Systems",
            "Custom LLM Development & Fine-Tuning",
            "Offline / On-Premise AI Deployment",
            "AI Infrastructure & GPU Orchestration",
            "Workflow & Document Automation",
            "Data Engineering & Pipelines",
            "Predictive ML & Forecasting",
            "AI Audit & Compliance Strategy",
        ]
    },
    {
        group: "Other", options: [
            "Custom Software (Web / Mobile)",
            "General Consulting",
            "Something else — I'll describe it below",
        ]
    },
];

const EMPTY_FORM = { name: "", email: "", type: PROJECT_TYPES[0].options[0], details: "", company: "" };

export default function ContactPage()
{
    const formId = useId();
    const openedAtRef = useRef(0);
    const heroRef = useRef(null);
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(EMPTY_FORM);

    useEffect(() => { openedAtRef.current = Date.now(); }, []);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const resetForm = () =>
    {
        openedAtRef.current = Date.now();
        setFormData(EMPTY_FORM);
        setStep(1);
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        // ── Spam gate 1: honeypot. Bots fill every field, including the hidden one.
        // Silently "succeed" so we don't tip the bot off.
        if (formData.company.trim() !== "")
        {
            setStep(2);
            return;
        }

        // ── Spam gate 2: timing. A submit < 2s after the page loaded is almost
        // certainly automated — a human can't read and fill the form that fast.
        if (Date.now() - openedAtRef.current < 2000)
        {
            setStep(2);
            return;
        }

        const name = formData.name.trim();
        const email = formData.email.trim();
        const details = formData.details.trim();

        if (!name || !email || !details)
        {
            alert("Please fill in all fields.");
            return;
        }
        if (!EMAIL_RE.test(email))
        {
            alert("Please enter a valid email address.");
            return;
        }
        if (name.length > LIMITS.name || email.length > LIMITS.email || details.length > LIMITS.details)
        {
            alert("One of the fields is too long. Please shorten it and try again.");
            return;
        }

        setIsSubmitting(true);

        if (!emailServiceId || !emailPublicKey || !emailTemplateId)
        {
            alert("System error: email configuration missing.");
            setIsSubmitting(false);
            return;
        }

        const supabase = getSupabase();
        if (!supabase)
        {
            alert("System error: database configuration missing.");
            setIsSubmitting(false);
            return;
        }

        try
        {
            // A. Save to Supabase (RLS + insert-only policy on `leads` — see SECURITY.md)
            const { error: dbError } = await supabase.from("leads").insert([{
                name,
                email,
                project_type: formData.type,
                details,
                source: "contact_page",
            }]);

            if (dbError) throw new Error("Database error: " + dbError.message);

            // B. Notify via EmailJS (public key is safe client-side — lock the
            //    allowed domain + rate limit in the EmailJS dashboard, see SECURITY.md)
            await send(
                emailServiceId,
                emailTemplateId,
                { name, email, type: formData.type, details },
                emailPublicKey
            );

            setStep(2);
        } catch (error)
        {
            console.error("Submission failed:", error);
            alert("Error: " + (error.message || "Something went wrong. Please try again."));
        } finally
        {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* ─── STATEMENT ─── */}
            <section ref={heroRef} className="ct-hero">
                <EntropicCanvas containerRef={heroRef} scheme="dark" />
                <div className="ct-glow" aria-hidden="true" />
                <div className="ct-hero-inner">
                    <span className="ct-eyebrow">Contact</span>
                    <h1 className="ct-headline">Let's build something worth shipping.</h1>
                    <p className="ct-lede">
                        Tell us what you're working on — whether it's one of our SaaS products or a
                        custom AI system. We read every message ourselves and reply within 24 hours.
                    </p>
                </div>
            </section>

            {/* ─── FORM + INFO ─── */}
            <section className="ct-main">
                <div className="ct-main-inner">

                    <div className="ct-info">
                        <div className="ct-info-item">
                            <Mail size={18} className="ct-info-icon" />
                            <div>
                                <h3>Email us directly</h3>
                                <a href="mailto:entropicsys@gmail.com">entropicsys@gmail.com</a>
                            </div>
                        </div>
                        <div className="ct-info-item">
                            <MessageCircle size={18} className="ct-info-icon" />
                            <div>
                                <h3>WhatsApp</h3>
                                <a href="https://wa.me/917060816597" target="_blank" rel="noopener noreferrer">
                                    +91 70608 16597
                                </a>
                            </div>
                        </div>
                        <div className="ct-info-item">
                            <Clock size={18} className="ct-info-icon" />
                            <div>
                                <h3>Response time</h3>
                                <p>Within 24 hours, every business day.</p>
                            </div>
                        </div>
                        <p className="ct-info-note">
                            The more context you share — what you're building, your timeline, your
                            team size — the faster we can give you a useful answer.
                        </p>
                    </div>

                    <div className="ct-form-card">
                        {step === 1 ? (
                            <form onSubmit={handleSubmit} noValidate>

                                {/* Honeypot — hidden from humans, bots fill it → submission silently dropped */}
                                <div aria-hidden="true" className="ct-honeypot">
                                    <label>
                                        Company (leave this empty)
                                        <input
                                            type="text"
                                            name="company"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>

                                <div className="ct-row">
                                    <div className="ct-group">
                                        <label className="ct-label" htmlFor={`${formId}-name`}>Name</label>
                                        <input
                                            id={`${formId}-name`}
                                            name="name"
                                            type="text"
                                            placeholder="Arjun Mehta"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="ct-input"
                                        />
                                    </div>
                                    <div className="ct-group">
                                        <label className="ct-label" htmlFor={`${formId}-email`}>Email</label>
                                        <input
                                            id={`${formId}-email`}
                                            name="email"
                                            type="email"
                                            placeholder="arjun@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="ct-input"
                                        />
                                    </div>
                                </div>

                                <div className="ct-group">
                                    <label className="ct-label" htmlFor={`${formId}-type`}>I'm interested in</label>
                                    <div className="ct-select-wrap">
                                        <select
                                            id={`${formId}-type`}
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="ct-select"
                                        >
                                            {PROJECT_TYPES.map((group) => (
                                                <optgroup key={group.group} label={group.group}>
                                                    {group.options.map((opt) => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </select>
                                        <ChevronDown size={14} className="ct-select-arrow" />
                                    </div>
                                </div>

                                <div className="ct-group">
                                    <label className="ct-label" htmlFor={`${formId}-details`}>Tell us more</label>
                                    <textarea
                                        id={`${formId}-details`}
                                        name="details"
                                        placeholder="Describe your use case, team size, timeline, or any questions you have..."
                                        value={formData.details}
                                        onChange={handleChange}
                                        className="ct-textarea"
                                    />
                                </div>

                                <button type="submit" disabled={isSubmitting} className="ct-submit">
                                    {isSubmitting ? (
                                        <><Loader2 size={16} className="ct-spin" /> Sending…</>
                                    ) : (
                                        <>Send message <ArrowRight size={15} /></>
                                    )}
                                </button>

                                <p className="ct-privacy-note">
                                    Your information is never shared with third parties.
                                </p>
                            </form>
                        ) : (
                            /* ─── SUCCESS ─── */
                            <div className="ct-success">
                                <div className="ct-success-icon"><CheckCircle size={26} /></div>
                                <h3>Message received</h3>
                                <p>
                                    Thanks, {formData.name}. We've logged your interest in{" "}
                                    <strong>{formData.type}</strong> and will be in touch within 24 hours.
                                </p>
                                <div className="ct-success-actions">
                                    <button className="ct-success-btn" onClick={resetForm}>Send another message</button>
                                    <Link to="/" className="ct-link">Back to home <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
