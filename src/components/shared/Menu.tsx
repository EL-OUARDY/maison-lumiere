'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Eases } from '@/lib/customEases';
import gsap from 'gsap';
import FadeIn from '@/components/animations/FadeIn';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

interface Props {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

function Menu({ open, onClose, children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [showMenuContent, setShowMenuContent] = useState<boolean>(false);
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
        setShowMenuContent(true);
      },
      onComplete: () => {
        isAnimatingRef.current = false;
        setIsOpen(true);
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
        setShowMenuContent(false);
        pageCloneRef.current?.remove();
        setIsOpen(false);
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
    if (open) {
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
  }, [open, lenis]);

  // Handle ESC keypress
  useEffect(() => {
    if (!open) return;

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenuRef.current();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [open]);

  // URL change (fires when a link within the menu is clicked)
  useEffect(() => {
    if (!showMenuContent) return;
    closeMenuRef.current();
  }, [showMenuContent, pathname]);

  return (
    <div
      ref={menuContainerRef}
      className="menu pointer-events-auto fixed inset-0 z-200 h-screen w-screen bg-neutral-950 p-4"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 0px, 0 0px)',
      }}
      role="dialog"
      aria-modal={open}
    >
      <FadeIn
        vars={{ delay: 0.5 }}
        className="close-btn fixed top-4 right-4 z-200 text-neutral-400 hover:bg-white/10 hover:text-white"
      >
        <button
          className="cursor-pointer p-2"
          onClick={() => closeMenuRef.current()}
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
      </FadeIn>

      <div
        ref={menuContentRef}
        className="menu-content relative size-full [will-change:transform_opacity]"
      >
        {showMenuContent && children}
      </div>
    </div>
  );
}

export default Menu;
