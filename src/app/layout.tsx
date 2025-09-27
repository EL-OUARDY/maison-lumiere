import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from '@/components/sections/Footer';
import { gambarino, futuraltBook } from '@/lib/fonts';
import Header from '@/components/sections/Header';
import LenisScrollProvider from '@/components/shared/LenisScrollProvider';
import { ViewTransitions } from 'next-view-transitions';
import ImagePreloader from '@/components/ImagePreloader';

export const metadata: Metadata = {
  title: 'Maison Lumière Paris :: Artisanal Fragrance House',
  description:
    'Maison Lumière — Artisanal luxury fragrances inspired by Parisian elegance. Each scent tells a story of refinement, passion, and timeless French savoir-faire',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${futuraltBook.variable} ${gambarino.variable} selection:bg-primary/40 bg-background text-foreground font-sans antialiased`}
        >
          <LenisScrollProvider>
            <div className="page">
              <Header />
              <main>{children}</main>
              <Footer />
              <ImagePreloader />
            </div>
          </LenisScrollProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
