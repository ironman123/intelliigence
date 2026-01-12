"use client";

import { X, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "../styles/project-modal.css";

// 1. USE NAMED IMPORT (More reliable)
import { send } from '@emailjs/browser';
import { createClient } from '@supabase/supabase-js';

// Load Env Variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ProjectModal({ isOpen, onClose })
{
    const dialogRef = useRef(null);
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "AI Agents & RAG Systems",
        details: ""
    });

    const handleChange = (e) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        // 2. DEBUG LOG (Should always show now)
        console.log("🚀 Submit button clicked!");

        // 3. MANUAL VALIDATION (Replaces HTML required to ensure logs work)
        if (!formData.name || !formData.email || !formData.details)
        {
            alert("Please fill in all fields.");
            console.log("❌ Validation failed: Missing fields");
            return;
        }

        setIsSubmitting(true);

        // 4. CHECK FOR MISSING KEYS
        if (!emailServiceId || !emailPublicKey || !emailTemplateId)
        {
            console.error("❌ Missing EmailJS Keys in .env file");
            alert("System Error: Email configuration missing.");
            setIsSubmitting(false);
            return;
        }

        try
        {
            // A. Save to Database (Supabase)
            console.log("...Saving to Supabase");

            const { error: dbError } = await supabase
                .from('leads')
                .insert([{
                    name: formData.name,
                    email: formData.email,
                    project_type: formData.type,
                    details: formData.details
                }]);

            if (dbError)
            {
                console.error("❌ Supabase Error:", dbError.message);
                throw new Error("Database save failed: " + dbError.message);
            }
            console.log("✅ Saved to Supabase");

            // B. Send Email (EmailJS)
            console.log("...Sending Email");

            const emailResponse = await send(
                emailServiceId,
                emailTemplateId,
                {
                    name: formData.name,
                    email: formData.email,
                    type: formData.type,
                    details: formData.details
                },
                emailPublicKey
            );

            console.log("✅ Email Sent:", emailResponse.status, emailResponse.text);

            // C. Success
            setStep(2);

        } catch (error)
        {
            console.error("❌ Submission Failed:", error);
            alert("Error: " + (error.message || "Something went wrong"));
        } finally
        {
            setIsSubmitting(false);
        }
    };

    // ... (Keep your useEffects and return logic exactly as is) ...
    // ... Just make sure to remove 'required' from your <input> and <textarea> tags below ...

    useEffect(() =>
    {
        if (isOpen)
        {
            setStep(1);
            setIsSubmitting(false);
        }
    }, [isOpen]);

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

    return (
        <dialog
            ref={dialogRef}
            className="project-modal"
            onClick={(e) =>
            {
                const rect = dialogRef.current.getBoundingClientRect();
                if (
                    e.clientX < rect.left ||
                    e.clientX > rect.right ||
                    e.clientY < rect.top ||
                    e.clientY > rect.bottom
                )
                {
                    onClose();
                }
            }}
        >
            <div className="pm-container">
                <div className="pm-header">
                    <span className="pm-title">Start a Project</span>
                    <button onClick={onClose} className="pm-close-btn">
                        <X size={18} />
                    </button>
                </div>

                <div className="pm-body">
                    {step === 1 && (
                        <form onSubmit={handleSubmit} className="pm-form">
                            {/* ... (Keep Description) ... */}
                            <p className="pm-description">
                                Tell us about your vision. We typically respond within 24 hours.
                            </p>

                            <div className="pm-row">
                                <div className="pm-group">
                                    <label className="pm-label">Name</label>
                                    <input
                                        /* REMOVED 'required' so you can see logs */
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="John Doe"
                                        className="pm-input"
                                    />
                                </div>
                                <div className="pm-group">
                                    <label className="pm-label">Email</label>
                                    <input
                                        /* REMOVED 'required' */
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@company.com"
                                        className="pm-input"
                                    />
                                </div>
                            </div>

                            {/* ... (Keep Select Dropdown) ... */}
                            <div className="pm-group">
                                <label className="pm-label">Project Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="pm-select"
                                >
                                    {/* ... Options ... */}
                                    <option>AI Agents & RAG Systems</option>
                                    <option>Custom LLM Development & Fine-Tuning</option>
                                    <option>Offline / On-Premise AI Deployment</option>
                                    <option>AI Infrastructure & GPU Orchestration</option>
                                    <option>Workflow & Document Automation</option>
                                    <option>Data Engineering & Pipelines</option>
                                    <option>Predictive ML & Forecasting</option>
                                    <option>AI Audit & Compliance Strategy</option>
                                    <option>Custom Software (Web/Mobile)</option>
                                    <option>Other / General Consulting</option>
                                </select>
                            </div>

                            <div className="pm-group">
                                <label className="pm-label">Project Details</label>
                                <textarea
                                    /* REMOVED 'required' */
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Briefly describe what you want to build..."
                                    className="pm-textarea"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="pm-submit-btn"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Request <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    {step === 2 && (
                        <div className="pm-success-container">
                            <div className="pm-success-icon">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="pm-success-title">Request Received</h3>
                            <p className="pm-success-desc">
                                Thanks, {formData.name}. We've received your project details and will be in touch shortly.
                            </p>
                            <button onClick={onClose} className="pm-btn-secondary">
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </dialog>
    );
}