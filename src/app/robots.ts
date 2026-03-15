import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.drabdullahmaras.com.tr';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/iletisim-sonuc',
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
