import SolutionsGateway from "../components/SolutionsGateway";

export const meta = () => [
    { title: "Solutions | Entropic System" },
    { name: "description", content: "Explore Entropic System's solution layers — Core, Emerging, and Vision — spanning enterprise AI, automation, and next-generation software engineering." },
    { tagName: "link", rel: "canonical", href: "https://www.entropicsystem.com/solutions" },
    { property: "og:title", content: "Solutions | Entropic System" },
    { property: "og:description", content: "Explore Entropic System's solution layers — Core, Emerging, and Vision — spanning enterprise AI, automation, and next-generation software engineering." },
    { property: "og:url", content: "https://www.entropicsystem.com/solutions" },
    { "script:ld+json": {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home",      item: "https://www.entropicsystem.com/" },
            { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.entropicsystem.com/solutions" },
        ],
    } },
];

export default function SolutionsRoute() {
    return <SolutionsGateway />;
}
