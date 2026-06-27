import { index, route } from "@react-router/dev/routes";

/** @type {import('@react-router/dev/routes').RouteConfig} */
export default [
    index("routes/home.jsx"),
    route("about", "routes/about.jsx"),
    route("contact", "routes/contact.jsx"),
    route("privacy", "routes/privacy.jsx"),
    route("terms", "routes/terms.jsx"),
    route("solutions", "routes/solutions.jsx"),
    route("solutions/:layer", "routes/solutions.layer.jsx"),
    route("products/:productId", "routes/product.jsx"),
];

