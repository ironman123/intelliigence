import { useLoaderData } from "react-router";
import { ProductPage } from "../components/ProductPage";

// SEO copy mined from ProductPage.jsx — real, no placeholders.
const PRODUCTS = {
  financemanager:      { title: "Finance Manager",      tagline: "Financial management that thinks ahead.",      description: "Complete accounting, invoicing, tax compliance and cash flow forecasting — all in one intelligent platform designed for modern businesses." },
  crmportal:           { title: "CRM Portal",           tagline: "Relationships powered by intelligence.",       description: "Track every deal, automate follow-ups, and personalise every customer touchpoint with AI-driven insights that close more sales." },
  schoolmanager:       { title: "School Manager",        tagline: "Run your school. Not just your spreadsheets.", description: "Admissions, attendance, fees, exams, and parent engagement — the full student lifecycle managed from one unified platform built for modern schools." },
  inventorymanager:    { title: "Inventory Manager",     tagline: "Intelligence that anticipates demand.",        description: "Real-time stock tracking with AI demand forecasting across multiple warehouses, eliminating stockouts and reducing excess inventory." },
  clinicmanager:       { title: "Clinic Manager",        tagline: "Less paperwork. More patient care.",          description: "A complete clinic operations platform — appointments, patient records, prescriptions, billing, and follow-ups — for solo practitioners and multi-branch clinics." },
  kitchendisplaysystem:{ title: "Kitchen Display System", tagline: "Kitchen system that never misses an order.",   description: "Production-ready Kitchen Display System engineered for multi-branch synchronization and real-time order routing across every station." },
};

export async function loader({ params }) {
  const product = PRODUCTS[params.productId];
  if (!product) throw new Response("Not Found", { status: 404 });
  return { productId: params.productId, product };
}

export const meta = ({ data }) => {
  if (!data) return [{ title: "Product | Entropic System" }];
  const { productId, product } = data;
  const url = `https://www.entropicsystem.com/products/${productId}`;
  const title = `${product.title} | Entropic System`;
  return [
    { title },
    { name: "description", content: product.description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: product.description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { "script:ld+json": {
        "@context": "https://schema.org", "@type": "SoftwareApplication",
        name: product.title, applicationCategory: "BusinessApplication",
        operatingSystem: "Web", description: product.description,
        publisher: { "@type": "Organization", name: "Entropic System", url: "https://www.entropicsystem.com" },
      } },
    { "script:ld+json": {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",     item: "https://www.entropicsystem.com/" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://www.entropicsystem.com/" },
          { "@type": "ListItem", position: 3, name: product.title, item: url },
        ],
      } },
  ];
};

export default function ProductRoute() {
  const { productId } = useLoaderData();
  return <ProductPage productId={productId} />;
}


