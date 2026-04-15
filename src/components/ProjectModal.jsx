"use client";

import { X, CheckCircle, ArrowRight, Loader2, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { send } from "@emailjs/browser";
import { createClient } from "@supabase/supabase-js";

// ─── ENV ──────────────────────────────────────────────────────────────────────
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// ─── OPTION DATA ──────────────────────────────────────────────────────────────
const PROJECT_TYPES = [
    // SaaS Products
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
    // AI Services
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
    // Other
    {
        group: "Other", options: [
            "Custom Software (Web / Mobile)",
            "General Consulting",
            "Something else — I'll describe it below",
        ]
    },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────
const S = {
    dialog: {
        border: "none",
        borderRadius: "16px 0 0 16px",
        padding: 0,
        background: "transparent",
        maxWidth: 560,
        width: "calc(100vw - 32px)",
        height: "100vh",
        maxHeight: "90vh",
        overflowY: "auto",
        boxShadow: "-10px 0 80px rgba(0,0,0,0.6)",
        margin: 0,
        marginLeft: "30rem",
        marginTop: "3rem"
    },
    card: {
        background: "#0c0c10",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        overflow: "hidden",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#e4e4e7",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "#0a0a0e",
    },
    headerLeft: {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
    headerDot: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#3b82f6",
        boxShadow: "0 0 8px rgba(59,130,246,0.5)",
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: 600,
        color: "#f4f4f5",
        letterSpacing: "-0.01em",
    },
    headerSub: {
        fontSize: 12,
        color: "#52525b",
        marginLeft: 4,
    },
    closeBtn: {
        width: 30,
        height: 30,
        borderRadius: 8,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#71717a",
        cursor: "pointer",
        transition: "background 0.15s, color 0.15s",
    },
    body: {
        padding: "28px 24px 24px",
    },
    description: {
        fontSize: 13.5,
        color: "#71717a",
        lineHeight: 1.6,
        marginBottom: 24,
        paddingBottom: 20,
        borderBottom: "1px solid rgba(255,255,255,0.05)",
    },
    row: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginBottom: 14,
    },
    group: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        marginBottom: 14,
    },
    label: {
        fontSize: 12,
        fontWeight: 600,
        color: "#a1a1aa",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
    },
    input: {
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "10px 14px",
        fontSize: 14,
        color: "#f4f4f5",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        transition: "border-color 0.2s",
        fontFamily: "inherit",
    },
    select: {
        background: "rgba(63, 58, 58, 0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "10px 14px",
        fontSize: 14,
        color: "#919191",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        cursor: "pointer",
        transition: "border-color 0.2s",
        fontFamily: "inherit",
        appearance: "none",
        WebkitAppearance: "none",
    },
    selectWrap: {
        position: "relative",
    },
    selectArrow: {
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%)",
        color: "#52525b",
        pointerEvents: "none",
    },
    textarea: {
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "10px 14px",
        fontSize: 14,
        color: "#f4f4f5",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        resize: "vertical",
        minHeight: 90,
        transition: "border-color 0.2s",
        fontFamily: "inherit",
        lineHeight: 1.6,
    },
    submitBtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: "100%",
        background: "#fff",
        color: "#09090b",
        border: "none",
        borderRadius: 8,
        padding: "12px 20px",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",
        transition: "background 0.2s, transform 0.15s",
        marginTop: 20,
        letterSpacing: "-0.01em",
    },
    submitBtnDisabled: {
        opacity: 0.5,
        cursor: "not-allowed",
    },
    privacyNote: {
        fontSize: 11.5,
        color: "#3f3f46",
        textAlign: "center",
        marginTop: 12,
    },
    // ── SUCCESS ──
    successWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 24px",
        textAlign: "center",
        gap: 12,
    },
    successIconWrap: {
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "rgba(16,185,129,0.1)",
        border: "1px solid rgba(16,185,129,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#10b981",
        marginBottom: 8,
    },
    successTitle: {
        fontSize: 22,
        fontWeight: 700,
        color: "#f4f4f5",
        letterSpacing: "-0.02em",
        margin: 0,
    },
    successDesc: {
        fontSize: 14,
        color: "#71717a",
        lineHeight: 1.6,
        maxWidth: 340,
        margin: 0,
    },
    closeSecondary: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 8,
        padding: "10px 24px",
        fontSize: 14,
        fontWeight: 500,
        color: "#a1a1aa",
        cursor: "pointer",
        marginTop: 8,
        transition: "background 0.2s",
    },
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ProjectModal({ isOpen, onClose })
{
    const dialogRef = useRef(null);
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "Finance Manager — FinanceIQ",
        details: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.details)
        {
            alert("Please fill in all fields.");
            return;
        }

        setIsSubmitting(true);

        if (!emailServiceId || !emailPublicKey || !emailTemplateId)
        {
            alert("System Error: Email configuration missing.");
            setIsSubmitting(false);
            return;
        }

        try
        {
            // A. Save to Supabase
            // Table schema (run in Supabase SQL editor):
            // create table leads (
            //   id uuid default gen_random_uuid() primary key,
            //   created_at timestamptz default now(),
            //   name text not null,
            //   email text not null,
            //   project_type text,
            //   details text,
            //   source text default 'project_modal'
            // );
            const { error: dbError } = await supabase.from("leads").insert([{
                name: formData.name,
                email: formData.email,
                project_type: formData.type,
                details: formData.details,
                source: "project_modal",
            }]);

            if (dbError) throw new Error("Database error: " + dbError.message);

            // B. Send email via EmailJS
            await send(
                emailServiceId,
                emailTemplateId,
                {
                    name: formData.name,
                    email: formData.email,
                    type: formData.type,
                    details: formData.details,
                },
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

    // Reset on open
    useEffect(() =>
    {
        if (isOpen)
        {
            setStep(1);
            setIsSubmitting(false);
            setFormData({ name: "", email: "", type: "Finance Manager — FinanceIQ", details: "" });
        }
    }, [isOpen]);

    // Native dialog open/close
    useEffect(() =>
    {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (isOpen)
        {
            dialog.showModal();
            document.body.style.overflow = "hidden";
        } else
        {
            dialog.close();
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Focus ring helper
    const focusStyle = (field) =>
        focusedField === field
            ? { borderColor: "rgba(255,255,255,0.2)" }
            : {};

    return (
        <dialog
            ref={dialogRef}
            style={S.dialog}
            onClick={(e) =>
            {
                const rect = dialogRef.current.getBoundingClientRect();
                if (
                    e.clientX < rect.left || e.clientX > rect.right ||
                    e.clientY < rect.top || e.clientY > rect.bottom
                ) onClose();
            }}
        >
            <div style={S.card}>

                {/* ── HEADER ── */}
                <div style={S.header}>
                    <div style={S.headerLeft}>
                        <div style={S.headerDot} />
                        <span style={S.headerTitle}>Start a Project</span>
                        <span style={S.headerSub}>· typically respond in 24h</span>
                    </div>
                    <button
                        style={S.closeBtn}
                        onClick={onClose}
                        onMouseEnter={e =>
                        {
                            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                            e.currentTarget.style.color = "#f4f4f5";
                        }}
                        onMouseLeave={e =>
                        {
                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                            e.currentTarget.style.color = "#71717a";
                        }}
                    >
                        <X size={15} />
                    </button>
                </div>

                {/* ── BODY ── */}
                <div style={S.body}>
                    {step === 1 ? (
                        <form onSubmit={handleSubmit}>
                            <p style={S.description}>
                                Tell us what you're looking to build — whether it's one of our SaaS products
                                or a custom AI solution. We'll get back to you within 24 hours.
                            </p>

                            {/* Name + Email */}
                            <div style={S.row}>
                                <div style={S.group}>
                                    <label style={S.label}>Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Arjun Mehta"
                                        style={{ ...S.input, ...focusStyle("name") }}
                                        onFocus={() => setFocusedField("name")}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                                <div style={S.group}>
                                    <label style={S.label}>Email</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="arjun@company.com"
                                        style={{ ...S.input, ...focusStyle("email") }}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                            </div>

                            {/* Product / Service type */}
                            <div style={S.group}>
                                <label style={S.label}>I'm interested in</label>
                                <div style={S.selectWrap}>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        style={{ ...S.select, ...focusStyle("type") }}
                                        onFocus={() => setFocusedField("type")}
                                        onBlur={() => setFocusedField(null)}
                                    >
                                        {PROJECT_TYPES.map((group) => (
                                            <optgroup
                                                key={group.group}
                                                label={group.group}
                                                // Add a dark background and muted text for the group labels
                                                style={{ background: "#0a0a0e", color: "#a1a1aa", fontWeight: "600" }}
                                            >
                                                {group.options.map((opt) => (
                                                    <option
                                                        key={opt}
                                                        value={opt}
                                                        // Add a dark background and light text for the options
                                                        style={{ background: "#0c0c10", color: "#e4e4e7", padding: "8px" }}
                                                    >
                                                        {opt}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                    <ChevronDown size={14} style={S.selectArrow} />
                                </div>
                            </div>

                            {/* Details */}
                            <div style={S.group}>
                                <label style={S.label}>Tell us more</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Describe your use case, team size, timeline, or any questions you have..."
                                    style={{ ...S.textarea, ...focusStyle("details") }}
                                    onFocus={() => setFocusedField("details")}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    ...S.submitBtn,
                                    ...(isSubmitting ? S.submitBtnDisabled : {}),
                                }}
                                onMouseEnter={e =>
                                {
                                    if (!isSubmitting) e.currentTarget.style.background = "#e2e8f0";
                                }}
                                onMouseLeave={e =>
                                {
                                    if (!isSubmitting) e.currentTarget.style.background = "#fff";
                                }}
                            >
                                {isSubmitting ? (
                                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                                ) : (
                                    <>Send Request <ArrowRight size={15} /></>
                                )}
                            </button>

                            <p style={S.privacyNote}>
                                Your information is never shared with third parties.
                            </p>
                        </form>
                    ) : (
                        /* ── SUCCESS STATE ── */
                        <div style={S.successWrap}>
                            <div style={S.successIconWrap}>
                                <CheckCircle size={26} />
                            </div>
                            <h3 style={S.successTitle}>Request received</h3>
                            <p style={S.successDesc}>
                                Thanks, {formData.name}. We've logged your interest in{" "}
                                <strong style={{ color: "#d4d4d8" }}>{formData.type}</strong> and
                                will be in touch within 24 hours.
                            </p>
                            <button
                                style={S.closeSecondary}
                                onClick={onClose}
                                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </dialog>
    );
}