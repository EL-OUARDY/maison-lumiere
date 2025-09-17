'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from '@/components/animations/FadeIn';
import Menu from '@/components/shared/Menu';
import Link from 'next/link';
import RevealText from '@/components/animations/RevealText';
import Logo from '@/components/shared/Logo';
import Image from 'next/image';
import { Eases } from '@/lib/customEases';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [image, setImage] = useState<string>('.image-ignis');
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  // Blur header controls background when user scrolls down
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top-=1',
      end: 'max',
      onEnter: () => {
        document
          .querySelectorAll('.header .controls')
          .forEach((el) => el.classList.add('blured-bg'));
      },
      onLeaveBack: () => {
        document
          .querySelectorAll('.header .controls')
          .forEach((el) => el.classList.remove('blured-bg'));
      },
    });
  });

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

  function openMenu() {
    setShowMenu(true);
    gsap.set('.header .controls', {
      autoAlpha: 0,
    });
  }
  function closeMenu() {
    setShowMenu(false);
    gsap.to('header .controls', { autoAlpha: 1 });
  }

  return (
    <header className="header fixed top-0 left-0 z-50 flex w-full justify-between p-2 text-white md:p-4">
      <FadeIn
        vars={{ duration: 2, delay: 2 }}
        className="controls flex items-center gap-2 rounded-xl px-2 py-1 transition-all duration-50"
      >
        {/* Cart button */}
        <button className="cursor-pointer p-2">
          <svg
            className="size-6"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* User button */}
        <button className="cursor-pointer p-2">
          <svg
            className="size-6"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Search button */}
        <button className="cursor-pointer p-2">
          <svg
            className="size-6"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </FadeIn>

      <FadeIn
        vars={{ duration: 2, delay: 2 }}
        className="controls flex items-center rounded-full p-1 transition-all duration-50"
      >
        {/* Menu button */}
        <button className="cursor-pointer p-2" onClick={openMenu}>
          <svg
            className="size-6"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </FadeIn>

      <Menu open={showMenu} onClose={closeMenu}>
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
                className="image-container relative col-start-3 h-[40vw] w-[30vw] overflow-hidden md:col-start-4 md:h-[30vw] md:w-[20vw]"
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
                  <Link href="#" className="w-fit">
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
      </Menu>
    </header>
  );
}

export default Header;
