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
  title: "UK Fixed-Rate Bonds & Sovereign Yields | Independent Rate Comparison",
  description: "Access market-leading UK fixed-rate bonds and fixed deposits with contracted yields up to 8.20% p.a., FSCS protection up to £120,000, and comprehensive yield cashflow simulation.",
  keywords: "UK Fixed Rate Bonds, Sovereign Gilts UK, High Yield Fixed Deposits, FSCS Protected Bonds 2026, Fixed Income Comparison UK",
  authors: [{ name: "Compare Bond Rates Limited" }],
  openGraph: {
    title: "UK Fixed-Rate Bonds & Sovereign Yields | CompareBondRates.co.uk",
    description: "Discover wholesale institutional fixed-rate bonds up to 8.20% p.a. 100% free impartial service with FSCS statutory protection.",
    url: "https://comparebondrates.co.uk",
    siteName: "Compare Bond Rates UK",
    locale: "en_GB",
    type: "website",
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
    <html lang="en-GB" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
