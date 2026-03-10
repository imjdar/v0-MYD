import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const SITE_URL = 'https://muebleydecoracion.com.ec'

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Si tuvieras más páginas en el futuro, las añadirías aquí:
        // {
        //   url: `${SITE_URL}/nosotros`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ]
}
