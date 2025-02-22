import { CartCountProvider } from '#/components/cart-count-context';
import { Header } from '#/components/header';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://partialprerendering.com'),
  title: 'Next.js Partial Prerendering',
  description: 'A demo of Next.js using Partial Prerendering.',
  openGraph: {
    title: 'Next.js Partial Prerendering',
    description: 'A demo of Next.js using Partial Prerendering.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`[color-scheme:dark] ${GeistSans.variable}`}>
      <body className="overflow-y-scroll bg-gray-1100 pb-36">
        <div>
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">
                <CartCountProvider>
                  <div className="space-y-10">
                    <Header />
                    {children}
                  </div>
                </CartCountProvider>
              </div>
            </div>
          </div>
        </div>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
