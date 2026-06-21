import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kgnpos.com";
  const now = new Date();
  return [
    { url: base,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/#ozellikler`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#moduller`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#fiyatlar`,           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/#hakkimizda`,         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#sss`,               lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gizlilik`,            lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/kullanim-sartlari`,   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
