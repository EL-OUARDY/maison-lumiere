'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImagePreloader() {
  const [loaded, setLoaded] = useState<boolean>(false);

  const menuImages = [
    '/img/ignis.png',
    '/img/aqua.png',
    '/img/terra.png',
    '/img/luna.png',
    '/img/making.jpg',
    '/img/ignis-bottle.png',
    '/img/aqua-bottle.png',
    '/img/terra-bottle.png',
    '/img/luna-bottle.png',
  ];

  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loaded) return null;

  return (
    <div className="hidden">
      {menuImages.map((src) => (
        <Image key={src} src={src} alt="" width={1000} height={1000} priority />
      ))}
    </div>
  );
}
