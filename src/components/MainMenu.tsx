import React, { useRef, useState } from 'react';
import Link from 'next/link';
import RevealText from '@/components/animations/RevealText';
import Logo from '@/components/shared/Logo';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Eases } from '@/lib/customEases';

gsap.registerPlugin(useGSAP);
function MainMenu() {
  const [image, setImage] = useState<string>('.image-ignis');
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  // Animate menu links
  useGSAP(
    () => {
      if (!imagesContainerRef.current) return;

      const imgs = imagesContainerRef.current.querySelectorAll('.image');
      const tl = gsap.timeline({
        id: 'image-animation',
        defaults: { ease: Eases.out },
      });
      // prettier-ignore
      tl.set(image, { zIndex: 3, }, 0)
        .to(imgs, { autoAlpha: 0 }, 0)
        .fromTo(image, 
          { autoAlpha: 0, scale: 1.3, rotate: 7 }, 
          { autoAlpha: 1, scale: 1, rotate: 0 }, 0);
    },
    { dependencies: [image] },
  );

  return (
    <div className="flex size-full flex-col">
      <div className="menu-header relative">
        <FadeIn vars={{ delay: 0.5 }}>
          <Link href="#" className="block w-fit cursor-pointer">
            <Logo className="w-42 p-2" />
          </Link>
        </FadeIn>
      </div>
      <div className="menu-body flex w-full flex-1 items-center justify-center">
        <div className="grid w-full grid-cols-12 items-center">
          <div
            ref={imagesContainerRef}
            className="image-container relative col-start-2 h-[50vw] w-[40vw] overflow-hidden sm:col-start-3 sm:h-[40vw] sm:w-[30vw] md:col-start-4 md:h-[30vw] md:w-[20vw]"
          >
            <Image
              src="/img/ignis.png"
              alt=""
              fill
              sizes="100vw"
              className="image image-ignis absolute inset-0 z-3 mx-auto block object-cover"
              style={{ objectPosition: '85% center' }}
            />
            <Image
              src="/img/aqua.png"
              alt=""
              fill
              sizes="100vw"
              className="image image-aqua invisible absolute inset-0 z-1 mx-auto block object-cover opacity-0"
              style={{ objectPosition: '85% center' }}
            />
            <Image
              src="/img/terra.png"
              alt=""
              fill
              sizes="100vw"
              className="image image-terra invisible absolute inset-0 z-1 mx-auto block object-cover opacity-0"
              style={{ objectPosition: '85% center' }}
            />
            <Image
              src="/img/making.jpg"
              alt=""
              fill
              sizes="100vw"
              className="image image-making invisible absolute inset-0 z-1 mx-auto block object-cover opacity-0"
              style={{ objectPosition: '85% center' }}
            />
          </div>
          <div className="menu-links col-start-9 col-end-11 flex flex-2 flex-col justify-center gap-6 py-8 md:col-start-8 md:col-end-11">
            <div className="main-links font-title flex w-fit flex-col gap-1 text-2xl md:text-4xl">
              <Link
                href="#"
                className="w-fit"
                onMouseOver={() => setImage('.image-ignis')}
              >
                <RevealText delay={0.4} text={'Ignis'}></RevealText>
              </Link>
              <Link
                href="#"
                className="w-fit"
                onMouseOver={() => setImage('.image-aqua')}
              >
                <RevealText delay={0.5} text={'Aqua'}></RevealText>
              </Link>
              <Link
                href="#"
                className="w-fit"
                onMouseOver={() => setImage('.image-terra')}
              >
                <RevealText delay={0.6} text={'Terra'}></RevealText>
              </Link>
              <Link
                href="#"
                className="w-fit"
                onMouseOver={() => setImage('.image-making')}
              >
                <RevealText delay={0.7} text={'...More'}></RevealText>
              </Link>
            </div>
            <div className="social-media flex w-fit flex-col">
              <Link href="#" className="text-gray-300 hover:text-white">
                <RevealText delay={0.8} text={'Instagram'}></RevealText>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <RevealText delay={0.9} text={'Pinterest'}></RevealText>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <RevealText delay={1} text={'Twitter'}></RevealText>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <RevealText delay={1.1} text={'LinkedIn'}></RevealText>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-footer flex w-full items-center justify-between px-4 text-sm">
        <div className="flex gap-4">
          <Link href="#" className="text-gray-300 hover:text-white">
            <FadeIn className="hover-line" vars={{ delay: 0.8 }}>
              Our Story
            </FadeIn>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <FadeIn className="hover-line" vars={{ delay: 0.8 }}>
              Heritage
            </FadeIn>
          </Link>
        </div>
        <Link href="#" className="text-gray-300 hover:text-white">
          <FadeIn className="hover-line" vars={{ delay: 0.8 }}>
            Contact Us
          </FadeIn>
        </Link>
      </div>
    </div>
  );
}

export default MainMenu;
