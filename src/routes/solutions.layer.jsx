import { useLoaderData } from "react-router";
import SolutionsPage from "../components/solutions/SolutionsPage";

const LAYERS = {
    core: { title: "Core AI Solutions | Entropic System", description: "Production-grade AI foundations for enterprises — RAG systems, NLP workflow automation, data engineering, and predictive ML built to ship and scale." },
    emerging: { title: "Emerging AI Applications | Entropic System", description: "Sector-specific AI for healthcare diagnostics, precision agriculture, smart cities, energy grid optimisation, and disaster response systems." },
    vision: { title: "Vision: Frontier AI Research | Entropic System", description: "Frontier-grade R&D — embodied AI, autonomous agent swarms, generative world models, neuro-symbolic reasoning, and brain-computer interface systems." },
};

export async function loader({ params }) {
    const meta = LAYERS[params.layer];
    if (!meta) throw new Response("Not Found", { status: 404 });
    return { layer: params.layer, meta };
}

const LAYER_LABELS = { core: "Core Solutions", emerging: "Emerging Applications", vision: "Vision Research" };

export const meta = ({ data }) => {
    const layer = data?.layer ?? "";
    const url = `https://www.entropicsystem.com/solutions/${layer}`;
    return [
        { title: data?.meta.title ?? "Solutions | Entropic System" },
        { name: "description", content: data?.meta.description ?? "" },
        { tagName: "link", rel: "canonical", href: url },
        { property: "og:title",       content: data?.meta.title ?? "Solutions | Entropic System" },
        { property: "og:description", content: data?.meta.description ?? "" },
        { property: "og:url",         content: url },
        { "script:ld+json": {
            "@context": "https://schema.org", "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home",      item: "https://www.entropicsystem.com/" },
                { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.entropicsystem.com/solutions" },
                { "@type": "ListItem", position: 3, name: LAYER_LABELS[layer] ?? layer, item: url },
            ],
        } },
    ];
};

export default function SolutionsLayerRoute() {
    const { layer } = useLoaderData();
    return <SolutionsPage layer={layer} />;
}
