import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/private/',
        '/api/',
        '/_next/',
        '/static/',
        '/*.js$',
        '/*.css$',
        '/*.map$',
      ],
    },
    sitemap: 'https://expitourmargarita.com/sitemap.xml',
    host: 'https://expitourmargarita.com',
  }
}
