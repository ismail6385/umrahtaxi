import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyContactButton from '@/components/StickyContactButton';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdOrganization from '@/components/JsonLdOrganization';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
import JsonLdService from '@/components/JsonLdService';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://taxiserviceksa.com'),
  title: 'Taxi Service KSA | #1 Premium Chauffeur & Airport Transfer in Saudi Arabia',
  description: 'Book premium chauffeur services in Saudi Arabia. Professional airport transfers in Jeddah, Madinah, Riyadh. Umrah taxi, luxury intercity travel, 24/7 service. Trusted by 10,000+ customers. Instant booking available.',
  icons: {
    icon: '/favicon.svg',
    apple: '/logo.svg',
  },
  keywords: [
    // Primary Keywords
    'Taxi Service KSA', 'Saudi Arabia Taxi', 'Chauffeur Service Saudi Arabia', 'Premium Taxi KSA',

    // Airport Transfer Keywords
    'Jeddah Airport Transfer', 'King Abdulaziz Airport Taxi', 'Madinah Airport Taxi',
    'Prince Mohammad Airport Transfer', 'Riyadh Airport Transfer', 'King Khalid Airport Taxi',
    'Airport Pickup Saudi Arabia', 'Airport Drop Off KSA',

    // Umrah & Religious Travel
    'Umrah Taxi Service', 'Makkah to Madinah Taxi', 'Madinah to Makkah Transfer',
    'Ziyarat Taxi Service', 'Hajj Transportation', 'Holy Sites Transport',

    // City-Specific Keywords
    'Jeddah Taxi Service', 'Makkah Chauffeur', 'Madinah Taxi', 'Riyadh Chauffeur Service',
    'Dammam Taxi', 'Taif Transport Service', 'Al Khobar Taxi',

    // Intercity Keywords
    'Jeddah to Makkah Taxi', 'Riyadh to Dammam Transfer', 'Intercity Taxi KSA',
    'Long Distance Taxi Saudi Arabia', 'City to City Transfer KSA',

    // Service Type Keywords
    'Luxury Car Rental KSA', 'VIP Transport KSA', 'Executive Chauffeur Saudi Arabia',
    'Corporate Transportation KSA', 'Private Driver Saudi Arabia', 'Hourly Chauffeur Service',

    // Vehicle Keywords
    'GMC Yukon Rental KSA', 'Toyota Camry Taxi', 'Hyundai Staria Rental',
    'Luxury SUV Rental Saudi Arabia', 'Family Car Rental KSA',

    // Long-tail Keywords
    'Best Taxi Service in Saudi Arabia', 'Reliable Airport Transfer Jeddah',
    'Professional Chauffeur Riyadh', 'Affordable Umrah Taxi', '24/7 Taxi Service KSA',
    'English Speaking Driver Saudi Arabia', 'Safe Taxi Service for Families'
  ],
  authors: [{ name: 'Taxi Service KSA' }],
  creator: 'Taxi Service KSA',
  publisher: 'Taxi Service KSA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Taxi Service KSA | #1 Premium Chauffeur & Airport Transfer in Saudi Arabia',
    description: 'Experience luxury and reliability with our top-tier chauffeur services in Saudi Arabia. Professional drivers, premium vehicles, 24/7 availability. Book your ride today and travel in comfort.',
    url: 'https://taxiserviceksa.com',
    siteName: 'Taxi Service KSA',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://taxiserviceksa.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taxi Service KSA - Premium Chauffeur Services in Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Service KSA | Premium Chauffeur & Airport Transfer',
    description: 'Reliable airport transfers and luxury chauffeur services across Saudi Arabia. Professional drivers, premium fleet, 24/7 service. Book now!',
    images: ['https://taxiserviceksa.com/twitter-image.jpg'],
    creator: '@taxiserviceksa',
  },
  alternates: {
    canonical: './',
  },
  verification: {
    google: 'Belm0suIdEZOrTDlLuFKDh04Zjd66lvr6K5LAkPcwIo',
  },
  category: 'Transportation Services',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EAB308' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-14M4JL9R6T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-14M4JL9R6T');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <JsonLdBreadcrumb />
        <JsonLdOrganization />
        <JsonLdLocalBusiness />
        <JsonLdService />
        {children}
        <Footer />
        <StickyContactButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
