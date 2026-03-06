import { MetadataRoute } from 'next'

const SITE_URL = 'https://muebleydecoracion.com.ec'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date('2026-03-05'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/#quienes-somos`,
            lastModified: new Date('2026-03-05'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/#entradas`,
            lastModified: new Date('2026-03-05'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}
