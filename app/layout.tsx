import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UK Fixed-Rate Bonds & Sovereign Yields | Independent Rate Comparison',
  description:
    'Access market-leading UK fixed-rate bonds and fixed deposits with contracted yields up to 8.20% p.a., FSCS protection up to £120,000, and comprehensive yield cashflow simulation.',
  keywords:
    'UK Fixed Rate Bonds, Sovereign Gilts UK, High Yield Fixed Deposits, FSCS Protected Bonds 2026, Fixed Income Comparison UK',
  authors: [{ name: 'Compare Bond Rates Limited' }],
  openGraph: {
    title: 'UK Fixed-Rate Bonds & Sovereign Yields | CompareBondRates.co.uk',
    description:
      'Discover wholesale institutional fixed-rate bonds up to 8.20% p.a. 100% free impartial service with FSCS statutory protection.',
    url: 'https://comparebondrates.co.uk',
    siteName: 'Compare Bond Rates UK',
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: '/assets/new-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1121433652562772');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}
      </head>

      <body className="bg-white text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        {children}
        <CookieBanner />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1121433652562772&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}