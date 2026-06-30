import type { MetadataRoute } from "next";
import { brandName } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brandName} Premium Home Services`,
    short_name: brandName,
    description: "Premium home repair, emergency response, HVAC, roofing, plumbing, locksmith, electrical, and maintenance services in Indianapolis.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#f97316",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
