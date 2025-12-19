import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://umrahtaxi.site'

    // Main pages
    const routes = [
        '',
        '/about',
        '/fleet',
        '/locations',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Fleet pages
    const fleetPages = [
        '/fleet/gmc-yukon',
        '/fleet/toyota-camry',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Location pages
    const locationPages = [
        '/locations/makkah',
        '/locations/madinah',
        '/locations/jeddah',
        '/locations/taif',
        '/locations/alula',
        '/locations/khayber-fort',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...fleetPages, ...locationPages]
}
