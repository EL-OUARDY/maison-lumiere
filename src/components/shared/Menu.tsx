'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import { Eases } from '@/lib/customEases';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { XIcon } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import LogoIcon from '@/components/shared/LogoIcon';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

function Menu({ isOpen = false, onClose = () => {}, children }: Props) {
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const pageCloneRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const lenis = useLenis();
  const pathname = usePathname();

  const openMenuRef = useRef<() => void>(() => {});
  const closeMenuRef = useRef<() => void>(() => {});

  function captureViewport() {
    // Get the viewport size
    const { innerWidth: width, innerHeight: height } = window;

    // Create a wrapper
    const wrapper = document.createElement('div');
    wrapper.classList.add('view-clone');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = width + 'px';
    wrapper.style.height = height + 'px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.zIndex = '10';

    // Clone body into it
    const clone = document.body.cloneNode(true) as HTMLElement;

    // Shift it up to match current scroll position
    clone.style.marginTop = -window.scrollY + 'px';

    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    return wrapper;
  }

  openMenuRef.current = () => {
    if (isAnimatingRef.current) return;
    if (typeof window === 'undefined') return;

    pageCloneRef.current = captureViewport();

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

    tl.to(pageCloneRef.current, {
      scale: 1.3,
      rotate: 7,
      y: window.innerHeight / 2,
      duration: 1,
      ease: Eases.inOut,
    })
      .fromTo(
        menuContainerRef.current,
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
        },
        {
          clipPath,
          duration: 1,
          ease: Eases.inOut,
        },
        0,
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
  };

  closeMenuRef.current = () => {
    if (!isOpen) return;
    if (isAnimatingRef.current) return;
    if (typeof window === 'undefined') return;

    const tl = gsap.timeline({
      id: 'close-menu',
      onStart: () => {
        isAnimatingRef.current = true;
      },
      onComplete: () => {
        isAnimatingRef.current = false;
        pageCloneRef.current?.remove();
        onClose();
      },
    });
    const clipPath = `polygon(0 0px, 100% 0px, 100% ${1.1 * window.innerHeight}px, 0 ${window.innerHeight}px`;

    tl.to(pageCloneRef.current, {
      scale: 1,
      rotate: 0,
      y: 0,
      duration: 1,
      ease: Eases.inOut,
    })
      .fromTo(
        menuContainerRef.current,
        {
          clipPath,
        },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
          duration: 1,
          ease: Eases.inOut,
        },
        0,
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
  };

  // Open/Close menu and prevent scroll while menu is open
  useEffect(() => {
    if (isOpen) {
      openMenuRef.current();
      lenis?.stop();
    } else {
      closeMenuRef.current();
      lenis?.start();
    }
    // cleanup when unmount
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  // Handle ESC keypress
  useEffect(() => {
    if (!isOpen) return;

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenuRef.current();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  // URL change (fires when a link within the menu is clicked)
  useEffect(() => {
    pageCloneRef.current?.remove();
    closeMenuRef.current();
  }, [pathname]);

  return (
    <div
      ref={menuContainerRef}
      className="menu bg-background pointer-events-auto fixed inset-0 z-200 flex h-screen w-screen flex-col p-4"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
      }}
      role="dialog"
      aria-modal={isOpen ? true : false}
      aria-label="Menu"
    >
      <div className="menu-header relative flex items-center justify-between">
        <FadeIn vars={{ delay: 0.5 }}>
          <Link
            href="/"
            onClick={() => {
              if (pathname === '/') closeMenuRef.current();
            }}
            className="block w-fit cursor-pointer"
            title="Maison Lumière"
          >
            <LogoIcon className="hover:text-foreground text-muted transition duration-300" />
          </Link>
        </FadeIn>

        <div className="close-btn hover:bg-foreground/10 hover:text-foreground text-muted">
          <button
            className="cursor-pointer p-2"
            onClick={() => closeMenuRef.current()}
            aria-label="close menu"
          >
            <XIcon className="size-6" />
          </button>
        </div>
      </div>

      <div
        ref={menuContentRef}
        className="menu-content relative flex-1 [will-change:transform_opacity]"
      >
        {children}
      </div>
    </div>
  );
}

export default Menu;
