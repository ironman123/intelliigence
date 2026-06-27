import TermsOfService from "../components/TermsOfService";

export const meta = () => [
    { title: "Terms of Service | Entropic System" },
    { name: "description", content: "The terms governing your use of the Entropic System website — acceptable use, intellectual property, third-party links, and liability." },
    { tagName: "link", rel: "canonical", href: "https://www.entropicsystem.com/terms" },
    { name: "robots", content: "noindex, follow" },
    { property: "og:title", content: "Terms of Service | Entropic System" },
    { property: "og:description", content: "The terms governing your use of the Entropic System website." },
    { property: "og:url", content: "https://www.entropicsystem.com/terms" },
];

export default function TermsRoute() {
    return <TermsOfService />;
}
