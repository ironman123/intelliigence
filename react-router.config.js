/** @type {import('@react-router/dev/config').Config} */
export default {
  ssr: true,
  appDirectory: "src",
  // Static export (no Node server): set ssr:false and list every URL here.
  prerender: [
    "/", "/solutions",
    "/solutions/core", "/solutions/emerging", "/solutions/vision",
    "/products/financemanager", "/products/crmportal", "/products/schoolmanager",
    "/products/inventorymanager", "/products/clinicmanager", "/products/kitchendisplaysystem",
    "/about", "/contact", "/privacy", "/terms",
  ],
};
