import { Suspense } from 'react';
import { Inter } from 'next/font/google';
// import { motion } from 'framer-motion';
import Loading from './loading';

import './global.css';


export const metadata = {
  title: 'Welcome to Jupiter System Space',
  description: 'Jupiter System Space',
  robots: {
    follow: true,
    index: true
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en" className={inter.variable}
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Jupiter System Space PWA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jupiter System Space PWA" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png"></link>
        <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jupiter System Space PWA App" />
        <meta property="og:description" content="Best Jupiter System Space PWA App in the world" />
        <meta property="og:site_name" content="Jupiter System Space PWA App" />
        {/* <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" /> */}
        {/* ... other meta tags */}
      </head>
      <body
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
