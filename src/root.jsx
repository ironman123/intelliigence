import
    {
        Links, Meta, Outlet, Scripts, ScrollRestoration,
        useLocation, isRouteErrorResponse, useRouteError,
    } from "react-router";
import { AnimatePresence } from "framer-motion";

import NotchedNavbar from "./components/NotchedNavbar";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";

// global styles (RR emits these as <link> tags in the SSR <head>, no FOUC)
import "@fontsource-variable/inter"; // self-hosted Inter — no external request, no font FOUC
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";

// site-wide default meta (per-route meta in each route overrides title/description)
export const meta = () => [
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { name: "theme-color", content: "#070709" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Entropic System" },
    { property: "og:image", content: "https://www.entropicsystem.com/images/og-image.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Entropic System — Intelligence, Engineered." },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@entropicsystem" },
    { name: "twitter:image", content: "https://www.entropicsystem.com/images/og-image.png" },
    {
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
                availableLanguage: ["English", "Hindi"],
            },
            sameAs: ["https://www.linkedin.com/company/111516910"],
        },
    },
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Entropic System",
            url: "https://www.entropicsystem.com",
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://www.entropicsystem.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
            },
        },
    },
];

export const links = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@1,6..72,400&display=swap" },
    { rel: "icon", type: "image/png", href: "/images/favicon.png" },
    { rel: "apple-touch-icon", href: "/images/favicon.png" },
];

export function Layout({ children })
{
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

// persistent chrome + animated route outlet (this is your old App.jsx, restructured)
export default function Root()
{
    const location = useLocation();
    return (
        <>
            <NotchedNavbar />
            <ChatWidget />
            <AnimatePresence mode="wait">
                <div key={location.pathname} style={{ overflow: "visible" }}>
                    <Outlet />
                </div>
            </AnimatePresence>
            <Footer />
        </>
    );
}

// real 404 (fixes the soft-404 SEO bug)
export function ErrorBoundary()
{
    const error = useRouteError();
    const is404 = isRouteErrorResponse(error) && error.status === 404;
    return (
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#020617", color: "#fff", textAlign: "center" }}>
            <div>
                <h1>{is404 ? "404 — Page not found" : "Something went wrong"}</h1>
                <a href="/" style={{ color: "#60a5fa" }}>Go home</a>
            </div>
        </main>
    );
}

