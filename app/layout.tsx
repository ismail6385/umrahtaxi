import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import StickyContactButton from '@/components/StickyContactButton';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Taxi Service KSA | Premium Chauffeur & Airport Transfer Saudi Arabia',
  description: 'Book premium chauffeur services in Saudi Arabia. Reliable airport transfers (Jeddah, Madinah, Riyadh), Umrah taxi, and luxury intercity travel. 24/7 Service.',
  keywords: [
    'Taxi Service KSA', 'Saudi Arabia Taxi', 'Jeddah Airport Transfer', 'Madinah Airport Taxi',
    'Riyadh Chauffeur', 'Umrah Taxi Service', 'Makkah to Madinah Taxi', 'Luxury Car Rental KSA',
    'Chauffeur Service Jeddah', 'Airport Pickup Saudi Arabia', 'VIP Transport KSA'
  ],
  openGraph: {
    title: 'Taxi Service KSA | Premium Chauffeur & Airport Transfer',
    description: 'Experience luxury and reliability with our top-tier chauffeur services in Saudi Arabia. Book your ride today.',
    url: 'https://taxiserviceksa.com',
    siteName: 'Taxi Service KSA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Service KSA | Premium Chauffeur Service',
    description: 'Reliable airport transfers and luxury chauffeur services in Saudi Arabia.',
  },
  alternates: {
    canonical: 'https://taxiserviceksa.com',
  },
  verification: {
    google: 'Belm0suIdEZOrTDlLuFKDh04Zjd66lvr6K5LAkPcwIo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <StickyContactButton />

        <ScrollToTop />
      </body>
    </html>
  );
}
