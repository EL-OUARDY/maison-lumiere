import { Bounded } from '@/components/shared/Bounded';
import React from 'react';

function Video() {
  return (
    <Bounded className="relative min-h-screen bg-black">
      <h2 className="sr-only">Maison Lumière Introduction Video</h2>
      <video
        src="background.mp4"
        className="pointer-events-none absolute top-0 left-0 h-full w-full object-cover"
        playsInline
        autoPlay
        loop
        muted
      ></video>
    </Bounded>
  );
}

export default Video;
