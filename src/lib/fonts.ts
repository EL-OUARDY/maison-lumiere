import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';

export const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  display: 'swap',
});

export const gambarino = localFont({
  variable: '--font-gambarino',
  src: '../../public/fonts/gambarino.woff2',
  display: 'swap',
});
