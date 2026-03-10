import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const SITE_URL = 'https://muebleydecoracion.com.ec'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}
