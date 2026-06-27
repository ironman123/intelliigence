import { AlertTriangle } from "lucide-react";
import "../styles/legal.css";

export default function PrivacyPolicy() {
    return (
        <>
            <section className="lg-hero">
                <div className="lg-glow" aria-hidden="true" />
                <div className="lg-hero-inner">
                    <span className="lg-eyebrow">Privacy Policy</span>
                    <h1 className="lg-headline">How we handle your information.</h1>
                    <p className="lg-lede">
                        This policy explains what we collect when you use this website or get in touch
                        with us, why we collect it, who we share it with, and the choices you have.
                    </p>
                    <span className="lg-updated">
                        <strong>Last updated:</strong> 6 June 2026 &nbsp;·&nbsp; <strong>Effective:</strong> 6 June 2026
                    </span>
                </div>
            </section>

            <div className="lg-draft-notice">
                <div className="lg-draft-notice-inner">
                    <AlertTriangle size={18} className="lg-draft-notice-icon" />
                    <p>
                        <strong>This is a draft policy and a starting template — not a final, lawyer-reviewed
                            document.</strong> Several details below (registered entity name, business address,
                        Grievance Officer identity, and jurisdiction-specific clauses) are marked as placeholders
                        and must be completed and reviewed by a qualified lawyer in your jurisdiction before this
                        page is treated as binding or relied upon for compliance.
                    </p>
                </div>
            </div>

            <section className="lg-body">
                <div className="lg-body-inner">

                    <div className="lg-section">
                        <h2>1. Who we are</h2>
                        <p>
                            Entropic System ("we", "us", "our") designs and builds production AI systems and
                            SaaS products — including Finance Manager, CRM Portal, School Manager, Inventory
                            Manager, Clinic Manager, and Kitchen Display System, alongside custom AI agents,
                            automation, and predictive ML engagements.
                        </p>
                        <p>
                            <em>
                                [Placeholder — to be completed: registered legal entity name, business
                                address, and any applicable company registration number (e.g., CIN/GSTIN),
                                to be inserted here once confirmed.]
                            </em>
                        </p>
                        <p>
                            This policy applies to <strong>entropicsystem.com</strong> and any forms,
                            chat widgets, or scheduling tools embedded on it. It does not cover the
                            internal privacy practices of the standalone software products we build for
                            clients — those are governed by separate agreements with each client.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>2. Information we collect</h2>
                        <p>We only collect information that you choose to give us. Specifically:</p>
                        <ul>
                            <li>
                                <strong>Contact and project details</strong> — when you submit our contact
                                form, "Start a Project" form, or scheduling form, we collect your name,
                                email address, the type of project or product you're interested in, and
                                whatever details or messages you write.
                            </li>
                            <li>
                                <strong>Scheduling information</strong> — if you book a strategy call, we
                                collect the date, time, and any notes you provide for that call.
                            </li>
                            <li>
                                <strong>Conversations with our chat assistant</strong> — if you use the chat
                                widget in the corner of the site, the messages you send and receive are
                                processed by our chat provider (see Section 4).
                            </li>
                        </ul>
                        <p>
                            We do <strong>not</strong> ask for or knowingly collect sensitive personal
                            information (such as government ID numbers, financial account details, or
                            health information) through this website. Please don't include this kind of
                            information in any form or chat message.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>3. How we use your information</h2>
                        <p>We use the information you share with us to:</p>
                        <ul>
                            <li>Respond to your enquiry and discuss the project or product you asked about;</li>
                            <li>Schedule and prepare for calls or meetings you book with us;</li>
                            <li>Keep a record of conversations so our team has context across follow-ups;</li>
                            <li>Improve this website and the clarity of what we offer; and</li>
                            <li>Meet our legal, accounting, and security obligations.</li>
                        </ul>
                        <p>
                            We do not sell your personal information, and we do not use it to send
                            unsolicited marketing to third parties.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>4. Third-party services we use</h2>
                        <p>
                            To run this website and respond to you, we rely on a small number of trusted
                            service providers who process data on our behalf:
                        </p>
                        <ul>
                            <li>
                                <strong>Supabase</strong> — stores the information submitted through our
                                contact and project forms in a secured database.
                            </li>
                            <li>
                                <strong>EmailJS</strong> — delivers a notification email to our team when
                                you submit a form, so we can reply quickly.
                            </li>
                            <li>
                                <strong>Botpress</strong> — powers the chat widget on this site. If you
                                start a chat, your messages are processed by Botpress's hosted infrastructure
                                in order to generate responses and let our team follow up.
                            </li>
                            <li>
                                <strong>WhatsApp</strong> — if you choose to message us via the WhatsApp
                                link on our Contact page, that conversation is subject to WhatsApp's own
                                privacy policy, as it takes place on their platform.
                            </li>
                        </ul>
                        <p>
                            These providers only receive the information necessary to perform their
                            function for us, and are not permitted to use it for their own purposes.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>5. Cookies &amp; similar technology</h2>
                        <p>
                            This website itself does not use advertising or analytics-tracking cookies.
                            The embedded chat widget (Botpress) may set its own cookies or local-storage
                            entries to keep track of an ongoing conversation across page loads — this is
                            necessary for the chat to function and is controlled by that provider, not by
                            us directly.
                        </p>
                        <p>
                            You can clear cookies and site data for entropicsystem.com at any time through
                            your browser's settings. Doing so may reset any in-progress chat conversation.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>6. How long we keep your information</h2>
                        <p>
                            We keep enquiry and project details for as long as is reasonably necessary to
                            respond to you, pursue any resulting engagement, and meet our legal and
                            accounting obligations — and then delete or anonymise it. If we begin working
                            together formally, information relevant to that engagement is retained under
                            the terms of our project agreement instead of this policy.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>7. Your rights</h2>
                        <p>Depending on where you're located, you may have the right to:</p>
                        <ul>
                            <li>Ask us what personal information we hold about you, and request a copy;</li>
                            <li>Ask us to correct information that is inaccurate or incomplete;</li>
                            <li>Ask us to delete your information, where we're not required to keep it; and</li>
                            <li>Withdraw any consent you've previously given us, at any time.</li>
                        </ul>
                        <p>
                            To exercise any of these rights, email us at{" "}
                            <a href="mailto:entropicsys@gmail.com">entropicsys@gmail.com</a>{" "}
                            with "Privacy request" in the subject line. We'll respond within a reasonable
                            time and in line with applicable law.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>8. Grievance Officer (Digital Personal Data Protection Act, 2023)</h2>
                        <p>
                            In accordance with India's Digital Personal Data Protection Act, 2023 and its
                            rules, the following person can be contacted with any questions, concerns, or
                            complaints about how we handle your personal data:
                        </p>
                        <div className="lg-officer-block">
                            <p className="lg-officer-label">Grievance Officer</p>
                            <p><em>[Placeholder — name of designated Grievance Officer to be confirmed]</em></p>
                            <p>Entropic System</p>
                            <p>Email: <a href="mailto:entropicsys@gmail.com">entropicsys@gmail.com</a></p>
                            <p><em>[Placeholder — registered postal address to be confirmed]</em></p>
                        </div>
                        <p>
                            We aim to acknowledge grievances promptly and resolve them within the
                            timelines set out under applicable law.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>9. Children's privacy</h2>
                        <p>
                            This website is intended for businesses and professionals. It is not directed
                            at children, and we do not knowingly collect personal information from anyone
                            under the age of 18. If you believe a child has provided us with personal
                            information, please contact us and we will delete it.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>10. Changes to this policy</h2>
                        <p>
                            We may update this policy from time to time — for example, if we start using a
                            new tool or change how we handle enquiries. When we do, we'll update the "Last
                            updated" date at the top of this page. If a change is significant, we'll make
                            that clear on the site.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>11. Contact us</h2>
                        <p>
                            If you have any questions about this policy or how we handle your information,
                            reach us at{" "}
                            <a href="mailto:entropicsys@gmail.com">entropicsys@gmail.com</a>{" "}
                            or via WhatsApp at{" "}
                            <a href="https://wa.me/917060816597" target="_blank" rel="noopener noreferrer">
                                +91 70608 16597
                            </a>.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
