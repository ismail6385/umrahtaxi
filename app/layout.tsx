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
  metadataBase: new URL('https://umrahtaxi.site'),
  title: 'Umrah Taxi | #1 Trusted Umrah & Hajj Taxi Service in KSA',
  description: 'Book reliable Umrah Taxi services for Makkah, Madinah, and Jeddah. Airport transfers, Ziyarat tours, and intercity travel with premium vehicles. 24/7 Service.',
  icons: {
    icon: '/favicon.svg',
    apple: '/logo.svg',
  },
  keywords: [
    // Primary Keywords
    'Umrah Taxi Service', 'Hajj Taxi Service', 'Makkah Taxi', 'Madinah Taxi',

    // Umrah & Religious Travel
    'Makkah to Madinah Taxi', 'Madinah to Makkah Transfer', 'Ziyarat Taxi Service',
    'Jeddah Airport to Makkah Taxi', 'Haramain Taxi',

    // Airport Transfer Keywords
    'Jeddah Airport Transfer', 'King Abdulaziz Airport Taxi', 'Madinah Airport Taxi',
    'Airport Pickup Makkah', 'Airport Drop Off Madinah',

    // City-Specific Keywords
    'Jeddah Taxi Service', 'Makkah Chauffeur', 'Madinah Taxi',
    'Taif Ziyarat', 'Badar Ziyarat',

    // Service Type Keywords
    'Luxury Umrah Taxi', 'VIP Umrah Transport', 'Private Driver Makkah',
    'GMC Yukon Makkah', 'Hiace For Umrah Group',

    // Long-tail Keywords
    'Best Umrah Taxi Service', 'Cheap Taxi Makkah to Madinah',
    'Reliable Jeddah Airport Taxi', 'Taxi for Ziyarat', 'Umrah Transportation'
  ],
  authors: [{ name: 'Umrah Taxi' }],
  creator: 'Umrah Taxi',
  publisher: 'Umrah Taxi',
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
    title: 'Umrah Taxi | #1 Trusted Pilgrim Transport Service',
    description: 'Experience comfortable and reliable Umrah taxi services. Makkah, Madinah, Jeddah Airport transfers. Book your ride today.',
    url: 'https://umrahtaxi.site',
    siteName: 'Umrah Taxi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://umrahtaxi.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Umrah Taxi - Premium Transport for Pilgrims',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umrah Taxi | Premium Umrah & Hajj Transport',
    description: 'Reliable airport transfers and Umrah taxi services. Makkah, Madinah, Jeddah. Book now!',
    images: ['https://umrahtaxi.site/twitter-image.jpg'],
    creator: '@umrahtaxi',
  },
  alternates: {
    canonical: 'https://umrahtaxi.site',
  },
  verification: {
    // google: 'TODO: Add new verification code',
  },
  category: 'Transportation Services',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#047857' }, // Emerald Green
    { media: '(prefers-color-scheme: dark)', color: '#047857' },
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
