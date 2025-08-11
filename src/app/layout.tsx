import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload if used above the fold
});

export const metadata: Metadata = {
  title: {
    default: "GSHI - Gente Seria y Honesta Invitational",
    template: "%s | GSHI Tournament"
  },
  description: "Official website for the Gente Seria y Honesta Invitational golf tournament. View player stats, tournament results, and upcoming events.",
  keywords: ["golf", "tournament", "GSHI", "Gente Seria y Honesta", "invitational", "golf competition"],
  authors: [{ name: "GSHI Tournament Organization" }],
  creator: "GSHI",
  publisher: "GSHI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#16a34a',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "GSHI - Gente Seria y Honesta Invitational",
    description: "Official website for the Gente Seria y Honesta Invitational golf tournament. View player stats, tournament results, and upcoming events.",
    siteName: "GSHI Tournament",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GSHI Tournament Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSHI - Gente Seria y Honesta Invitational",
    description: "Official website for the Gente Seria y Honesta Invitational golf tournament.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification tokens when available
    // google: "google-site-verification-token",
    // yandex: "yandex-verification-token",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#16a34a' },
    { media: '(prefers-color-scheme: dark)', color: '#15803d' }
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <div className="font-sans min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 flex flex-col">
            <Navbar />
            <div className="flex-1">
              <main id="main-content">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </ErrorBoundary>
        
        
        {/* Development tools - only in dev mode */}
        {process.env.NODE_ENV === 'development' && (
          <div id="development-tools" />
        )}
        
        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50 transition-all"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
