import localFont from 'next/font/local';

export const gambarino = localFont({
  variable: '--font-gambarino',
  src: '../../public/fonts/gambarino.woff2',
  display: 'swap',
});

export const futuraltBook = localFont({
  variable: '--font-futura-book',
  display: 'swap',
  weight: '400',
  src: [
    {
      path: '../../public/fonts/futuralt-book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futuralt-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
