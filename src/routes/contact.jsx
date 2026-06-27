import ContactPage from "../components/ContactPage";

export const meta = () => [
    { title: "Contact | Entropic System" },
    { name: "description", content: "Tell Entropic System what you're building — one of our SaaS products or a custom AI system. We read every message ourselves and reply within 24 hours." },
    { tagName: "link", rel: "canonical", href: "https://www.entropicsystem.com/contact" },
    { property: "og:title", content: "Contact | Entropic System" },
    { property: "og:description", content: "Tell us what you're working on. We read every message ourselves and reply within 24 hours." },
    { property: "og:url", content: "https://www.entropicsystem.com/contact" },
];

export default function ContactRoute() {
    return <ContactPage />;
}
