import Script from 'next/script';

export default function JsonLdLocalBusiness() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Umrah Taxi",
        "image": "https://umrahtaxi.site/logo.png",
        "description": "Premium Umrah taxi and Hajj transport services in Saudi Arabia. Professional airport transfers, Ziyarat tours, and luxury intercity travel.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressRegion": "Makkah Province",
            "addressLocality": "Jeddah"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.543333",
            "longitude": "39.172778"
        },
        "areaServed": [
            "Jeddah", "Makkah", "Madinah", "Riyadh", "Dammam", "Taif", "Al Khobar", "Yanbu"
        ],
        "url": "https://umrahtaxi.site",
        "priceRange": "$$",
        "openingHours": "Mo-Su 00:00-23:59",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "847"
        }
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
    );
}
