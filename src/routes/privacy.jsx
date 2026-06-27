import PrivacyPolicy from "../components/PrivacyPolicy";

export const meta = () => [
    { title: "Privacy Policy | Entropic System" },
    { name: "description", content: "How Entropic System collects, uses, and protects the information you share with us — including details on third-party services and your data rights." },
    { tagName: "link", rel: "canonical", href: "https://www.entropicsystem.com/privacy" },
    { name: "robots", content: "noindex, follow" },
    { property: "og:title", content: "Privacy Policy | Entropic System" },
    { property: "og:description", content: "How Entropic System collects, uses, and protects your information." },
    { property: "og:url", content: "https://www.entropicsystem.com/privacy" },
];

export default function PrivacyRoute() {
    return <PrivacyPolicy />;
}
