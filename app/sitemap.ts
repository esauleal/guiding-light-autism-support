import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://guidinglightautismsupport.org",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/services",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/resources",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/consultation",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/contact",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/journey",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/ask-guiding-light",
      lastModified: new Date(),
    },
    {
      url: "https://guidinglightautismsupport.org/downloads",
      lastModified: new Date(),
    },
  ];
}