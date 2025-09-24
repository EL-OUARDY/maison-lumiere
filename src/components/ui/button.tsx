import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode | string;
  variant?: 'default' | 'outline' | 'icon' | 'icon-outline';
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          'inline-flex cursor-pointer items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300',
          variant === 'default' &&
            'bg-foreground hover:bg-foreground/80 text-background-bold',
          variant === 'outline' &&
            'hover:bg-foreground/20 text-foreground border-foreground border',
          variant === 'icon' &&
            'bg-foreground hover:bg-foreground/80 text-background-bold !px-6',
          variant === 'icon-outline' &&
            'hover:bg-foreground/20 text-foreground border-foreground border !px-6',
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
