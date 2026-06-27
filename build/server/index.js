import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useLocation, useNavigate, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, useRouteError, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useLoaderData } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useScroll, useMotionValueEvent, useTransform, motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useId, useRef, useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { X, ChevronDown, Loader2, ArrowRight, CheckCircle, LineChart, Users, GraduationCap, Activity, ChefHat, Package, ArrowUpRight, MessageCircle, Mail, Zap, Globe, Cpu, Linkedin, Database, Server, Code2, Layers, Check, BarChart3, FileText, ChevronLeft, ChevronRight, Image, Code, Terminal, Cloud, Box, Shield, Wifi, Telescope, Clock, AlertTriangle, XCircle, CheckCircle2, MonitorPlay, Network, Timer, PackageMinus, TerminalSquare, Radar, Building2, Truck, ScanLine, CalendarCheck, Pill, Receipt, Bell, BarChart, ClipboardList, Coins, Calendar, Target, BrainCircuit, Calculator, ShieldCheck, TrendingUp, CreditCard, Quote, Star } from "lucide-react";
import { send } from "@emailjs/browser";
import { createClient } from "@supabase/supabase-js";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const supabaseUrl$1 = "https://gtojphjfrhneknegwxhh.supabase.co";
const supabaseKey$1 = "sb_publishable_mnt7VgUsX2O4HwlDnwAnYQ_E0bXMRfm";
const emailServiceId$1 = "service_m9cvkso";
const emailTemplateId$1 = "template_eyenrt2";
const emailPublicKey$1 = "8FsfGDAbepiPj2ZWj";
let _supabase$1 = null;
function getSupabase$1() {
  if (_supabase$1) return _supabase$1;
  _supabase$1 = createClient(supabaseUrl$1, supabaseKey$1);
  return _supabase$1;
}
const EMAIL_RE$1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS$1 = { name: 120, email: 254, details: 4e3 };
const PROJECT_TYPES$1 = [
  // SaaS Products
  {
    group: "Our SaaS Products",
    options: [
      "Finance Manager Software",
      "CRM Portal Software",
      "School Manager Software",
      "Inventory Manager Software",
      "Clinic Manager Software",
      "Kitchen Display System Software"
    ]
  },
  // AI Services
  {
    group: "AI & Automation Services",
    options: [
      "AI Agents & RAG Systems",
      "Custom LLM Development & Fine-Tuning",
      "Offline / On-Premise AI Deployment",
      "AI Infrastructure & GPU Orchestration",
      "Workflow & Document Automation",
      "Data Engineering & Pipelines",
      "Predictive ML & Forecasting",
      "AI Audit & Compliance Strategy"
    ]
  },
  // Other
  {
    group: "Other",
    options: [
      "Custom Software (Web / Mobile)",
      "General Consulting",
      "Something else — I'll describe it below"
    ]
  }
];
const S$1 = {
  dialog: {
    border: "none",
    borderRadius: 16,
    padding: 0,
    background: "transparent",
    maxWidth: 560,
    width: "calc(100vw - 32px)",
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
    boxShadow: "-10px 0 80px rgba(0,0,0,0.6)",
    margin: "auto"
  },
  card: {
    background: "#0c0c10",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    overflow: "hidden",
    fontFamily: "'Inter', system-ui, sans-serif",
    color: "#e4e4e7"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    background: "#0a0a0e"
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  headerDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#3b82f6",
    boxShadow: "0 0 8px rgba(59,130,246,0.5)"
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: "#f4f4f5",
    letterSpacing: "-0.01em"
  },
  headerSub: {
    fontSize: 12,
    color: "#52525b",
    marginLeft: 4
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
    transition: "background 0.15s, color 0.15s"
  },
  body: {
    padding: "28px 24px 24px"
  },
  description: {
    fontSize: 13.5,
    color: "#71717a",
    lineHeight: 1.6,
    marginBottom: 24,
    paddingBottom: 20,
    borderBottom: "1px solid rgba(255,255,255,0.05)"
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 14
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginBottom: 14
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    color: "#a1a1aa",
    letterSpacing: "0.04em",
    textTransform: "uppercase"
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
    fontFamily: "inherit"
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
    WebkitAppearance: "none"
  },
  selectWrap: {
    position: "relative"
  },
  selectArrow: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#52525b",
    pointerEvents: "none"
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
    lineHeight: 1.6
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
    letterSpacing: "-0.01em"
  },
  submitBtnDisabled: {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  privacyNote: {
    fontSize: 11.5,
    color: "#3f3f46",
    textAlign: "center",
    marginTop: 12
  },
  // ── SUCCESS ──
  successWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "48px 24px",
    textAlign: "center",
    gap: 12
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
    marginBottom: 8
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#f4f4f5",
    letterSpacing: "-0.02em",
    margin: 0
  },
  successDesc: {
    fontSize: 14,
    color: "#71717a",
    lineHeight: 1.6,
    maxWidth: 340,
    margin: 0
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
    transition: "background 0.2s"
  }
};
function ProjectModal({ isOpen, onClose }) {
  const formId = useId();
  const dialogRef = useRef(null);
  const openedAtRef = useRef(0);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Finance Manager — FinanceIQ",
    details: "",
    company: ""
    // honeypot — must stay empty; real users never see it
  });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.company.trim() !== "") {
      setStep(2);
      return;
    }
    if (Date.now() - openedAtRef.current < 2e3) {
      setStep(2);
      return;
    }
    const name = formData.name.trim();
    const email = formData.email.trim();
    const details = formData.details.trim();
    if (!name || !email || !details) {
      alert("Please fill in all fields.");
      return;
    }
    if (!EMAIL_RE$1.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (name.length > LIMITS$1.name || email.length > LIMITS$1.email || details.length > LIMITS$1.details) {
      alert("One of the fields is too long. Please shorten it and try again.");
      return;
    }
    setIsSubmitting(true);
    const supabase = getSupabase$1();
    if (!supabase) {
      alert("System Error: Database configuration missing.");
      setIsSubmitting(false);
      return;
    }
    try {
      const { error: dbError } = await supabase.from("leads").insert([{
        name,
        email,
        project_type: formData.type,
        details,
        source: "project_modal"
      }]);
      if (dbError) throw new Error("Database error: " + dbError.message);
      await send(
        emailServiceId$1,
        emailTemplateId$1,
        { name, email, type: formData.type, details },
        emailPublicKey$1
      );
      setStep(2);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Error: " + (error.message || "Something went wrong. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      openedAtRef.current = Date.now();
      setStep(1);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", type: "Finance Manager — FinanceIQ", details: "", company: "" });
    }
  }, [isOpen]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  const focusStyle = (field) => focusedField === field ? { borderColor: "rgba(255,255,255,0.2)" } : {};
  return /* @__PURE__ */ jsxs(
    "dialog",
    {
      ref: dialogRef,
      style: S$1.dialog,
      onClick: (e) => {
        const rect = dialogRef.current.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) onClose();
      },
      children: [
        /* @__PURE__ */ jsx("style", { children: `
                @media (max-width: 480px) {
                    .pm-row { grid-template-columns: 1fr !important; }
                    .pm-body { padding: 20px 16px 16px !important; }
                    .pm-header { padding: 14px 16px !important; }
                    .pm-header-sub { display: none; }
                }
            ` }),
        /* @__PURE__ */ jsxs("div", { style: S$1.card, children: [
          /* @__PURE__ */ jsxs("div", { style: S$1.header, className: "pm-header", children: [
            /* @__PURE__ */ jsxs("div", { style: S$1.headerLeft, children: [
              /* @__PURE__ */ jsx("div", { style: S$1.headerDot }),
              /* @__PURE__ */ jsx("span", { style: S$1.headerTitle, children: "Start a Project" }),
              /* @__PURE__ */ jsx("span", { style: S$1.headerSub, className: "pm-header-sub", children: "· typically respond in 24h" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                style: S$1.closeBtn,
                onClick: onClose,
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#f4f4f5";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "#71717a";
                },
                children: /* @__PURE__ */ jsx(X, { size: 15 })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { style: S$1.body, className: "pm-body", children: step === 1 ? /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { position: "absolute", left: "-9999px", top: 0, width: 1, height: 1, overflow: "hidden" }, children: /* @__PURE__ */ jsxs("label", { children: [
              "Company (leave this empty)",
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "company",
                  tabIndex: -1,
                  autoComplete: "off",
                  value: formData.company,
                  onChange: handleChange
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("p", { style: S$1.description, children: "Tell us what you're looking to build — whether it's one of our SaaS products or a custom AI solution. We'll get back to you within 24 hours." }),
            /* @__PURE__ */ jsxs("div", { style: S$1.row, className: "pm-row", children: [
              /* @__PURE__ */ jsxs("div", { style: S$1.group, children: [
                /* @__PURE__ */ jsx("label", { style: S$1.label, htmlFor: `${formId}-name`, children: "Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: `${formId}-name`,
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    type: "text",
                    placeholder: "Arjun Mehta",
                    style: { ...S$1.input, ...focusStyle("name") },
                    onFocus: () => setFocusedField("name"),
                    onBlur: () => setFocusedField(null)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { style: S$1.group, children: [
                /* @__PURE__ */ jsx("label", { style: S$1.label, htmlFor: `${formId}-email`, children: "Email" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: `${formId}-email`,
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    type: "email",
                    placeholder: "arjun@company.com",
                    style: { ...S$1.input, ...focusStyle("email") },
                    onFocus: () => setFocusedField("email"),
                    onBlur: () => setFocusedField(null)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: S$1.group, children: [
              /* @__PURE__ */ jsx("label", { style: S$1.label, htmlFor: `${formId}-type`, children: "I'm interested in" }),
              /* @__PURE__ */ jsxs("div", { style: S$1.selectWrap, children: [
                /* @__PURE__ */ jsx(
                  "select",
                  {
                    id: `${formId}-type`,
                    name: "type",
                    value: formData.type,
                    onChange: handleChange,
                    style: { ...S$1.select, ...focusStyle("type") },
                    onFocus: () => setFocusedField("type"),
                    onBlur: () => setFocusedField(null),
                    children: PROJECT_TYPES$1.map((group) => /* @__PURE__ */ jsx(
                      "optgroup",
                      {
                        label: group.group,
                        style: { background: "#0a0a0e", color: "#a1a1aa", fontWeight: "600" },
                        children: group.options.map((opt) => /* @__PURE__ */ jsx(
                          "option",
                          {
                            value: opt,
                            style: { background: "#0c0c10", color: "#e4e4e7", padding: "8px" },
                            children: opt
                          },
                          opt
                        ))
                      },
                      group.group
                    ))
                  }
                ),
                /* @__PURE__ */ jsx(ChevronDown, { size: 14, style: S$1.selectArrow })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: S$1.group, children: [
              /* @__PURE__ */ jsx("label", { style: S$1.label, htmlFor: `${formId}-details`, children: "Tell us more" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: `${formId}-details`,
                  name: "details",
                  value: formData.details,
                  onChange: handleChange,
                  placeholder: "Describe your use case, team size, timeline, or any questions you have...",
                  style: { ...S$1.textarea, ...focusStyle("details") },
                  onFocus: () => setFocusedField("details"),
                  onBlur: () => setFocusedField(null)
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                style: {
                  ...S$1.submitBtn,
                  ...isSubmitting ? S$1.submitBtnDisabled : {}
                },
                onMouseEnter: (e) => {
                  if (!isSubmitting) e.currentTarget.style.background = "#e2e8f0";
                },
                onMouseLeave: (e) => {
                  if (!isSubmitting) e.currentTarget.style.background = "#fff";
                },
                children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin" }),
                  " Sending…"
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Send Request ",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("p", { style: S$1.privacyNote, children: "Your information is never shared with third parties." })
          ] }) : (
            /* ── SUCCESS STATE ── */
            /* @__PURE__ */ jsxs("div", { style: S$1.successWrap, children: [
              /* @__PURE__ */ jsx("div", { style: S$1.successIconWrap, children: /* @__PURE__ */ jsx(CheckCircle, { size: 26 }) }),
              /* @__PURE__ */ jsx("h3", { style: S$1.successTitle, children: "Request received" }),
              /* @__PURE__ */ jsxs("p", { style: S$1.successDesc, children: [
                "Thanks, ",
                formData.name,
                ". We've logged your interest in",
                " ",
                /* @__PURE__ */ jsx("strong", { style: { color: "#d4d4d8" }, children: formData.type }),
                " and will be in touch within 24 hours."
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  style: S$1.closeSecondary,
                  onClick: onClose,
                  onMouseEnter: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)",
                  onMouseLeave: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)",
                  children: "Close"
                }
              )
            ] })
          ) })
        ] })
      ]
    }
  );
}
const navVariants = {
  expanded: {
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  collapsed: {
    y: "-100%",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const notchVariants = {
  idle: {
    // Array values creates the automatic "breathing" loop
    scale: [1, 1.03, 1],
    boxShadow: [
      "0 6px 16px rgba(0,0,0,0.45)",
      "0 12px 24px rgba(0,0,0,0.55)",
      "0 6px 16px rgba(0,0,0,0.45)"
    ],
    // ⚡ Fixes flickering (forces GPU layer)
    z: 0,
    transition: {
      duration: 4,
      // Slow, subtle 4s cycle
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  hover: {
    scale: 1.1,
    y: 4,
    // Slight drop
    boxShadow: "0 12px 32px rgba(0,0,0,0.7)",
    z: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
      // Custom cubic-bezier for smoothness
    }
  },
  active: {
    scale: 0.95,
    // "Press" effect
    y: 0,
    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
    z: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut"
    }
  }
};
const SAAS_PRODUCTS$1 = [
  {
    id: "financemanager",
    category: "FINANCIAL MANAGEMENT",
    icon: LineChart,
    iconColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.12)",
    title: "Finance Manager",
    description: "Accounting, invoicing, tax compliance, and cash flow forecasting.",
    tags: ["GST-ready", "Auto-reconciliation"],
    link: "/products/financemanager"
  },
  {
    id: "crmportal",
    category: "CUSTOMER EXPERIENCE",
    icon: Users,
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.12)",
    title: "CRM Portal",
    description: "Track every deal, automate follow-ups, and personalize every touchpoint.",
    tags: ["Sales pipeline", "WhatsApp integration"],
    link: "/products/crmportal"
  },
  {
    id: "schoolmanager",
    category: "EDUCATION",
    icon: GraduationCap,
    iconColor: "#818cf8",
    iconBg: "rgba(129,140,248,0.12)",
    title: "School Manager",
    description: "LMS optimized for high-stakes competitive exams like KPSC and GATE.",
    tags: ["Mock engines", "Performance analytics"],
    link: "/products/schoolmanager"
  },
  {
    id: "clinicmanager",
    category: "HEALTHCARE",
    icon: Activity,
    iconColor: "#f43f5e",
    iconBg: "rgba(244,63,94,0.12)",
    title: "Clinic Manager",
    description: "Physician-First Automation. No inferences pass without licensed doctor review.",
    tags: ["Physician-in-the-loop", "EMR Integration"],
    link: "/products/clinicmanager"
  },
  {
    id: "kitchendisplaysystem",
    category: "HOSPITALITY",
    icon: ChefHat,
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.12)",
    title: "Kitchen Display System",
    description: "Multi-branch KDS engineered for real-time order routing.",
    tags: ["Multi-branch", "Real-time routing"],
    link: "/products/kitchendisplaysystem"
  },
  {
    id: "inventorymanager",
    category: "SUPPLY CHAIN",
    icon: Package,
    iconColor: "#d97709",
    iconBg: "rgba(217,119,9,0.12)",
    title: "Inventory Manager",
    description: "Plug capital leaks with predictive, real-time inventory tracking.",
    tags: ["Predictive Forecasting", "Real-Time Tracking", "Loss Prevention"],
    link: "/products/inventorymanager"
  }
  // {
  //     id: "omnisense",
  //     category: "DEFENSE & INFRA",
  //     icon: Satellite,
  //     iconColor: "#94a3b8",
  //     iconBg: "rgba(148,163,184,0.12)",
  //     title: "OmniSense",
  //     description: "Autonomous sensor fusion and drone management for operational awareness.",
  //     tags: ["Sensor fusion", "Edge AI"],
  //     link: "/products/omnisense",
  // },
];
const megaMenuVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.96, transformOrigin: "top" },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.97,
    transition: { duration: 0.15, ease: "easeIn" }
  }
};
const cardVariants$1 = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.2, ease: "easeOut" }
  })
};
function MegaMenu({ onClose }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "nb-mega",
      variants: megaMenuVariants,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      onMouseLeave: onClose,
      children: /* @__PURE__ */ jsxs("div", { className: "nb-mega-inner", children: [
        /* @__PURE__ */ jsxs("div", { className: "nb-mega-header", children: [
          /* @__PURE__ */ jsx("span", { className: "nb-mega-eyebrow", children: "PRODUCTS" }),
          /* @__PURE__ */ jsx("p", { className: "nb-mega-tagline", children: "Intelligence-grade software for every vertical" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "nb-mega-grid", children: SAAS_PRODUCTS$1.map((product2, i) => {
          const Icon = product2.icon;
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              custom: i,
              variants: cardVariants$1,
              initial: "hidden",
              animate: "visible",
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: product2.link,
                  className: "nb-product-card",
                  onClick: onClose,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "nb-product-card-top", children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "nb-product-icon",
                          style: { background: product2.iconBg },
                          children: /* @__PURE__ */ jsx(Icon, { size: 17, color: product2.iconColor, strokeWidth: 2 })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "nb-product-category",
                          style: { color: product2.iconColor },
                          children: product2.category
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        ArrowUpRight,
                        {
                          size: 14,
                          className: "nb-product-arrow",
                          color: "rgba(148,163,184,0.4)"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("h4", { className: "nb-product-title", children: product2.title }),
                    /* @__PURE__ */ jsx("p", { className: "nb-product-desc", children: product2.description }),
                    /* @__PURE__ */ jsx("div", { className: "nb-product-tags", children: product2.tags.map((tag) => /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "nb-product-tag",
                        style: {
                          background: product2.iconBg,
                          color: product2.iconColor
                        },
                        children: tag
                      },
                      tag
                    )) })
                  ]
                }
              )
            },
            product2.id
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "nb-mega-footer", children: /* @__PURE__ */ jsxs(Link, { to: "/solutions", className: "nb-mega-cta", onClick: onClose, children: [
          "View all solutions",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
        ] }) })
      ] })
    }
  );
}
function NotchedNavbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaTimeoutRef = useRef(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isSolutionsPage = location.pathname.includes("solutions");
  const isProductsPage = location.pathname.includes("products");
  const { scrollY } = useScroll();
  const scrollDeltaRef = useRef(0);
  const scrollDirectionRef = useRef(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (window.innerWidth <= 900) {
      if (collapsed) setCollapsed(false);
      return;
    }
    const previous = scrollY.getPrevious();
    const delta = latest - previous;
    if (delta === 0) return;
    const direction = delta > 0 ? 1 : -1;
    if (direction !== scrollDirectionRef.current) {
      scrollDirectionRef.current = direction;
      scrollDeltaRef.current = 0;
    }
    scrollDeltaRef.current += Math.abs(delta);
    const SCROLL_THRESHOLD = 12;
    if (scrollDeltaRef.current < SCROLL_THRESHOLD) return;
    scrollDeltaRef.current = 0;
    if (direction > 0 && latest > 150) {
      setCollapsed(true);
    } else if (direction < 0) {
      setCollapsed(false);
    }
  });
  useEffect(() => {
    setMegaOpen(false);
    setDrawerOpen(false);
  }, [location.pathname]);
  const isExpanded = !collapsed || hovered;
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setDrawerOpen(false);
    const scrollLogic = (retries = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
      } else if (retries < 6) {
        setTimeout(() => scrollLogic(retries + 1), 100);
      }
    };
    if (location.pathname === "/") scrollLogic();
    else {
      navigate("/");
      setTimeout(() => scrollLogic(), 100);
    }
  };
  const openMega = () => {
    clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 120);
  };
  useTransform(scrollY, [0, 80], [1, 0]);
  useTransform(scrollY, [0, 80], ["auto", "0px"]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.nav,
      {
        className: "nb-nav",
        variants: navVariants,
        animate: isExpanded ? "expanded" : "collapsed",
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => {
          setHovered(false);
          closeMega();
        },
        children: /* @__PURE__ */ jsxs("div", { className: "nb-inner", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "nb-logo", children: [
            /* @__PURE__ */ jsx("img", { src: "/images/logo.png", alt: "Logo", className: "nb-logo-img" }),
            /* @__PURE__ */ jsx("span", { className: "nb-logo-text", children: "ENTROPIC SYSTEM" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "nb-links", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: `nb-link ${location.pathname === "/" ? "nb-link--active" : ""}`, children: "Home" }) }),
            /* @__PURE__ */ jsxs(
              "li",
              {
                className: "nb-link-products",
                onMouseEnter: openMega,
                onMouseLeave: closeMega,
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: `nb-link nb-link-btn ${isProductsPage || megaOpen ? "nb-link--active" : ""}`,
                      onClick: () => setMegaOpen((o) => !o),
                      "aria-expanded": megaOpen,
                      children: [
                        "Products",
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            animate: { rotate: megaOpen ? 180 : 0 },
                            transition: { duration: 0.2 },
                            style: { display: "flex" },
                            children: /* @__PURE__ */ jsx(ChevronDown, { size: 14, strokeWidth: 2.5 })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: megaOpen && /* @__PURE__ */ jsx(MegaMenu, { onClose: () => setMegaOpen(false) }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/solutions",
                className: `nb-link ${isSolutionsPage ? "nb-link--active" : ""}`,
                children: "Solutions"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: `nb-link ${location.pathname === "/about" ? "nb-link--active" : ""}`, children: "About" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: `nb-link ${location.pathname === "/contact" ? "nb-link--active" : ""}`, children: "Contact" }) })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: (e) => {
            e.stopPropagation();
            setIsProjectOpen(true);
          }, className: "nb-cta", children: "Get Started" }),
          /* @__PURE__ */ jsxs("button", { className: "nb-mobile-toggle", onClick: () => setDrawerOpen(true), children: [
            /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx("span", {})
          ] })
        ] })
      }
    ),
    collapsed && !drawerOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "nb-notch",
        initial: "idle",
        animate: isExpanded ? "active" : "idle",
        whileHover: "hover",
        variants: notchVariants,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onClick: () => setDrawerOpen(true)
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: drawerOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "nb-backdrop",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setDrawerOpen(false)
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "nb-drawer",
          variants: drawerVariants,
          initial: "hidden",
          animate: "visible",
          exit: "hidden",
          children: [
            /* @__PURE__ */ jsx("button", { className: "nb-drawer-close", onClick: () => setDrawerOpen(false), children: /* @__PURE__ */ jsx(X, { size: 22 }) }),
            /* @__PURE__ */ jsxs("nav", { className: "nb-drawer-nav", children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "nb-drawer-link", onClick: () => setDrawerOpen(false), children: "Home" }),
              /* @__PURE__ */ jsxs("div", { className: "nb-drawer-products", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: "nb-drawer-link nb-drawer-link--btn",
                    onClick: () => setMobileProductsOpen((o) => !o),
                    children: [
                      "Products",
                      /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          animate: { rotate: mobileProductsOpen ? 180 : 0 },
                          transition: { duration: 0.2 },
                          style: { display: "flex" },
                          children: /* @__PURE__ */ jsx(ChevronDown, { size: 16 })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(AnimatePresence, { children: mobileProductsOpen && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "nb-drawer-products-list",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.25, ease: "easeOut" },
                    children: SAAS_PRODUCTS$1.map((p) => {
                      const Icon = p.icon;
                      return /* @__PURE__ */ jsxs(
                        Link,
                        {
                          to: p.link,
                          className: "nb-drawer-product-item",
                          onClick: () => setDrawerOpen(false),
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "nb-drawer-product-icon",
                                style: { background: p.iconBg },
                                children: /* @__PURE__ */ jsx(Icon, { size: 14, color: p.iconColor })
                              }
                            ),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("div", { className: "nb-drawer-product-name", children: p.title }),
                              /* @__PURE__ */ jsx("div", { className: "nb-drawer-product-cat", style: { color: p.iconColor }, children: p.category })
                            ] })
                          ]
                        },
                        p.id
                      );
                    })
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/solutions",
                  className: "nb-drawer-link",
                  onClick: () => setDrawerOpen(false),
                  children: "Solutions"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/about",
                  className: "nb-drawer-link",
                  onClick: () => setDrawerOpen(false),
                  children: "About"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  className: "nb-drawer-link",
                  onClick: () => setDrawerOpen(false),
                  children: "Contact"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/#discovery",
                  className: "nb-drawer-link",
                  onClick: (e) => handleScrollToSection(e, "discovery"),
                  children: "Discovery"
                }
              )
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(ProjectModal, { isOpen: isProjectOpen, onClose: () => setIsProjectOpen(false) })
  ] });
}
function loadScript(src, { id, async = true, defer = false, attrs = {} } = {}) {
  if (typeof document === "undefined") return Promise.resolve(null);
  if (id) {
    const existing = document.getElementById(id);
    if (existing) return Promise.resolve(existing);
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.async = async;
    el.defer = defer;
    if (id) el.id = id;
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    el.onload = () => resolve(el);
    el.onerror = () => {
      console.error(`[loadScript] failed to load: ${src}`);
      el.remove();
      reject(new Error(`Failed to load script: ${src}`));
    };
    document.body.appendChild(el);
  });
}
const BOTPRESS = {
  version: "v2.2",
  botConfigUrl: "https://files.bpcontent.cloud/2026/01/10/05/20260110050901-S2Z3L5PN.js"
};
const ENGINE_ID = "bp-inject";
const CONFIG_ID = "bp-config";
function ChatWidget() {
  useEffect(() => {
    let cancelled = false;
    let started = false;
    const events = ["pointerdown", "keydown", "scroll", "touchstart"];
    const requestIdle = window.requestIdleCallback || ((cb) => window.setTimeout(cb, 2500));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
    let idleId;
    function stopTriggers() {
      events.forEach((e) => window.removeEventListener(e, loadChat));
      if (idleId != null) cancelIdle(idleId);
    }
    async function loadChat() {
      if (started || cancelled) return;
      started = true;
      stopTriggers();
      try {
        await loadScript(`https://cdn.botpress.cloud/webchat/${BOTPRESS.version}/inject.js`, { id: ENGINE_ID });
        if (cancelled) return;
        await loadScript(BOTPRESS.botConfigUrl, { id: CONFIG_ID });
      } catch (err) {
        console.error("[ChatWidget] Botpress failed to initialise:", err);
      }
    }
    events.forEach((e) => window.addEventListener(e, loadChat, { once: true, passive: true }));
    idleId = requestIdle(loadChat);
    return () => {
      cancelled = true;
      stopTriggers();
    };
  }, []);
  return null;
}
function SchedulingModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsx(
    "dialog",
    {
      ref: dialogRef,
      onClick: (e) => {
        const rect = dialogRef.current.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
          onClose();
        }
      },
      style: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90vw",
        // 90% of screen width
        maxWidth: "1200px",
        // Cap width at 1200px
        height: "90vh",
        // 90% of screen height
        maxHeight: "1000px",
        margin: 0,
        padding: 0,
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        // Remove default white background
        zIndex: 2147483647,
        // Max Z-Index
        overflow: "hidden"
        // Prevent double scrollbars
      },
      className: "backdrop:bg-black/80 backdrop:backdrop-blur-sm",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "#09090b",
            // Deep Black/Zinc background
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            color: "white",
            fontFamily: "sans-serif"
          },
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  backgroundColor: "#09090b",
                  flexShrink: 0
                  // Prevent header from shrinking
                },
                children: [
                  /* @__PURE__ */ jsx("span", { style: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    padding: "4px 12px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "99px"
                  }, children: "Discovery Session" }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: onClose,
                      style: {
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "none",
                        color: "white",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "background 0.2s"
                      },
                      onMouseEnter: (e) => e.target.style.background = "rgba(255, 255, 255, 0.15)",
                      onMouseLeave: (e) => e.target.style.background = "rgba(255, 255, 255, 0.05)",
                      children: /* @__PURE__ */ jsx(X, { size: 18 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { style: { position: "relative", flex: 1, width: "100%", height: "100%" }, children: [
              !iframeLoaded && /* @__PURE__ */ jsxs("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1
              }, children: [
                /* @__PURE__ */ jsx("div", { className: "animate-spin", style: {
                  width: "32px",
                  height: "32px",
                  border: "3px solid rgba(255,255,255,0.1)",
                  borderTop: "3px solid white",
                  borderRadius: "50%",
                  marginBottom: "16px"
                } }),
                /* @__PURE__ */ jsx("p", { style: { color: "#71717a", fontSize: "0.9rem" }, children: "Loading availability..." })
              ] }),
              /* @__PURE__ */ jsx(
                "iframe",
                {
                  src: "https://cal.com/rajul-yadav-hzdgd9/30min?theme=dark&layout=column_view",
                  title: "Book a call",
                  onLoad: () => setIframeLoaded(true),
                  style: {
                    position: "absolute",
                    // <--- THE CRITICAL FIX
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    opacity: iframeLoaded ? 1 : 0,
                    transition: "opacity 0.5s ease"
                  }
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function EntropicCanvas({ containerRef, scheme = "light" }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const container2 = containerRef?.current;
    if (!canvas || !container2) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const TAU2 = Math.PI * 2;
    const MOBILE = window.innerWidth < 700;
    const C = scheme === "dark" ? {
      dust: [96, 165, 250],
      star: [219, 234, 254],
      chaos: [147, 197, 253],
      line: [96, 165, 250]
    } : {
      dust: [37, 99, 235],
      star: [29, 78, 216],
      chaos: [37, 99, 235],
      line: [59, 130, 246]
    };
    const rgba = ([r, g, b], a) => `rgba(${r},${g},${b},${a.toFixed(3)})`;
    const TARGET_N = MOBILE ? 30 : 120;
    const CONN_DIST = MOBILE ? 72 : 115;
    const MOUSE_R = 145;
    const MOUSE_RI = 52;
    const FLOW_F = 0.015;
    const MAX_SPD = 1.9;
    const MAX_SPD_C = 9;
    const DAMP = 0.984;
    const MIN_LIFE = 380;
    const MAX_LIFE = 820;
    const SEEK_R = 170;
    const MAX_SEEK = 240;
    const SPAWN_INT = MOBILE ? 5 : 3;
    const ALIVE = 0;
    const SEEKING = 1;
    const CONVERGING = 2;
    const DEAD = 3;
    let W, H;
    let animId = null;
    let frameT = 0;
    let nextId = 0;
    let particles = [];
    let events = [];
    let isVisible = true;
    let gc1 = { x: 0, y: 0 };
    let gc2 = { x: 0, y: 0 };
    let cGC1 = { x: 0, y: 0 };
    let cGC2 = { x: 0, y: 0 };
    const mouse = { x: -9999, y: -9999, on: false, vx: 0, vy: 0, speed: 0 };
    function vortexXY(px, py) {
      const dx1 = px - cGC1.x, dy1 = py - cGC1.y;
      const r1 = Math.hypot(dx1, dy1) || 1;
      const w1 = 1 / (r1 + 85);
      const vx1 = -dy1 / r1 + dx1 / r1 * 0.06;
      const vy1 = dx1 / r1 + dy1 / r1 * 0.06;
      const dx2 = px - cGC2.x, dy2 = py - cGC2.y;
      const r2 = Math.hypot(dx2, dy2) || 1;
      const w2 = 1 / (r2 + 85);
      const vx2 = dy2 / r2 + dx2 / r2 * 0.06;
      const vy2 = -dx2 / r2 + dy2 / r2 * 0.06;
      const wt = w1 + w2;
      return { x: (vx1 * w1 + vx2 * w2) / wt, y: (vy1 * w1 + vy2 * w2) / wt };
    }
    function makeParticle(x, y, vx, vy, isStar) {
      return {
        id: nextId++,
        x,
        y,
        vx,
        vy,
        size: isStar ? 1.4 + Math.random() * 1 : 0.65 + Math.random() * 0.6,
        brightness: isStar ? 0.5 + Math.random() * 0.4 : 0.1 + Math.random() * 0.14,
        twinkleHz: 0.018 + Math.random() * 0.055,
        sparkHz: 7e-3 + Math.random() * 0.018,
        phX: Math.random() * TAU2,
        phY: Math.random() * TAU2,
        isStar,
        chaos: false,
        state: ALIVE,
        age: 0,
        lifespan: MIN_LIFE + Math.floor(Math.random() * (MAX_LIFE - MIN_LIFE)),
        partner: null
      };
    }
    function spawnPair(silent = false) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const angle = Math.random() * TAU2;
      const sp = 0.2 + Math.random() * 0.5;
      const isStar = Math.random() < 0.13;
      particles.push(
        makeParticle(x, y, Math.cos(angle) * sp, Math.sin(angle) * sp, isStar),
        makeParticle(x, y, -Math.cos(angle) * sp, -Math.sin(angle) * sp, isStar)
      );
      if (!silent) events.push({ x, y, t: frameT, type: "birth" });
    }
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = container2.clientWidth;
      H = container2.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      gc1 = { x: W * 0.35, y: H * 0.5 };
      gc2 = { x: W * 0.65, y: H * 0.5 };
      cGC1 = { ...gc1 };
      cGC2 = { ...gc2 };
      build();
    }
    function build() {
      particles = [];
      events = [];
      nextId = 0;
      const numPairs = Math.floor(TARGET_N / 2);
      for (let i = 0; i < numPairs; i++) spawnPair(true);
    }
    function applyFlow(p) {
      const f = vortexXY(p.x, p.y);
      const ff = p.isStar ? FLOW_F * 0.28 : FLOW_F;
      p.vx += f.x * ff;
      p.vy += f.y * ff;
    }
    function applyMouse(p) {
      if (!mouse.on) return;
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      if (d >= MOUSE_R) return;
      const frac = (MOUSE_R - d) / MOUSE_R;
      const boost = d < MOUSE_RI ? 3.5 : 1;
      const repF = frac * boost * 7.5;
      p.vx += dx / d * repF + -dy / d * frac * 5 + (Math.random() - 0.5) * repF * 0.7;
      p.vy += dy / d * repF + dx / d * frac * 5 + (Math.random() - 0.5) * repF * 0.7;
      if (mouse.speed > 0.8) {
        const ss = Math.min(mouse.speed * 0.55, 14) * frac;
        p.vx += mouse.vx / mouse.speed * ss;
        p.vy += mouse.vy / mouse.speed * ss;
      }
      p.chaos = true;
    }
    function applyDampWrap(p) {
      const spd = Math.hypot(p.vx, p.vy);
      const cap = p.chaos ? MAX_SPD_C : MAX_SPD;
      if (spd > cap) {
        p.vx = p.vx / spd * cap;
        p.vy = p.vy / spd * cap;
      }
      p.vx *= DAMP;
      p.vy *= DAMP;
      p.x += p.vx;
      p.y += p.vy;
      const PAD2 = 8;
      if (p.x < -PAD2) p.x = W + PAD2;
      else if (p.x > W + PAD2) p.x = -PAD2;
      if (p.y < -PAD2) p.y = H + PAD2;
      else if (p.y > H + PAD2) p.y = -PAD2;
      if (p.chaos && !mouse.on && Math.hypot(p.vx, p.vy) < 0.95) p.chaos = false;
    }
    function step(p) {
      if (p.state === DEAD) return;
      p.age++;
      if (p.state === CONVERGING) {
        const q = p.partner;
        if (!q || q.state === DEAD) {
          p.state = DEAD;
          return;
        }
        const dx = q.x - p.x, dy = q.y - p.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d < 4) {
          events.push({ x: (p.x + q.x) * 0.5, y: (p.y + q.y) * 0.5, t: frameT, type: "death" });
          p.state = DEAD;
          q.state = DEAD;
          return;
        }
        const spd = Math.min(2.2, d * 0.13 + 0.4);
        p.vx = dx / d * spd;
        p.vy = dy / d * spd;
        p.x += p.vx;
        p.y += p.vy;
        return;
      }
      applyFlow(p);
      applyMouse(p);
      applyDampWrap(p);
      if (p.state === ALIVE && p.age >= p.lifespan) {
        p.state = SEEKING;
      }
      if (p.state === SEEKING) {
        const seekAge = p.age - p.lifespan;
        if (seekAge > MAX_SEEK) {
          p.state = DEAD;
          return;
        }
        if (seekAge % 8 === 0 && p.partner === null) {
          let best = null, bestD = SEEK_R;
          for (const q of particles) {
            if (q === p || q.state !== SEEKING || q.partner !== null) continue;
            const d = Math.hypot(q.x - p.x, q.y - p.y);
            if (d < bestD) {
              bestD = d;
              best = q;
            }
          }
          if (best) {
            p.state = CONVERGING;
            p.partner = best;
            best.state = CONVERGING;
            best.partner = p;
          }
        }
      }
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const speeds = particles.map(
        (p) => p.state === CONVERGING ? Math.hypot(p.vx, p.vy) : Math.hypot(p.vx, p.vy)
      );
      if (scheme === "dark") {
        for (const gc of [cGC1, cGC2]) {
          const gr = ctx.createRadialGradient(gc.x, gc.y, 0, gc.x, gc.y, Math.min(W, H) * 0.38);
          gr.addColorStop(0, rgba(C.dust, 0.055));
          gr.addColorStop(1, rgba(C.dust, 0));
          ctx.fillStyle = gr;
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(gc.x, gc.y, Math.min(W, H) * 0.38, 0, TAU2);
          ctx.fill();
        }
      }
      for (const ev of events) {
        const age = frameT - ev.t;
        if (age > 30) continue;
        const prog = age / 30;
        if (ev.type === "birth") {
          ctx.strokeStyle = rgba(C.star, 1);
          ctx.lineWidth = 1;
          ctx.globalAlpha = (1 - prog) * 0.5;
          ctx.beginPath();
          ctx.arc(ev.x, ev.y, prog * 22, 0, TAU2);
          ctx.stroke();
          ctx.fillStyle = rgba(C.star, 1);
          ctx.globalAlpha = Math.max(1 - prog * 2.5, 0) * 0.55;
          ctx.beginPath();
          ctx.arc(ev.x, ev.y, Math.max((1 - prog * 2) * 7, 0.5), 0, TAU2);
          ctx.fill();
        } else {
          const flash = Math.max(1 - prog * 2.2, 0);
          ctx.fillStyle = rgba(C.star, 1);
          ctx.globalAlpha = flash * 0.9;
          ctx.beginPath();
          ctx.arc(ev.x, ev.y, flash * 14 + 1, 0, TAU2);
          ctx.fill();
          ctx.strokeStyle = rgba(C.chaos, 1);
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = (1 - prog) * 0.5;
          ctx.beginPath();
          ctx.arc(ev.x, ev.y, prog * 30, 0, TAU2);
          ctx.stroke();
        }
      }
      events = events.filter((ev) => frameT - ev.t <= 30);
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        if (pi.state === DEAD) continue;
        let links2 = 0;
        for (let j = i + 1; j < particles.length && links2 < 4; j++) {
          const pj = particles[j];
          if (pj.state === DEAD) continue;
          const d = Math.hypot(pi.x - pj.x, pi.y - pj.y);
          if (d > CONN_DIST) continue;
          const proximity = 1 - d / CONN_DIST;
          const avgSpd = (speeds[i] + speeds[j]) * 0.5;
          const chaosBoost = Math.min(avgSpd / 4, 1);
          const isPair = pi.state === CONVERGING && pi.partner === pj;
          if (isPair) {
            ctx.lineWidth = 1.2;
            ctx.globalAlpha = Math.min(proximity * 0.85, 0.8);
            ctx.strokeStyle = rgba(C.star, 1);
          } else {
            ctx.lineWidth = 0.55;
            ctx.globalAlpha = Math.min(proximity * (0.06 + chaosBoost * 0.65), 0.78);
            ctx.strokeStyle = rgba(C.line, 1);
          }
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.stroke();
          links2++;
        }
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.state === DEAD) continue;
        const spd = speeds[i];
        const breathe = 0.5 + 0.5 * Math.abs(Math.sin(frameT * p.twinkleHz + p.phX));
        const spark = Math.sin(frameT * p.sparkHz + p.phY * 1.8) > (p.isStar ? 0.91 : 0.97) ? 1.85 : 1;
        const baseA = p.brightness * breathe * spark;
        const birthFade = Math.min(p.age / 22, 1);
        let deathFade = 1;
        if (p.state === SEEKING) {
          const seekAge = p.age - p.lifespan;
          deathFade = Math.max(1 - seekAge / MAX_SEEK, 0.12);
        }
        const convergBoost = p.state === CONVERGING ? 1.4 : 1;
        const a = Math.min(baseA * (p.chaos ? 1 + spd * 0.08 : 1) * birthFade * deathFade * convergBoost, 1);
        const r = p.size * (1 + 0.07 * spark + (p.chaos ? Math.min(spd * 0.07, 0.55) : 0));
        const col = p.chaos ? C.chaos : p.state === CONVERGING ? C.star : p.isStar ? C.star : C.dust;
        ctx.fillStyle = rgba(col, 1);
        if (spd > 0.65) {
          const tLen = p.chaos ? 4 : 2;
          for (let k = 1; k <= tLen; k++) {
            ctx.globalAlpha = a * (1 - k / (tLen + 1)) * 0.33;
            ctx.beginPath();
            ctx.arc(
              p.x - p.vx * k * 1.8,
              p.y - p.vy * k * 1.8,
              Math.max(r * (1 - k * 0.22), 0.12),
              0,
              TAU2
            );
            ctx.fill();
          }
        }
        if (p.isStar || p.chaos && spd > 1.2 || p.state === CONVERGING) {
          ctx.globalAlpha = a * 0.09;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 6.5, 0, TAU2);
          ctx.fill();
          ctx.globalAlpha = a * 0.21;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 3.2, 0, TAU2);
          ctx.fill();
        }
        ctx.globalAlpha = Math.min(a, 0.95);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, TAU2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function tick() {
      frameT++;
      const t = frameT * 17e-5;
      cGC1 = { x: gc1.x + Math.sin(t * 1.3) * 26, y: gc1.y + Math.cos(t * 0.71) * 14 };
      cGC2 = { x: gc2.x + Math.cos(t * 0.88) * 26, y: gc2.y + Math.sin(t * 1.07) * 14 };
      for (const p of particles) step(p);
      if (frameT % SPAWN_INT === 0) {
        const alive = particles.filter((p) => p.state !== DEAD).length;
        if (alive < TARGET_N) spawnPair();
      }
      if (frameT % 90 === 0) {
        particles = particles.filter((p) => p.state !== DEAD);
      }
      draw();
      if (isVisible) animId = requestAnimationFrame(tick);
      else animId = null;
    }
    const onMove = (e) => {
      const rc = container2.getBoundingClientRect();
      const nx = e.clientX - rc.left, ny = e.clientY - rc.top;
      mouse.vx = nx - mouse.x;
      mouse.vy = ny - mouse.y;
      mouse.speed = Math.hypot(mouse.vx, mouse.vy);
      mouse.x = nx;
      mouse.y = ny;
      mouse.on = true;
    };
    const onLeave = () => {
      mouse.on = false;
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.speed = 0;
    };
    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (!t) return;
      const rc = container2.getBoundingClientRect();
      const nx = t.clientX - rc.left, ny = t.clientY - rc.top;
      mouse.vx = nx - mouse.x;
      mouse.vy = ny - mouse.y;
      mouse.speed = Math.hypot(mouse.vx, mouse.vy);
      mouse.x = nx;
      mouse.y = ny;
      mouse.on = true;
    };
    const onTouchEnd = () => {
      mouse.on = false;
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.speed = 0;
    };
    const observer = new IntersectionObserver((entries) => {
      const was = isVisible;
      isVisible = entries[0].isIntersecting;
      if (isVisible && !was && animId === null) animId = requestAnimationFrame(tick);
    }, { threshold: 0.01 });
    observer.observe(container2);
    resize();
    animId = requestAnimationFrame(tick);
    container2.addEventListener("mousemove", onMove);
    container2.addEventListener("mouseleave", onLeave);
    container2.addEventListener("touchmove", onTouchMove, { passive: true });
    container2.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", resize);
    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      observer.disconnect();
      container2.removeEventListener("mousemove", onMove);
      container2.removeEventListener("mouseleave", onLeave);
      container2.removeEventListener("touchmove", onTouchMove);
      container2.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", resize);
    };
  }, [containerRef, scheme]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        zIndex: 0
      }
    }
  );
}
const TAU$1 = Math.PI * 2;
const PAD$1 = 10;
const DEFAULT_COLS = ["#ffffff", "#dbeafe", "#bfdbfe", "#93c5fd", "#f0f9ff"];
function SparkleButton({ children, sparkColors, className, style }) {
  const wrapRef = useRef(null);
  const cvRef = useRef(null);
  const stRef = useRef({ p: [], mode: "idle", t: 0, raf: null, W: 0, H: 0 });
  const COLS2 = sparkColors || DEFAULT_COLS;
  useEffect(() => {
    const wrap = wrapRef.current;
    const cv = cvRef.current;
    if (!wrap || !cv) return;
    const ctx = cv.getContext("2d");
    const st = stRef.current;
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const r = wrap.getBoundingClientRect();
      st.W = r.width;
      st.H = r.height;
      cv.width = Math.round((st.W + PAD$1 * 2) * dpr);
      cv.height = Math.round((st.H + PAD$1 * 2) * dpr);
      cv.style.width = st.W + PAD$1 * 2 + "px";
      cv.style.height = st.H + PAD$1 * 2 + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    function spawn() {
      const { W, H } = st;
      const perim = 2 * (W + H);
      const d = Math.random() * perim;
      let bx, by, nx, ny;
      if (d < W) {
        bx = PAD$1 + d;
        by = PAD$1;
        nx = 0;
        ny = -1;
      } else if (d < W + H) {
        bx = PAD$1 + W;
        by = PAD$1 + d - W;
        nx = 1;
        ny = 0;
      } else if (d < 2 * W + H) {
        bx = PAD$1 + W - (d - W - H);
        by = PAD$1 + H;
        nx = 0;
        ny = 1;
      } else {
        bx = PAD$1;
        by = PAD$1 + H - (d - 2 * W - H);
        nx = -1;
        ny = 0;
      }
      const s = (Math.random() - 0.5) * PAD$1 * 1.6;
      return {
        x: bx + nx * s,
        y: by + ny * s,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(Math.random() * 0.07 + 0.02),
        sz: 0.38 + Math.random() * 0.82,
        life: 0,
        maxL: 80 + Math.random() * 120,
        ph: Math.random() * TAU$1,
        ts: 0.09 + Math.random() * 0.14,
        col: COLS2[Math.floor(Math.random() * COLS2.length)],
        burst: false
      };
    }
    function tick() {
      st.raf = requestAnimationFrame(tick);
      st.t++;
      ctx.clearRect(0, 0, st.W + PAD$1 * 2, st.H + PAD$1 * 2);
      if (st.mode === "hover") {
        const live = st.p.filter((p) => !p.burst).length;
        if (live < 33) for (let i = 0; i < 3; i++) st.p.push(spawn());
      }
      for (let i = st.p.length - 1; i >= 0; i--) {
        const p = st.p[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        let alpha;
        if (!p.burst) {
          const prog = p.life / p.maxL;
          const fadeIn = Math.min(prog * 7, 1);
          const maxL = st.mode === "idle" ? p.maxL * 0.48 : p.maxL;
          if (p.life > maxL) {
            st.p.splice(i, 1);
            continue;
          }
          const fadeOut = prog > 0.6 ? Math.max(1 - (prog - 0.6) / 0.4, 0) : 1;
          const twinkle = 0.28 + 0.72 * Math.abs(Math.sin(st.t * p.ts + p.ph));
          alpha = fadeIn * fadeOut * twinkle * 0.86;
        } else {
          p.vx *= 0.89;
          p.vy *= 0.89;
          alpha = Math.max(1 - p.life / 28, 0);
          if (alpha <= 0) {
            st.p.splice(i, 1);
            continue;
          }
        }
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, TAU$1);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (st.mode === "idle" && st.p.length === 0) {
        cancelAnimationFrame(st.raf);
        st.raf = null;
      }
    }
    const start = () => {
      if (!st.raf) st.raf = requestAnimationFrame(tick);
    };
    const enter = () => {
      st.mode = "hover";
      start();
    };
    const leave = () => {
      st.mode = "idle";
    };
    const click = () => {
      const cx = PAD$1 + st.W * 0.5;
      const cy = PAD$1 + st.H * 0.5;
      for (const p of st.p) {
        if (p.burst) continue;
        p.burst = true;
        p.life = 0;
        const dx = p.x - cx, dy = p.y - cy;
        const d = Math.hypot(dx, dy) || 1;
        const sp = 3 + Math.random() * 4.5;
        p.vx = dx / d * sp + (Math.random() - 0.5);
        p.vy = dy / d * sp + (Math.random() - 0.5);
      }
      st.mode = "idle";
      start();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    wrap.addEventListener("mouseenter", enter);
    wrap.addEventListener("mouseleave", leave);
    wrap.addEventListener("click", click);
    return () => {
      if (st.raf) cancelAnimationFrame(st.raf);
      ro.disconnect();
      wrap.removeEventListener("mouseenter", enter);
      wrap.removeEventListener("mouseleave", leave);
      wrap.removeEventListener("click", click);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: wrapRef,
      className,
      style: { position: "relative", display: "inline-flex", ...style },
      children: [
        /* @__PURE__ */ jsx(
          "canvas",
          {
            ref: cvRef,
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: -PAD$1 + "px",
              left: -PAD$1 + "px",
              pointerEvents: "none",
              zIndex: 9
            }
          }
        ),
        children
      ]
    }
  );
}
const PRODUCTS$1 = [
  {
    id: "financemanager",
    label: "FinanceIQ",
    category: "Financial Management",
    icon: /* @__PURE__ */ jsx(LineChart, { size: 13 }),
    color: "#3b82f6"
  },
  {
    id: "crmportal",
    label: "NexusCRM",
    category: "Customer Experience",
    icon: /* @__PURE__ */ jsx(Users, { size: 13 }),
    color: "#10b981"
  },
  {
    id: "schoolmanager",
    label: "ScholarOS",
    category: "Education",
    icon: /* @__PURE__ */ jsx(GraduationCap, { size: 13 }),
    color: "#8b5cf6"
  },
  {
    id: "inventorymanager",
    label: "InventoryAI",
    category: "Supply Chain",
    icon: /* @__PURE__ */ jsx(Package, { size: 13 }),
    color: "#f59e0b"
  },
  {
    id: "clinicmanager",
    label: "MediSwarm",
    category: "Healthcare",
    icon: /* @__PURE__ */ jsx(Activity, { size: 13 }),
    color: "#ef4444"
  },
  {
    id: "kitchendisplaysystem",
    label: "KitchenSync",
    category: "Hospitality",
    icon: /* @__PURE__ */ jsx(ChefHat, { size: 13 }),
    color: "#f97316"
  }
];
const AI_SOLUTIONS = [
  { label: "Generative AI & RAG Agents", href: "/solutions/core#gen-ai" },
  { label: "Workflow Automation (NLP)", href: "/solutions/core#automation" },
  { label: "Data Engineering & Pipelines", href: "/solutions/core#data-engineering" },
  { label: "Predictive ML & Forecasting", href: "/solutions/core#predictive-ml" },
  { label: "AI-Native SaaS Engineering", href: "/solutions/core#software-engineering" }
];
const EMERGING = [
  { label: "Precision Diagnostics", href: "/solutions/emerging#healthcare" },
  { label: "Smart Agriculture", href: "/solutions/emerging#agriculture" },
  { label: "Urban Planning & Digital Twins", href: "/solutions/emerging#smart-city" },
  { label: "Energy Grid Optimization", href: "/solutions/emerging#energy" },
  { label: "Disaster Response AI", href: "/solutions/emerging#disaster" }
];
const COMPANY = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" }
];
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const footerRef = useRef(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("footer", { ref: footerRef, style: styles.footer, children: [
      /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: footerRef, scheme: "dark" }),
      /* @__PURE__ */ jsx("div", { style: styles.gridOverlay, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { style: styles.container, children: [
        /* @__PURE__ */ jsxs("div", { style: styles.ctaBand, children: [
          /* @__PURE__ */ jsxs("div", { style: styles.ctaLeft, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/logo.png",
                alt: "Company Logo",
                style: styles.logo
              }
            ),
            /* @__PURE__ */ jsxs("h2", { style: styles.headline, children: [
              "Intelligence,",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: styles.headlineMuted, children: "Engineered." })
            ] }),
            /* @__PURE__ */ jsx("p", { style: styles.subhead, children: "From enterprise RAG systems to production SaaS — we build software that thinks for your business." }),
            /* @__PURE__ */ jsxs("div", { style: styles.contactRow, children: [
              /* @__PURE__ */ jsx(
                SparkleButton,
                {
                  sparkColors: ["#ffffff", "#d4fce8", "#86efac", "#4ade80", "#f0fdf4"],
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://wa.me/917060816597",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: styles.contactChip,
                      onMouseEnter: (e) => {
                        e.currentTarget.style.borderColor = "#25d366";
                        e.currentTarget.style.color = "#25d366";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.color = "#a1a1aa";
                      },
                      children: [
                        /* @__PURE__ */ jsx(MessageCircle, { size: 14, style: { color: "#25d366", flexShrink: 0 } }),
                        "+91 70608 16597"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                SparkleButton,
                {
                  sparkColors: ["#ffffff", "#dbeafe", "#93c5fd", "#60a5fa", "#eff6ff"],
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "mailto:entropicsys@gmail.com",
                      style: styles.contactChip,
                      onMouseEnter: (e) => {
                        e.currentTarget.style.borderColor = "#3b82f6";
                        e.currentTarget.style.color = "#3b82f6";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.color = "#a1a1aa";
                      },
                      children: [
                        /* @__PURE__ */ jsx(Mail, { size: 14, style: { color: "#3b82f6", flexShrink: 0 } }),
                        "entropicsys@gmail.com"
                      ]
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles.ctaRight, children: [
            /* @__PURE__ */ jsx("p", { style: styles.ctaLabel, children: "Ready to build something intelligent?" }),
            /* @__PURE__ */ jsxs("div", { style: styles.ctaBtns, children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  style: styles.btnPrimary,
                  onClick: (e) => {
                    e.stopPropagation();
                    setIsProjectOpen(true);
                  },
                  onMouseEnter: (e) => e.currentTarget.style.background = "#e2e8f0",
                  onMouseLeave: (e) => e.currentTarget.style.background = "#fff",
                  children: [
                    "Start a Project ",
                    /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  style: styles.btnSecondary,
                  onClick: () => setIsModalOpen(true),
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  },
                  children: "Book Strategy Call"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { style: styles.divider }),
        /* @__PURE__ */ jsxs("div", { style: styles.productsSection, children: [
          /* @__PURE__ */ jsxs("p", { style: styles.productsSectionLabel, children: [
            /* @__PURE__ */ jsx(Zap, { size: 13, style: { color: "#facc15" } }),
            " Our Products"
          ] }),
          /* @__PURE__ */ jsx("div", { style: styles.productsGrid, children: PRODUCTS$1.map((p) => /* @__PURE__ */ jsx(
            SparkleButton,
            {
              sparkColors: ["#ffffff", p.color + "cc", p.color + "88", p.color + "55", "#f8fafc"],
              style: { display: "block" },
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: `/products/${p.id}`,
                  style: styles.productChip,
                  onMouseEnter: (e) => {
                    e.currentTarget.style.borderColor = p.color + "60";
                    e.currentTarget.style.background = p.color + "12";
                    e.currentTarget.querySelector(".picon").style.color = p.color;
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.querySelector(".picon").style.color = "#52525b";
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "picon", style: { color: "#52525b", transition: "color 0.2s", display: "flex" }, children: p.icon }),
                    /* @__PURE__ */ jsx("span", { style: styles.productChipName, children: p.label }),
                    /* @__PURE__ */ jsx("span", { style: styles.productChipCat, children: p.category }),
                    /* @__PURE__ */ jsx(ArrowRight, { size: 11, style: { marginLeft: "auto", color: "#3f3f46", flexShrink: 0 } })
                  ]
                }
              )
            },
            p.id
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: styles.divider }),
        /* @__PURE__ */ jsxs("div", { style: styles.linkGrid, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { style: styles.colHeader, children: "Company" }),
            /* @__PURE__ */ jsx("ul", { style: styles.linkList, children: COMPANY.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: l.href,
                style: styles.link,
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "6px";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "#71717a";
                  e.currentTarget.style.paddingLeft = "0";
                },
                children: l.label
              }
            ) }, l.href)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { style: styles.colHeader, children: [
              /* @__PURE__ */ jsx(Zap, { size: 13, style: { color: "#facc15" } }),
              " AI Solutions"
            ] }),
            /* @__PURE__ */ jsx("ul", { style: styles.linkList, children: AI_SOLUTIONS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: l.href,
                style: styles.link,
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "6px";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "#71717a";
                  e.currentTarget.style.paddingLeft = "0";
                },
                children: l.label
              }
            ) }, l.href)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { style: styles.colHeader, children: [
              /* @__PURE__ */ jsx(Globe, { size: 13, style: { color: "#34d399" } }),
              " Emerging Tech"
            ] }),
            /* @__PURE__ */ jsx("ul", { style: styles.linkList, children: EMERGING.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: l.href,
                style: styles.link,
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "6px";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "#71717a";
                  e.currentTarget.style.paddingLeft = "0";
                },
                children: l.label
              }
            ) }, l.href)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { style: styles.colHeader, children: [
              /* @__PURE__ */ jsx(Cpu, { size: 13, style: { color: "#a78bfa" } }),
              " Vision R&D"
            ] }),
            /* @__PURE__ */ jsx("ul", { style: styles.linkList, children: [
              { label: "Embodied AI & Robotics", href: "/solutions/vision#embodied-ai" },
              { label: "Autonomous Agent Swarms", href: "/solutions/vision#swarms" },
              { label: "Generative World Models", href: "/solutions/vision#simulators" },
              { label: "Neuro-Symbolic Reasoning", href: "/solutions/vision#neuro-symbolic" },
              { label: "Brain-Computer Interfaces", href: "/solutions/vision#bci" }
            ].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: l.href,
                style: styles.link,
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "6px";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "#71717a";
                  e.currentTarget.style.paddingLeft = "0";
                },
                children: l.label
              }
            ) }, l.href)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: styles.bottomBar, children: [
          /* @__PURE__ */ jsx("div", { style: styles.socials, children: [
            { icon: /* @__PURE__ */ jsx(Linkedin, { size: 16 }), label: "LinkedIn", href: "https://www.linkedin.com/company/111516910" }
            // { icon: <Twitter size={16} />, label: "Twitter", href: "#" },
            // { icon: <Youtube size={16} />, label: "YouTube", href: "#" },
            // { icon: <Facebook size={16} />, label: "Facebook", href: "#" },
            // { icon: <MessageCircle size={16} />, label: "WhatsApp", href: "https://wa.me/917060816597" },
          ].map((s) => /* @__PURE__ */ jsx(
            "a",
            {
              href: s.href,
              "aria-label": s.label,
              target: s.href.startsWith("http") ? "_blank" : void 0,
              rel: "noopener noreferrer",
              style: styles.socialIcon,
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              },
              children: s.icon
            },
            s.label
          )) }),
          /* @__PURE__ */ jsxs("div", { style: styles.legal, children: [
            /* @__PURE__ */ jsxs("span", { style: styles.legalText, children: [
              "© ",
              currentYear,
              " Entropic System Inc. All rights reserved."
            ] }),
            /* @__PURE__ */ jsx("div", { style: styles.legalLinks, children: [
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" }
            ].map((l, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
              i > 0 && /* @__PURE__ */ jsx("span", { style: { color: "#27272a" }, children: "·" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: l.href,
                  style: styles.legalLink,
                  onMouseEnter: (e) => e.currentTarget.style.color = "#a1a1aa",
                  onMouseLeave: (e) => e.currentTarget.style.color = "#52525b",
                  children: l.label
                }
              )
            ] }, l.href)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SchedulingModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) }),
    /* @__PURE__ */ jsx(ProjectModal, { isOpen: isProjectOpen, onClose: () => setIsProjectOpen(false) })
  ] });
}
const styles = {
  footer: {
    background: "#070709",
    color: "#a1a1aa",
    padding: "72px 24px 32px",
    position: "relative",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    fontFamily: "'Inter', system-ui, sans-serif",
    overflow: "hidden"
  },
  gridOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    pointerEvents: "none"
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  },
  // ── CTA BAND ──
  ctaBand: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 48,
    marginBottom: 48,
    flexWrap: "wrap"
  },
  ctaLeft: {
    flex: "1 1 360px"
  },
  logo: {
    width: "9rem",
    marginBottom: "1.5rem",
    opacity: 0.9
  },
  headline: {
    fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
    fontWeight: 800,
    lineHeight: 1.08,
    color: "#fff",
    letterSpacing: "-0.03em",
    margin: "0 0 16px"
  },
  headlineMuted: {
    color: "#3f3f46"
  },
  subhead: {
    fontSize: 15,
    lineHeight: 1.7,
    color: "#52525b",
    maxWidth: 420,
    margin: "0 0 24px"
  },
  contactRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap"
  },
  contactChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.03)",
    color: "#a1a1aa",
    fontSize: 13,
    fontWeight: 500,
    textDecoration: "none",
    transition: "border-color 0.2s, color 0.2s",
    cursor: "pointer"
  },
  ctaRight: {
    flex: "0 1 300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingTop: 12,
    gap: 16
  },
  ctaLabel: {
    fontSize: 13,
    color: "#52525b",
    textAlign: "right",
    margin: 0
  },
  ctaBtns: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%"
  },
  btnPrimary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    background: "#fff",
    color: "#09090b",
    border: "none",
    borderRadius: 8,
    padding: "11px 20px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
    letterSpacing: "-0.01em"
  },
  btnSecondary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    background: "transparent",
    color: "#a1a1aa",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: "11px 20px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s"
  },
  // ── DIVIDER ──
  divider: {
    height: 1,
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
    margin: "0 0 40px"
  },
  // ── PRODUCTS STRIP ──
  productsSection: {
    marginBottom: 40
  },
  productsSectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#3f3f46",
    marginBottom: 16
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
    gap: 8
  },
  productChip: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 8,
    textDecoration: "none",
    transition: "background 0.2s, border-color 0.2s",
    cursor: "pointer",
    minWidth: 0
  },
  productChipName: {
    fontSize: 13,
    fontWeight: 600,
    color: "#d4d4d8",
    whiteSpace: "nowrap"
  },
  productChipCat: {
    fontSize: 11,
    color: "#52525b",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  // ── LINK GRID ──
  linkGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "40px 32px",
    marginBottom: 48
  },
  colHeader: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    color: "#e4e4e7",
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    gap: 6
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  link: {
    color: "#71717a",
    textDecoration: "none",
    fontSize: 13.5,
    lineHeight: 1.5,
    transition: "color 0.15s, padding-left 0.15s",
    display: "block"
  },
  // ── BOTTOM BAR ──
  bottomBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingTop: 24,
    borderTop: "1px solid rgba(255,255,255,0.05)"
  },
  socials: {
    display: "flex",
    gap: 8
  },
  socialIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#71717a",
    textDecoration: "none",
    transition: "background 0.2s, border-color 0.2s, transform 0.2s"
  },
  legal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 6
  },
  legalText: {
    fontSize: 12,
    color: "#3f3f46"
  },
  legalLinks: {
    display: "flex",
    gap: 12,
    alignItems: "center"
  },
  legalLink: {
    fontSize: 12,
    color: "#52525b",
    textDecoration: "none",
    transition: "color 0.15s"
  }
};
const meta$8 = () => [{
  name: "robots",
  content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
}, {
  name: "theme-color",
  content: "#070709"
}, {
  property: "og:type",
  content: "website"
}, {
  property: "og:site_name",
  content: "Entropic System"
}, {
  property: "og:image",
  content: "https://www.entropicsystem.com/images/og-image.png"
}, {
  property: "og:image:width",
  content: "1200"
}, {
  property: "og:image:height",
  content: "630"
}, {
  property: "og:image:alt",
  content: "Entropic System — Intelligence, Engineered."
}, {
  property: "og:locale",
  content: "en_US"
}, {
  name: "twitter:card",
  content: "summary_large_image"
}, {
  name: "twitter:image",
  content: "https://www.entropicsystem.com/images/og-image.png"
}, {
  "script:ld+json": {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Entropic System",
    url: "https://www.entropicsystem.com",
    logo: "https://www.entropicsystem.com/images/logo.png",
    description: "Entropic System builds intelligence-grade software — from enterprise RAG systems and workflow automation to production SaaS products.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-70608-16597",
      contactType: "sales",
      email: "entropicsys@gmail.com",
      availableLanguage: ["English", "Hindi"]
    },
    sameAs: ["https://www.linkedin.com/company/111516910"]
  }
}];
const links = () => [{
  rel: "icon",
  type: "image/png",
  href: "/images/favicon.png"
}, {
  rel: "apple-touch-icon",
  href: "/images/favicon.png"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "UTF-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function Root() {
  const location = useLocation();
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NotchedNavbar, {}), /* @__PURE__ */ jsx(ChatWidget, {}), /* @__PURE__ */ jsx(AnimatePresence, {
      mode: "wait",
      children: /* @__PURE__ */ jsx("div", {
        style: {
          overflow: "visible"
        },
        children: /* @__PURE__ */ jsx(Outlet, {})
      }, location.pathname)
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  return /* @__PURE__ */ jsx("main", {
    style: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#020617",
      color: "#fff",
      textAlign: "center"
    },
    children: /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("h1", {
        children: is404 ? "404 — Page not found" : "Something went wrong"
      }), /* @__PURE__ */ jsx("a", {
        href: "/",
        style: {
          color: "#60a5fa"
        },
        children: "Go home"
      })]
    })
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const TAU = Math.PI * 2;
const PAD = 24;
const MAX_DIST = 20;
const FRICTION = 0.962;
const COLS = ["#ffffff", "#e8efff", "#dbeafe", "#f0f9ff", "#eff6ff"];
function SteamButton({ children, className, style }) {
  const wrapRef = useRef(null);
  const cvRef = useRef(null);
  const stRef = useRef({ p: [], mode: "idle", t: 0, raf: null, W: 0, H: 0 });
  useEffect(() => {
    const wrap = wrapRef.current;
    const cv = cvRef.current;
    if (!wrap || !cv) return;
    const ctx = cv.getContext("2d");
    const st = stRef.current;
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const r = wrap.getBoundingClientRect();
      st.W = r.width;
      st.H = r.height;
      cv.width = Math.round((st.W + PAD * 2) * dpr);
      cv.height = Math.round((st.H + PAD * 2) * dpr);
      cv.style.width = st.W + PAD * 2 + "px";
      cv.style.height = st.H + PAD * 2 + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    function spawn(burst = false) {
      const { W, H } = st;
      const perim = 2 * (W + H);
      const d = Math.random() * perim;
      let bx, by, nx, ny;
      if (d < W) {
        bx = PAD + d;
        by = PAD;
        nx = 0;
        ny = -1;
      } else if (d < W + H) {
        bx = PAD + W;
        by = PAD + (d - W);
        nx = 1;
        ny = 0;
      } else if (d < 2 * W + H) {
        bx = PAD + W - (d - W - H);
        by = PAD + H;
        nx = 0;
        ny = 1;
      } else {
        bx = PAD;
        by = PAD + H - (d - 2 * W - H);
        nx = -1;
        ny = 0;
      }
      const tang = (Math.random() - 0.5) * 0.14;
      const spd = burst ? 0.75 + Math.random() * 0.7 : 0.3 + Math.random() * 0.42;
      return {
        x: bx,
        y: by,
        ox: bx,
        // birth x — used for distance calc
        oy: by,
        // birth y
        vx: nx * spd + -ny * tang,
        vy: ny * spd + nx * tang,
        sz: burst ? 0.55 + Math.random() * 0.65 : 0.28 + Math.random() * 0.5,
        col: COLS[Math.floor(Math.random() * COLS.length)],
        age: 0,
        maxL: burst ? 55 + Math.random() * 40 : 80 + Math.random() * 55
      };
    }
    function tick() {
      st.raf = requestAnimationFrame(tick);
      st.t++;
      ctx.clearRect(0, 0, st.W + PAD * 2, st.H + PAD * 2);
      if (st.mode === "hover") {
        const alive = st.p.length;
        if (alive < 160) for (let i = 0; i < 4; i++) st.p.push(spawn());
      }
      for (let i = st.p.length - 1; i >= 0; i--) {
        const p = st.p[i];
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;
        p.age++;
        const dist = Math.hypot(p.x - p.ox, p.y - p.oy);
        const distFade = Math.pow(Math.max(0, 1 - dist / MAX_DIST), 1.15);
        const ageFade = Math.pow(Math.max(0, 1 - p.age / p.maxL), 0.35);
        const alpha = distFade * ageFade * 0.68;
        if (alpha < 6e-3 || p.age > p.maxL) {
          st.p.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (st.mode === "idle" && st.p.length === 0) {
        cancelAnimationFrame(st.raf);
        st.raf = null;
      }
    }
    const start = () => {
      if (!st.raf) st.raf = requestAnimationFrame(tick);
    };
    const enter = () => {
      st.mode = "hover";
      start();
    };
    const leave = () => {
      st.mode = "idle";
    };
    const click = () => {
      for (let i = 0; i < 45; i++) st.p.push(spawn(true));
      start();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    wrap.addEventListener("mouseenter", enter);
    wrap.addEventListener("mouseleave", leave);
    wrap.addEventListener("click", click);
    return () => {
      if (st.raf) cancelAnimationFrame(st.raf);
      ro.disconnect();
      wrap.removeEventListener("mouseenter", enter);
      wrap.removeEventListener("mouseleave", leave);
      wrap.removeEventListener("click", click);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: wrapRef,
      className,
      style: { position: "relative", display: "inline-flex", ...style },
      children: [
        /* @__PURE__ */ jsx(
          "canvas",
          {
            ref: cvRef,
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: -PAD + "px",
              left: -PAD + "px",
              pointerEvents: "none",
              zIndex: 9
            }
          }
        ),
        children
      ]
    }
  );
}
const fadeUp$3 = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
};
function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "hero-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "video-container", children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            className: "hero-bg-video",
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            children: /* @__PURE__ */ jsx("source", { src: "/videos/Pagevideo2.mp4", type: "video/mp4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "hero-overlay" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hero-content", children: /* @__PURE__ */ jsxs("div", { className: "hero-left", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "hero-badge",
            custom: 0,
            initial: "hidden",
            animate: "visible",
            variants: fadeUp$3,
            children: [
              /* @__PURE__ */ jsx("span", { className: "badge-dot" }),
              "ENTROPIC SYSTEM"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            className: "hero-headline",
            custom: 1,
            initial: "hidden",
            animate: "visible",
            variants: fadeUp$3,
            children: [
              "Practical solutions.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "hero-highlight", children: "Built for real-world control." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            className: "hero-subtext",
            custom: 2,
            initial: "hidden",
            animate: "visible",
            variants: fadeUp$3,
            children: "We engineer intelligent infrastructure that helps organizations reduce manual effort, execute decisive actions, and scale efficiently. No black boxes—just robust software designed for the physical world."
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "hero-actions",
            custom: 3,
            initial: "hidden",
            animate: "visible",
            variants: fadeUp$3,
            children: /* @__PURE__ */ jsx(SteamButton, { children: /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn-primary",
                onClick: () => setIsModalOpen(true),
                onMouseMove: (e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--gx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
                  e.currentTarget.style.setProperty("--gy", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
                },
                children: /* @__PURE__ */ jsx("span", { className: "btn-text", children: "Talk to Our Engineers" })
              }
            ) })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      SchedulingModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false)
      }
    )
  ] });
}
const P = {
  bg: "#f9f9f7",
  // Paper-white background
  ink: "#0f0f0f",
  // Near-black
  inkMuted: "#666666",
  // Grey for subtext
  accent: "#2563eb"
  // Primary blue (used sparingly)
};
const fadeUp$2 = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }
  })
};
function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const combinedRef = (el) => {
    ref.current = el;
    sectionRef.current = el;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Newsreader:ital,opsz,wght@1,6..72,400&display=swap');

        @keyframes adGhostOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      ` }),
    /* @__PURE__ */ jsxs("section", { ref: combinedRef, style: {
      background: P.bg,
      padding: "180px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
      minHeight: "80vh"
    }, children: [
      /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: sectionRef, scheme: "light" }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "600px",
        height: "600px",
        border: "1px solid rgba(0,0,0,0.03)",
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        filter: "blur(80px)",
        animation: "adGhostOrbit 25s linear infinite",
        background: "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.05), transparent)",
        pointerEvents: "none",
        zIndex: 0
      } }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", zIndex: 1, maxWidth: "800px" }, children: [
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            variants: fadeUp$2,
            initial: "hidden",
            animate: inView ? "visible" : "hidden",
            custom: 0,
            style: {
              fontSize: "clamp(48px, 8vw, 92px)",
              fontWeight: 800,
              color: P.ink,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              margin: "0 0 32px"
            },
            children: [
              "S",
              /* @__PURE__ */ jsx("span", { style: { color: P.accent }, children: "aa" }),
              "S: System ",
              /* @__PURE__ */ jsx("br", {}),
              "as a Service"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            variants: fadeUp$2,
            initial: "hidden",
            animate: inView ? "visible" : "hidden",
            custom: 1,
            style: {
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontStyle: "italic",
              color: P.ink,
              lineHeight: 1.5,
              maxWidth: "640px",
              margin: "0 auto 64px"
            },
            children: "We build systems that think ahead—so your business never has to catch up. More than just software, we create an evolving ecosystem that grows with your ambitions."
          }
        ),
        /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "40px"
        }, children: [
          { label: "Adaptive Infrastructure", value: "Evolving pipelines" },
          { label: "Absolute Sovereignty", value: "Zero black-box" },
          { label: "Frictionless Scale", value: "Massive throughput" }
        ].map((p, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: fadeUp$2,
            initial: "hidden",
            animate: inView ? "visible" : "hidden",
            custom: 2 + i * 0.1,
            style: { textAlign: "left" },
            children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: P.accent, marginBottom: "4px" }, children: p.label }),
              /* @__PURE__ */ jsx("div", { style: { fontSize: "16px", color: P.inkMuted }, children: p.value })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] });
}
const tickerReveal = {
  hidden: {
    scaleX: 0,
    scaleY: 0.85,
    opacity: 0,
    y: -10,
    transformOrigin: "center"
  },
  visible: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    y: "15%",
    // moves DOWN relative to itself
    transition: {
      // 1ï¸âƒ£ ribbon unfolds
      scaleX: {
        duration: 0.3,
        ease: "easeOut"
      },
      scaleY: {
        delay: 0.12,
        duration: 0.2,
        ease: "easeOut"
      },
      // 2ï¸âƒ£ ticker rolls down AFTER it exists
      y: {
        delay: 0.3,
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }
};
const tickerRoll = {
  animate: {
    x: ["0%", "-50%"],
    skewX: [0, -3, 0],
    transition: {
      x: {
        duration: 40,
        repeat: Infinity,
        ease: "linear"
      },
      skewX: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  paused: {
    x: "0%",
    transition: {
      x: {
        duration: 0,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }
};
const TEXT = "PYTHON • PYTORCH • LANGCHAIN • DOCKER • KUBERNETES • RAY • HUGGING FACE • vLLM • OLLAMA • LLAMAINDEX • FASTAPI • TERRAFORM • CUDA • POSTGRESQL • KAFKA";
function Ticker() {
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      className: "ticker-section",
      variants: tickerReveal,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.6 },
      children: /* @__PURE__ */ jsx("div", { className: "ticker-wrapper", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "ticker-track",
          animate: "animate",
          whileHover: "paused",
          variants: tickerRoll,
          children: [
            /* @__PURE__ */ jsx("span", { children: TEXT }),
            /* @__PURE__ */ jsx("span", { children: TEXT })
          ]
        }
      ) })
    }
  );
}
const PARTICLES = [
  { Icon: Cpu, top: "10%", left: "5%", delay: 0, duration: 8 },
  { Icon: Database, top: "70%", left: "10%", delay: 2, duration: 12 },
  { Icon: Globe, top: "20%", left: "80%", delay: 1, duration: 10 },
  { Icon: Zap, top: "80%", left: "85%", delay: 4, duration: 9 },
  { Icon: Server, top: "40%", left: "40%", delay: 0, duration: 15 },
  { Icon: Code2, top: "15%", left: "50%", delay: 3, duration: 11 },
  { Icon: Layers, top: "60%", left: "60%", delay: 1.5, duration: 13 }
];
function VideoInterlude() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yVideo = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  return /* @__PURE__ */ jsxs("section", { ref: sectionRef, className: "interlude-section", children: [
    /* @__PURE__ */ jsxs("div", { className: "interlude-bg", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-grid-pattern" }),
      PARTICLES.map((item2, i) => /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "floating-icon-wrapper",
          style: { top: item2.top, left: item2.left },
          animate: {
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          },
          transition: {
            duration: item2.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item2.delay
          },
          children: /* @__PURE__ */ jsx(item2.Icon, { className: "glowing-icon", size: 32 })
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "interlude-container", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "video-card-layer",
          style: { y: yVideo },
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, ease: "easeOut" },
          viewport: { once: true, margin: "-100px" },
          children: [
            /* @__PURE__ */ jsx(
              "video",
              {
                src: "/videos/ler.mp4",
                muted: true,
                autoPlay: true,
                loop: true,
                playsInline: true,
                className: "cinematic-video"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "video-tint" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "glass-card-layer",
          style: { y: yText },
          children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "glass-panel",
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "glass-content", children: [
                  /* @__PURE__ */ jsxs("h1", { children: [
                    "Thinking, not just ",
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "highlight-text", children: "processing." })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "glass-subtext", children: [
                    "Raw data is silence. Intelligence is the signal. We engineer the architecture that filters the noise and refines your information into an ",
                    /* @__PURE__ */ jsx("strong", { children: "unfair competitive advantage." })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "shine-edge" })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
const SAAS_PRODUCTS = [
  {
    id: "financemanager",
    category: "FINANCIAL MANAGEMENT",
    icon: /* @__PURE__ */ jsx(LineChart, { size: 20, strokeWidth: 2, className: "text-blue-500" }),
    iconBg: "bg-blue-50",
    themeColor: "#3b82f6",
    title: "Finance Manager",
    description: "Accounting, invoicing, tax compliance, and cash flow forecasting powered by intelligent document processing.",
    tags: ["GST-ready", "Auto-reconciliation", "Multi-currency"],
    link: "/products/financemanager"
  },
  {
    id: "crmportal",
    category: "CUSTOMER EXPERIENCE",
    icon: /* @__PURE__ */ jsx(Users, { size: 20, strokeWidth: 2, className: "text-emerald-500" }),
    iconBg: "bg-emerald-50",
    themeColor: "#10b981",
    title: "CRM Portal",
    description: "Track every deal, automate follow-ups, and personalize every customer touchpoint with highly constrained agentic workflows.",
    tags: ["Sales pipeline", "Lead scoring", "WhatsApp integration"],
    link: "/products/crmportal"
  },
  {
    id: "schoolmanager",
    category: "EDUCATION",
    icon: /* @__PURE__ */ jsx(GraduationCap, { size: 20, strokeWidth: 2, className: "text-indigo-500" }),
    iconBg: "bg-indigo-50",
    themeColor: "#6366f1",
    title: "School Manager",
    description: "All-in-one school management platform covering admissions, attendance, fees, exams, and parent communication — built for institutions that want to run smarter.",
    tags: ["Admissions", "Fee automation", "Parent portal"],
    link: "/products/schoolmanager"
  },
  {
    id: "clinicmanager",
    category: "HEALTHCARE",
    icon: /* @__PURE__ */ jsx(Activity, { size: 20, strokeWidth: 2, className: "text-rose-500" }),
    iconBg: "bg-rose-50",
    themeColor: "#f43f5e",
    title: "Clinic Manager",
    description: "End-to-end clinic operations software with appointment scheduling, patient records, billing, and prescription management — designed for solo practitioners and multi-branch clinics alike.",
    tags: ["Appointments", "EMR & billing", "Prescription tracking"],
    link: "/products/clinicmanager"
  },
  {
    id: "kitchendisplaysystem",
    category: "HOSPITALITY",
    icon: /* @__PURE__ */ jsx(ChefHat, { size: 20, strokeWidth: 2, className: "text-amber-500" }),
    iconBg: "bg-amber-50",
    themeColor: "#f59e0b",
    title: "Kitchen Display System",
    description: "Production-ready Kitchen Display System (KDS) engineered for multi-branch synchronization and real-time order routing.",
    tags: ["Multi-branch", "Real-time routing", "Inventory tracking"],
    link: "/products/kitchendisplaysystem"
  },
  {
    id: "inventorymanager",
    category: "SUPPLY CHAIN",
    icon: /* @__PURE__ */ jsx(Package, { size: 20, strokeWidth: 2, className: "text-orange-700" }),
    iconBg: "bg-orange-50",
    themeColor: "#d97709",
    title: "Inventory Manager",
    description: "Hidden stockouts and dead inventory are quietly draining your capital. Plug the leaks with real-time tracking and predictive demand forecasting that exposes blind spots before they cost you.",
    tags: ["Predictive Forecasting", "Real-Time Tracking", "Loss Prevention"],
    link: "/products/inventorymanager"
  }
  // {
  //     id: "omnisense",
  //     category: "DEFENSE & INFRA",
  //     icon: <Satellite size={20} strokeWidth={2} className="text-slate-700" />,
  //     iconBg: "bg-slate-100",
  //     themeColor: "#334155",
  //     title: "OmniSense",
  //     description: "Autonomous sensor fusion and drone management systems designed for robust operational awareness and asset tracking.",
  //     tags: ["Sensor fusion", "Edge AI", "AaaS"],
  //     link: "/products/omnisense"
  // }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
function SaaSSection() {
  const sectionRef = useRef(null);
  return /* @__PURE__ */ jsxs("section", { ref: sectionRef, className: "saas-section", children: [
    /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: sectionRef, scheme: "light" }),
    /* @__PURE__ */ jsxs("div", { className: "saas-header", style: { position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsx("span", { className: "saas-eyebrow", children: "ENTROPIC BUSINESS ECOSYSTEM" }),
      /* @__PURE__ */ jsx("h2", { className: "saas-title", children: "Equip every team with purpose-built software" }),
      /* @__PURE__ */ jsx("p", { className: "saas-subtitle", children: "Six intelligent products — finance, sales, education, operations, healthcare, and hospitality — each built for the teams that use them daily." })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "saas-grid",
        style: { position: "relative", zIndex: 1 },
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: SAAS_PRODUCTS.map((product2) => /* @__PURE__ */ jsxs(motion.div, { className: "saas-card", variants: cardVariants, style: { "--card-theme": product2.themeColor }, children: [
          /* @__PURE__ */ jsxs("div", { className: "saas-card-header", children: [
            /* @__PURE__ */ jsx("div", { className: `saas-icon-wrapper ${product2.iconBg}`, children: product2.icon }),
            /* @__PURE__ */ jsx("span", { className: "saas-category", children: product2.category })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "saas-card-body", children: [
            /* @__PURE__ */ jsx("h3", { className: "saas-card-title", children: product2.title }),
            /* @__PURE__ */ jsx("p", { className: "saas-card-description", children: product2.description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "saas-tags", children: product2.tags.map((tag, index) => /* @__PURE__ */ jsx("span", { className: "saas-tag", children: tag }, index)) }),
          /* @__PURE__ */ jsx("div", { className: "saas-card-footer", children: /* @__PURE__ */ jsxs(Link, { to: product2.link, className: "saas-explore-link", children: [
            "Explore ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "arrow-icon" })
          ] }) })
        ] }, product2.id))
      }
    )
  ] });
}
const PIPE_PATHS = [
  "M 130 50 C 188 50 188 140 220 140",
  // DB → AI
  "M 130 140 L 220 140",
  // CRM → AI
  "M 130 230 C 188 230 188 140 220 140",
  // Files → AI
  "M 298 140 C 338 140 338 100 378 100",
  // AI → Warehouse
  "M 298 140 C 338 140 338 200 378 200"
  // AI → Dashboard
];
const NodeGraphVisual = () => /* @__PURE__ */ jsx("div", { className: "ts-visual-wrap", style: { padding: "1rem" }, children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 500 280", style: { width: "100%", height: "100%", maxHeight: 280 }, children: [
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", { id: "pipe-glow", x: "-60%", y: "-60%", width: "220%", height: "220%", children: [
    /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "2.5", result: "b" }),
    /* @__PURE__ */ jsxs("feMerge", { children: [
      /* @__PURE__ */ jsx("feMergeNode", { in: "b" }),
      /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
    ] })
  ] }) }),
  PIPE_PATHS.map((d, i) => /* @__PURE__ */ jsx("path", { d, stroke: "#10b981", strokeWidth: "1.2", strokeOpacity: "0.22", fill: "none" }, i)),
  PIPE_PATHS.map((d, i) => [0, 0.7].map((offset, k) => /* @__PURE__ */ jsxs("circle", { r: k === 0 ? 3 : 2, fill: "#10b981", filter: "url(#pipe-glow)", children: [
    /* @__PURE__ */ jsx("animateMotion", { dur: `${1.4 + i * 0.18}s`, repeatCount: "indefinite", begin: `${i * 0.38 + offset}s`, calcMode: "linear", path: d }),
    /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0;0.95;0.95;0", keyTimes: "0;0.07;0.87;1", dur: `${1.4 + i * 0.18}s`, repeatCount: "indefinite", begin: `${i * 0.38 + offset}s` })
  ] }, `${i}-${k}`))),
  [["PostgreSQL", "SQL · live sync", 30], ["Salesforce CRM", "REST · real-time", 120], ["CSV / Excel", "batch · daily", 210]].map(([label, sub, y], i) => /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("rect", { x: "10", y, width: "120", height: "40", rx: "8", fill: "#040d10", stroke: "#10b981", strokeWidth: "1", strokeOpacity: "0.45" }),
    /* @__PURE__ */ jsx("circle", { cx: "25", cy: y + 20, r: "3.5", fill: "#10b981", opacity: "0.75", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.75;0.25;0.75", dur: `${1.8 + i * 0.35}s`, repeatCount: "indefinite" }) }),
    /* @__PURE__ */ jsx("text", { x: "70", y: y + 15, textAnchor: "middle", fill: "#4ade80", fontSize: "10", fontFamily: "monospace", children: label }),
    /* @__PURE__ */ jsx("text", { x: "70", y: y + 29, textAnchor: "middle", fill: "#10b981", fontSize: "8.5", fontFamily: "monospace", opacity: "0.55", children: sub })
  ] }, i)),
  /* @__PURE__ */ jsxs("g", { transform: "translate(259, 140)", children: [
    /* @__PURE__ */ jsxs("circle", { r: "56", fill: "none", stroke: "#10b981", strokeWidth: "0.8", opacity: "0.07", children: [
      /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "50;66;50", dur: "3.6s", repeatCount: "indefinite" }),
      /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.07;0;0.07", dur: "3.6s", repeatCount: "indefinite" })
    ] }),
    /* @__PURE__ */ jsxs("circle", { r: "44", fill: "none", stroke: "#10b981", strokeWidth: "1.2", opacity: "0.16", children: [
      /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "40;54;40", dur: "2.8s", begin: "0.45s", repeatCount: "indefinite" }),
      /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.16;0;0.16", dur: "2.8s", begin: "0.45s", repeatCount: "indefinite" })
    ] }),
    /* @__PURE__ */ jsx("circle", { r: "36", fill: "none", stroke: "#10b981", strokeWidth: "1.5", strokeDasharray: "7.5 3.5", strokeOpacity: "0.38", children: /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", type: "rotate", from: "0", to: "360", dur: "10s", repeatCount: "indefinite" }) }),
    /* @__PURE__ */ jsx("circle", { r: "31", fill: "#060f12", stroke: "#10b981", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx("text", { textAnchor: "middle", fill: "#4ade80", fontSize: "11", fontFamily: "monospace", fontWeight: "700", y: "-6", children: "AI Core" }),
    /* @__PURE__ */ jsx("text", { textAnchor: "middle", fill: "#10b981", fontSize: "8", fontFamily: "monospace", opacity: "0.55", y: "8", children: "v2.4-stable" })
  ] }),
  [["Data Warehouse", 80], ["Live Dashboard", 180]].map(([label, y], i) => /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx("rect", { x: "378", y, width: "112", height: "40", rx: "8", fill: "#040d10", stroke: "#10b981", strokeWidth: "1", strokeOpacity: "0.45" }),
    label.split(" ").map((word, wi) => /* @__PURE__ */ jsx("text", { x: "434", y: y + 14 + wi * 14, textAnchor: "middle", fill: "#4ade80", fontSize: "10", fontFamily: "monospace", children: word }, wi))
  ] }, i))
] }) });
const CHART_POINTS = [8, 28, 16, 55, 40, 72, 52, 88, 66, 82, 70, 94];
const CW = 400, CH = 108;
function buildAreaPath(pts) {
  const linePath = pts.reduce((acc, v, i) => {
    const x = i / (pts.length - 1) * CW;
    const y = CH - v / 100 * CH;
    if (i === 0) return `M ${x} ${y}`;
    const px = (i - 1) / (pts.length - 1) * CW;
    const py = CH - pts[i - 1] / 100 * CH;
    const cpx = (px + x) / 2;
    return acc + ` C ${cpx} ${py} ${cpx} ${y} ${x} ${y}`;
  }, "");
  return { line: linePath, area: linePath + ` L ${CW} ${CH} L 0 ${CH} Z` };
}
const { line: LINE_D, area: AREA_D } = buildAreaPath(CHART_POINTS);
const DashboardVisual = () => /* @__PURE__ */ jsxs("div", { className: "ts-visual-wrap ts-dashboard", style: { gap: "0.8rem" }, children: [
  /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "0.65rem", width: "100%" }, children: [
    { label: "Revenue", value: "$84.2K", delta: "+12%", color: "#3b82f6" },
    { label: "Sessions", value: "14.2K", delta: "+8%", color: "#10b981" },
    { label: "Uptime", value: "99.97%", delta: "stable", color: "#8b5cf6" }
  ].map(({ label, value, delta, color }) => /* @__PURE__ */ jsxs("div", { style: {
    flex: 1,
    background: "rgba(15,23,42,0.75)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "0.7rem 0.75rem"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: { fontSize: "0.62rem", color: "#64748b", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }, children: label }),
    /* @__PURE__ */ jsx("div", { style: { fontSize: "1.05rem", fontWeight: 700, color, marginBottom: 3 }, children: value }),
    /* @__PURE__ */ jsx("div", { style: { fontSize: "0.67rem", fontWeight: 600, color, opacity: 0.75 }, children: delta })
  ] }, label)) }),
  /* @__PURE__ */ jsxs("div", { style: { width: "100%", background: "rgba(15,23,42,0.75)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "0.9rem 1rem 0.6rem", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.65rem", color: "#64748b", fontFamily: "monospace" }, children: "revenue · last 12h" }),
      /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: 5, fontSize: "0.62rem", fontWeight: 700, color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.07em" }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: "ts-pulse 1.5s ease-in-out infinite" } }),
        "LIVE"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${CW} ${CH}`, style: { width: "100%", height: "auto", display: "block", overflow: "visible" }, children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "db-fill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: "0.35" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: "0.03" })
      ] }) }),
      /* @__PURE__ */ jsx("path", { d: AREA_D, fill: "url(#db-fill)" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: LINE_D,
          stroke: "#3b82f6",
          strokeWidth: "2",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "1200",
          strokeDashoffset: "1200",
          children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", from: "1200", to: "0", dur: "1.4s", fill: "freeze" })
        }
      ),
      CHART_POINTS.map((v, i) => {
        const cx = i / (CHART_POINTS.length - 1) * CW;
        const cy = CH - v / 100 * CH;
        return /* @__PURE__ */ jsx("circle", { cx, cy, r: "3", fill: "#3b82f6", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;1;0.5", dur: `${1.4 + i * 0.22}s`, repeatCount: "indefinite" }) }, i);
      }),
      /* @__PURE__ */ jsxs("circle", { cx: CW, cy: CH - CHART_POINTS[CHART_POINTS.length - 1] / 100 * CH, r: "5", fill: "none", stroke: "#3b82f6", strokeWidth: "1.5", opacity: "0.35", children: [
        /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "5;11;5", dur: "2s", repeatCount: "indefinite" }),
        /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.35;0;0.35", dur: "2s", repeatCount: "indefinite" })
      ] })
    ] })
  ] })
] });
const WF_STAGES = [
  { label: "Trigger", sub: "ERP: New PO received", color: "#f59e0b", icon: "⚡", status: "FIRED" },
  { label: "Parse", sub: "Extract: vendor + SKU", color: "#3b82f6", icon: "⊕", status: "DONE" },
  { label: "AI Classify", sub: "Confidence: 98.4%", color: "#8b5cf6", icon: "✦", status: "RUNNING" },
  { label: "Validate", sub: "Checking 12 business rules", color: "#06b6d4", icon: "◎", status: "WAITING" },
  { label: "Execute", sub: "Sync: 3 downstream systems", color: "#10b981", icon: "✓", status: "WAITING" }
];
const WF_LOG = [
  { id: "PO-8821", time: "14:32", ok: true, dur: "1.2s" },
  { id: "PO-8820", time: "14:15", ok: true, dur: "1.4s" },
  { id: "PO-8819", time: "13:58", ok: false, dur: "0.3s" },
  { id: "PO-8818", time: "13:41", ok: true, dur: "1.1s" },
  { id: "PO-8817", time: "13:22", ok: true, dur: "1.3s" },
  { id: "PO-8816", time: "13:05", ok: true, dur: "0.9s" }
];
const WorkflowVisual = () => /* @__PURE__ */ jsxs("div", { style: {
  width: "100%",
  height: "100%",
  display: "flex",
  gap: "0.875rem",
  padding: "1.25rem 1rem",
  boxSizing: "border-box",
  fontFamily: "monospace"
}, children: [
  /* @__PURE__ */ jsxs("div", { style: { flex: "0 0 56%", display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", flexShrink: 0 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.58rem", fontWeight: 700, color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.12em" }, children: "PIPELINE" }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, height: 1, background: "rgba(139,92,246,0.2)" } })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { flex: 1, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", left: 14, top: 22, bottom: 22, width: 1, borderLeft: "1.5px dashed rgba(139,92,246,0.2)" } }),
      WF_STAGES.map(({ label, sub, color, icon, status }, i) => {
        const isRunning = status === "RUNNING";
        const isWaiting = status === "WAITING";
        return /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          background: isRunning ? "rgba(139,92,246,0.07)" : "rgba(5,13,22,0.8)",
          border: `1px solid ${isWaiting ? "rgba(255,255,255,0.07)" : isRunning ? color : `${color}55`}`,
          borderRadius: 8,
          padding: "0.55rem 0.65rem",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ jsx("div", { style: {
            width: 26,
            height: 26,
            borderRadius: "50%",
            flexShrink: 0,
            background: isWaiting ? "rgba(15,23,42,0.4)" : `${color}18`,
            border: `1.5px solid ${isWaiting ? "rgba(255,255,255,0.1)" : color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            color: isWaiting ? "#334155" : color
          }, children: icon }),
          /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "0.72rem", fontWeight: 700, color: isWaiting ? "#475569" : "#f1f5f9", marginBottom: 1 }, children: label }),
            /* @__PURE__ */ jsx("div", { style: { fontSize: "0.62rem", color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: sub })
          ] }),
          /* @__PURE__ */ jsx("div", { style: {
            fontSize: "0.56rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            flexShrink: 0,
            color: isWaiting ? "#334155" : isRunning ? color : "#10b981"
          }, children: status }),
          isRunning && /* @__PURE__ */ jsx("div", { style: {
            position: "absolute",
            inset: -1,
            borderRadius: 8,
            border: `1px solid ${color}`,
            pointerEvents: "none",
            animation: "ts-pulse 1.4s ease-in-out infinite",
            opacity: 0.4
          } })
        ] }, i);
      })
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "rgba(5,13,22,0.8)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 10,
    padding: "0.75rem",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.65rem", flexShrink: 0 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.58rem", fontWeight: 700, color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.1em" }, children: "EXEC LOG" }),
      /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: "0.57rem", color: "#10b981", fontWeight: 700 }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#10b981", animation: "ts-pulse 1.5s ease-in-out infinite" } }),
        "LIVE"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }, children: WF_LOG.map(({ id, time, ok, dur }) => /* @__PURE__ */ jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.32rem 0.5rem",
      background: "rgba(15,23,42,0.6)",
      border: "1px solid rgba(255,255,255,0.04)",
      borderRadius: 6
    }, children: [
      /* @__PURE__ */ jsx("span", { style: { width: 5, height: 5, borderRadius: "50%", background: ok ? "#10b981" : "#ef4444", flexShrink: 0 } }),
      /* @__PURE__ */ jsx("span", { style: { flex: 1, fontSize: "0.66rem", color: "#94a3b8" }, children: id }),
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.6rem", color: "#475569" }, children: dur }),
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.58rem", color: "#334155" }, children: time })
    ] }, id)) }),
    /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.5rem", marginTop: "0.5rem", display: "flex", justifyContent: "space-between", flexShrink: 0 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.6rem", color: "#475569" }, children: "5 success · 1 failed" }),
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.6rem", color: "#8b5cf6", fontWeight: 700 }, children: "avg 1.2s" })
    ] })
  ] })
] });
const REPORT_BARS = [58, 74, 47, 91, 68, 100, 74, 88, 62, 95, 71, 85];
const ReportVisual = () => /* @__PURE__ */ jsxs("div", { style: {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1rem 1.1rem",
  boxSizing: "border-box",
  gap: "0.6rem",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
}, children: [
  /* @__PURE__ */ jsxs("div", { style: { background: "#050e1a", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 10, padding: "0.875rem 1rem 0", flexShrink: 0 }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: { fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.12em", color: "#f59e0b", textTransform: "uppercase", marginBottom: 3 }, children: "WEEKLY REPORT" }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: "0.88rem", fontWeight: 700, color: "#f8fafc" }, children: "Sales Performance" }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: "0.63rem", color: "#475569", marginTop: 2 }, children: "Jun 2 – Jun 8, 2025" })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 5, fontSize: "0.57rem", fontWeight: 700, color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 6, padding: "3px 8px", flexShrink: 0 }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#10b981", animation: "ts-pulse 1.5s ease-in-out infinite" } }),
        "SCHEDULED"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 2, height: 58 }, children: REPORT_BARS.map((h, i) => /* @__PURE__ */ jsx("div", { style: {
      flex: 1,
      borderRadius: "2px 2px 0 0",
      background: "linear-gradient(to top, #b45309, #f59e0b)",
      height: `${h}%`,
      opacity: 0.35 + i * 0.055
    } }, i)) })
  ] }),
  /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", flexShrink: 0 }, children: [
    { label: "Revenue", value: "$128.4K", delta: "+12%", color: "#f59e0b" },
    { label: "New Deals", value: "34", delta: "+5", color: "#10b981" },
    { label: "Avg. Deal", value: "$3,776", delta: "−2%", color: "#f87171" },
    { label: "Pipeline", value: "$840K", delta: "+18%", color: "#8b5cf6" }
  ].map(({ label, value, delta, color }) => /* @__PURE__ */ jsxs("div", { style: {
    background: "rgba(10,18,30,0.9)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 8,
    padding: "0.55rem 0.75rem"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: { fontSize: "0.57rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 3 }, children: label }),
    /* @__PURE__ */ jsx("div", { style: { fontSize: "0.92rem", fontWeight: 700, color: "#f8fafc", marginBottom: 1 }, children: value }),
    /* @__PURE__ */ jsx("div", { style: { fontSize: "0.63rem", fontWeight: 600, color }, children: delta })
  ] }, label)) }),
  /* @__PURE__ */ jsxs("div", { style: {
    flex: 1,
    background: "rgba(5,14,26,0.95)",
    border: "1px solid rgba(245,158,11,0.2)",
    borderRadius: 10,
    padding: "0.7rem 0.875rem",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", flexShrink: 0 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.57rem", color: "#475569", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }, children: "SEND QUEUE" }),
      /* @__PURE__ */ jsx("span", { style: { fontSize: "0.62rem", color: "#f59e0b", fontWeight: 600 }, children: "Mon 09:00" })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around" }, children: [
      { init: "AN", name: "Ananya N.", role: "CFO", ok: true },
      { init: "RK", name: "Rahul K.", role: "Sales Head", ok: true },
      { init: "PS", name: "Priya S.", role: "VP Ops", ok: true },
      { init: "MT", name: "Mihail T.", role: "CEO", ok: false }
    ].map(({ init, name, role, ok }) => /* @__PURE__ */ jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.28rem 0",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        width: 27,
        height: 27,
        borderRadius: "50%",
        flexShrink: 0,
        background: "rgba(245,158,11,0.12)",
        border: "1px solid rgba(245,158,11,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.6rem",
        fontWeight: 700,
        color: "#f59e0b"
      }, children: init }),
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontSize: "0.72rem", color: "#e2e8f0", fontWeight: 500 }, children: name }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: "0.62rem", color: "#475569" }, children: role })
      ] }),
      /* @__PURE__ */ jsx("span", { style: { width: 6, height: 6, borderRadius: "50%", background: ok ? "#10b981" : "#f59e0b", flexShrink: 0 } })
    ] }, name)) }),
    /* @__PURE__ */ jsxs("div", { style: { marginTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.5rem", flexShrink: 0 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 5 }, children: [
        /* @__PURE__ */ jsx("span", { style: { fontSize: "0.6rem", color: "#475569" }, children: "Delivery progress" }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: "0.6rem", color: "#f59e0b", fontWeight: 700 }, children: "3 / 4 queued" })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }, children: /* @__PURE__ */ jsx("div", { style: { height: "100%", width: "75%", background: "linear-gradient(to right, #b45309, #f59e0b)", borderRadius: 2 } }) })
    ] })
  ] })
] });
const TOOLS_DATA$1 = [
  {
    id: "databuilder",
    tag: "ARCHITECTURE",
    title: "DataBlend Pipeline",
    description: "Connect isolated databases and external SaaS tools. Engineer robust pipelines to clean, merge, and transform your data seamlessly.",
    bullets: ["Merge disparate CRM data", "Sanitize supplier sheets", "Automate complex data pulls"],
    icon: /* @__PURE__ */ jsx(Database, { size: 22 }),
    themeColor: "emerald",
    Visual: NodeGraphVisual
  },
  {
    id: "pulsebi",
    tag: "OBSERVABILITY",
    title: "Live Telemetry",
    description: "Construct real-time dashboards for mission-critical metrics. Embed operational visibility directly into your team's workflow.",
    bullets: ["Live revenue tracking", "Operational health KPIs", "Client-facing reporting"],
    icon: /* @__PURE__ */ jsx(BarChart3, { size: 22 }),
    themeColor: "blue",
    Visual: DashboardVisual
  },
  {
    id: "flowforge",
    tag: "INTELLIGENCE",
    title: "Algorithmic Workflows",
    description: "Deploy logic-driven triggers to automate system actions. Utilize intelligence to identify operational bottlenecks as you scale.",
    bullets: ["Event-driven inventory sync", "Anomaly detection alerts", "Automated reconciliation"],
    icon: /* @__PURE__ */ jsx(Zap, { size: 22 }),
    themeColor: "purple",
    Visual: WorkflowVisual
  },
  {
    id: "reportmate",
    tag: "DISTRIBUTION",
    title: "Scheduled Reporting",
    description: "Automate the distribution of critical analytics. Deliver comprehensive KPI summaries securely across your preferred channels.",
    bullets: ["Scheduled performance reviews", "Threshold-based alerting", "Multi-channel delivery"],
    icon: /* @__PURE__ */ jsx(FileText, { size: 22 }),
    themeColor: "amber",
    Visual: ReportVisual
  }
];
function ToolsSection() {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);
  const handleScroll = useCallback(() => {
    if (window.innerWidth < 1024) return;
    const mid = window.innerHeight / 2;
    let best = 0, bestDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveCard(best);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);
  const activeData = TOOLS_DATA$1[activeCard];
  return /* @__PURE__ */ jsxs("section", { className: "ts-section", ref: sectionRef, children: [
    /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: sectionRef, scheme: "light" }),
    /* @__PURE__ */ jsxs("div", { className: "ts-container", style: { position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsxs("div", { className: "ts-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "ts-header", children: [
          /* @__PURE__ */ jsx("span", { className: "ts-eyebrow", children: "CORE ARCHITECTURE" }),
          /* @__PURE__ */ jsxs("h2", { className: "ts-title", children: [
            "Operational clarity.",
            /* @__PURE__ */ jsx("br", {}),
            "Engineered for scale."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "ts-subtitle", children: "A unified infrastructure that bridges isolated data silos, sanitizes records, and surfaces the critical insights your team needs to execute decisively." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ts-cards", children: TOOLS_DATA$1.map((tool, index) => {
          const isActive = activeCard === index;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              ref: (el) => cardRefs.current[index] = el,
              className: `ts-card ts-card--${tool.themeColor} ${isActive ? "ts-card--active" : ""}`,
              onClick: () => {
                if (window.innerWidth >= 1024) {
                  setActiveCard(index);
                  cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "ts-card-accent" }),
                /* @__PURE__ */ jsxs("div", { className: "ts-mobile-hero", children: [
                  /* @__PURE__ */ jsx("div", { className: "ts-mobile-hero-bg" }),
                  /* @__PURE__ */ jsx(tool.Visual, {})
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "ts-card-body", children: [
                  /* @__PURE__ */ jsxs("div", { className: "ts-card-top", children: [
                    /* @__PURE__ */ jsx("div", { className: `ts-card-icon ts-card-icon--${tool.themeColor}`, children: tool.icon }),
                    /* @__PURE__ */ jsx("span", { className: `ts-card-tag ts-card-tag--${tool.themeColor}`, children: tool.tag })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "ts-card-title", children: tool.title }),
                  /* @__PURE__ */ jsx("p", { className: "ts-card-desc", children: tool.description }),
                  /* @__PURE__ */ jsx("ul", { className: "ts-card-bullets", children: tool.bullets.map((b) => /* @__PURE__ */ jsxs("li", { children: [
                    /* @__PURE__ */ jsx(Check, { size: 14, className: `ts-check ts-check--${tool.themeColor}` }),
                    b
                  ] }, b)) })
                ] })
              ]
            },
            tool.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ts-right", children: /* @__PURE__ */ jsx("div", { className: "ts-sticky", children: /* @__PURE__ */ jsxs("div", { className: "ts-viewer", children: [
        /* @__PURE__ */ jsxs("div", { className: "ts-viewer-bar", children: [
          /* @__PURE__ */ jsxs("div", { className: "ts-viewer-dots", children: [
            /* @__PURE__ */ jsx("span", { style: { background: "#ef4444" } }),
            /* @__PURE__ */ jsx("span", { style: { background: "#eab308" } }),
            /* @__PURE__ */ jsx("span", { style: { background: "#22c55e" } })
          ] }),
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "ts-viewer-label",
              initial: { opacity: 0, y: 4 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -4 },
              transition: { duration: 0.2 },
              children: activeData.title
            },
            activeCard
          ) }),
          /* @__PURE__ */ jsxs("div", { className: `ts-viewer-status ts-viewer-status--${activeData.themeColor}`, children: [
            /* @__PURE__ */ jsx("span", { className: "ts-viewer-dot-live" }),
            "Live"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ts-viewer-body", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "ts-viewer-frame",
            initial: { opacity: 0, y: 14 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -14 },
            transition: { duration: 0.3, ease: "easeOut" },
            children: /* @__PURE__ */ jsx(activeData.Visual, {})
          },
          activeCard
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "ts-viewer-tabs", children: TOOLS_DATA$1.map((t, i) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `ts-tab ts-tab--${t.themeColor} ${activeCard === i ? "ts-tab--active" : ""}`,
            onClick: () => {
              setActiveCard(i);
              cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
            },
            "aria-label": `View ${t.title}`
          },
          t.id
        )) })
      ] }) }) })
    ] })
  ] });
}
const DISCOVERY_CARDS = {
  core: [
    {
      title: "Generative AI & RAG Agents",
      tagline: "Assistants grounded in your private data.",
      description: "Intelligent internal assistants and customer-facing chatbots that use Retrieval-Augmented Generation to provide accurate, hallucination-free answers based on your company's documents.",
      image: "/images/genai-rag.webp",
      link: "/solutions/core#gen-ai"
    },
    {
      title: "Data Engineering & Analytics",
      tagline: "Robust pipelines for real-time intelligence.",
      description: "We architect scalable data warehouses and automated ETL pipelines to ensure your business decisions are fueled by accurate, real-time, and organized data.",
      image: "/images/dataengineer.webp",
      link: "/solutions/core#data-engineering"
    },
    {
      title: "Workflow & Document Automation",
      tagline: "Eliminate manual data entry.",
      description: "Using NLP and document understanding, we automate complex workflows like invoice processing and reporting, freeing your team from manual drudgery.",
      image: "/images/ai-auto.webp",
      link: "/solutions/core#automation"
    },
    {
      title: "Predictive ML & Forecasting",
      tagline: "See the future with historical data.",
      description: "Custom machine learning models designed to forecast sales, detect anomalies, and predict customer churn, turning your historical data into future strategy.",
      image: "/images/machine-learning.webp",
      link: "/solutions/core#predictive-ml"
    },
    {
      title: "AI-Native Softwares",
      tagline: "Intelligence built into the core.",
      description: "Full-stack web and mobile applications where AI isn't an afterthought—it's the foundation. From vision-enabled tools to smart SaaS platforms.",
      image: "/images/ai-software.webp",
      link: "/solutions/core#software-engineering"
    }
  ],
  emerging: [
    {
      title: "Precision Healthcare & Diagnostics",
      tagline: "Faster diagnosis, better outcomes.",
      description: "AI-powered analysis of medical imaging and genomics to accelerate disease detection and drug discovery.",
      image: "/images/healthcare-ai.webp",
      link: "/solutions/emerging#healthcare"
    },
    {
      title: "Smart Agriculture Systems",
      tagline: "Maximize yield, minimize resources.",
      description: "Computer vision and predictive analytics that monitor crop health and automate irrigation for sustainable farming.",
      image: "/images/smart-agri.webp",
      link: "/solutions/emerging#agriculture"
    },
    {
      title: "Personalized Learning AI",
      tagline: "Education that adapts to you.",
      description: "Adaptive tutoring systems that customize curriculum paths and track student progress in real-time.",
      image: "/images/ai-learning.webp",
      link: "/solutions/emerging#learning"
    },
    {
      title: "Smart City Infrastructure",
      tagline: "Simulating tomorrow's cities today.",
      description: "Using Digital Twins to model traffic flow and zoning, designing more efficient and livable urban environments.",
      image: "/images/ai-infra.webp",
      link: "/solutions/emerging#smart-city"
    },
    {
      title: "Energy Grid Optimization",
      tagline: "Balancing power with prediction.",
      description: "Real-time forecasting of renewable energy output and consumption spikes to ensure grid stability.",
      image: "/images/ai-energy.webp",
      link: "/solutions/emerging#energy"
    },
    {
      title: "Disaster & Climate Monitoring",
      tagline: "Predicting risks before they happen.",
      description: "Satellite imagery analysis for early detection of wildfires, floods, and critical environmental changes.",
      image: "/images/ai-disaster.webp",
      link: "/solutions/emerging#disaster"
    }
  ],
  vision: [
    {
      title: "Embodied AI Robotics",
      tagline: "Intelligence that moves.",
      description: "Integrating Large Vision-Language Models into physical hardware to create robots that can adapt, learn, and manipulate objects in unstructured real-world environments.",
      image: "/images/ai-robot.webp",
      link: "/solutions/vision#embodied-ai"
    },
    {
      title: "Autonomous Agent Swarms",
      tagline: "The Hive Mind architecture.",
      description: "Decentralized systems where thousands of specialized micro-agents collaborate to solve massive, complex logistics and computational problems without a single point of failure.",
      image: "/images/ai-swarm.webp",
      link: "/solutions/vision#swarms"
    },
    {
      title: "Generative World Simulators",
      tagline: "Training in the Digital Twin.",
      description: "High-fidelity physics simulators that allow AI to train for millions of hours in synthetic reality before ever touching expensive physical hardware.",
      image: "/images/ai-world-sim.webp",
      link: "/solutions/vision#simulators"
    },
    {
      title: "Neuro-Symbolic Reasoning",
      tagline: "Creativity meets Logic.",
      description: "Hybrid AI architectures combining the flexibility of Neural Networks with the mathematical certainty of Symbolic Logic to eliminate hallucinations in high-stakes fields.",
      image: "/images/ai-brain.webp",
      link: "/solutions/vision#neuro-symbolic"
    },
    {
      title: "Brain-Computer Interfaces",
      tagline: "Direct intention-to-action.",
      description: "Researching non-invasive neural interfaces (BCI) to enable direct thought-to-text input and high-speed industrial control via cognitive signals.",
      image: "/images/brain-computer.webp",
      link: "/solutions/vision#bci"
    }
  ]
};
function DiscoverySlider() {
  const [activeTab, setActiveTab] = useState("core");
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -580 : 580,
        behavior: "smooth"
      });
    }
  };
  const currentData = DISCOVERY_CARDS[activeTab];
  return /* @__PURE__ */ jsxs("section", { ref: sectionRef, className: "discovery-section", children: [
    /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: sectionRef, scheme: "dark" }),
    /* @__PURE__ */ jsxs("div", { className: "discovery-container", children: [
      /* @__PURE__ */ jsxs("div", { className: "discovery-header", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "discovery-title", children: "Explore Our Capabilities" }),
          /* @__PURE__ */ jsx("div", { className: "tab-container", children: ["core", "emerging", "vision"].map((tab) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setActiveTab(tab);
                if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
              },
              className: `tab-btn ${activeTab === tab ? "active" : ""}`,
              "data-theme": tab,
              children: tab
            },
            tab
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "nav-arrows desktop-only", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => scroll("left"), className: "arrow-btn", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 }) }),
          /* @__PURE__ */ jsx("button", { onClick: () => scroll("right"), className: "arrow-btn", children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "slider-track", ref: scrollContainerRef, children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: currentData.map((card, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "discovery-card",
          "data-theme": activeTab,
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -40 },
          transition: { duration: 0.38, delay: index * 0.055 },
          whileHover: "hover",
          children: [
            card.image ? /* @__PURE__ */ jsx(
              motion.img,
              {
                src: card.image,
                alt: card.title,
                className: "card-bg-img",
                variants: { hover: { scale: 1.07 } },
                transition: { duration: 0.7, ease: "easeOut" }
              }
            ) : /* @__PURE__ */ jsx("div", { className: "card-bg-img", style: { background: "#080d1e", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Image, { color: "#1e293b", size: 64 }) }),
            /* @__PURE__ */ jsx("div", { className: "card-field", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("div", { className: "card-gradient" }),
            /* @__PURE__ */ jsx("div", { className: "card-theme-glow", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("div", { className: "card-accent-bar", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "card-num", "aria-hidden": "true", children: String(index + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsx("div", { className: "card-content", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: { hover: { y: -7 } },
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "card-tagline", children: [
                    /* @__PURE__ */ jsx("span", { className: "card-tagline-dot", "aria-hidden": "true" }),
                    card.tagline
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "card-title", children: card.title }),
                  /* @__PURE__ */ jsx("p", { className: "card-desc", children: card.description }),
                  /* @__PURE__ */ jsxs("a", { href: card.link, className: "card-explore-link", children: [
                    "Explore ",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 12, strokeWidth: 2.5 })
                  ] })
                ]
              }
            ) })
          ]
        },
        `${activeTab}-${index}`
      )) }) }),
      /* @__PURE__ */ jsxs("div", { className: "nav-arrows mobile-only", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => scroll("left"), className: "arrow-btn", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 18 }) }),
        /* @__PURE__ */ jsx("button", { onClick: () => scroll("right"), className: "arrow-btn", children: /* @__PURE__ */ jsx(ChevronRight, { size: 18 }) })
      ] })
    ] })
  ] });
}
const COMMITMENTS = [
  {
    key: "nolockin",
    number: "01",
    title: "No lock-in, ever.",
    short: "Your data, your exit",
    description: "On any SaaS plan, you can export your complete data at any time in standard formats. Cancel anytime. We don't hold your data hostage, charge exit fees, or make migration painful.",
    detail: "For custom AI builds, full source code and model weights transfer to you at delivery. No ongoing licence dependency unless you want managed hosting."
  },
  {
    key: "physician",
    number: "02",
    title: "AI assists. Humans decide.",
    short: "Human-in-the-loop",
    description: "In every system we build for healthcare, finance, or compliance — no inference reaches a user without a qualified human in the review chain. Hard-locked at the architecture level, not a policy afterthought.",
    detail: "MediSwarm is architecturally incapable of passing a diagnostic output to a patient without licensed doctor sign-off."
  },
  {
    key: "transparency",
    number: "03",
    title: "No black boxes in production.",
    short: "Explainable outputs",
    description: "Every AI decision in a compliance-critical system includes a traceable reasoning path. If a system can't explain its output in plain terms, it doesn't go to production.",
    detail: "We instrument all AI outputs with confidence scores, data lineage, and audit logs — queryable by your compliance or finance team at any time."
  },
  {
    key: "data",
    number: "04",
    title: "Your data never trains our models.",
    short: "Data isolation",
    description: "Customer data is never used to improve our general models, shared with third parties, or retained beyond the agreed window. Every tenant runs on isolated infrastructure.",
    detail: "We support on-premise and air-gapped deployments for clients in healthcare, defense, and financial services who require zero data egress."
  },
  {
    key: "bias",
    number: "05",
    title: "We tell you what the system gets wrong.",
    short: "Honest limitations",
    description: "Before any model ships, we run adversarial testing, edge-case stress tests, and demographic parity checks. We document the failure modes — and we tell you about them upfront.",
    detail: "Known limitations are disclosed in plain language in every handover. Not buried in documentation. Not omitted because it's uncomfortable."
  },
  {
    key: "compliance",
    number: "06",
    title: "Built for a borderless regulatory reality.",
    short: "Global compliance",
    description: "GDPR, SOC 2, HIPAA, and complex regional data frameworks — built in from day one, not retrofitted at launch when it costs ten times more to fix.",
    detail: "We track regulatory shifts across jurisdictions and verticals. When global or local laws change, your system adapts seamlessly — included in your plan."
  }
];
const fade = {
  enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } }
};
function EthicsSection() {
  const [activeKey, setActiveKey] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const activeItem = COMMITMENTS.find((c) => c.key === activeKey);
  const sectionRef = useRef(null);
  return /* @__PURE__ */ jsxs("section", { ref: sectionRef, style: { ...S.section, position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: sectionRef, scheme: "light" }),
    /* @__PURE__ */ jsxs("div", { style: { ...S.inner, position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsxs("div", { style: S.header, children: [
        /* @__PURE__ */ jsxs("div", { style: S.eyebrow, children: [
          /* @__PURE__ */ jsx("span", { style: S.eyebrowLine }),
          /* @__PURE__ */ jsx("span", { style: S.eyebrowText, children: "How we operate" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { style: S.headline, children: [
          "Six commitments we make",
          /* @__PURE__ */ jsx("br", {}),
          "to every client."
        ] }),
        /* @__PURE__ */ jsx("p", { style: S.headlineSub, children: "Not a values statement. A list of things you can hold us to." })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: S.desktopBody, className: "ethics-desktop", children: [
        /* @__PURE__ */ jsx("div", { style: S.grid, children: COMMITMENTS.map((item2) => {
          const isActive = activeKey === item2.key;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              style: { ...S.tile, ...isActive ? S.tileActive : {} },
              onMouseEnter: () => setActiveKey(item2.key),
              onMouseLeave: () => setActiveKey(null),
              children: [
                /* @__PURE__ */ jsx("span", { style: { ...S.tileNum, ...isActive ? S.tileNumActive : {} }, children: item2.number }),
                /* @__PURE__ */ jsx("span", { style: S.tileShort, children: item2.short }),
                /* @__PURE__ */ jsx("span", { style: { ...S.tileTitle, ...isActive ? S.tileTitleActive : {} }, children: item2.title }),
                /* @__PURE__ */ jsx("div", { style: {
                  ...S.tileBar,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scaleX(1)" : "scaleX(0)"
                } })
              ]
            },
            item2.key
          );
        }) }),
        /* @__PURE__ */ jsx("div", { style: S.panel, children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: !activeItem ? /* @__PURE__ */ jsxs(motion.div, { variants: fade, initial: "exit", animate: "enter", exit: "exit", style: S.panelDefault, children: [
          /* @__PURE__ */ jsx("div", { style: S.pIcon, children: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "#94a3b8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }) }),
          /* @__PURE__ */ jsx("p", { style: S.pHint, children: "Hover any commitment to read the detail." })
        ] }, "default") : /* @__PURE__ */ jsxs(motion.div, { variants: fade, initial: "exit", animate: "enter", exit: "exit", style: S.panelContent, children: [
          /* @__PURE__ */ jsx("span", { style: S.pNum, children: activeItem.number }),
          /* @__PURE__ */ jsx("h3", { style: S.pTitle, children: activeItem.title }),
          /* @__PURE__ */ jsx("p", { style: S.pDesc, children: activeItem.description }),
          /* @__PURE__ */ jsx("div", { style: S.pDivider }),
          /* @__PURE__ */ jsx("p", { style: S.pDetail, children: activeItem.detail })
        ] }, activeItem.key) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: S.mobileList, className: "ethics-mobile", children: COMMITMENTS.map((item2, i) => {
        const isOpen = expanded === item2.key;
        const isLast = i === COMMITMENTS.length - 1;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            style: { ...S.accordionWrap, ...isLast ? {} : S.accordionBorder },
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  style: { ...S.accordionBtn, ...isOpen ? S.accordionBtnOpen : {} },
                  onClick: () => setExpanded(isOpen ? null : item2.key),
                  children: [
                    /* @__PURE__ */ jsxs("div", { style: S.accordionLeft, children: [
                      /* @__PURE__ */ jsx("span", { style: {
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: isOpen ? "#3b82f6" : "#cbd5e1",
                        fontFamily: "monospace",
                        flexShrink: 0
                      }, children: item2.number }),
                      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }, children: [
                        /* @__PURE__ */ jsx("span", { style: { fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94a3b8" }, children: item2.short }),
                        /* @__PURE__ */ jsx("span", { style: { fontSize: 14, fontWeight: 600, color: isOpen ? "#0f172a" : "#475569", lineHeight: 1.35 }, children: item2.title })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#94a3b8",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        style: { flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" },
                        children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
                  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
                  style: { overflow: "hidden" },
                  children: /* @__PURE__ */ jsxs("div", { style: S.accordionBody, children: [
                    /* @__PURE__ */ jsx("p", { style: S.pDesc, children: item2.description }),
                    /* @__PURE__ */ jsx("div", { style: S.pDivider }),
                    /* @__PURE__ */ jsx("p", { style: S.pDetail, children: item2.detail })
                  ] })
                },
                "body"
              ) })
            ]
          },
          item2.key
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
                @media (min-width: 768px) { .ethics-mobile { display: none !important; } }
                @media (max-width: 767px) { .ethics-desktop { display: none !important; } }
            ` })
  ] });
}
const S = {
  section: {
    background: "#fafafa",
    borderTop: "1px solid #f1f5f9",
    borderBottom: "1px solid #f1f5f9",
    padding: "80px 0",
    fontFamily: "'Inter', system-ui, sans-serif"
  },
  inner: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" },
  header: { maxWidth: 600, marginBottom: 48 },
  eyebrow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 18 },
  eyebrowLine: { display: "block", width: 28, height: 1, background: "#cbd5e1" },
  eyebrowText: { fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8" },
  headline: { fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.15, color: "#0f172a", letterSpacing: "-0.03em", margin: "0 0 12px" },
  headlineSub: { fontSize: 14.5, color: "#94a3b8", margin: 0, fontStyle: "italic" },
  // Desktop
  desktopBody: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#e2e8f0", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden" },
  tile: { background: "#fff", padding: "20px 18px 16px", display: "flex", flexDirection: "column", gap: 3, cursor: "default", position: "relative", overflow: "hidden", transition: "background 0.18s" },
  tileActive: { background: "#f8fafc" },
  tileNum: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#cbd5e1", transition: "color 0.18s", fontFamily: "monospace" },
  tileNumActive: { color: "#3b82f6" },
  tileShort: { fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 2 },
  tileTitle: { fontSize: 13, fontWeight: 600, color: "#64748b", lineHeight: 1.45, transition: "color 0.18s" },
  tileTitleActive: { color: "#0f172a" },
  tileBar: { position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "#3b82f6", transformOrigin: "left", transition: "opacity 0.2s, transform 0.25s ease" },
  panel: { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "32px 28px", minHeight: 280, display: "flex", alignItems: "stretch" },
  panelDefault: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, width: "100%" },
  panelContent: { display: "flex", flexDirection: "column", gap: 10, width: "100%" },
  pIcon: { width: 48, height: 48, borderRadius: 10, background: "#f8fafc", border: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" },
  pHint: { fontSize: 12, color: "#cbd5e1", textAlign: "center", margin: 0, maxWidth: 180, lineHeight: 1.6 },
  pNum: { fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#3b82f6", fontFamily: "monospace" },
  pTitle: { fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.3, margin: "0 0 2px" },
  pDesc: { fontSize: 14, lineHeight: 1.75, color: "#475569", margin: 0 },
  pDivider: { height: 1, background: "#f1f5f9", margin: "6px 0" },
  pDetail: { fontSize: 12.5, lineHeight: 1.7, color: "#94a3b8", margin: 0, fontStyle: "italic" },
  // Mobile accordion
  mobileList: { border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden" },
  accordionWrap: {},
  accordionBorder: { borderBottom: "1px solid #f1f5f9" },
  accordionBtn: {
    width: "100%",
    background: "#fff",
    border: "none",
    padding: "16px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    cursor: "pointer",
    transition: "background 0.15s",
    textAlign: "left"
  },
  accordionBtnOpen: { background: "#f8fafc" },
  accordionLeft: { display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 },
  accordionBody: { padding: "4px 16px 20px 40px", background: "#f8fafc", display: "flex", flexDirection: "column", gap: 8 }
};
const TESTIMONIALS = [
  {
    quote: "We replaced three separate finance tools with Finance Manager. The AI cash-flow forecasting alone has saved us from two near-miss crunch situations. Our team actually uses it — which says everything.",
    name: "Priya R.",
    role: "CFO, D2C Health Brand · Series A",
    initials: "PR",
    product: "Finance Manager",
    accent: "#3b82f6",
    accentRgb: "59,130,246"
  },
  {
    quote: "The RAG agent Entropic built processes 14,000 policy documents our teams used to search manually. Response quality beats our senior analysts on routine queries, and every answer cites its source.",
    name: "Karan M.",
    role: "VP Engineering, InsurTech Startup",
    initials: "KM",
    product: "Custom RAG System",
    accent: "#8b5cf6",
    accentRgb: "139,92,246"
  },
  {
    quote: "CRM Portal gave our sales team deal-stage AI nudges that match how we actually sell. Follow-up reminders went from being ignored to being acted on. Pipeline visibility is finally real-time.",
    name: "Neha S.",
    role: "Head of Sales, B2B SaaS Company",
    initials: "NS",
    product: "CRM Portal",
    accent: "#10b981",
    accentRgb: "16,185,129"
  },
  {
    quote: "The workflow automation they built for our procurement cycle cut PO processing time from four days to six hours. What impressed us most — they told us exactly where the model would be uncertain before we went live.",
    name: "Arjun T.",
    role: "COO, Manufacturing Firm · 800+ employees",
    initials: "AT",
    product: "Workflow Automation",
    accent: "#f59e0b",
    accentRgb: "245,158,11"
  }
];
const onCardMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(2) + "%");
  e.currentTarget.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(2) + "%");
};
const onCardEnter = (e) => e.currentTarget.style.setProperty("--go", "1");
const onCardLeave = (e) => e.currentTarget.style.setProperty("--go", "0");
function TestimonialsSection() {
  const sectionRef = useRef(null);
  const smokeRef = useRef(null);
  const onMouseMove = (e) => {
    if (!smokeRef.current) return;
    const rc = e.currentTarget.getBoundingClientRect();
    smokeRef.current.style.setProperty("--sx", ((e.clientX - rc.left) / rc.width * 100).toFixed(2) + "%");
    smokeRef.current.style.setProperty("--sy", ((e.clientY - rc.top) / rc.height * 100).toFixed(2) + "%");
    smokeRef.current.style.opacity = "1";
  };
  const onMouseLeave = () => {
    if (smokeRef.current) smokeRef.current.style.opacity = "0";
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "tst-section",
      onMouseMove,
      onMouseLeave,
      children: [
        /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: sectionRef, scheme: "dark" }),
        /* @__PURE__ */ jsx("div", { ref: smokeRef, className: "tst-smoke", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "tst-content", children: [
          /* @__PURE__ */ jsxs("div", { className: "tst-header", children: [
            /* @__PURE__ */ jsx("span", { className: "tst-eyebrow", children: "Client Results" }),
            /* @__PURE__ */ jsxs("h2", { className: "tst-headline", children: [
              "Software that ships —",
              /* @__PURE__ */ jsx("br", {}),
              "and ",
              /* @__PURE__ */ jsx("em", { children: "keeps working." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "tst-grid", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxs(
            "article",
            {
              className: "tst-card",
              style: { "--accent": t.accent, "--accent-rgb": t.accentRgb },
              onMouseMove: onCardMove,
              onMouseEnter: onCardEnter,
              onMouseLeave: onCardLeave,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "tst-card-top", children: [
                  /* @__PURE__ */ jsxs("span", { className: "tst-product-pill", children: [
                    /* @__PURE__ */ jsx("span", { className: "tst-product-dot" }),
                    t.product
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "tst-stars", "aria-label": "5 out of 5 stars", children: "★★★★★".split("").map((s, i) => /* @__PURE__ */ jsx("span", { className: "tst-star", "aria-hidden": "true", children: s }, i)) })
                ] }),
                /* @__PURE__ */ jsx("blockquote", { className: "tst-quote", children: t.quote }),
                /* @__PURE__ */ jsxs("footer", { className: "tst-author", children: [
                  /* @__PURE__ */ jsx("div", { className: "tst-avatar", "aria-hidden": "true", children: t.initials }),
                  /* @__PURE__ */ jsxs("div", { className: "tst-meta", children: [
                    /* @__PURE__ */ jsx("span", { className: "tst-name", children: t.name }),
                    /* @__PURE__ */ jsx("span", { className: "tst-role", children: t.role })
                  ] })
                ] })
              ]
            },
            t.name
          )) })
        ] })
      ]
    }
  );
}
const TOOLS_DATA = [
  { name: "Python", icon: Code },
  { name: "TypeScript", icon: Terminal },
  { name: "AWS Cloud", icon: Cloud },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Layers },
  { name: "OpenAI API", icon: Cpu },
  { name: "Vercel", icon: Globe },
  { name: "Redis", icon: Zap },
  { name: "Auth0", icon: Shield },
  { name: "Node.js", icon: Server },
  { name: "GraphQL", icon: Wifi }
];
function Tools() {
  return /* @__PURE__ */ jsxs("section", { className: "tools-section", children: [
    /* @__PURE__ */ jsx("div", { className: "tools-header", children: /* @__PURE__ */ jsx("h3", { className: "tools-title", children: "Powered by Modern Infrastructure" }) }),
    /* @__PURE__ */ jsxs("div", { className: "marquee-wrapper", children: [
      /* @__PURE__ */ jsx("div", { className: "marquee-track", children: TOOLS_DATA.map((tool, index) => /* @__PURE__ */ jsx(ToolItem, { tool }, `a-${index}`)) }),
      /* @__PURE__ */ jsx("div", { className: "marquee-track", "aria-hidden": "true", children: TOOLS_DATA.map((tool, index) => /* @__PURE__ */ jsx(ToolItem, { tool }, `b-${index}`)) })
    ] })
  ] });
}
function ToolItem({ tool }) {
  const Icon = tool.icon;
  return /* @__PURE__ */ jsxs("div", { className: "tool-item", children: [
    /* @__PURE__ */ jsx(Icon, { size: 24, className: "tool-icon", strokeWidth: 1.5 }),
    /* @__PURE__ */ jsx("span", { className: "tool-name", children: tool.name })
  ] });
}
const meta$7 = () => [{
  title: "Entropic System | Enterprise Software Solutions"
}, {
  name: "description",
  content: "Entropic System builds intelligence-grade software — enterprise RAG systems, workflow automation, predictive ML, and production SaaS that reason, adapt, and evolve for your business."
}, {
  tagName: "link",
  rel: "canonical",
  href: "https://www.entropicsystem.com/"
}, {
  property: "og:title",
  content: "Entropic System | Enterprise Software Solutions"
}, {
  property: "og:url",
  content: "https://www.entropicsystem.com/"
}];
const home = UNSAFE_withComponentProps(function HomeRoute() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx(MissionSection, {}), /* @__PURE__ */ jsx(Ticker, {}), /* @__PURE__ */ jsx(VideoInterlude, {}), /* @__PURE__ */ jsx(SaaSSection, {}), /* @__PURE__ */ jsx(ToolsSection, {}), /* @__PURE__ */ jsx(DiscoverySlider, {}), /* @__PURE__ */ jsx(EthicsSection, {}), /* @__PURE__ */ jsx(TestimonialsSection, {}), /* @__PURE__ */ jsx(Tools, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const LAYERS$2 = [
  {
    key: "core",
    label: "Core",
    title: "Core Solutions",
    description: "Production-grade AI and software foundations — enterprise RAG, automation, and data engineering built to ship.",
    href: "/solutions/core",
    accent: "#3b82f6",
    Icon: Layers
  },
  {
    key: "emerging",
    label: "Emerging",
    title: "Emerging Solutions",
    description: "Next-wave capabilities — custom LLM development, on-premise AI, and GPU orchestration for teams pushing ahead.",
    href: "/solutions/emerging",
    accent: "#10b981",
    Icon: Cpu
  },
  {
    key: "vision",
    label: "Vision",
    title: "Vision Solutions",
    description: "Frontier R&D — predictive systems and autonomous workflows that define what's next for your industry.",
    href: "/solutions/vision",
    accent: "#8b5cf6",
    Icon: Telescope
  }
];
const PRINCIPLES = [
  {
    index: "01",
    title: "Production first",
    text: "We design for the moment a demo becomes a dependency — monitoring, fallbacks, and the unglamorous decisions that keep a system alive at 2 a.m."
  },
  {
    index: "02",
    title: "No black boxes",
    text: "Every system we ship is explainable end to end: the model, the data, the decision path. You can audit it, extend it, and never wonder what's happening underneath."
  },
  {
    index: "03",
    title: "Compounding by design",
    text: "Core, Emerging, and Vision aren't three products. They're one architecture — what you build today becomes the foundation for what you build next."
  }
];
const fadeUp$1 = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
function AboutSection() {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const principlesRef = useRef(null);
  const layersRef = useRef(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "ab-hero", children: [
      /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: heroRef, scheme: "dark" }),
      /* @__PURE__ */ jsx("div", { className: "ab-glow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "ab-hero-inner",
          variants: stagger,
          initial: "hidden",
          animate: "visible",
          children: [
            /* @__PURE__ */ jsx(motion.span, { variants: fadeUp$1, className: "ab-eyebrow", children: "About Entropic System" }),
            /* @__PURE__ */ jsxs(motion.h1, { variants: fadeUp$1, className: "ab-headline", children: [
              "We build intelligence",
              /* @__PURE__ */ jsx("br", {}),
              "that ships — and stays shipped."
            ] }),
            /* @__PURE__ */ jsx(motion.p, { variants: fadeUp$1, className: "ab-lede", children: "Entropic System designs and ships production AI — retrieval systems, workflow automation, predictive models, and the SaaS products that run on top of them. We measure success after launch, not at the demo." }),
            /* @__PURE__ */ jsx(motion.div, { variants: fadeUp$1, children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "ab-link", children: [
              "Talk to our engineers ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { ref: principlesRef, className: "ab-principles", style: { position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: principlesRef, scheme: "dark" }),
      /* @__PURE__ */ jsxs("div", { className: "ab-principles-inner", children: [
        /* @__PURE__ */ jsx(
          motion.span,
          {
            variants: fadeUp$1,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.6 },
            className: "ab-eyebrow",
            children: "How we build"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "ab-principle-list", children: PRINCIPLES.map((p) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "ab-principle-row",
            variants: fadeUp$1,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.4 },
            children: [
              /* @__PURE__ */ jsx("span", { className: "ab-principle-index", children: p.index }),
              /* @__PURE__ */ jsx("h3", { className: "ab-principle-title", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "ab-principle-text", children: p.text })
            ]
          },
          p.index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { ref: layersRef, className: "ab-layers", style: { position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: layersRef, scheme: "dark" }),
      /* @__PURE__ */ jsxs("div", { className: "ab-layers-inner", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "ab-layers-header",
            variants: fadeUp$1,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.6 },
            children: [
              /* @__PURE__ */ jsx("span", { className: "ab-eyebrow", children: "What we build" }),
              /* @__PURE__ */ jsx("h2", { className: "ab-layers-title", children: "Three layers. One architecture." }),
              /* @__PURE__ */ jsx("p", { className: "ab-layers-sub", children: "Every engagement plugs into one of three layers — each engineered to work with the others as your needs grow." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "ab-layers-grid",
            variants: stagger,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.2 },
            children: LAYERS$2.map(({ key, label, title, description, href, accent, Icon }) => /* @__PURE__ */ jsx(motion.div, { variants: fadeUp$1, children: /* @__PURE__ */ jsxs(Link, { to: href, className: "ab-layer-card", style: { "--layer-accent": accent }, children: [
              /* @__PURE__ */ jsx(Icon, { size: 20, className: "ab-layer-icon" }),
              /* @__PURE__ */ jsx("span", { className: "ab-layer-label", children: label }),
              /* @__PURE__ */ jsx("h3", { className: "ab-layer-title", children: title }),
              /* @__PURE__ */ jsx("p", { className: "ab-layer-desc", children: description }),
              /* @__PURE__ */ jsxs("span", { className: "ab-layer-link", children: [
                "Explore ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
              ] })
            ] }) }, key))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { ref: ctaRef, className: "ab-cta", style: { position: "relative", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: ctaRef, scheme: "dark" }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "ab-cta-inner",
          variants: stagger,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.6 },
          children: [
            /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp$1, children: "Have something worth building?" }),
            /* @__PURE__ */ jsx(motion.p, { variants: fadeUp$1, children: "Tell us what's slowing your team down. We'll tell you whether AI is actually the answer — sometimes it isn't." }),
            /* @__PURE__ */ jsx(motion.div, { variants: fadeUp$1, children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "ab-link", children: [
              "Start a conversation ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }) })
          ]
        }
      )
    ] })
  ] });
}
const meta$6 = () => [{
  title: "About Us | Entropic System"
}, {
  name: "description",
  content: "Entropic System builds intelligence-grade software — enterprise RAG systems, workflow automation, predictive ML, and production SaaS engineered to ship and keep working."
}, {
  tagName: "link",
  rel: "canonical",
  href: "https://www.entropicsystem.com/about"
}, {
  property: "og:title",
  content: "About Us | Entropic System"
}, {
  property: "og:description",
  content: "We build intelligence-grade software that ships — and keeps working. Meet the company behind Entropic System's Core, Emerging, and Vision solution layers."
}, {
  property: "og:url",
  content: "https://www.entropicsystem.com/about"
}];
const about = UNSAFE_withComponentProps(function AboutRoute() {
  return /* @__PURE__ */ jsx(AboutSection, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const supabaseUrl = "https://gtojphjfrhneknegwxhh.supabase.co";
const supabaseKey = "sb_publishable_mnt7VgUsX2O4HwlDnwAnYQ_E0bXMRfm";
const emailServiceId = "service_m9cvkso";
const emailTemplateId = "template_eyenrt2";
const emailPublicKey = "8FsfGDAbepiPj2ZWj";
let _supabase = null;
function getSupabase() {
  if (_supabase) return _supabase;
  _supabase = createClient(supabaseUrl, supabaseKey);
  return _supabase;
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 254, details: 4e3 };
const PROJECT_TYPES = [
  {
    group: "Our SaaS Products",
    options: [
      "Finance Manager Software",
      "CRM Portal Software",
      "School Manager Software",
      "Inventory Manager Software",
      "Clinic Manager Software",
      "Kitchen Display System Software"
    ]
  },
  {
    group: "AI & Automation Services",
    options: [
      "AI Agents & RAG Systems",
      "Custom LLM Development & Fine-Tuning",
      "Offline / On-Premise AI Deployment",
      "AI Infrastructure & GPU Orchestration",
      "Workflow & Document Automation",
      "Data Engineering & Pipelines",
      "Predictive ML & Forecasting",
      "AI Audit & Compliance Strategy"
    ]
  },
  {
    group: "Other",
    options: [
      "Custom Software (Web / Mobile)",
      "General Consulting",
      "Something else — I'll describe it below"
    ]
  }
];
const EMPTY_FORM = { name: "", email: "", type: PROJECT_TYPES[0].options[0], details: "", company: "" };
function ContactPage() {
  const formId = useId();
  const openedAtRef = useRef(0);
  const heroRef = useRef(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  useEffect(() => {
    openedAtRef.current = Date.now();
  }, []);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const resetForm = () => {
    openedAtRef.current = Date.now();
    setFormData(EMPTY_FORM);
    setStep(1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.company.trim() !== "") {
      setStep(2);
      return;
    }
    if (Date.now() - openedAtRef.current < 2e3) {
      setStep(2);
      return;
    }
    const name = formData.name.trim();
    const email = formData.email.trim();
    const details = formData.details.trim();
    if (!name || !email || !details) {
      alert("Please fill in all fields.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (name.length > LIMITS.name || email.length > LIMITS.email || details.length > LIMITS.details) {
      alert("One of the fields is too long. Please shorten it and try again.");
      return;
    }
    setIsSubmitting(true);
    const supabase = getSupabase();
    if (!supabase) {
      alert("System error: database configuration missing.");
      setIsSubmitting(false);
      return;
    }
    try {
      const { error: dbError } = await supabase.from("leads").insert([{
        name,
        email,
        project_type: formData.type,
        details,
        source: "contact_page"
      }]);
      if (dbError) throw new Error("Database error: " + dbError.message);
      await send(
        emailServiceId,
        emailTemplateId,
        { name, email, type: formData.type, details },
        emailPublicKey
      );
      setStep(2);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Error: " + (error.message || "Something went wrong. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "ct-hero", children: [
      /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: heroRef, scheme: "dark" }),
      /* @__PURE__ */ jsx("div", { className: "ct-glow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "ct-hero-inner", children: [
        /* @__PURE__ */ jsx("span", { className: "ct-eyebrow", children: "Contact" }),
        /* @__PURE__ */ jsx("h1", { className: "ct-headline", children: "Let's build something worth shipping." }),
        /* @__PURE__ */ jsx("p", { className: "ct-lede", children: "Tell us what you're working on — whether it's one of our SaaS products or a custom AI system. We read every message ourselves and reply within 24 hours." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "ct-main", children: /* @__PURE__ */ jsxs("div", { className: "ct-main-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "ct-info", children: [
        /* @__PURE__ */ jsxs("div", { className: "ct-info-item", children: [
          /* @__PURE__ */ jsx(Mail, { size: 18, className: "ct-info-icon" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Email us directly" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:entropicsys@gmail.com", children: "entropicsys@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ct-info-item", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 18, className: "ct-info-icon" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "WhatsApp" }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/917060816597", target: "_blank", rel: "noopener noreferrer", children: "+91 70608 16597" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ct-info-item", children: [
          /* @__PURE__ */ jsx(Clock, { size: 18, className: "ct-info-icon" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Response time" }),
            /* @__PURE__ */ jsx("p", { children: "Within 24 hours, every business day." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "ct-info-note", children: "The more context you share — what you're building, your timeline, your team size — the faster we can give you a useful answer." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ct-form-card", children: step === 1 ? /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "ct-honeypot", children: /* @__PURE__ */ jsxs("label", { children: [
          "Company (leave this empty)",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "company",
              tabIndex: -1,
              autoComplete: "off",
              value: formData.company,
              onChange: handleChange
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "ct-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "ct-group", children: [
            /* @__PURE__ */ jsx("label", { className: "ct-label", htmlFor: `${formId}-name`, children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: `${formId}-name`,
                name: "name",
                type: "text",
                placeholder: "Arjun Mehta",
                value: formData.name,
                onChange: handleChange,
                className: "ct-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ct-group", children: [
            /* @__PURE__ */ jsx("label", { className: "ct-label", htmlFor: `${formId}-email`, children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: `${formId}-email`,
                name: "email",
                type: "email",
                placeholder: "arjun@company.com",
                value: formData.email,
                onChange: handleChange,
                className: "ct-input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ct-group", children: [
          /* @__PURE__ */ jsx("label", { className: "ct-label", htmlFor: `${formId}-type`, children: "I'm interested in" }),
          /* @__PURE__ */ jsxs("div", { className: "ct-select-wrap", children: [
            /* @__PURE__ */ jsx(
              "select",
              {
                id: `${formId}-type`,
                name: "type",
                value: formData.type,
                onChange: handleChange,
                className: "ct-select",
                children: PROJECT_TYPES.map((group) => /* @__PURE__ */ jsx("optgroup", { label: group.group, children: group.options.map((opt) => /* @__PURE__ */ jsx("option", { value: opt, children: opt }, opt)) }, group.group))
              }
            ),
            /* @__PURE__ */ jsx(ChevronDown, { size: 14, className: "ct-select-arrow" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ct-group", children: [
          /* @__PURE__ */ jsx("label", { className: "ct-label", htmlFor: `${formId}-details`, children: "Tell us more" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: `${formId}-details`,
              name: "details",
              placeholder: "Describe your use case, team size, timeline, or any questions you have...",
              value: formData.details,
              onChange: handleChange,
              className: "ct-textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: isSubmitting, className: "ct-submit", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { size: 16, className: "ct-spin" }),
          " Sending…"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Send message ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "ct-privacy-note", children: "Your information is never shared with third parties." })
      ] }) : (
        /* ─── SUCCESS ─── */
        /* @__PURE__ */ jsxs("div", { className: "ct-success", children: [
          /* @__PURE__ */ jsx("div", { className: "ct-success-icon", children: /* @__PURE__ */ jsx(CheckCircle, { size: 26 }) }),
          /* @__PURE__ */ jsx("h3", { children: "Message received" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Thanks, ",
            formData.name,
            ". We've logged your interest in",
            " ",
            /* @__PURE__ */ jsx("strong", { children: formData.type }),
            " and will be in touch within 24 hours."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ct-success-actions", children: [
            /* @__PURE__ */ jsx("button", { className: "ct-success-btn", onClick: resetForm, children: "Send another message" }),
            /* @__PURE__ */ jsxs(Link, { to: "/", className: "ct-link", children: [
              "Back to home ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] })
          ] })
        ] })
      ) })
    ] }) })
  ] });
}
const meta$5 = () => [{
  title: "Contact | Entropic System"
}, {
  name: "description",
  content: "Tell Entropic System what you're building — one of our SaaS products or a custom AI system. We read every message ourselves and reply within 24 hours."
}, {
  tagName: "link",
  rel: "canonical",
  href: "https://www.entropicsystem.com/contact"
}, {
  property: "og:title",
  content: "Contact | Entropic System"
}, {
  property: "og:description",
  content: "Tell us what you're working on. We read every message ourselves and reply within 24 hours."
}, {
  property: "og:url",
  content: "https://www.entropicsystem.com/contact"
}];
const contact = UNSAFE_withComponentProps(function ContactRoute() {
  return /* @__PURE__ */ jsx(ContactPage, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "lg-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "lg-glow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "lg-hero-inner", children: [
        /* @__PURE__ */ jsx("span", { className: "lg-eyebrow", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("h1", { className: "lg-headline", children: "How we handle your information." }),
        /* @__PURE__ */ jsx("p", { className: "lg-lede", children: "This policy explains what we collect when you use this website or get in touch with us, why we collect it, who we share it with, and the choices you have." }),
        /* @__PURE__ */ jsxs("span", { className: "lg-updated", children: [
          /* @__PURE__ */ jsx("strong", { children: "Last updated:" }),
          " 6 June 2026  ·  ",
          /* @__PURE__ */ jsx("strong", { children: "Effective:" }),
          " 6 June 2026"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg-draft-notice", children: /* @__PURE__ */ jsxs("div", { className: "lg-draft-notice-inner", children: [
      /* @__PURE__ */ jsx(AlertTriangle, { size: 18, className: "lg-draft-notice-icon" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "This is a draft policy and a starting template — not a final, lawyer-reviewed document." }),
        " Several details below (registered entity name, business address, Grievance Officer identity, and jurisdiction-specific clauses) are marked as placeholders and must be completed and reviewed by a qualified lawyer in your jurisdiction before this page is treated as binding or relied upon for compliance."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "lg-body", children: /* @__PURE__ */ jsxs("div", { className: "lg-body-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "1. Who we are" }),
        /* @__PURE__ */ jsx("p", { children: 'Entropic System ("we", "us", "our") designs and builds production AI systems and SaaS products — including Finance Manager, CRM Portal, School Manager, Inventory Manager, Clinic Manager, and Kitchen Display System, alongside custom AI agents, automation, and predictive ML engagements.' }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "[Placeholder — to be completed: registered legal entity name, business address, and any applicable company registration number (e.g., CIN/GSTIN), to be inserted here once confirmed.]" }) }),
        /* @__PURE__ */ jsxs("p", { children: [
          "This policy applies to ",
          /* @__PURE__ */ jsx("strong", { children: "entropicsystem.com" }),
          " and any forms, chat widgets, or scheduling tools embedded on it. It does not cover the internal privacy practices of the standalone software products we build for clients — those are governed by separate agreements with each client."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "2. Information we collect" }),
        /* @__PURE__ */ jsx("p", { children: "We only collect information that you choose to give us. Specifically:" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Contact and project details" }),
            ` — when you submit our contact form, "Start a Project" form, or scheduling form, we collect your name, email address, the type of project or product you're interested in, and whatever details or messages you write.`
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Scheduling information" }),
            " — if you book a strategy call, we collect the date, time, and any notes you provide for that call."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Conversations with our chat assistant" }),
            " — if you use the chat widget in the corner of the site, the messages you send and receive are processed by our chat provider (see Section 4)."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "We do ",
          /* @__PURE__ */ jsx("strong", { children: "not" }),
          " ask for or knowingly collect sensitive personal information (such as government ID numbers, financial account details, or health information) through this website. Please don't include this kind of information in any form or chat message."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "3. How we use your information" }),
        /* @__PURE__ */ jsx("p", { children: "We use the information you share with us to:" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Respond to your enquiry and discuss the project or product you asked about;" }),
          /* @__PURE__ */ jsx("li", { children: "Schedule and prepare for calls or meetings you book with us;" }),
          /* @__PURE__ */ jsx("li", { children: "Keep a record of conversations so our team has context across follow-ups;" }),
          /* @__PURE__ */ jsx("li", { children: "Improve this website and the clarity of what we offer; and" }),
          /* @__PURE__ */ jsx("li", { children: "Meet our legal, accounting, and security obligations." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "We do not sell your personal information, and we do not use it to send unsolicited marketing to third parties." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "4. Third-party services we use" }),
        /* @__PURE__ */ jsx("p", { children: "To run this website and respond to you, we rely on a small number of trusted service providers who process data on our behalf:" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Supabase" }),
            " — stores the information submitted through our contact and project forms in a secured database."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "EmailJS" }),
            " — delivers a notification email to our team when you submit a form, so we can reply quickly."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Botpress" }),
            " — powers the chat widget on this site. If you start a chat, your messages are processed by Botpress's hosted infrastructure in order to generate responses and let our team follow up."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "WhatsApp" }),
            " — if you choose to message us via the WhatsApp link on our Contact page, that conversation is subject to WhatsApp's own privacy policy, as it takes place on their platform."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "These providers only receive the information necessary to perform their function for us, and are not permitted to use it for their own purposes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "5. Cookies & similar technology" }),
        /* @__PURE__ */ jsx("p", { children: "This website itself does not use advertising or analytics-tracking cookies. The embedded chat widget (Botpress) may set its own cookies or local-storage entries to keep track of an ongoing conversation across page loads — this is necessary for the chat to function and is controlled by that provider, not by us directly." }),
        /* @__PURE__ */ jsx("p", { children: "You can clear cookies and site data for entropicsystem.com at any time through your browser's settings. Doing so may reset any in-progress chat conversation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "6. How long we keep your information" }),
        /* @__PURE__ */ jsx("p", { children: "We keep enquiry and project details for as long as is reasonably necessary to respond to you, pursue any resulting engagement, and meet our legal and accounting obligations — and then delete or anonymise it. If we begin working together formally, information relevant to that engagement is retained under the terms of our project agreement instead of this policy." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "7. Your rights" }),
        /* @__PURE__ */ jsx("p", { children: "Depending on where you're located, you may have the right to:" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Ask us what personal information we hold about you, and request a copy;" }),
          /* @__PURE__ */ jsx("li", { children: "Ask us to correct information that is inaccurate or incomplete;" }),
          /* @__PURE__ */ jsx("li", { children: "Ask us to delete your information, where we're not required to keep it; and" }),
          /* @__PURE__ */ jsx("li", { children: "Withdraw any consent you've previously given us, at any time." })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To exercise any of these rights, email us at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:entropicsys@gmail.com", children: "entropicsys@gmail.com" }),
          " ",
          `with "Privacy request" in the subject line. We'll respond within a reasonable time and in line with applicable law.`
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "8. Grievance Officer (Digital Personal Data Protection Act, 2023)" }),
        /* @__PURE__ */ jsx("p", { children: "In accordance with India's Digital Personal Data Protection Act, 2023 and its rules, the following person can be contacted with any questions, concerns, or complaints about how we handle your personal data:" }),
        /* @__PURE__ */ jsxs("div", { className: "lg-officer-block", children: [
          /* @__PURE__ */ jsx("p", { className: "lg-officer-label", children: "Grievance Officer" }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "[Placeholder — name of designated Grievance Officer to be confirmed]" }) }),
          /* @__PURE__ */ jsx("p", { children: "Entropic System" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Email: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:entropicsys@gmail.com", children: "entropicsys@gmail.com" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "[Placeholder — registered postal address to be confirmed]" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "We aim to acknowledge grievances promptly and resolve them within the timelines set out under applicable law." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "9. Children's privacy" }),
        /* @__PURE__ */ jsx("p", { children: "This website is intended for businesses and professionals. It is not directed at children, and we do not knowingly collect personal information from anyone under the age of 18. If you believe a child has provided us with personal information, please contact us and we will delete it." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "10. Changes to this policy" }),
        /* @__PURE__ */ jsx("p", { children: `We may update this policy from time to time — for example, if we start using a new tool or change how we handle enquiries. When we do, we'll update the "Last updated" date at the top of this page. If a change is significant, we'll make that clear on the site.` })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "11. Contact us" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If you have any questions about this policy or how we handle your information, reach us at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:entropicsys@gmail.com", children: "entropicsys@gmail.com" }),
          " ",
          "or via WhatsApp at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/917060816597", target: "_blank", rel: "noopener noreferrer", children: "+91 70608 16597" }),
          "."
        ] })
      ] })
    ] }) })
  ] });
}
const meta$4 = () => [{
  title: "Privacy Policy | Entropic System"
}, {
  name: "description",
  content: "How Entropic System collects, uses, and protects the information you share with us — including details on third-party services and your data rights."
}, {
  tagName: "link",
  rel: "canonical",
  href: "https://www.entropicsystem.com/privacy"
}, {
  name: "robots",
  content: "noindex, follow"
}, {
  property: "og:title",
  content: "Privacy Policy | Entropic System"
}, {
  property: "og:description",
  content: "How Entropic System collects, uses, and protects your information."
}, {
  property: "og:url",
  content: "https://www.entropicsystem.com/privacy"
}];
const privacy = UNSAFE_withComponentProps(function PrivacyRoute() {
  return /* @__PURE__ */ jsx(PrivacyPolicy, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: privacy,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
function TermsOfService() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "lg-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "lg-glow", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "lg-hero-inner", children: [
        /* @__PURE__ */ jsx("span", { className: "lg-eyebrow", children: "Terms of Service" }),
        /* @__PURE__ */ jsx("h1", { className: "lg-headline", children: "The terms behind using this site." }),
        /* @__PURE__ */ jsx("p", { className: "lg-lede", children: "These terms govern your use of entropicsystem.com. They're written in plain language wherever possible — please read them before using the site or contacting us through it." }),
        /* @__PURE__ */ jsxs("span", { className: "lg-updated", children: [
          /* @__PURE__ */ jsx("strong", { children: "Last updated:" }),
          " 6 June 2026  ·  ",
          /* @__PURE__ */ jsx("strong", { children: "Effective:" }),
          " 6 June 2026"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg-draft-notice", children: /* @__PURE__ */ jsxs("div", { className: "lg-draft-notice-inner", children: [
      /* @__PURE__ */ jsx(AlertTriangle, { size: 18, className: "lg-draft-notice-icon" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "This is a draft and a starting template — not a final, lawyer-reviewed document." }),
        " Placeholders below (registered entity name, governing jurisdiction, dispute-resolution venue) must be completed and reviewed by a qualified lawyer before this page is treated as binding."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "lg-body", children: /* @__PURE__ */ jsxs("div", { className: "lg-body-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "1. Acceptance of these terms" }),
        /* @__PURE__ */ jsx("p", { children: `By browsing entropicsystem.com, submitting a form, booking a call, or messaging us through it (together, the "Site"), you agree to these Terms of Service. If you don't agree with them, please don't use the Site — you're always welcome to reach us directly by email instead.` }),
        /* @__PURE__ */ jsxs("p", { children: [
          "These terms apply to the ",
          /* @__PURE__ */ jsx("strong", { children: "website" }),
          " only. Any work we carry out for you — building software, deploying AI systems, or providing consulting — is governed by a separate, signed project agreement that takes precedence over this page for that engagement."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "2. Who we are" }),
        /* @__PURE__ */ jsx("p", { children: 'Entropic System ("we", "us", "our") designs and ships production AI systems and SaaS products, including Finance Manager, CRM Portal, School Manager, Inventory Manager, Clinic Manager, and Kitchen Display System, alongside custom AI agents, automation, and predictive ML engagements.' }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "[Placeholder — to be completed: registered legal entity name, business address, and company registration number, to be inserted once confirmed.]" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "3. Using this Site" }),
        /* @__PURE__ */ jsx("p", { children: "You agree to use the Site only for its intended purpose — to learn about what we do and get in touch with us. In particular, you agree not to:" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Submit false, misleading, or impersonated information through any form;" }),
          /* @__PURE__ */ jsx("li", { children: "Attempt to disrupt, overload, or gain unauthorised access to the Site or the systems behind it;" }),
          /* @__PURE__ */ jsx("li", { children: "Use automated tools to scrape, spam, or probe the Site or its forms; or" }),
          /* @__PURE__ */ jsx("li", { children: "Use the Site, or anything on it, for any unlawful purpose." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "We reserve the right to limit, suspend, or block access to the Site for anyone who we reasonably believe is in breach of these terms." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "4. The chat assistant and forms" }),
        /* @__PURE__ */ jsx("p", { children: "This Site includes a chat assistant and contact forms intended to help you get information and reach our team. Responses from the chat assistant are generated automatically and are provided for general guidance only — they don't constitute professional advice, a quote, or a binding commitment on our part. Anything submitted through a form or chat is reviewed by a person before we act on it." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "5. Intellectual property" }),
        /* @__PURE__ */ jsx("p", { children: "Everything on this Site — including its design, layout, text, graphics, logos, and underlying code — belongs to Entropic System or our licensors, and is protected by applicable intellectual-property laws. You may view and share pages of this Site for personal, non-commercial reference. You may not copy, republish, modify, or use our branding, content, or product names to represent your own work or business without our prior written permission." }),
        /* @__PURE__ */ jsx("p", { children: '"Entropic System" and the names of our products (Finance Manager, CRM Portal, School Manager, Inventory Manager, Clinic Manager, Kitchen Display System) are our marks. Other product and company names mentioned on the Site may be the trademarks of their respective owners.' })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "6. Links to other sites and services" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "This Site links out to third-party services we use or reference — for example, WhatsApp for messaging, and the providers that power our forms and chat widget (see our ",
          /* @__PURE__ */ jsx("a", { href: "/privacy", children: "Privacy Policy" }),
          " for the full list). We don't control those services, and we're not responsible for their content, policies, or practices. Once you leave our Site, their terms and privacy policies apply."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "7. No warranty" }),
        /* @__PURE__ */ jsx("p", { children: 'We try to keep the information on this Site accurate, current, and available, but we make no promises or guarantees — express or implied — about its completeness, accuracy, reliability, or availability. The Site, and everything on it, is provided "as is" and "as available", without warranties of any kind, to the fullest extent permitted by law.' }),
        /* @__PURE__ */ jsx("p", { children: "Nothing on this Site is professional, financial, legal, or technical advice specific to your situation. Descriptions of our products and services are for general information — the specifics of any engagement are defined in a separate written agreement between us." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "8. Limitation of liability" }),
        /* @__PURE__ */ jsx("p", { children: "To the fullest extent permitted by law, Entropic System will not be liable for any indirect, incidental, special, or consequential loss or damage arising from your use of — or inability to use — this Site, including loss of data, revenue, or business opportunity, even if we were advised such loss was possible. Nothing in these terms limits any liability that cannot legally be limited or excluded." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "9. Changes to these terms" }),
        /* @__PURE__ */ jsx("p", { children: `We may revise these terms from time to time to reflect changes to the Site or how we operate. When we do, we'll update the "Last updated" date at the top of this page. Continuing to use the Site after a change means you accept the revised terms.` })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "10. Governing law" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "These terms are governed by the laws of ",
          /* @__PURE__ */ jsx("em", { children: "[Placeholder — governing jurisdiction, e.g. India / a specific state, to be confirmed]" }),
          ", and any disputes arising from them will be subject to the exclusive jurisdiction of the courts located in ",
          /* @__PURE__ */ jsx("em", { children: "[Placeholder — city/venue to be confirmed]" }),
          ", without regard to conflict-of-law principles."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg-section", children: [
        /* @__PURE__ */ jsx("h2", { children: "11. Contact us" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Questions about these terms can be sent to",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:entropicsys@gmail.com", children: "entropicsys@gmail.com" }),
          " ",
          "or via WhatsApp at",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/917060816597", target: "_blank", rel: "noopener noreferrer", children: "+91 70608 16597" }),
          "."
        ] })
      ] })
    ] }) })
  ] });
}
const meta$3 = () => [{
  title: "Terms of Service | Entropic System"
}, {
  name: "description",
  content: "The terms governing your use of the Entropic System website — acceptable use, intellectual property, third-party links, and liability."
}, {
  tagName: "link",
  rel: "canonical",
  href: "https://www.entropicsystem.com/terms"
}, {
  name: "robots",
  content: "noindex, follow"
}, {
  property: "og:title",
  content: "Terms of Service | Entropic System"
}, {
  property: "og:description",
  content: "The terms governing your use of the Entropic System website."
}, {
  property: "og:url",
  content: "https://www.entropicsystem.com/terms"
}];
const terms = UNSAFE_withComponentProps(function TermsRoute() {
  return /* @__PURE__ */ jsx(TermsOfService, {});
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: terms,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const MotionLink = motion.create ? motion.create(Link) : motion(Link);
function SolutionPanel({ layer, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(
        500px at ${x}px ${y}px,
        rgba(255,255,255,0.22),
        rgba(255,255,255,0.08),
        transparent 60%
      )`
  );
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }
  function handleMouseLeave() {
    mouseX.set(-999);
    mouseY.set(-999);
  }
  return /* @__PURE__ */ jsxs(
    MotionLink,
    {
      className: "solution-panel",
      to: layer.route,
      style: { backgroundImage: `url(${layer.image})`, textDecoration: "none" },
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1, duration: 0.6 },
      whileHover: { scale: 1.07 },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "solution-light",
            style: { background: lightBackground }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "solution-glass",
            whileHover: {
              backdropFilter: "blur(14px)",
              backgroundColor: "rgba(255,255,255,0.18)"
            },
            transition: { duration: 0.35 }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "solution-content", children: [
          /* @__PURE__ */ jsx("h1", { children: layer.label }),
          /* @__PURE__ */ jsx("p", { children: layer.tagline })
        ] })
      ]
    }
  );
}
const SOLUTION_LAYERS = [
  {
    key: "core",
    label: "CORE",
    route: "/solutions/core",
    image: "/images/pexels-jakubzerdzicki-35501928.webp",
    tagline: "Operational Intelligence"
  },
  {
    key: "emerging",
    label: "EMERGING",
    route: "/solutions/emerging",
    image: "/images/pexels-artempodrez-5726706.webp",
    tagline: "Agentic & Adaptive Systems"
  },
  {
    key: "vision",
    label: "VISION",
    route: "/solutions/vision",
    image: "/images/pexels-pavel-danilyuk-8294683.webp",
    tagline: "Governance & Trust"
  }
];
function SolutionsGateway() {
  return /* @__PURE__ */ jsx("section", { className: "solutions-gateway", children: SOLUTION_LAYERS.map((layer, index) => /* @__PURE__ */ jsx(
    SolutionPanel,
    {
      layer,
      index
    },
    layer.key
  )) });
}
const meta$2 = () => [{
  title: "Solutions | Entropic System"
}, {
  name: "description",
  content: "Explore Entropic System's solution layers — Core, Emerging, and Vision — spanning enterprise AI, automation, and next-generation software engineering."
}, {
  tagName: "link",
  rel: "canonical",
  href: "https://www.entropicsystem.com/solutions"
}];
const solutions = UNSAFE_withComponentProps(function SolutionsRoute() {
  return /* @__PURE__ */ jsx(SolutionsGateway, {});
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: solutions,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const CORE_SOLUTIONS = {
  hero: {
    headline: "Enterprise-Grade AI Solutions That Scale With Your Business",
    description: "We engineer custom AI ecosystems, from predictive machine learning models to intelligent agents and robust data pipelines, designed to optimize operations and drive measurable ROI.",
    ctas: [
      { label: "Explore Our Solutions", variant: "primary" },
      { label: "Book a Strategy Call", variant: "secondary" }
    ]
  },
  intro: {
    headline: "Bridging the Gap Between AI Potential and Business Reality.",
    description: "We move beyond hype to deliver secure, production-ready infrastructure. Whether you need to automate workflows, forecast revenue, or deploy autonomous agents, we build systems that integrate seamlessly with your existing data.",
    bullets: [
      "Secure, private deployments (On-Prem or Cloud)",
      "Deep integration with enterprise data (ETL & Warehousing)",
      "Full-cycle development from prototype to production"
    ]
  },
  solutions: [
    {
      id: "gen-ai",
      headline: "Generative AI Agents & RAG Systems",
      description: "We build intelligent agents capable of complex reasoning and natural language interaction, grounded in your company's private data using Retrieval-Augmented Generation (RAG).",
      points: [
        "Internal Assistants for HR, Ops, and Knowledge Management",
        "Customer-facing Chatbots with high context retention",
        "Hallucination-free answers based on your documents"
      ],
      image: "/images/service-genai.webp"
    },
    {
      id: "data-engineering",
      headline: "Data Engineering & Analytics Infrastructure",
      description: "AI is only as good as the data it feeds on. We architect robust data pipelines (ETL/ELT) and warehouses to ensure your business intelligence is accurate, real-time, and scalable.",
      points: [
        "Automated data cleaning and pipeline orchestration",
        "Executive dashboards and business intelligence reporting",
        "Legacy data migration to modern cloud platforms"
      ],
      image: "/images/service-data.webp"
    },
    {
      id: "automation",
      headline: "Intelligent Document & Workflow Automation",
      description: "Eliminate manual drudgery. We utilize AI Document Understanding and NLP to extract data from unstructured files and automate complex business processes.",
      points: [
        "Automated invoice, contract, and report processing",
        "Natural Language to SQL (NL2SQL) for easy data querying",
        "Human-in-the-loop approval workflows"
      ],
      image: "/images/service-automation.webp"
    },
    {
      id: "predictive-ml",
      headline: "Custom Predictive ML & Forecasting",
      description: "Leverage your historical data to predict the future. We develop and fine-tune custom machine learning models to solve specific industry challenges.",
      points: [
        "Sales forecasting and demand planning",
        "Risk assessment and anomaly detection",
        "Sentiment analysis and customer churn prediction"
      ],
      image: "/images/service-predictive.webp"
    },
    {
      id: "software-engineering",
      headline: "AI-Native Software & SaaS Engineering",
      description: "We don't just add AI as an afterthought. We build full-stack web and mobile applications where intelligence is the core architecture—from smart SaaS platforms to vision-enabled tools.",
      points: [
        "End-to-end development of AI-powered Web & Mobile Apps",
        "Computer Vision & Speech integration for physical workflows",
        "Modernizing legacy software with intelligent features"
      ],
      image: "/images/service-vision.webp"
    }
  ]
};
const EMERGING_SOLUTIONS = {
  hero: {
    headline: "AI for the Physical World: Healthcare, Agriculture & Infrastructure",
    description: "We engineer advanced AI systems that solve complex, real-world challenges—from precision medicine and smart city planning to sustainable food production at scale.",
    ctas: [
      { label: "View Industry Solutions", variant: "primary" },
      { label: "Consult with an Expert", variant: "secondary" }
    ]
  },
  intro: {
    headline: "Solving Humanity’s Hardest Problems with Intelligence.",
    description: "Emerging AI isn't just about text—it's about understanding biological systems, optimizing energy grids, and planning the cities of tomorrow using data-driven insights.",
    bullets: [
      "Predictive modeling for complex biological systems",
      "Satellite and IoT data fusion for large-scale monitoring",
      "Simulation and Digital Twins for risk-free planning"
    ]
  },
  solutions: [
    {
      id: "healthcare",
      headline: "Precision Diagnostics & Healthcare Analytics",
      description: "Accelerating diagnosis and drug discovery by analyzing medical imaging, genomic data, and patient history with high accuracy.",
      points: [
        "Automated analysis of MRI/CT and X-ray imagery",
        "Early disease detection and risk stratification",
        "Accelerated drug compound screening"
      ],
      image: "/images/emerging-health.webp"
    },
    {
      id: "agriculture",
      headline: "Smart Agriculture & Yield Optimization",
      description: "Transforming farming with computer vision and predictive analytics to maximize yield while minimizing resource usage.",
      points: [
        "Drone-based crop health and disease monitoring",
        "Soil moisture analysis and irrigation automation",
        "Yield forecasting based on weather and historical data"
      ],
      image: "/images/emerging-agri.webp"
    },
    {
      id: "learning",
      headline: "Personalized AI Tutors & Learning Platforms",
      description: "Adaptive learning systems that create customized educational paths, allowing students to master subjects at their own pace.",
      points: [
        "Real-time knowledge gap analysis and curriculum adjustment",
        "Interactive, conversational tutoring in natural language",
        "Personalized progress tracking and performance insights"
      ],
      image: "/images/emerging-tutor.webp"
    },
    {
      id: "smart-city",
      headline: "Urban Planning & Smart City Infrastructure",
      description: "Using Digital Twins and simulation data to design efficient, livable cities and optimize public infrastructure.",
      points: [
        "Traffic flow simulation and congestion management",
        "Public transit demand prediction",
        "Zoning impact analysis and population modeling"
      ],
      image: "/images/emerging-urban.webp"
    },
    {
      id: "energy",
      headline: "Energy Grid Optimization & Sustainability",
      description: "Balancing the grid in real-time by predicting renewable energy output and consumption spikes.",
      points: [
        "Solar and wind energy output forecasting",
        "Predictive maintenance for utility infrastructure",
        "Carbon footprint tracking and reduction strategies"
      ],
      image: "/images/emerging-energy.webp"
    },
    {
      id: "disaster",
      headline: "Disaster Response & Environmental Monitoring",
      description: "Leveraging satellite imagery and sensor networks to predict and respond to environmental changes and natural disasters.",
      points: [
        "Wildfire detection and spread modeling",
        "Flood risk analysis and early warning systems",
        "Biodiversity and deforestation tracking"
      ],
      image: "/images/emerging-climate.webp"
    }
  ]
};
const VISION_SOLUTIONS = {
  hero: {
    headline: "Beyond Generative: The Era of Embodied & Autonomous Intelligence",
    description: "We help forward-thinking enterprises prototype the future. From physical robots driven by LLMs to self-organizing agent swarms, we build the proof-of-concepts that will define the next decade of industry.",
    ctas: [
      { label: "Join our Innovation Lab", variant: "primary" },
      { label: "View R&D Roadmap", variant: "secondary" }
    ]
  },
  intro: {
    headline: "Moving from 'Chatting' to 'Doing' in the Physical World.",
    description: "The next frontier isn't just generating text or images—it's about AI systems that understand physics, reason with logic, and operate autonomously in the real world.",
    bullets: [
      "Neuro-symbolic architectures for true reasoning",
      "Embodied intelligence for robotics and IoT",
      "Multi-agent swarms for decentralized problem solving"
    ]
  },
  solutions: [
    {
      id: "embodied-ai",
      headline: "Embodied AI & General Purpose Robotics",
      description: "Integrating Large Vision-Language Models (VLA) into physical hardware to create robots that can understand commands and manipulate objects in unstructured environments.",
      points: [
        "Zero-shot learning for robotic manipulation",
        "Visual-motor policy training",
        "Adaptive navigation in changing physical spaces"
      ],
      image: "/images/vision-embodied.webp"
    },
    {
      id: "swarms",
      headline: "Autonomous Agent Swarms",
      description: "Moving beyond single-agent assistants to 'Hive Mind' architectures where thousands of specialized micro-agents collaborate to solve massive, complex problems.",
      points: [
        "Decentralized decision-making networks",
        "Self-organizing supply chain logistics",
        "Resilient systems with no single point of failure"
      ],
      image: "/images/vision-swarms.webp"
    },
    {
      id: "simulators",
      headline: "Generative World Models & Physics Simulators",
      description: "Building high-fidelity 'Digital Twins' of reality that obey the laws of physics, allowing AI to train millions of hours in simulation before touching real hardware.",
      points: [
        "Synthetic data generation for rare-event training",
        "Predictive modeling of industrial accidents",
        "Infinite-scenario testing for autonomous vehicles"
      ],
      image: "/images/vision-simulation.webp"
    },
    {
      id: "neuro-symbolic",
      headline: "Neuro-Symbolic Reasoning Engines",
      description: "The hybrid future of AI: Combining the creative flexibility of Neural Networks with the mathematical certainty of Symbolic Logic to eliminate hallucinations.",
      points: [
        "Verifiable mathematical reasoning",
        "Rule-compliant automated legal systems",
        "Explainable AI (XAI) for high-stakes regulation"
      ],
      image: "/images/vision-neurosymbolic.webp"
    },
    {
      id: "bci",
      headline: "Brain-Computer Interface (BCI) Integration",
      description: "Researching non-invasive neural interfaces to allow direct intention-to-action workflows for accessibility and high-speed industrial control.",
      points: [
        "EMG-based gesture control systems",
        "Cognitive load monitoring for operators",
        "Direct thought-to-text input research"
      ],
      image: "/images/vision-bci.webp"
    }
  ]
};
const LAYERS$1 = [
  { key: "core", label: "Core" },
  { key: "emerging", label: "Emerging" },
  { key: "vision", label: "Vision" }
];
function SolutionsLayerToggle() {
  const location = useLocation();
  const active = location.pathname.split("/").pop();
  const { scrollY } = useScroll();
  const direction = useTransform(scrollY, (latest, prev) => {
    if (latest > prev) return 1;
    if (latest < prev) return -1;
    return 0;
  });
  const rawX = useTransform(direction, [-1, 0, 1], [0, 0, 64]);
  const x = useSpring(rawX, {
    stiffness: 180,
    damping: 26,
    mass: 0.9
  });
  const rawY = useTransform(scrollY, [0, 140], [0, -60]);
  const y = useSpring(rawY, {
    stiffness: 160,
    damping: 28
  });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "solutions-toggle",
      style: { x, y },
      children: /* @__PURE__ */ jsxs("div", { className: "solutions-toggle-inner", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "solutions-toggle-indicator",
            layout: true,
            transition: {
              type: "spring",
              stiffness: 420,
              damping: 34
            },
            style: {
              width: `${100 / LAYERS$1.length}%`,
              left: `${100 / LAYERS$1.length * LAYERS$1.findIndex((l) => l.key === active)}%`
            }
          }
        ),
        LAYERS$1.map((layer) => /* @__PURE__ */ jsx(
          Link,
          {
            className: `solutions-toggle-pill ${active === layer.key ? "active" : ""}`,
            to: `/solutions/${layer.key}`,
            style: { textDecoration: "none" },
            children: layer.label
          },
          layer.key
        ))
      ] })
    }
  );
}
const EYEBROW = {
  core: "Core AI Infrastructure",
  emerging: "Applied AI · Real-World Impact",
  vision: "Vision R&D · The Future"
};
const container$2 = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};
const item$1 = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
function LayerHero({ layer, headline, description }) {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const heroRef = useRef(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        ref: heroRef,
        className: `layer-hero layer-hero--${layer}`,
        variants: container$2,
        initial: "hidden",
        animate: "visible",
        children: [
          /* @__PURE__ */ jsx(EntropicCanvas, { containerRef: heroRef, scheme: "dark" }),
          /* @__PURE__ */ jsx("div", { className: "lh-pattern", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("div", { className: "lh-orb lh-orb-1", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("div", { className: "lh-orb lh-orb-2", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs("div", { className: "layer-hero-inner", children: [
            /* @__PURE__ */ jsxs(motion.div, { variants: item$1, className: "lh-eyebrow", children: [
              /* @__PURE__ */ jsx("span", { className: "lh-eyebrow-dot", "aria-hidden": "true" }),
              EYEBROW[layer]
            ] }),
            /* @__PURE__ */ jsx(motion.h1, { variants: item$1, children: headline }),
            /* @__PURE__ */ jsx(motion.p, { variants: item$1, className: "layer-hero-description", children: description }),
            /* @__PURE__ */ jsxs(motion.div, { variants: item$1, className: "layer-hero-actions", children: [
              /* @__PURE__ */ jsx(SteamButton, { children: /* @__PURE__ */ jsx(
                "button",
                {
                  className: "layer-hero-btn primary",
                  onClick: () => setIsProjectOpen(true),
                  children: "Start a Project"
                }
              ) }),
              /* @__PURE__ */ jsx(SparkleButton, { children: /* @__PURE__ */ jsx(
                "button",
                {
                  className: "layer-hero-btn secondary",
                  onClick: () => setIsScheduleOpen(true),
                  children: "Book Strategy Call"
                }
              ) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(ProjectModal, { isOpen: isProjectOpen, onClose: () => setIsProjectOpen(false) }),
    /* @__PURE__ */ jsx(SchedulingModal, { isOpen: isScheduleOpen, onClose: () => setIsScheduleOpen(false) })
  ] });
}
const container$1 = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
};
const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 } }
};
const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut", delay: 0.85 } }
};
function LayerIntro({ headline, description, bullets }) {
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      className: "layer-intro",
      variants: container$1,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.35 },
      children: /* @__PURE__ */ jsxs("div", { className: "layer-intro-inner", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "layer-intro-line",
            variants: lineVariants,
            style: { transformOrigin: "top center" }
          }
        ),
        /* @__PURE__ */ jsx(motion.div, { className: "layer-intro-dot", variants: dotVariants }),
        /* @__PURE__ */ jsx(motion.h1, { variants: item, children: headline }),
        /* @__PURE__ */ jsx(motion.p, { variants: item, className: "layer-intro-description", children: description }),
        bullets && /* @__PURE__ */ jsx(motion.ul, { variants: container$1, className: "layer-intro-bullets", children: bullets.map((bullet, i) => /* @__PURE__ */ jsx(motion.li, { variants: item, children: bullet }, i)) })
      ] })
    }
  );
}
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0 } }
};
const ulVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.22 } }
};
function SolutionRow({ solution, reverse, index = 0 }) {
  const imgVariants = {
    hidden: {
      clipPath: reverse ? "inset(0 0% 0 100%)" : "inset(0 100% 0 0%)",
      opacity: 0.5
    },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    }
  };
  const textVariants = {
    hidden: { opacity: 0, x: reverse ? 28 : -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
    }
  };
  const bulletVariants = {
    hidden: { opacity: 0, x: reverse ? 16 : -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      id: solution.id,
      className: `solution-row ${reverse ? "reverse" : ""}`,
      "data-num": String(index + 1).padStart(2, "0"),
      variants: sectionVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.25 },
      children: [
        /* @__PURE__ */ jsx(motion.div, { className: "solution-image", variants: imgVariants, children: /* @__PURE__ */ jsxs("div", { className: "solution-image-frame", children: [
          /* @__PURE__ */ jsx("img", { src: solution.image, alt: solution.headline, loading: "lazy" }),
          /* @__PURE__ */ jsx("div", { className: "solution-image-shimmer", "aria-hidden": "true" })
        ] }) }),
        /* @__PURE__ */ jsxs(motion.div, { className: "solution-text", variants: sectionVariants, children: [
          /* @__PURE__ */ jsx(motion.div, { className: "solution-tag", variants: textVariants, children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx(motion.h3, { variants: textVariants, children: solution.headline }),
          /* @__PURE__ */ jsx(motion.p, { variants: { ...textVariants, visible: { ...textVariants.visible, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 } } }, children: solution.description }),
          solution.points && /* @__PURE__ */ jsx(motion.ul, { variants: ulVariants, children: solution.points.map((point, i) => /* @__PURE__ */ jsx(motion.li, { variants: bulletVariants, children: point }, i)) })
        ] })
      ]
    }
  );
}
const ECOSYSTEM_MAP = {
  core: {
    icon: /* @__PURE__ */ jsx(Layers, { size: 32 }),
    label: "The Foundation",
    headline: "From Infrastructure to Innovation",
    text: "Core automation isn't just about efficiency—it's the stable bedrock required to deploy autonomous agents safely.",
    next: { label: "See what you can build next", path: "/solutions/emerging" }
  },
  emerging: {
    icon: /* @__PURE__ */ jsx(Zap, { size: 32 }),
    label: "The Application",
    headline: "From Agents to Autonomy",
    text: "Once you have active agents, the next step is untethering them from the screen to impact the physical world.",
    next: { label: "View our Vision Roadmap", path: "/solutions/vision" }
  },
  vision: {
    icon: /* @__PURE__ */ jsx(Cpu, { size: 32 }),
    label: "The Future",
    headline: "Grounded in Reality",
    text: "We don't build sci-fi. We build R&D prototypes today using the same robust data pipelines from our Core solutions.",
    next: { label: "Back to Core Solutions", path: "/solutions/core" }
  }
};
const container = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
function SolutionsCTA({ layer }) {
  const data = ECOSYSTEM_MAP[layer];
  if (!data) return null;
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      className: `solutions-cta solutions-cta--${layer}`,
      variants: container,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.4 },
      children: /* @__PURE__ */ jsxs("div", { className: "solutions-cta-inner", children: [
        /* @__PURE__ */ jsxs("div", { className: "cta-icon-badge", children: [
          /* @__PURE__ */ jsx("div", { children: data.icon }),
          /* @__PURE__ */ jsx("span", { children: data.label })
        ] }),
        /* @__PURE__ */ jsx("h1", { children: data.headline }),
        /* @__PURE__ */ jsx("p", { children: data.text }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            className: "cta-bridge-link",
            to: data.next.path,
            style: { textDecoration: "none" },
            children: [
              /* @__PURE__ */ jsx("span", { children: data.next.label }),
              /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
            ]
          }
        )
      ] })
    }
  );
}
const COMPARISON_DATA = [
  {
    id: "p1",
    barrier: { title: "Manual Process Fatigue", desc: "Valuable teams are slowed down by repetitive data entry, manual routing, and routine approvals." },
    solution: { title: "Intelligent Automation", desc: "We deploy AI-driven workflows to automate operational tasks, reducing manual effort and costs." }
  },
  {
    id: "p2",
    barrier: { title: "Unstructured Data", desc: "Critical business insights are trapped in PDFs, emails, and invoices, requiring manual extraction." },
    solution: { title: "Automated Processing", desc: "Our systems automatically extract and structure data from documents for instant availability." }
  },
  {
    id: "p3",
    barrier: { title: "Rigid Legacy Systems", desc: "Outdated software infrastructure limits agility and fails to integrate with modern tools." },
    solution: { title: "AI-Led Modernization", desc: "We refactor legacy systems into scalable, cloud-native architectures with embedded AI capabilities." }
  },
  {
    id: "p4",
    barrier: { title: "Fragmented Tech Stack", desc: "CRMs, ERPs, and internal tools operate in silos, creating visibility gaps and data errors." },
    solution: { title: "Seamless Orchestration", desc: "We integrate automation across your existing tools to ensure unified data flow and consistency." }
  },
  {
    id: "p5",
    barrier: { title: "Slow Time-to-Market", desc: "Traditional development cycles are too sluggish to keep up with evolving business demands." },
    solution: { title: "Accelerated Development", desc: "Custom software built with AI-assisted testing and quality assurance for faster, reliable deployment." }
  }
];
const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
const barrierVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
const solutionVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
const connectorVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "backOut", delay: 0.1 } }
};
function ComparisonSection() {
  return /* @__PURE__ */ jsxs("section", { className: "comparison-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "comparison-header", children: [
      /* @__PURE__ */ jsxs("h1", { children: [
        /* @__PURE__ */ jsx("span", { className: "highlight-left", children: "Your Problem" }),
        " · ",
        /* @__PURE__ */ jsx("span", { className: "highlight-right", children: "Our Solution" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Moving from barriers to breakthroughs." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "comparison-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid-headers", children: [
        /* @__PURE__ */ jsx("span", { className: "text-barrier", children: "Barriers" }),
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsx("span", { className: "text-solution", children: "Solutions" })
      ] }),
      COMPARISON_DATA.map((item2, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "comparison-row",
          variants: rowVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-40px" },
          children: [
            /* @__PURE__ */ jsxs(motion.div, { className: "comp-side barrier-side", variants: barrierVariants, children: [
              /* @__PURE__ */ jsx("div", { className: "comp-icon", children: /* @__PURE__ */ jsx(XCircle, { size: 18 }) }),
              /* @__PURE__ */ jsxs("div", { className: "comp-text", children: [
                /* @__PURE__ */ jsx("h4", { children: item2.barrier.title }),
                /* @__PURE__ */ jsx("p", { children: item2.barrier.desc })
              ] })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { className: "comp-connector", variants: connectorVariants, children: /* @__PURE__ */ jsx("div", { className: "arrow-indicator", children: "→" }) }),
            /* @__PURE__ */ jsxs(motion.div, { className: "comp-side solution-side", variants: solutionVariants, children: [
              /* @__PURE__ */ jsx("div", { className: "comp-icon", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }) }),
              /* @__PURE__ */ jsxs("div", { className: "comp-text", children: [
                /* @__PURE__ */ jsx("h4", { children: item2.solution.title }),
                /* @__PURE__ */ jsx("p", { children: item2.solution.desc })
              ] })
            ] })
          ]
        },
        item2.id
      ))
    ] })
  ] });
}
const MAP = {
  core: CORE_SOLUTIONS,
  emerging: EMERGING_SOLUTIONS,
  vision: VISION_SOLUTIONS
};
const pageVariants = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
function SolutionsPage({ layer }) {
  const data = MAP[layer];
  if (!data) return null;
  return /* @__PURE__ */ jsxs(
    motion.main,
    {
      className: `solutions-page theme-${layer}`,
      variants: pageVariants,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      children: [
        /* @__PURE__ */ jsx(SolutionsLayerToggle, {}),
        /* @__PURE__ */ jsx(LayerHero, { layer, ...data.hero }),
        /* @__PURE__ */ jsx(LayerIntro, { ...data.intro }),
        data.solutions.map((s, i) => /* @__PURE__ */ jsx(
          SolutionRow,
          {
            solution: s,
            reverse: i % 2 === 1,
            index: i
          },
          s.headline
        )),
        /* @__PURE__ */ jsx(ComparisonSection, {}),
        /* @__PURE__ */ jsx(SolutionsCTA, { layer })
      ]
    }
  );
}
const LAYERS = {
  core: {
    title: "Core AI Solutions | Entropic System",
    description: "Production-grade AI foundations for enterprises — RAG systems, NLP workflow automation, data engineering, and predictive ML built to ship and scale."
  },
  emerging: {
    title: "Emerging AI Applications | Entropic System",
    description: "Sector-specific AI for healthcare diagnostics, precision agriculture, smart cities, energy grid optimisation, and disaster response systems."
  },
  vision: {
    title: "Vision: Frontier AI Research | Entropic System",
    description: "Frontier-grade R&D — embodied AI, autonomous agent swarms, generative world models, neuro-symbolic reasoning, and brain-computer interface systems."
  }
};
async function loader$1({
  params
}) {
  const meta2 = LAYERS[params.layer];
  if (!meta2) throw new Response("Not Found", {
    status: 404
  });
  return {
    layer: params.layer,
    meta: meta2
  };
}
const LAYER_LABELS = {
  core: "Core Solutions",
  emerging: "Emerging Applications",
  vision: "Vision Research"
};
const meta$1 = ({
  data
}) => {
  const layer = data?.layer ?? "";
  const url = `https://www.entropicsystem.com/solutions/${layer}`;
  return [{
    title: data?.meta.title ?? "Solutions | Entropic System"
  }, {
    name: "description",
    content: data?.meta.description ?? ""
  }, {
    tagName: "link",
    rel: "canonical",
    href: url
  }, {
    property: "og:title",
    content: data?.meta.title ?? "Solutions | Entropic System"
  }, {
    property: "og:description",
    content: data?.meta.description ?? ""
  }, {
    property: "og:url",
    content: url
  }, {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.entropicsystem.com/"
      }, {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: "https://www.entropicsystem.com/solutions"
      }, {
        "@type": "ListItem",
        position: 3,
        name: LAYER_LABELS[layer] ?? layer,
        item: url
      }]
    }
  }];
};
const solutions_layer = UNSAFE_withComponentProps(function SolutionsLayerRoute() {
  const {
    layer
  } = useLoaderData();
  return /* @__PURE__ */ jsx(SolutionsPage, {
    layer
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: solutions_layer,
  loader: loader$1,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function useMediaQuery(query, serverDefault = false) {
  function subscribe(callback) {
    if (typeof window === "undefined") return () => {
    };
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  }
  const getSnapshot = () => typeof window !== "undefined" ? window.matchMedia(query).matches : serverDefault;
  const getServerSnapshot = () => serverDefault;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
function drawGradCap(ctx, x, y, s, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x - s * 0.28, y - s * 0.42, s * 0.56, s * 0.4);
  ctx.fillRect(x - s * 0.54, y - s * 0.08, s * 1.08, s * 0.2);
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
    const a = Math.PI / 4 * i - Math.PI / 2;
    const rad = i % 2 === 0 ? r : inner;
    i === 0 ? ctx.moveTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad) : ctx.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad);
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
const FINANCE_SYMBOLS = ["$", "₹", "€", "%", "▲", "▼", "+"];
function initP(type, W, H) {
  const p = {
    x: Math.random() * W,
    y: Math.random() * H,
    alpha: 0,
    baseAlpha: 0.14 + Math.random() * 0.2,
    age: Math.floor(Math.random() * 150),
    maxAge: 160 + Math.floor(Math.random() * 120),
    size: 8 + Math.random() * 9,
    speed: 0.28 + Math.random() * 0.4,
    phase: Math.random() * Math.PI * 2,
    type,
    twinkleFreq: 1.5 + Math.random() * 3,
    twinklePhase: Math.random() * Math.PI * 2
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
    p.angSpeed = (3e-3 + Math.random() * 5e-3) * (Math.random() < 0.5 ? 1 : -1);
    p.size = 3.5 + Math.random() * 4;
  } else if (type === "school") {
    p.isCap = Math.random() < 0.45;
    p.speed = 0.3 + Math.random() * 0.3;
  } else if (type === "clinic") {
    p.dist = Math.random() * 180;
    p.maxDist = 200 + Math.random() * 160;
    p.angle = Math.random() * Math.PI * 2;
    p.baseAlpha = 0.18 + Math.random() * 0.2;
    p.alpha = p.baseAlpha * (1 - p.dist / p.maxDist);
  } else if (type === "inventory") {
    p.speed = 0.22 + Math.random() * 0.28;
  } else if (type === "kitchen") {
    p.isFlame = Math.random() < 0.55;
    p.flickerFreq = 2.5 + Math.random() * 3;
    p.speed = 0.42 + Math.random() * 0.5;
  }
  return p;
}
function updateP(p, W, H, t) {
  const { type } = p;
  if (type === "finance") {
    p.x += p.dir * p.speed;
    p.y += Math.sin(t * p.freq + p.phase) * 0.4;
    if (p.dir < 0 && p.x < -30) {
      p.x = W + 30;
      p.y = 60 + Math.random() * (H - 120);
    }
    if (p.dir > 0 && p.x > W + 30) {
      p.x = -30;
      p.y = 60 + Math.random() * (H - 120);
    }
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
    if (p.y < -30) {
      p.y = H + 30;
      p.x = Math.random() * W;
    }
  } else if (type === "clinic") {
    p.dist += p.speed * 0.75;
    p.x = W * 0.5 + Math.cos(p.angle) * p.dist;
    p.y = H * 0.5 + Math.sin(p.angle) * p.dist;
    p.alpha = Math.max(0, p.baseAlpha * Math.pow(1 - p.dist / p.maxDist, 1.4));
    if (p.dist > p.maxDist) {
      p.dist = 0;
      p.angle = Math.random() * Math.PI * 2;
    }
    p.alpha *= 0.65 + 0.35 * (0.5 + 0.5 * Math.sin(t * p.twinkleFreq + p.twinklePhase));
    return;
  } else if (type === "inventory") {
    p.y += p.speed;
    if (p.y > H + 20) {
      p.y = -20;
      p.x = Math.random() * W;
    }
  } else if (type === "kitchen") {
    p.y -= p.speed;
    p.x += Math.sin(t * p.flickerFreq + p.phase) * 0.9;
    if (p.y < -30) {
      p.y = H + 30;
      p.x = Math.random() * W;
    }
  }
  p.age = (p.age + 1) % p.maxAge;
  const q = p.maxAge * 0.18;
  if (p.age < q) p.alpha = p.baseAlpha * (p.age / q);
  else if (p.age > p.maxAge - q) p.alpha = p.baseAlpha * ((p.maxAge - p.age) / q);
  else p.alpha = p.baseAlpha;
  p.alpha *= 0.65 + 0.35 * (0.5 + 0.5 * Math.sin(t * p.twinkleFreq + p.twinklePhase));
}
function drawP(ctx, p, color) {
  if (p.alpha <= 5e-3) return;
  ctx.save();
  ctx.globalAlpha = p.alpha;
  ctx.shadowColor = color;
  ctx.shadowBlur = p.alpha * 18;
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
      p.isFlame ? drawFlame(ctx, p.x, p.y, p.size, color) : (ctx.strokeStyle = color, ctx.lineWidth = 1.5, ctx.beginPath(), ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2), ctx.stroke(), ctx.beginPath(), ctx.arc(p.x, p.y, p.size * 0.3, 0, Math.PI * 2), ctx.stroke());
      break;
  }
  ctx.shadowBlur = 0;
  ctx.restore();
}
const TYPE_MAP = {
  financemanager: { type: "finance", count: 52 },
  crmportal: { type: "crm", count: 32 },
  schoolmanager: { type: "school", count: 46 },
  clinicmanager: { type: "clinic", count: 50 },
  inventorymanager: { type: "inventory", count: 42 },
  kitchendisplaysystem: { type: "kitchen", count: 44 }
};
function ProductParticles({ productId, primaryColor }) {
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
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      particles = Array.from(
        { length: count },
        () => initP(type, canvas.width, canvas.height)
      );
    }
    function drawCrmLines() {
      ctx.lineWidth = 0.9;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
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
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [productId, primaryColor]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 4,
        opacity: 0.55
      }
    }
  );
}
function useBreakpoint() {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);
  return { isMobile, isTablet, isDesktop };
}
const PRODUCT_DATA = {
  financemanager: {
    badge: "FINANCIAL MANAGEMENT",
    title: "Finance Manager",
    tagline: "Financial management that thinks ahead.",
    description: "Complete accounting, invoicing, tax compliance and cash flow forecasting — all in one intelligent platform designed for modern businesses.",
    theme: { primary: "#2563eb", primaryRgb: "37,99,235", light: "#eff6ff", border: "#bfdbfe", accent: "#1d4ed8", soft: "rgba(37,99,235,0.08)", glow: "rgba(37,99,235,0.15)" },
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    stats: [
      { value: "6 Hours", label: "Month-end close time", prior: "from 5 days" },
      { value: "92%", label: "Faster invoice processing", prior: "automated" },
      { value: "100%", label: "GST compliance rate", prior: "audit-ready" }
    ],
    features: [
      { icon: Calculator, title: "Smart Accounting", desc: "Automated bookkeeping with AI-powered categorization and reconciliation that learns from your business patterns." },
      { icon: ShieldCheck, title: "GST Compliance", desc: "Built-in GST filing, automatic tax calculations, and compliance reports that keep you audit-ready." },
      { icon: Receipt, title: "Invoice Management", desc: "Create, send, and track invoices with automated payment reminders and multi-currency support." },
      { icon: TrendingUp, title: "Cash Flow Forecasting", desc: "AI-driven predictions help you anticipate cash flow gaps and make informed financial decisions." },
      { icon: CreditCard, title: "Expense Tracking", desc: "Capture receipts, categorize expenses, and manage reimbursements with mobile-first workflows." },
      { icon: LineChart, title: "Financial Reports", desc: "Real-time P&L, balance sheets, and cash flow statements with drill-down capabilities." }
    ],
    capabilities: [
      { title: "Core Accounting", items: ["General ledger with multi-currency support", "Accounts payable and receivable automation", "Bank reconciliation with AI matching", "Chart of accounts customization", "Journal entries and audit trails"] },
      { title: "Tax & Compliance", items: ["GST, TDS, and income tax calculations", "Automated GSTR-1, GSTR-3B filing", "Form 26AS reconciliation", "E-way bill generation", "Compliance calendar and reminders"] },
      { title: "Invoicing & Payments", items: ["Professional invoice templates", "Payment gateway integration", "Recurring invoices and subscriptions", "Automatic payment reminders", "Credit and debit note management"] },
      { title: "Analytics & Insights", items: ["Cash flow forecasting with AI", "Profit margin analysis by product/service", "Customer payment behavior insights", "Budget vs actuals comparison", "Custom financial dashboards"] }
    ],
    testimonial: { quote: "Finance Manager cut our month-end close from 5 days to 6 hours. Our CA now just reviews instead of doing manual entry. It's been transformational.", name: "Arjun Mehta", role: "CFO, Meridian Exports" }
  },
  crmportal: {
    badge: "CUSTOMER RELATIONSHIP",
    title: "CRM Portal",
    tagline: "Relationships powered by intelligence.",
    description: "Track every deal, automate follow-ups, and personalise every customer touchpoint with AI-driven insights that close more sales.",
    theme: { primary: "#059669", primaryRgb: "5,150,105", light: "#ecfdf5", border: "#a7f3d0", accent: "#047857", soft: "rgba(5,150,105,0.08)", glow: "rgba(5,150,105,0.15)" },
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    stats: [
      { value: "3x", label: "Increase in lead conversion", prior: "qualified pipeline" },
      { value: "45%", label: "Faster response time", prior: "automated routing" },
      { value: "89%", label: "Customer retention rate", prior: "engaged base" }
    ],
    features: [
      { icon: Target, title: "Sales Pipeline", desc: "Visual deal tracking with customizable stages, automatic reminders, and revenue forecasting." },
      { icon: BrainCircuit, title: "AI Lead Scoring", desc: "Machine learning ranks leads by conversion probability, helping your team focus on what matters." },
      { icon: MessageCircle, title: "WhatsApp Integration", desc: "Send quotes, collect payments, and engage customers directly through WhatsApp Business API." },
      { icon: Users, title: "Contact Management", desc: "Centralized customer database with interaction history, preferences, and communication logs." },
      { icon: Zap, title: "Automation Workflows", desc: "Trigger emails, tasks, and notifications based on customer actions and deal milestones." },
      { icon: Mail, title: "Email Campaigns", desc: "Design, send, and track email campaigns with templates, A/B testing, and analytics." }
    ],
    capabilities: [
      { title: "Lead Management", items: ["Multi-channel lead capture (web, email, phone)", "AI-powered lead scoring and qualification", "Automatic lead assignment and routing", "Lead nurturing campaigns", "Duplicate detection and merging"] },
      { title: "Sales Automation", items: ["Customizable sales pipelines and stages", "Deal probability and revenue forecasting", "Activity tracking and reminders", "Quote and proposal generation", "Sales performance dashboards"] },
      { title: "Customer Engagement", items: ["WhatsApp, SMS, and email integration", "Customer portal for self-service", "Support ticket management", "Customer satisfaction surveys", "Loyalty program integration"] },
      { title: "Analytics & Reporting", items: ["Sales funnel conversion analysis", "Team performance metrics", "Customer lifetime value tracking", "Campaign ROI measurement", "Custom report builder"] }
    ],
    testimonial: { quote: "CRM Portal's AI lead scoring helped us prioritize high-value prospects. Our conversion rate tripled and our sales team is closing deals faster than ever before.", name: "Vikram Patel", role: "Head of Sales, TechVentures India" }
  },
  schoolmanager: {
    badge: "EDUCATION MANAGEMENT",
    title: "School Manager",
    tagline: "Run your school. Not just your spreadsheets.",
    description: "From the moment a student applies to the day they graduate — admissions, attendance, fees, exams, and parent engagement all managed from one unified platform built for modern schools.",
    theme: { primary: "#6366f1", primaryRgb: "99,102,241", light: "#eef2ff", border: "#c7d2fe", accent: "#4f46e5", soft: "rgba(99,102,241,0.08)", glow: "rgba(99,102,241,0.15)" },
    heroImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
    stats: [
      { value: "70%", label: "Reduction in manual admin work", prior: "automated workflows" },
      { value: "3x", label: "Faster fee collection cycles", prior: "online payment integration" },
      { value: "95%", label: "Parent app engagement rate", prior: "real-time notifications" }
    ],
    features: [
      { icon: ClipboardList, title: "Admissions Portal", desc: "Digital application forms, document uploads, merit-based shortlisting, and automated enrollment — handle hundreds of applicants without a single paper form." },
      { icon: Users, title: "Student Profiles", desc: "Centralized records for every student: academic history, attendance, health info, emergency contacts, and disciplinary logs in one always-accessible profile." },
      { icon: Coins, title: "Fee Management", desc: "Configure multi-tier fee structures, automate payment reminders, accept online payments, and generate instant receipts — with a full ledger for trustees." },
      { icon: Calendar, title: "Timetable Engine", desc: "Smart scheduling that accounts for teacher availability, subject loads, and room capacity — resolve conflicts in minutes, not days." },
      { icon: GraduationCap, title: "Exams & Report Cards", desc: "Manage internal assessments, publish results, generate customizable report cards, and schedule parent-teacher meetings from one screen." },
      { icon: Bell, title: "Parent Communication", desc: "Push notifications, SMS alerts, event announcements, and two-way messaging — parents stay informed without a single phone call to the front desk." }
    ],
    capabilities: [
      { title: "Student Lifecycle", items: ["Online admissions with document verification", "Biometric-ready attendance tracking", "Health records and emergency contact management", "Disciplinary log and behavior tracking", "Alumni records and engagement tools"] },
      { title: "Academic Operations", items: ["Curriculum and lesson plan management", "Homework and assignment tracking", "Internal grading and mark entry", "Customizable report card templates", "Certificate and bonafide letter generation"] },
      { title: "Finance & Fees", items: ["Flexible, multi-tier fee structures", "Online payment gateway integration", "Scholarship and concession management", "Automated late fee calculation", "Real-time financial reports for management"] },
      { title: "Communication & Engagement", items: ["Parent and student mobile app", "Push, SMS, and email notification channels", "Event calendar and school announcements", "Parent-teacher meeting scheduler", "Emergency broadcast messaging"] }
    ],
    testimonial: { quote: "We replaced three different tools with School Manager. Our admin team saves hours every day, fee collection went from chaotic to seamless, and parents actually know what's happening — that alone was worth it.", name: "Rekha Nair", role: "Principal, Greenfield International School" }
  },
  clinicmanager: {
    badge: "HEALTHCARE MANAGEMENT",
    title: "Clinic Manager",
    tagline: "Less paperwork. More patient care.",
    description: "A complete clinic operations platform — appointments, patient records, prescriptions, billing, and follow-ups — built for solo practitioners and growing multi-branch clinics.",
    theme: { primary: "#f43f5e", primaryRgb: "244,63,94", light: "#fff1f2", border: "#fecdd3", accent: "#e11d48", soft: "rgba(244,63,94,0.08)", glow: "rgba(244,63,94,0.15)" },
    heroImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
    stats: [
      { value: "60%", label: "Drop in scheduling conflicts", prior: "smart appointment engine" },
      { value: "40%", label: "Faster patient billing cycles", prior: "integrated invoicing" },
      { value: "80%", label: "Reduction in missed follow-ups", prior: "automated reminders" }
    ],
    features: [
      { icon: CalendarCheck, title: "Appointment Scheduling", desc: "Online and walk-in booking with real-time slot availability, doctor-wise calendars, and automated patient reminders via SMS and WhatsApp." },
      { icon: FileText, title: "Electronic Medical Records", desc: "Structured patient histories, visit notes, lab results, and uploaded documents — all searchable and accessible across branches in seconds." },
      { icon: Pill, title: "Prescription Management", desc: "Digital prescriptions with a drug database, dosage templates, and one-click refills. Print or share with patients instantly." },
      { icon: Receipt, title: "Billing & Invoicing", desc: "Generate itemized invoices, track payments, manage insurance claims, and produce GST-compliant receipts — all from within the patient visit flow." },
      { icon: Bell, title: "Follow-up Automation", desc: "Scheduled reminders for post-visit follow-ups, medication renewals, and preventive care — sent automatically so no patient falls through the cracks." },
      { icon: BarChart, title: "Clinic Analytics", desc: "Track patient footfall, revenue trends, doctor performance, and appointment no-show rates with dashboards built for clinic owners and administrators." }
    ],
    capabilities: [
      { title: "Patient Management", items: ["Complete patient registration and profiles", "Visit history and clinical notes", "Lab and diagnostic report uploads", "Allergy and chronic condition flags", "Family and dependent record linking"] },
      { title: "Clinical Workflow", items: ["Doctor-wise appointment queues", "Digital prescription with drug database", "Referral letter and certificate generation", "Procedure and treatment tracking", "Vitals and nursing notes capture"] },
      { title: "Billing & Compliance", items: ["Itemized invoice and receipt generation", "Insurance and TPA claim management", "GST-compliant billing", "Payment tracking and outstanding reports", "Audit trail for every transaction"] },
      { title: "Operations & Growth", items: ["Multi-branch management from one dashboard", "Staff scheduling and shift management", "Inventory tracking for consumables and medicines", "Patient satisfaction surveys", "Revenue and growth analytics"] }
    ],
    testimonial: { quote: "Before Clinic Manager, we were managing appointments on paper and billing on a separate system. Now everything is in one place, our staff is less stressed, and patients actually get their follow-up reminders. It changed how we run the clinic.", name: "Dr. Arjun Mehta", role: "Founder, Mehta Family Clinic (3 branches)" }
  },
  inventorymanager: {
    badge: "SUPPLY CHAIN",
    title: "Inventory Manager",
    tagline: "Intelligence that anticipates demand.",
    description: "Real-time stock tracking with AI demand forecasting across multiple warehouses, eliminating stockouts and reducing excess inventory.",
    theme: { primary: "#d97706", primaryRgb: "217,119,6", light: "#fffbeb", border: "#fde68a", accent: "#b45309", soft: "rgba(217,119,6,0.08)", glow: "rgba(217,119,6,0.15)" },
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
    stats: [
      { value: "35%", label: "Reduction in excess stock", prior: "optimized capital" },
      { value: "89%", label: "Forecast accuracy", prior: "AI-driven models" },
      { value: "50%", label: "Faster order fulfillment", prior: "streamlined routing" }
    ],
    features: [
      { icon: Radar, title: "Real-Time Tracking", desc: "Monitor stock levels across all locations with automatic reorder alerts and low-stock notifications." },
      { icon: BarChart3, title: "Demand Forecasting", desc: "AI predicts future demand based on historical sales, seasonality, and market trends to optimize inventory." },
      { icon: Building2, title: "Multi-Warehouse", desc: "Manage inventory across multiple locations with inter-warehouse transfers and consolidated reporting." },
      { icon: Truck, title: "Supplier Portal", desc: "Streamline procurement with supplier catalogs, automated POs, and delivery tracking." },
      { icon: ScanLine, title: "Barcode Integration", desc: "Mobile scanning for receiving, picking, and cycle counting with batch and serial number tracking." },
      { icon: LineChart, title: "Analytics Dashboard", desc: "Track inventory turnover, carrying costs, and stockout rates with actionable insights." }
    ],
    capabilities: [
      { title: "Inventory Control", items: ["Multi-location stock management", "Batch and serial number tracking", "Barcode and QR code scanning", "Cycle counting and stock adjustments", "Inventory valuation (FIFO, LIFO, Weighted Average)"] },
      { title: "Procurement", items: ["Automated purchase order generation", "Supplier catalog and price comparison", "Vendor performance tracking", "Three-way matching (PO, GRN, Invoice)", "Procurement analytics and spend visibility"] },
      { title: "Warehouse Operations", items: ["Bin location management", "Pick, pack, and ship workflows", "Inter-warehouse transfers", "Goods receipt and quality check", "Mobile app for warehouse staff"] },
      { title: "AI & Forecasting", items: ["Demand forecasting with machine learning", "Automatic reorder point calculation", "Seasonal trend analysis", "Dead stock and slow-moving item alerts", "Optimal stock level recommendations"] }
    ],
    testimonial: { quote: "Inventory Manager's demand forecasting reduced our excess stock by 35% while eliminating stockouts. We finally have the right products at the right time.", name: "Rajesh Kumar", role: "Supply Chain Director, Bharat Retail Group" }
  },
  kitchendisplaysystem: {
    badge: "HOSPITALITY",
    title: "Kitchen Display System",
    tagline: "Kitchen system that never misses an order.",
    description: "Production-ready Kitchen Display System engineered for multi-branch synchronization and real-time order routing across every station.",
    theme: { primary: "#f59e0b", primaryRgb: "245,158,11", light: "#fffbeb", border: "#fde68a", accent: "#d97706", soft: "rgba(245,158,11,0.08)", glow: "rgba(245,158,11,0.15)" },
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    stats: [
      { value: "40%", label: "Faster ticket resolution", prior: "optimized routing" },
      { value: "99.9%", label: "Order accuracy rate", prior: "digital tracking" },
      { value: "0", label: "Lost orders since launch", prior: "100% reliable" }
    ],
    features: [
      { icon: MonitorPlay, title: "Kitchen Display System", desc: "Real-time order display with color-coded priority routing across grill, prep, and expo stations." },
      { icon: Network, title: "Multi-Branch Sync", desc: "Centralized control across all your locations with branch-specific menus and unified reporting." },
      { icon: Timer, title: "Order Routing", desc: "Smart routing sends each item to the right station automatically, eliminating kitchen confusion." },
      { icon: PackageMinus, title: "Inventory Depletion", desc: "Real-time ingredient tracking with automatic 86 alerts when items run low during service." },
      { icon: Activity, title: "Performance Analytics", desc: "Track ticket times, station efficiency, and peak hour performance to continuously optimize operations." },
      { icon: TerminalSquare, title: "POS Integration", desc: "Native integrations with Petpooja, Posist, and all major POS systems with zero manual re-entry." }
    ],
    capabilities: [
      { title: "Order Management", items: ["Real-time order display and routing", "Multi-station kitchen coordination", "Course and modifier management", "Order bump and recall controls", "Dine-in, takeaway, and delivery streams"] },
      { title: "Branch Operations", items: ["Centralized multi-location management", "Branch-specific menu and pricing", "Inter-branch inventory transfers", "Consolidated performance reporting", "Remote monitoring and alerts"] },
      { title: "Inventory & Recipes", items: ["Recipe costing and yield management", "Real-time ingredient consumption tracking", "Automated purchase order triggers", "Waste logging and variance reports", "Supplier management and ordering"] },
      { title: "Analytics & Reporting", items: ["Average ticket time by station and shift", "Menu item performance analysis", "Peak hour demand forecasting", "Staff productivity metrics", "Food cost and margin reports"] }
    ],
    testimonial: { quote: "Kitchen Display System eliminated the chaos in our kitchen. Orders route to the right station instantly and our ticket times dropped by 40%. It's the backbone of our operations now.", name: "Chef Anand Krishnamurthy", role: "Executive Chef, Spice Route Restaurants" }
  }
};
const SECTION_PATTERNS = {
  financemanager: (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px)`,
  // ledger lines
  crmportal: (rgb) => `radial-gradient(circle, rgba(${rgb},0.055) 1px, transparent 1px)`,
  // network nodes
  schoolmanager: (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px)`,
  // notebook ruled
  clinicmanager: (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.025) 1px, transparent 1px)`,
  // medical grid
  inventorymanager: (rgb) => `linear-gradient(rgba(${rgb},0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.03) 1px, transparent 1px)`,
  // warehouse grid
  kitchendisplaysystem: (rgb) => `repeating-linear-gradient(45deg, rgba(${rgb},0.025) 0px, rgba(${rgb},0.025) 1px, transparent 1px, transparent 22px)`
  // diagonal heat
};
const SECTION_PATTERN_SIZES = {
  financemanager: "100% 28px",
  crmportal: "26px 26px",
  schoolmanager: "100% 30px",
  clinicmanager: "100% 32px, 32px 100%",
  inventorymanager: "100% 36px, 36px 100%",
  kitchendisplaysystem: "auto"
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const FeatureCard = ({ icon: Icon, title, desc, theme, index }) => (
  // Outer shell provides the gradient border via padding:1px + gradient background
  /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeUp,
      style: {
        position: "relative",
        borderRadius: 22,
        padding: "1px",
        background: `linear-gradient(145deg,
                rgba(255,255,255,0.32) 0%,
                rgba(${theme.primaryRgb},0.48) 28%,
                rgba(255,255,255,0.04) 60%,
                rgba(${theme.primaryRgb},0.22) 100%)`,
        boxShadow: `0 18px 56px -14px rgba(0,0,0,0.58), 0 4px 18px rgba(${theme.primaryRgb},0.10)`,
        cursor: "default",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "scale(1.04) translateY(-5px)";
        e.currentTarget.style.boxShadow = `0 36px 80px -14px rgba(0,0,0,0.68), 0 8px 28px rgba(${theme.primaryRgb},0.30)`;
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = `0 18px 56px -14px rgba(0,0,0,0.58), 0 4px 18px rgba(${theme.primaryRgb},0.10)`;
      },
      children: /* @__PURE__ */ jsxs("div", { style: {
        borderRadius: 21,
        overflow: "hidden",
        backdropFilter: "blur(22px) saturate(180%) brightness(1.06)",
        WebkitBackdropFilter: "blur(22px) saturate(180%) brightness(1.06)",
        background: `linear-gradient(165deg,
                rgba(${theme.primaryRgb},0.14) 0%,
                rgba(${theme.primaryRgb},0.04) 42%,
                rgba(6,8,18,0.90) 100%)`,
        boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.22)",
        position: "relative"
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.70) 35%, rgba(255,255,255,0.70) 65%, transparent)",
          filter: "blur(0.8px)",
          zIndex: 10,
          pointerEvents: "none"
        } }),
        /* @__PURE__ */ jsxs("div", { style: {
          height: 112,
          background: `linear-gradient(135deg, rgba(${theme.primaryRgb},0.26) 0%, rgba(${theme.primaryRgb},0.07) 100%)`,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          position: "relative",
          overflow: "hidden"
        }, children: [
          /* @__PURE__ */ jsx("div", { style: {
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(3.8rem,6vw,5rem)",
            fontWeight: 800,
            color: `rgba(${theme.primaryRgb},0.22)`,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.05em",
            fontVariantNumeric: "tabular-nums"
          }, children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("div", { style: {
            width: 52,
            height: 52,
            borderRadius: 14,
            background: `rgba(${theme.primaryRgb},0.26)`,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.26)",
            boxShadow: `inset 0 1.5px 0 rgba(255,255,255,0.34), 0 6px 20px rgba(${theme.primaryRgb},0.52)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            flexShrink: 0
          }, children: /* @__PURE__ */ jsx(Icon, { size: 24, strokeWidth: 1.5 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { padding: "22px 24px 28px" }, children: [
          /* @__PURE__ */ jsx("h3", { style: {
            fontSize: 17,
            fontWeight: 700,
            color: "#f1f5f9",
            marginBottom: 10,
            letterSpacing: "-0.02em",
            lineHeight: 1.2
          }, children: title }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: 14, color: "#64748b", lineHeight: 1.72, margin: 0 }, children: desc })
        ] })
      ] })
    }
  )
);
const CapabilityGroup = ({ title, items, theme }) => /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, style: { position: "relative", paddingLeft: "1.75rem" }, children: [
  /* @__PURE__ */ jsx("div", { style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    background: `linear-gradient(to bottom, ${theme.primary}, rgba(${theme.primaryRgb},0.08) 80%, transparent)`
  } }),
  /* @__PURE__ */ jsx("div", { style: {
    position: "absolute",
    left: "-4px",
    top: "3px",
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: theme.primary,
    boxShadow: `0 0 14px 4px rgba(${theme.primaryRgb},0.55)`
  } }),
  /* @__PURE__ */ jsx("h4", { style: {
    fontSize: 11,
    fontWeight: 700,
    color: theme.primary,
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    margin: "0 0 20px"
  }, children: title }),
  /* @__PURE__ */ jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 }, children: items.map((item2, i) => /* @__PURE__ */ jsxs("li", { style: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#94a3b8", lineHeight: 1.62 }, children: [
    /* @__PURE__ */ jsx("div", { style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: theme.primary,
      flexShrink: 0,
      marginTop: 7,
      opacity: 0.65
    } }),
    item2
  ] }, i)) })
] });
function ProductPage({ productId }) {
  const data = PRODUCT_DATA[productId];
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  if (!data) return /* @__PURE__ */ jsx("div", { style: { padding: 80, textAlign: "center" }, children: "Product not found." });
  const { theme } = data;
  const px = isMobile ? "20px" : isTablet ? "32px" : "40px";
  const sectionPy = isMobile ? "72px 0" : "120px 0";
  const featuresColumns = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
  const capabilitiesColumns = isMobile ? "1fr" : "repeat(2, 1fr)";
  const statsColumns = isMobile ? "1fr" : "repeat(3, 1fr)";
  return /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, filter: "blur(4px)" },
        animate: { opacity: 1, filter: "blur(0px)" },
        exit: { opacity: 0, filter: "blur(4px)" },
        transition: { duration: 0.4 },
        style: { fontFamily: "'Inter', -apple-system, sans-serif", background: "#020617" },
        children: [
          /* @__PURE__ */ jsxs("section", { style: {
            background: "#020617",
            paddingTop: isMobile ? 100 : 140,
            position: "relative",
            overflow: "hidden"
          }, children: [
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", right: "-10%", top: "-10%", width: "70%", height: "100%", background: `radial-gradient(ellipse at center, ${theme.glow} 0%, transparent 60%)`, pointerEvents: "none", opacity: 0.8 } }),
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", left: "-5%", bottom: 0, width: "40%", height: "50%", background: `radial-gradient(circle at bottom, ${theme.soft} 0%, transparent 70%)`, pointerEvents: "none", opacity: 0.6 } }),
            /* @__PURE__ */ jsx(ProductParticles, { productId, primaryColor: theme.primary }),
            /* @__PURE__ */ jsx("div", { style: { maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }, children: /* @__PURE__ */ jsxs("div", { style: {
              display: "grid",
              gridTemplateColumns: isDesktop ? "1.1fr 0.9fr" : "1fr",
              gap: isDesktop ? 80 : 48,
              alignItems: "center"
            }, children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: "hidden",
                  animate: "visible",
                  variants: staggerContainer,
                  style: { paddingBottom: isMobile ? 40 : 80, position: "relative", zIndex: 10 },
                  children: [
                    /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: theme.border,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      padding: "6px 14px",
                      borderRadius: 100,
                      marginBottom: 24
                    }, children: [
                      /* @__PURE__ */ jsx("div", { style: { width: 6, height: 6, borderRadius: "50%", background: theme.primary, boxShadow: `0 0 10px ${theme.primary}` } }),
                      data.badge
                    ] }),
                    /* @__PURE__ */ jsx(motion.h1, { variants: fadeUp, style: {
                      fontSize: isMobile ? 38 : isTablet ? 52 : 64,
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.05,
                      margin: "0 0 20px",
                      letterSpacing: "-0.03em"
                    }, children: data.title }),
                    /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, style: {
                      fontSize: isMobile ? 18 : 22,
                      color: "#e2e8f0",
                      fontWeight: 400,
                      marginBottom: 16,
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em"
                    }, children: data.tagline }),
                    /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, style: {
                      fontSize: isMobile ? 15 : 17,
                      color: "#94a3b8",
                      lineHeight: 1.7,
                      marginBottom: 36,
                      maxWidth: 520
                    }, children: data.description }),
                    /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: /* @__PURE__ */ jsx(SteamButton, { children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          background: theme.primary,
                          color: "#fff",
                          border: "none",
                          borderRadius: 10,
                          padding: isMobile ? "14px 24px" : "16px 32px",
                          fontSize: isMobile ? 14 : 15,
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s",
                          boxShadow: `0 8px 24px -8px ${theme.primary}`,
                          width: isMobile ? "100%" : "auto",
                          justifyContent: isMobile ? "center" : "flex-start"
                        },
                        onClick: (e) => {
                          e.stopPropagation();
                          setIsProjectOpen(true);
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.background = theme.accent;
                          e.currentTarget.style.transform = "translateY(-2px)";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.background = theme.primary;
                          e.currentTarget.style.transform = "translateY(0)";
                        },
                        children: [
                          "Book a Demo ",
                          /* @__PURE__ */ jsx(ArrowRight, { size: 17 })
                        ]
                      }
                    ) }) })
                  ]
                }
              ),
              !isMobile && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 40 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  style: { position: "relative", zIndex: 10 },
                  children: /* @__PURE__ */ jsxs("div", { style: {
                    borderRadius: "24px 24px 0 0",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderBottom: "none",
                    boxShadow: "0 -20px 60px rgba(0,0,0,0.5)",
                    position: "relative",
                    height: isTablet ? 320 : 420
                  }, children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: data.heroImage,
                        alt: data.title,
                        fetchpriority: "high",
                        style: { width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to top, #020617, transparent)" } })
                  ] })
                }
              ),
              isMobile && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.3 },
                  style: { position: "relative", zIndex: 10, marginLeft: -20, marginRight: -20 },
                  children: /* @__PURE__ */ jsxs("div", { style: { height: 220, overflow: "hidden", position: "relative" }, children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: data.heroImage,
                        alt: data.title,
                        fetchpriority: "high",
                        style: { width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) contrast(1.1)" }
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, #020617, transparent)" } }),
                    /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, #020617, transparent)" } })
                  ] })
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("section", { style: { background: `linear-gradient(to bottom, rgba(${theme.primaryRgb},0.10) 0%, rgba(${theme.primaryRgb},0.03) 100%), #06080e`, borderBottom: `1px solid rgba(${theme.primaryRgb},0.18)`, position: "relative", zIndex: 20 }, children: /* @__PURE__ */ jsx("div", { style: { maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }, children: /* @__PURE__ */ jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: statsColumns
          }, children: data.stats.map((stat, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12 },
              style: {
                padding: isMobile ? "36px 20px" : "56px 40px",
                borderRight: !isMobile && i < 2 ? `1px solid rgba(${theme.primaryRgb},0.12)` : "none",
                borderBottom: isMobile && i < 2 ? `1px solid rgba(${theme.primaryRgb},0.12)` : "none",
                textAlign: "center",
                position: "relative",
                overflow: "hidden"
              },
              children: [
                /* @__PURE__ */ jsx("div", { style: {
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse 90% 80% at 50% 110%, rgba(${theme.primaryRgb},0.13), transparent)`,
                  pointerEvents: "none"
                } }),
                /* @__PURE__ */ jsx("div", { style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 10,
                  fontWeight: 700,
                  color: theme.primary,
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  padding: "3px 11px",
                  borderRadius: 100,
                  border: `1px solid rgba(${theme.primaryRgb},0.32)`,
                  background: `rgba(${theme.primaryRgb},0.09)`,
                  marginBottom: 14,
                  position: "relative"
                }, children: stat.prior }),
                /* @__PURE__ */ jsx("div", { style: {
                  fontSize: isMobile ? 44 : 58,
                  fontWeight: 800,
                  color: theme.primary,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 12,
                  position: "relative",
                  fontVariantNumeric: "tabular-nums"
                }, children: stat.value }),
                /* @__PURE__ */ jsx("div", { style: { fontSize: 13, color: "#71717a", fontWeight: 500, lineHeight: 1.45, position: "relative" }, children: stat.label })
              ]
            },
            i
          )) }) }) }),
          /* @__PURE__ */ jsx("section", { style: {
            padding: sectionPy,
            backgroundImage: [
              SECTION_PATTERNS[productId]?.(theme.primaryRgb),
              `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(${theme.primaryRgb},0.08) 0%, transparent 60%)`
            ].filter(Boolean).join(", "),
            backgroundSize: [
              SECTION_PATTERN_SIZES[productId] ?? "auto",
              "100% 100%"
            ].join(", "),
            backgroundColor: "#020617"
          }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }, children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-60px" },
                variants: staggerContainer,
                style: { marginBottom: isMobile ? 48 : 72, position: "relative" },
                children: [
                  /* @__PURE__ */ jsx("div", { style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: "clamp(4rem,8vw,7rem)",
                    fontWeight: 900,
                    color: `rgba(${theme.primaryRgb},0.035)`,
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    lineHeight: 1
                  }, children: data.title.toUpperCase() }),
                  /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                    justifyContent: "center"
                  }, children: [
                    /* @__PURE__ */ jsx("div", { style: { height: 1, width: 48, background: `linear-gradient(to right, transparent, rgba(${theme.primaryRgb},0.45))` } }),
                    /* @__PURE__ */ jsx("span", { style: {
                      fontSize: 11,
                      fontWeight: 700,
                      color: theme.primary,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em"
                    }, children: "Core Features" }),
                    /* @__PURE__ */ jsx("div", { style: { height: 1, width: 48, background: `linear-gradient(to left, transparent, rgba(${theme.primaryRgb},0.45))` } })
                  ] }),
                  /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, style: {
                    fontSize: isMobile ? 28 : isTablet ? 34 : 42,
                    fontWeight: 800,
                    color: "#f1f5f9",
                    letterSpacing: "-0.03em",
                    margin: "0 0 14px",
                    textAlign: "center"
                  }, children: "Built for every edge case." }),
                  /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, style: {
                    fontSize: isMobile ? 15 : 17,
                    color: "#64748b",
                    margin: 0,
                    maxWidth: 520,
                    marginInline: "auto",
                    lineHeight: 1.65,
                    textAlign: "center"
                  }, children: "Purpose-built features that work together seamlessly — designed around how your team actually operates." })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                variants: staggerContainer,
                style: { display: "grid", gridTemplateColumns: featuresColumns, gap: isMobile ? 16 : 22 },
                children: data.features.map((f, i) => /* @__PURE__ */ jsx(FeatureCard, { ...f, theme, index: i }, i))
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("section", { style: {
            padding: sectionPy,
            borderTop: `1px solid rgba(${theme.primaryRgb},0.10)`,
            backgroundImage: [
              SECTION_PATTERNS[productId]?.(theme.primaryRgb),
              `linear-gradient(to right, rgba(${theme.primaryRgb},0.07) 0%, transparent 55%)`
            ].filter(Boolean).join(", "),
            backgroundSize: [
              SECTION_PATTERN_SIZES[productId] ?? "auto",
              "100% 100%"
            ].join(", "),
            backgroundColor: "#06080e"
          }, children: /* @__PURE__ */ jsx("div", { style: { maxWidth: 1280, margin: "0 auto", padding: `0 ${px}` }, children: /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: staggerContainer, children: [
            /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, style: { marginBottom: isMobile ? 40 : 64, position: "relative" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }, children: [
                /* @__PURE__ */ jsx("div", { style: {
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: `rgba(${theme.primaryRgb},0.12)`,
                  border: `1px solid rgba(${theme.primaryRgb},0.30)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }, children: /* @__PURE__ */ jsx("div", { style: { width: 10, height: 10, borderRadius: 3, background: theme.primary, opacity: 0.85 } }) }),
                /* @__PURE__ */ jsx("span", { style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: theme.primary, textTransform: "uppercase" }, children: "Full Capability Stack" })
              ] }),
              /* @__PURE__ */ jsx("h2", { style: {
                fontSize: isMobile ? 26 : isTablet ? 32 : 42,
                fontWeight: 800,
                color: "#f1f5f9",
                letterSpacing: "-0.03em",
                margin: "0 0 12px",
                maxWidth: 560
              }, children: "Built for complex workflows." }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: 15, color: "#64748b", lineHeight: 1.65, margin: 0, maxWidth: 480 }, children: "Every feature connects. Every workflow is accounted for." })
            ] }),
            /* @__PURE__ */ jsx("div", { style: {
              display: "grid",
              gridTemplateColumns: capabilitiesColumns,
              gap: isMobile ? "40px 0" : "56px 80px"
            }, children: data.capabilities.map((cap, i) => /* @__PURE__ */ jsx(CapabilityGroup, { ...cap, theme }, i)) })
          ] }) }) }),
          /* @__PURE__ */ jsxs("section", { style: { background: theme.primary, padding: isMobile ? "72px 0" : "100px 0", position: "relative", overflow: "hidden" }, children: [
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" } }),
            /* @__PURE__ */ jsxs("div", { style: { maxWidth: 820, margin: "0 auto", padding: `0 ${px}`, textAlign: "center", position: "relative", zIndex: 10 }, children: [
              /* @__PURE__ */ jsx(Quote, { size: isMobile ? 36 : 48, color: "rgba(255,255,255,0.2)", style: { margin: "0 auto 28px" } }),
              /* @__PURE__ */ jsxs("blockquote", { style: {
                fontSize: isMobile ? 18 : 24,
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.6,
                margin: "0 0 32px",
                letterSpacing: "-0.01em"
              }, children: [
                '"',
                data.testimonial.quote,
                '"'
              ] }),
              /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center", gap: 4, marginBottom: 14 }, children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 16, fill: "#fbbf24", color: "#fbbf24" }, i)) }),
              /* @__PURE__ */ jsx("div", { style: { fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }, children: data.testimonial.name }),
              /* @__PURE__ */ jsx("div", { style: { fontSize: 14, color: "rgba(255,255,255,0.8)" }, children: data.testimonial.role })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { style: { background: "#020617", padding: isMobile ? "72px 0" : "120px 0", textAlign: "center", position: "relative", overflow: "hidden" }, children: [
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 80% at 50% 100%, ${theme.glow}, transparent)`, pointerEvents: "none" } }),
            /* @__PURE__ */ jsxs("div", { style: { maxWidth: 600, margin: "0 auto", padding: `0 ${px}`, position: "relative", zIndex: 1 }, children: [
              /* @__PURE__ */ jsx("h2", { style: {
                fontSize: isMobile ? 30 : 42,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                margin: "0 0 16px"
              }, children: "Ready to take control?" }),
              /* @__PURE__ */ jsxs("p", { style: { fontSize: isMobile ? 15 : 17, color: "#94a3b8", marginBottom: 40, lineHeight: 1.6 }, children: [
                "Join the industry leaders using ",
                data.title,
                " to transform their daily operations."
              ] }),
              /* @__PURE__ */ jsx(SteamButton, { children: /* @__PURE__ */ jsx(
                "button",
                {
                  style: {
                    background: theme.primary,
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: isMobile ? "14px 28px" : "16px 36px",
                    fontSize: isMobile ? 15 : 16,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    boxShadow: `0 8px 24px -8px ${theme.primary}`,
                    width: isMobile ? "100%" : "auto"
                  },
                  onClick: (e) => {
                    e.stopPropagation();
                    setIsProjectOpen(true);
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = theme.accent;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = theme.primary;
                    e.currentTarget.style.transform = "translateY(0)";
                  },
                  children: "Book a Demo"
                }
              ) }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: 13, color: "#475569", marginTop: 20, fontWeight: 500 }, children: "No credit card required · Free forever plan available" })
            ] })
          ] })
        ]
      },
      productId
    ),
    /* @__PURE__ */ jsx(ProjectModal, { isOpen: isProjectOpen, onClose: () => setIsProjectOpen(false) })
  ] });
}
const PRODUCTS = {
  financemanager: {
    title: "Finance Manager",
    tagline: "Financial management that thinks ahead.",
    description: "Complete accounting, invoicing, tax compliance and cash flow forecasting — all in one intelligent platform designed for modern businesses."
  },
  crmportal: {
    title: "CRM Portal",
    tagline: "Relationships powered by intelligence.",
    description: "Track every deal, automate follow-ups, and personalise every customer touchpoint with AI-driven insights that close more sales."
  },
  schoolmanager: {
    title: "School Manager",
    tagline: "Run your school. Not just your spreadsheets.",
    description: "Admissions, attendance, fees, exams, and parent engagement — the full student lifecycle managed from one unified platform built for modern schools."
  },
  inventorymanager: {
    title: "Inventory Manager",
    tagline: "Intelligence that anticipates demand.",
    description: "Real-time stock tracking with AI demand forecasting across multiple warehouses, eliminating stockouts and reducing excess inventory."
  },
  clinicmanager: {
    title: "Clinic Manager",
    tagline: "Less paperwork. More patient care.",
    description: "A complete clinic operations platform — appointments, patient records, prescriptions, billing, and follow-ups — for solo practitioners and multi-branch clinics."
  },
  kitchendisplaysystem: {
    title: "Kitchen Display System",
    tagline: "Kitchen system that never misses an order.",
    description: "Production-ready Kitchen Display System engineered for multi-branch synchronization and real-time order routing across every station."
  }
};
async function loader({
  params
}) {
  const product2 = PRODUCTS[params.productId];
  if (!product2) throw new Response("Not Found", {
    status: 404
  });
  return {
    productId: params.productId,
    product: product2
  };
}
const meta = ({
  data
}) => {
  if (!data) return [{
    title: "Product | Entropic System"
  }];
  const {
    productId,
    product: product2
  } = data;
  const url = `https://www.entropicsystem.com/products/${productId}`;
  const title = `${product2.title} | Entropic System`;
  return [{
    title
  }, {
    name: "description",
    content: product2.description
  }, {
    tagName: "link",
    rel: "canonical",
    href: url
  }, {
    property: "og:title",
    content: title
  }, {
    property: "og:description",
    content: product2.description
  }, {
    property: "og:url",
    content: url
  }, {
    property: "og:type",
    content: "website"
  }, {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product2.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: product2.description,
      publisher: {
        "@type": "Organization",
        name: "Entropic System",
        url: "https://www.entropicsystem.com"
      }
    }
  }, {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.entropicsystem.com/"
      }, {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.entropicsystem.com/"
      }, {
        "@type": "ListItem",
        position: 3,
        name: product2.title,
        item: url
      }]
    }
  }];
};
const product = UNSAFE_withComponentProps(function ProductRoute() {
  const {
    productId
  } = useLoaderData();
  return /* @__PURE__ */ jsx(ProductPage, {
    productId
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: product,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-u-ZdA-VM.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-CM9AXuss.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/ProjectModal-CE8248eW.js", "/assets/SchedulingModal-CgG9sDtV.js", "/assets/use-transform-BRL__9zd.js", "/assets/proxy-UFlux061.js", "/assets/index-DuycCeL5.js", "/assets/users-DX4D1Uh7.js", "/assets/zap-BtTqhRdj.js", "/assets/package-DKJ_rfrq.js", "/assets/createLucideIcon-CE0OdhJh.js", "/assets/EntropicCanvas-kbWxkzoE.js", "/assets/SparkleButton-S01okVzW.js", "/assets/message-circle-f5o1F8nX.js", "/assets/arrow-right-BT7_QW2p.js", "/assets/cpu-C-Sagl-X.js"], "css": ["/assets/root-6XoEULBY.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-B2r5RF5V.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/SchedulingModal-CgG9sDtV.js", "/assets/SteamButton-Ci2qJOkS.js", "/assets/proxy-UFlux061.js", "/assets/EntropicCanvas-kbWxkzoE.js", "/assets/use-transform-BRL__9zd.js", "/assets/cpu-C-Sagl-X.js", "/assets/createLucideIcon-CE0OdhJh.js", "/assets/package-DKJ_rfrq.js", "/assets/zap-BtTqhRdj.js", "/assets/layers-DX_63VUc.js", "/assets/arrow-right-BT7_QW2p.js", "/assets/users-DX4D1Uh7.js", "/assets/file-text-CszcwQkF.js"], "css": ["/assets/home-BQxVGf3O.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/about-igMiRCVw.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/EntropicCanvas-kbWxkzoE.js", "/assets/proxy-UFlux061.js", "/assets/arrow-right-BT7_QW2p.js", "/assets/layers-DX_63VUc.js", "/assets/cpu-C-Sagl-X.js", "/assets/createLucideIcon-CE0OdhJh.js"], "css": ["/assets/about-BxgEj717.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/contact-q15AMvfM.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/index-DuycCeL5.js", "/assets/EntropicCanvas-kbWxkzoE.js", "/assets/message-circle-f5o1F8nX.js", "/assets/createLucideIcon-CE0OdhJh.js", "/assets/arrow-right-BT7_QW2p.js"], "css": ["/assets/contact-CrF7JGsN.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/privacy-Bg3IIsPP.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/legal-CjkeweUA.js", "/assets/createLucideIcon-CE0OdhJh.js"], "css": ["/assets/legal-B17GjrMn.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/terms": { "id": "routes/terms", "parentId": "root", "path": "terms", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/terms-ltV-en6T.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/legal-CjkeweUA.js", "/assets/createLucideIcon-CE0OdhJh.js"], "css": ["/assets/legal-B17GjrMn.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/solutions": { "id": "routes/solutions", "parentId": "root", "path": "solutions", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/solutions-C-B__5tg.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/proxy-UFlux061.js", "/assets/use-transform-BRL__9zd.js"], "css": ["/assets/solutions-DTuaXh9t.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/solutions.layer": { "id": "routes/solutions.layer", "parentId": "root", "path": "solutions/:layer", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/solutions.layer-DRbeC6Zw.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/SchedulingModal-CgG9sDtV.js", "/assets/use-transform-BRL__9zd.js", "/assets/proxy-UFlux061.js", "/assets/ProjectModal-CE8248eW.js", "/assets/SparkleButton-S01okVzW.js", "/assets/SteamButton-Ci2qJOkS.js", "/assets/EntropicCanvas-kbWxkzoE.js", "/assets/arrow-right-BT7_QW2p.js", "/assets/cpu-C-Sagl-X.js", "/assets/zap-BtTqhRdj.js", "/assets/layers-DX_63VUc.js", "/assets/createLucideIcon-CE0OdhJh.js", "/assets/index-DuycCeL5.js"], "css": ["/assets/solutions-DyTM_k6d.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/product": { "id": "routes/product", "parentId": "root", "path": "products/:productId", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/product-Bj4Y8FDQ.js", "imports": ["/assets/chunk-6CSD65Y2-CnEloSFt.js", "/assets/ProjectModal-CE8248eW.js", "/assets/SteamButton-Ci2qJOkS.js", "/assets/createLucideIcon-CE0OdhJh.js", "/assets/users-DX4D1Uh7.js", "/assets/file-text-CszcwQkF.js", "/assets/message-circle-f5o1F8nX.js", "/assets/zap-BtTqhRdj.js", "/assets/proxy-UFlux061.js", "/assets/arrow-right-BT7_QW2p.js", "/assets/index-DuycCeL5.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-f1e5b9ef.js", "version": "f1e5b9ef", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "v8_passThroughRequests": false, "v8_trailingSlashAwareDataRequests": false, "unstable_previewServerPrerendering": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = ["/", "/solutions", "/solutions/core", "/solutions/emerging", "/solutions/vision", "/products/financemanager", "/products/crmportal", "/products/schoolmanager", "/products/inventorymanager", "/products/clinicmanager", "/products/kitchendisplaysystem", "/about", "/contact", "/privacy", "/terms"];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/terms": {
    id: "routes/terms",
    parentId: "root",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/solutions": {
    id: "routes/solutions",
    parentId: "root",
    path: "solutions",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/solutions.layer": {
    id: "routes/solutions.layer",
    parentId: "root",
    path: "solutions/:layer",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/product": {
    id: "routes/product",
    parentId: "root",
    path: "products/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
