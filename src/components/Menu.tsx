'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import Logo from '@/components/shared/Logo';
import { Eases } from '@/lib/customEases';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Props {
  open: boolean;
  onClose: () => void;
}

gsap.registerPlugin(useGSAP);

function Menu({ open, onClose }: Props) {
  const [showMenuContent, setShowMenuContent] = useState<boolean>(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const isAnimatingRef = useRef(false);

  const openMenu = useCallback(() => {
    if (isAnimatingRef.current) return;
    if (typeof window === 'undefined') return;

    setShowMenuContent(true);

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
  }, []);

  const closeMenu = useCallback(() => {
    if (isAnimatingRef.current) return;
    if (typeof window === 'undefined') return;
    const tl = gsap.timeline({
      id: 'close-menu',
      onStart: () => {
        isAnimatingRef.current = true;
      },
      onComplete: () => {
        isAnimatingRef.current = false;
        setShowMenuContent(false);
        onClose();
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
  }, [onClose]);

  useEffect(() => {
    if (open) openMenu();
  }, [open, openMenu]);

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
  }, [closeMenu]);

  return (
    <div
      ref={menuContainerRef}
      className="menu fixed inset-0 z-200 h-screen w-screen bg-neutral-950 p-4"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
      }}
    >
      {
        <div
          ref={menuContentRef}
          className="menu-content relative flex size-full flex-col items-center justify-center [will-change:transform_opacity]"
        >
          {showMenuContent && (
            <>
              <div className="menu-header relative w-full">
                <FadeIn
                  vars={{ duration: 2, delay: 0.5 }}
                  className="absolute inset-4"
                >
                  <div onClick={() => closeMenu()} className="cursor-pointer">
                    <Logo className="w-32" />
                  </div>
                </FadeIn>
                <FadeIn
                  vars={{ duration: 2, delay: 0.5 }}
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
              </div>
              <div className="menu-body flex w-full flex-1 items-center justify-center">
                <div className="grid w-full grid-cols-12 items-center">
                  <div className="image-container relative col-start-4 h-[30vw] w-[20vw]">
                    <Image
                      src="/img/ignis.png"
                      alt=""
                      fill
                      sizes="90vw"
                      className="mx-auto block object-cover"
                      style={{ objectPosition: '85% center' }}
                    />
                  </div>
                  <div className="menu-links col-start-8 col-end-11 flex flex-2 flex-col justify-center gap-6 py-8">
                    <div className="main-links font-title flex flex-col gap-1 text-4xl">
                      <Link href="#">
                        <RevealText delay={0.4} text={'Ignis'}></RevealText>
                      </Link>
                      <Link href="#">
                        <RevealText delay={0.5} text={'Aqua'}></RevealText>
                      </Link>
                      <Link href="#">
                        <RevealText delay={0.6} text={'Terra'}></RevealText>
                      </Link>
                      <Link href="#">
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
                </div>
              </div>
              <div className="menu-footer flex w-full items-center justify-between px-4">
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-300 hover:text-white">
                    <FadeIn
                      className="hover-line"
                      vars={{ duration: 2, delay: 0.8 }}
                    >
                      Our Story
                    </FadeIn>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    <FadeIn
                      className="hover-line"
                      vars={{ duration: 2, delay: 0.8 }}
                    >
                      Heritage
                    </FadeIn>
                  </Link>
                </div>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <FadeIn
                    className="hover-line"
                    vars={{ duration: 2, delay: 0.8 }}
                  >
                    Contact Us
                  </FadeIn>
                </Link>
              </div>
            </>
          )}
        </div>
      }
    </div>
  );
}

export default Menu;
