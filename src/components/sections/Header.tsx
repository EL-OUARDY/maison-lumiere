'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from '@/components/animations/FadeIn';
import Menu from '@/components/shared/Menu';

import MainMenu from '@/components/MainMenu';
import Drawer from '@/components/shared/Drawer';
import Login from '@/components/Login';
import Input from '@/components/ui/input';
import { AlignJustifyIcon, SearchIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Cart from '@/components/cart/Cart';
import useStore from '@/hooks/useStore';
import clsx from 'clsx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { cart, activeMenu, setActiveMenu } = useStore();

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

  useEffect(() => {
    if (activeMenu)
      gsap.set('.header .controls', {
        autoAlpha: 0,
      });
  }, [activeMenu]);

  function openSearch() {
    const header = headerRef.current;
    const searchContainer = header?.querySelector<HTMLDivElement>(
      '.search-input-container',
    );
    const searchInput =
      header?.querySelector<HTMLInputElement>('.search-input');

    if (!header || !searchInput || !searchContainer) return;

    const tl = gsap.timeline({
      onComplete: () => {
        searchInput.focus();
      },
      defaults: {
        duration: 0.4,
        ease: 'power2.out',
      },
    });

    header.classList.add('search-active');

    tl.set(header.querySelectorAll('.controls.right button'), {
      autoAlpha: 0,
    })
      .to(header.querySelector('.controls.right'), {
        width: '16rem',
      })
      .fromTo(
        searchContainer,
        {
          xPercent: 100,
          autoAlpha: 0,
        },
        {
          xPercent: 0,
          autoAlpha: 1,
        },
        '<',
      );
  }

  function closeSearch() {
    const header = headerRef.current;
    const searchContainer = header?.querySelector<HTMLDivElement>(
      '.search-input-container',
    );

    if (!header || !searchContainer) return;

    const tl = gsap.timeline({
      onComplete: () => {
        header.classList.remove('search-active');
      },
      defaults: {
        duration: 0.4,
        ease: 'power2.out',
      },
    });

    tl.to(header.querySelector('.controls.right'), {
      width: 'auto',
    })
      .fromTo(
        searchContainer,
        {
          xPercent: 0,
          autoAlpha: 1,
        },
        {
          xPercent: 100,
          autoAlpha: 0,
        },
        '<',
      )
      .to(
        header.querySelectorAll('.controls.right button'),
        {
          autoAlpha: 1,
        },
        '-=0.2',
      );
  }

  return (
    <header
      ref={headerRef}
      className="header text-foreground pointer-events-none fixed top-0 left-0 z-50 flex w-full justify-between p-2 md:p-4"
    >
      <FadeIn
        onComplete={() => setIsReady(true)}
        vars={isHome ? { duration: 2, delay: 2 } : { duration: 1 }}
        className={clsx(
          'controls left flex items-center rounded-full p-1 transition-all duration-50',
          isReady && 'pointer-events-auto',
        )}
      >
        {/* Menu button */}
        <button
          className="text-foreground hover:text-foreground/70 cursor-pointer p-2 transition-colors duration-300"
          onClick={() => setActiveMenu('main')}
          aria-label="menu"
        >
          <AlignJustifyIcon className="size-[1.3rem]" />
        </button>
      </FadeIn>

      <FadeIn
        vars={isHome ? { duration: 2, delay: 2 } : { duration: 1 }}
        className={clsx(
          'controls right relative flex items-center justify-end gap-2 overflow-hidden rounded-xl px-2 py-1 transition-all duration-50',
          isReady && 'pointer-events-auto',
        )}
      >
        {/* Search Input */}
        <div className="search-input-container invisible absolute inset-0 z-100 flex w-full origin-right items-center overflow-hidden">
          <Input
            type="text"
            onBlur={closeSearch}
            placeholder="Search"
            icon={<SearchIcon className="size-4" />}
            className="search-input !h-auto !w-full from-transparent to-transparent text-sm focus-visible:outline-0"
          />
        </div>

        {/* Search button */}
        <button
          className="search-btn text-foreground hover:text-foreground/70 cursor-pointer p-2 transition-colors duration-300"
          onClick={openSearch}
          aria-label="search"
        >
          <SearchIcon className="size-[1.3rem]" aria-hidden="true" />
        </button>

        {/* User button */}
        <button
          className="user-btn text-foreground hover:text-foreground/70 cursor-pointer p-2 transition-colors duration-300"
          onClick={() => setUserDrawerOpen(true)}
          aria-label="user"
        >
          <svg
            className="size-[1.3rem]"
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

        {/* Cart button */}
        <button
          className="cart-btn text-foreground hover:text-foreground/70 relative cursor-pointer p-2 transition-colors duration-300"
          onClick={() => setActiveMenu('cart')}
          aria-label="cart"
        >
          {cart.length > 0 && (
            <span className="font-title bg-primary absolute right-1 bottom-1 flex size-4 items-center justify-center rounded-full text-xs font-bold">
              {cart.length}
            </span>
          )}
          <svg
            className="size-[1.3rem]"
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
      </FadeIn>

      {/* Main menu and Cart */}
      <Menu
        isOpen={!!activeMenu}
        onClose={() => {
          setActiveMenu(null);
          gsap.to('.header .controls', {
            autoAlpha: 1,
          });
        }}
      >
        {activeMenu === 'main' && <MainMenu />}
        {activeMenu === 'cart' && <Cart />}
      </Menu>

      {/* Login drawer */}
      <Drawer
        open={userDrawerOpen}
        onClose={() => setUserDrawerOpen(false)}
        position="right"
      >
        <Login />
      </Drawer>
    </header>
  );
}

export default Header;
