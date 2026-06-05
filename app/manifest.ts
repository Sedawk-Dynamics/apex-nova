import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Apexnova Logistics",
    short_name: "Apexnova",
    description:
      "NCR-based, pan-India freight & logistics — FTL, PTL, NCR local delivery, corporate logistics & on-demand transport.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F1D4A",
    orientation: "portrait",
    icons: [
      {
        src: "/images/apexnova-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/apexnova-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "logistics", "transportation"],
    lang: "en-IN",
  };
}
