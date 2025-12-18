import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://umrahtaxi.site'

    // Core static pages
    const routes = [
        '',
        '/about',
        '/contact',
        '/booking',
        '/gallery',
        '/faq',
        '/privacy-policy',
        '/terms-conditions',
        '/fleet',
        '/locations',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))

    // Location Landing Pages
    const locationPages = [
        '/locations/jeddah',
        '/locations/makkah',
        '/locations/madinah',
        '/locations/taif',
        '/locations/alula',
        '/locations/khayber-fort',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Fleet Detail Pages
    const fleetPages = [
        '/fleet/gmc-yukon',
        '/fleet/toyota-camry',
        '/fleet/hyundai-staria',
        '/fleet/toyota-hiace',
        '/fleet/toyota-coaster',
        '/fleet/hyundai-starex',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...routes, ...locationPages, ...fleetPages]
}
