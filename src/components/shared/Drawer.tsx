import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import React, { ReactNode, useEffect, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'right' | 'left';
}

function Drawer({ open, onClose, children, position = 'left' }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsDrawerOpen(open);
  }, [open]);

  return (
    <>
      <div
        className={clsx(
          'menu-drawer bg-background-bold/40 fixed inset-0 z-40 opacity-0 transition-all duration-500',
          isDrawerOpen
            ? 'pointer-events-auto opacity-100 backdrop-blur-xs'
            : 'pointer-events-none backdrop-blur-none',
        )}
        onClick={() => {
          setIsDrawerOpen(false);
          onClose();
        }}
        aria-hidden="true"
      />

      <div
        className={clsx(
          'nav-drawer bg-background pointer-events-auto fixed top-0 z-50 h-full w-[90%] p-6 transition-transform duration-500 sm:w-92',
          position === 'left' ? 'left-0' : 'right-0',
          isDrawerOpen
            ? 'translate-x-0'
            : position === 'left'
              ? '-translate-x-full'
              : 'translate-x-full',
        )}
        role="dialog"
        aria-modal={isDrawerOpen}
        aria-label="Login Menu"
      >
        <div className="mb-6 flex justify-end">
          <button
            className="hover:bg-foreground/10 hover:text-foreground text-muted cursor-pointer p-2 transition-colors duration-300"
            onClick={() => {
              setIsDrawerOpen(false);
              onClose();
            }}
            aria-label="Close Menu"
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <XIcon className="size-6" />
          </button>
        </div>

        <nav className="space-y-4" aria-label="Main Navigation">
          {children}
        </nav>
      </div>
    </>
  );
}

export default Drawer;
