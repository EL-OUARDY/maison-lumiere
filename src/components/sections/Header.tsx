'use client';
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import RevealText from '@/components/animations/RevealText';
import Logo from '@/components/shared/Logo';
import { Eases } from '@/lib/customEases';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const isAnimatingRef = useRef(false);

  // Blur header controls background when user scrolls down
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top-=1',
      toggleClass: {
        targets: '.header .controls',
        className: 'blured-bg',
      },
    });
  });

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  function openMenu() {
    if (isAnimatingRef.current) return;
    if (typeof window === 'undefined') return;

    setShowMenuItems(true);

    const tl = gsap.timeline({
      id: 'open-menu',
      onStart: () => {
        isAnimatingRef.current = true;
      },
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
    const clipPath = `polygon(0 0, 100% 0, 100% ${1.1 * window.innerHeight}px, 0 ${window.innerHeight}px`;

    tl.fromTo(
      menuContainerRef.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
      },
      {
        clipPath,
        duration: 1,
        ease: Eases.inOut,
      },
    )

      .fromTo(
        menuContentRef.current,
        {
          scale: 1.3,
          rotate: -7,
          y: -window.innerHeight / 2,
          opacity: 0.3,
        },
        {
          scale: 1,
          rotate: 0,
          y: 0,
          duration: 1,
          opacity: 1,
          ease: Eases.inOut,
        },
        0,
      );
  }

  function closeMenu() {
    if (isAnimatingRef.current) return;
    if (typeof window === 'undefined') return;
    const tl = gsap.timeline({
      id: 'close-menu',
      onStart: () => {
        isAnimatingRef.current = true;
      },
      onComplete: () => {
        isAnimatingRef.current = false;
        setShowMenuItems(false);
      },
    });
    const clipPath = `polygon(0 0px, 100% 0px, 100% ${1.1 * window.innerHeight}px, 0 ${window.innerHeight}px`;

    tl.fromTo(
      menuContainerRef.current,
      {
        clipPath,
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
        duration: 1,
        ease: Eases.inOut,
      },
    )

      .fromTo(
        menuContentRef.current,
        {
          scale: 1,
          rotate: 0,
          y: 0,
          opacity: 1,
        },
        {
          scale: 1.3,
          rotate: -7,
          y: -window.innerHeight / 2,
          duration: 1,
          opacity: 0.3,
          ease: Eases.inOut,
        },
        0,
      );
  }

  return (
    <header className="header fixed top-0 left-0 z-50 flex w-full justify-between p-2 text-white md:p-4">
      <FadeIn className="controls flex items-center gap-2 rounded-xl px-2 py-1 transition-all duration-50">
        {/* Cart */}
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

        {/* User */}
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

        {/* Search */}
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

      <FadeIn className="controls flex items-center rounded-full p-1 transition-all duration-50">
        {/* Menu */}
        <button className="cursor-pointer p-2" onClick={() => openMenu()}>
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

      {/* Menu panel */}
      <div
        ref={menuContainerRef}
        className="menu fixed inset-0 z-200 h-screen w-screen bg-neutral-950 p-4"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
        }}
      >
        <div
          ref={menuContentRef}
          className="menu-content relative flex size-full flex-col items-center justify-center [will-change:transform_opacity]"
        >
          <div className="menu-header relative w-full">
            {showMenuItems && (
              <>
                <FadeIn vars={{ delay: 0.5 }} className="absolute inset-4">
                  <div onClick={() => closeMenu()} className="cursor-pointer">
                    <Logo className="w-32" />
                  </div>
                </FadeIn>
                <FadeIn
                  vars={{ delay: 0.5 }}
                  className="close-btn flex items-center justify-between"
                >
                  <div className="ml-auto text-neutral-400 hover:text-white">
                    <button
                      className="cursor-pointer p-2"
                      onClick={() => closeMenu()}
                    >
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
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </FadeIn>
              </>
            )}
          </div>

          <div className="menu-body flex w-full flex-1 items-center justify-center">
            <div className="grid w-full grid-cols-12 items-center">
              <div className="image-container relative col-start-3 h-[30vw] w-[20vw]">
                <Image
                  src="/img/ignis-bottle.png"
                  alt=""
                  fill
                  sizes="50vw"
                  className="mx-auto block object-cover"
                />
              </div>
              {showMenuItems && (
                <div className="menu-links col-start-8 col-end-11 flex flex-2 flex-col justify-center gap-6 py-8">
                  <div className="main-links font-title flex flex-col gap-1 text-4xl">
                    <Link href="#" className="">
                      <RevealText delay={0.4} text={'Ignis'}></RevealText>
                    </Link>
                    <Link href="#" className="">
                      <RevealText delay={0.5} text={'Aqua'}></RevealText>
                    </Link>
                    <Link href="#" className="">
                      <RevealText delay={0.6} text={'Terra'}></RevealText>
                    </Link>
                    <Link href="#" className="">
                      <RevealText delay={0.7} text={'...More'}></RevealText>
                    </Link>
                  </div>
                  <div className="social-media flex flex-col">
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
              )}
            </div>
          </div>

          {showMenuItems && (
            <div className="menu-footer flex w-full items-center justify-between px-4">
              <div className="flex gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <FadeIn vars={{ delay: 0.8 }}>Our Story</FadeIn>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <FadeIn vars={{ delay: 0.8 }}>Heritage</FadeIn>
                </Link>
              </div>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FadeIn vars={{ delay: 0.8 }}>Contact Us</FadeIn>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
