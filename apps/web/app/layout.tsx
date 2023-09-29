// 'use client';

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

// // Self-invoking function to register the service worker
// (function registerServiceWorker() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }).catch(function(err) {
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   }
// })();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   // Check if service workers are supported
  //   if ('serviceWorker' in navigator) {
  //     // Register the service worker
  //     navigator.serviceWorker.register('/sw.js').then(function(registration) {
  //       console.log('ServiceWorker registration successful with scope: ', registration.scope);
  //     }, function(err) {
  //       console.log('ServiceWorker registration failed: ', err);
  //     });
  //   }
  // }, []); // <-- The empty array means this useEffect will run once after the component mounts
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
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function registerServiceWorker() {
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/sw.js').then(function(registration) {
                      console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    }).catch(function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    });
                  }
                })();
              `,
            }}
          />
      </head>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
