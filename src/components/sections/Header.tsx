'use client';
import React, { ReactNode, useRef, ButtonHTMLAttributes } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

// define a custom ease using a cubic-bezier
CustomEase.create('CustomEaseIn', 'M0,0 C0.198,0 1,0.1 1,1');
CustomEase.create('CustomEaseOut', 'M0,0 C0,0.202 0.204,1 1,1');
CustomEase.create('CustomEaseInOut', 'M0,0 C0.496,0.004 0,1 1,1');

function Header() {
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Blue header controls background when user scrolls down
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

  function openMenu() {
    if (typeof window === 'undefined') return;
    const clipPath = `polygon(0 0, 100% 0, 100% ${1.1 * window.innerHeight}px, 0 ${window.innerHeight}px`;
    gsap.fromTo(
      '.menu',
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
      },
      {
        clipPath,
        duration: 1,
        ease: 'CustomEaseInOut',
      },
    );

    gsap.fromTo(
      '.menu-content',
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
        ease: 'CustomEaseInOut',
      },
    );
  }

  function closeMenu() {
    if (typeof window === 'undefined') return;
    const clipPath = `polygon(0 0px, 100% 0px, 100% ${1.1 * window.innerHeight}px, 0 ${window.innerHeight}px`;
    gsap.fromTo(
      '.menu',
      {
        clipPath,
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
        duration: 1,
        ease: 'CustomEaseInOut',
      },
    );

    gsap.fromTo(
      '.menu-content',
      {
        scale: 1,
        rotate: 0,
        y: 0,
        opacity: 1,
      },
      {
        scale: 1.3,
        rotate: 7,
        y: -window.innerHeight / 2,
        duration: 1,
        opacity: 0.3,
        ease: 'CustomEaseInOut',
      },
    );
  }

  return (
    <header className="header fixed top-0 left-0 z-50 flex w-full justify-between p-2 text-white md:p-4">
      <FadeIn className="controls flex items-center rounded-full p-1 transition-all duration-50">
        {/* Menu */}
        <HeaderIcon onClick={() => openMenu()}>
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
        </HeaderIcon>
      </FadeIn>

      <FadeIn className="controls flex items-center gap-2 rounded-xl px-2 py-1 transition-all duration-50">
        {/* Search */}
        <HeaderIcon>
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
        </HeaderIcon>

        {/* User */}
        <HeaderIcon>
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
        </HeaderIcon>

        {/* Cart */}
        <HeaderIcon>
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
        </HeaderIcon>
      </FadeIn>

      <div
        ref={menuContainerRef}
        className={
          'menu fixed inset-0 z-200 h-screen w-screen bg-neutral-950 p-4'
        }
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
        }}
      >
        <div className="close absolute right-4 z-1 hover:bg-white/10">
          <HeaderIcon onClick={() => closeMenu()}>
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
          </HeaderIcon>
        </div>
        <div className="menu-content relative flex size-full origin-bottom-left translate-x-[-100px] translate-y-[100px] scale-150 -rotate-15 transform items-center justify-center opacity-25 [will-change:transform_opacity]">
          <div className="flex w-full">
            <div className="image-container relative flex-3">
              <Image
                src="/img/ignis-bottle.png"
                fill
                alt=""
                sizes="100vw"
                className="mx-auto block max-w-1/2 object-cover"
              />
            </div>
            <div className="menu-links flex flex-2 flex-col gap-8">
              <div className="main-links font-title flex flex-col gap-2 text-4xl">
                <Link href="#" className="hover:text-white/85">
                  Ignis
                </Link>
                <Link href="#" className="hover:text-white/85">
                  Aqua
                </Link>
                <Link href="#" className="hover:text-white/85">
                  Terra
                </Link>
                <Link href="#" className="hover:text-white/85">
                  ... More
                </Link>
              </div>
              <div className="social-media flex flex-col gap-1">
                <Link href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Pinterest
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

interface HeaderIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const HeaderIcon = ({ children, ...rest }: HeaderIconProps) => {
  return (
    <button className="cursor-pointer p-2" {...rest}>
      {children}
    </button>
  );
};
