import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.royaltracklandscaping.com/", lastModified: new Date() },
    { url: "https://www.royaltracklandscaping.com/#about", lastModified: new Date() },
    { url: "https://www.royaltracklandscaping.com/#services", lastModified: new Date() },
    { url: "https://www.royaltracklandscaping.com/#contact", lastModified: new Date() },
  ];
}
