import Lazy from '@/components/shared/Lazy';
import React from 'react';

function Video() {
  return (
    <Lazy rootMargin="1000px" className="bg-background relative min-h-dvh">
      <h2 className="sr-only">Maison Lumière Introduction Video</h2>
      <video
        src="background.mp4"
        className="pointer-events-none absolute top-0 left-0 h-full w-full object-cover"
        playsInline
        autoPlay
        loop
        muted
      ></video>
    </Lazy>
  );
}

export default Video;
