import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/sections/Footer';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  display: 'swap',
});

const gambarino = localFont({
  variable: '--font-gambarino',
  src: '../../public/fonts/gambarino.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maison Lumière Paris :: Artisanal Fragrance House',
  description:
    'Maison Lumière — Artisanal luxury fragrances inspired by Parisian elegance. Each scent tells a story of refinement, passion, and timeless French savoir-faire',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${gambarino.variable} bg-neutural-900 font-sans text-white antialiased selection:bg-neutral-800/50`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
