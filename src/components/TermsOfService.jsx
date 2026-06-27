import { AlertTriangle } from "lucide-react";
import "../styles/legal.css";

export default function TermsOfService() {
    return (
        <>
            <section className="lg-hero">
                <div className="lg-glow" aria-hidden="true" />
                <div className="lg-hero-inner">
                    <span className="lg-eyebrow">Terms of Service</span>
                    <h1 className="lg-headline">The terms behind using this site.</h1>
                    <p className="lg-lede">
                        These terms govern your use of entropicsystem.com. They're written in plain
                        language wherever possible — please read them before using the site or
                        contacting us through it.
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
                        <strong>This is a draft and a starting template — not a final, lawyer-reviewed
                            document.</strong> Placeholders below (registered entity name, governing
                        jurisdiction, dispute-resolution venue) must be completed and reviewed by a
                        qualified lawyer before this page is treated as binding.
                    </p>
                </div>
            </div>

            <section className="lg-body">
                <div className="lg-body-inner">

                    <div className="lg-section">
                        <h2>1. Acceptance of these terms</h2>
                        <p>
                            By browsing entropicsystem.com, submitting a form, booking a call, or
                            messaging us through it (together, the "Site"), you agree to these Terms of
                            Service. If you don't agree with them, please don't use the Site — you're
                            always welcome to reach us directly by email instead.
                        </p>
                        <p>
                            These terms apply to the <strong>website</strong> only. Any work we carry out
                            for you — building software, deploying AI systems, or providing consulting —
                            is governed by a separate, signed project agreement that takes precedence
                            over this page for that engagement.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>2. Who we are</h2>
                        <p>
                            Entropic System ("we", "us", "our") designs and ships production AI systems
                            and SaaS products, including Finance Manager, CRM Portal, School Manager,
                            Inventory Manager, Clinic Manager, and Kitchen Display System, alongside
                            custom AI agents, automation, and predictive ML engagements.
                        </p>
                        <p>
                            <em>
                                [Placeholder — to be completed: registered legal entity name, business
                                address, and company registration number, to be inserted once confirmed.]
                            </em>
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>3. Using this Site</h2>
                        <p>You agree to use the Site only for its intended purpose — to learn about what we do and get in touch with us. In particular, you agree not to:</p>
                        <ul>
                            <li>Submit false, misleading, or impersonated information through any form;</li>
                            <li>Attempt to disrupt, overload, or gain unauthorised access to the Site or the systems behind it;</li>
                            <li>Use automated tools to scrape, spam, or probe the Site or its forms; or</li>
                            <li>Use the Site, or anything on it, for any unlawful purpose.</li>
                        </ul>
                        <p>
                            We reserve the right to limit, suspend, or block access to the Site for
                            anyone who we reasonably believe is in breach of these terms.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>4. The chat assistant and forms</h2>
                        <p>
                            This Site includes a chat assistant and contact forms intended to help you
                            get information and reach our team. Responses from the chat assistant are
                            generated automatically and are provided for general guidance only — they
                            don't constitute professional advice, a quote, or a binding commitment on our
                            part. Anything submitted through a form or chat is reviewed by a person before
                            we act on it.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>5. Intellectual property</h2>
                        <p>
                            Everything on this Site — including its design, layout, text, graphics, logos,
                            and underlying code — belongs to Entropic System or our licensors, and is
                            protected by applicable intellectual-property laws. You may view and share
                            pages of this Site for personal, non-commercial reference. You may not copy,
                            republish, modify, or use our branding, content, or product names to represent
                            your own work or business without our prior written permission.
                        </p>
                        <p>
                            "Entropic System" and the names of our products (Finance Manager, CRM Portal,
                            School Manager, Inventory Manager, Clinic Manager, Kitchen Display System) are
                            our marks. Other product and company names mentioned on the Site may be the
                            trademarks of their respective owners.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>6. Links to other sites and services</h2>
                        <p>
                            This Site links out to third-party services we use or reference — for example,
                            WhatsApp for messaging, and the providers that power our forms and chat widget
                            (see our <a href="/privacy">Privacy Policy</a> for the full list). We don't
                            control those services, and we're not responsible for their content, policies,
                            or practices. Once you leave our Site, their terms and privacy policies apply.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>7. No warranty</h2>
                        <p>
                            We try to keep the information on this Site accurate, current, and available,
                            but we make no promises or guarantees — express or implied — about its
                            completeness, accuracy, reliability, or availability. The Site, and everything
                            on it, is provided "as is" and "as available", without warranties of any kind,
                            to the fullest extent permitted by law.
                        </p>
                        <p>
                            Nothing on this Site is professional, financial, legal, or technical advice
                            specific to your situation. Descriptions of our products and services are for
                            general information — the specifics of any engagement are defined in a
                            separate written agreement between us.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>8. Limitation of liability</h2>
                        <p>
                            To the fullest extent permitted by law, Entropic System will not be liable for
                            any indirect, incidental, special, or consequential loss or damage arising
                            from your use of — or inability to use — this Site, including loss of data,
                            revenue, or business opportunity, even if we were advised such loss was
                            possible. Nothing in these terms limits any liability that cannot legally be
                            limited or excluded.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>9. Changes to these terms</h2>
                        <p>
                            We may revise these terms from time to time to reflect changes to the Site or
                            how we operate. When we do, we'll update the "Last updated" date at the top of
                            this page. Continuing to use the Site after a change means you accept the
                            revised terms.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>10. Governing law</h2>
                        <p>
                            These terms are governed by the laws of <em>[Placeholder — governing
                                jurisdiction, e.g. India / a specific state, to be confirmed]</em>, and any
                            disputes arising from them will be subject to the exclusive jurisdiction of
                            the courts located in <em>[Placeholder — city/venue to be confirmed]</em>,
                            without regard to conflict-of-law principles.
                        </p>
                    </div>

                    <div className="lg-section">
                        <h2>11. Contact us</h2>
                        <p>
                            Questions about these terms can be sent to{" "}
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
