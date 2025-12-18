import Script from 'next/script';

export default function JsonLdOrganization() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Umrah Taxi",
        "alternateName": "UmrahTaxi",
        "url": "https://umrahtaxi.site",
        "logo": "https://umrahtaxi.site/logo.png",
        "description": "Premium Umrah taxi and Hajj transport services across Saudi Arabia including airport transfers, Ziyarat tours, and intercity travel.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressRegion": "Makkah Province"
        },
        "sameAs": [
            "https://www.facebook.com/umrahtaxi",
            "https://www.instagram.com/umrahtaxi",
            "https://twitter.com/umrahtaxi"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-50-000-0000",
            "contactType": "customer service",
            "areaServed": "SA",
            "availableLanguage": ["en", "ar"]
        }
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
