import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

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
  title: "Compare Bond Rates UK | Best UK Fixed-Rate Bonds & Return Calculator",
  description: "Compare the UK's best fixed-rate bonds with CompareBondRates.co.uk. Access market-leading rates up to 8.20% p.a., FSCS protection up to £120,000, and use our free bond return calculator.",
  keywords: "Compare Bond Rates UK, UK Fixed Rate Bonds, High Yield Bonds UK, Best Bond Rates 2026, FSCS Protected Bonds, Fixed Rate Savings",
  authors: [{ name: "Compare Bond Rates Limited" }],
  openGraph: {
    title: "Compare the UK's Best Bond Rates | CompareBondRates.co.uk",
    description: "Find exclusive institutional fixed-rate bonds up to 8.20% p.a. 100% free impartial service with FSCS protection.",
    url: "https://comparebondrates.co.uk",
    siteName: "Compare Bond Rates UK",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
