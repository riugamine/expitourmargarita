import { MetadataRoute } from 'next'

/**
 * Sitemap configuration for Expitour Margarita
 * 
 * Next.js automatically generates the XML sitemap from this configuration.
 * The generated XML will include:
 * - XML declaration: <?xml version="1.0" encoding="UTF-8"?>
 * - URLSet with namespace: <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 * - Each URL with tags: <url>, <loc>, <lastmod>, <changefreq>, <priority>
 * 
 * Access the generated sitemap at: https://expitourmargarita.com/sitemap.xml
 * 
 * @returns {MetadataRoute.Sitemap} Array of URL objects for sitemap generation
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://expitourmargarita.com'
  const currentDate = new Date().toISOString()

  return [
    // Homepage - Main landing page
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Main Services Page - Overview of all services
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Tour Experiences - Detailed experiences page
    {
      url: `${baseUrl}/services/experiencias`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Accommodation Services - Hotel and lodging services
    {
      url: `${baseUrl}/services/alojamiento`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Air Tickets Services - Flight booking services
    {
      url: `${baseUrl}/services/boleteria`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Transfer Services - Transportation services
    {
      url: `${baseUrl}/services/traslado`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Host/Anfitrion Page - About the tour guide
    {
      url: `${baseUrl}/anfitrion`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
