'use client';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from '@/components/animations/FadeIn';
import Menu from '@/components/shared/Menu';

import MainMenu from '@/components/MainMenu';
import Drawer from '@/components/shared/Drawer';
import Login from '@/components/Login';
import Input from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Cart from '@/components/Cart';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

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

  function openMenu() {
    setMenuOpen(true);
    gsap.set('.header .controls', {
      autoAlpha: 0,
    });
  }

  function closeMenu() {
    setMenuOpen(false);
    gsap.to('header .controls', { autoAlpha: 1 });
  }

  function openCart() {
    setCartOpen(true);
    gsap.set('.header .controls', {
      autoAlpha: 0,
    });
  }

  function closeCart() {
    setCartOpen(false);
    gsap.to('header .controls', { autoAlpha: 1 });
  }

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
      className="header pointer-events-none fixed top-0 left-0 z-50 flex w-full justify-between p-2 text-white md:p-4"
    >
      <FadeIn
        vars={isHome ? { duration: 2, delay: 2 } : { duration: 1 }}
        className="controls left pointer-events-auto flex items-center rounded-full p-1 transition-all duration-50"
      >
        {/* Menu button */}
        <button
          className="cursor-pointer p-2 text-white transition-colors duration-300 hover:text-white/70"
          onClick={openMenu}
          aria-label="menu"
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
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </FadeIn>

      <FadeIn
        vars={isHome ? { duration: 2, delay: 2 } : { duration: 1 }}
        className="controls right pointer-events-auto relative flex items-center justify-end gap-2 overflow-hidden rounded-xl px-2 py-1 transition-all duration-50"
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
          className="search-btn cursor-pointer p-2 text-white transition-colors duration-300 hover:text-white/70"
          onClick={openSearch}
          aria-label="search"
        >
          <SearchIcon className="size-[1.3rem]" aria-hidden="true" />
        </button>

        {/* User button */}
        <button
          className="user-btn cursor-pointer p-2 text-white transition-colors duration-300 hover:text-white/70"
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
          className="cart-btn cursor-pointer p-2 text-white transition-colors duration-300 hover:text-white/70"
          onClick={openCart}
          aria-label="cart"
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
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </FadeIn>

      {/* Main menu */}
      <Menu open={menuOpen} onClose={closeMenu}>
        <MainMenu />
      </Menu>

      {/* Cart */}
      <Menu open={cartOpen} onClose={closeCart}>
        <Cart />
      </Menu>

      {/* Login drawer */}
      <Drawer
        open={userDrawerOpen}
        onClose={() => setUserDrawerOpen(false)}
        direction="right"
      >
        <Login />
      </Drawer>
    </header>
  );
}

export default Header;
