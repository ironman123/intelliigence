import AboutSection from "../components/AboutUs";

export const meta = () => [
    { title: "About Us | Entropic System" },
    { name: "description", content: "Entropic System builds intelligence-grade software — enterprise RAG systems, workflow automation, predictive ML, and production SaaS engineered to ship and keep working." },
    { tagName: "link", rel: "canonical", href: "https://www.entropicsystem.com/about" },
    { property: "og:title", content: "About Us | Entropic System" },
    { property: "og:description", content: "We build intelligence-grade software that ships — and keeps working. Meet the company behind Entropic System's Core, Emerging, and Vision solution layers." },
    { property: "og:url", content: "https://www.entropicsystem.com/about" },
];

export default function AboutRoute() {
    return <AboutSection />;
}
