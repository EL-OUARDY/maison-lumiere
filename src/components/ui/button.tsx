import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode | string;
  variant?: 'default' | 'outline' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          'inline-flex cursor-pointer items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300',
          variant === 'default' && 'bg-white text-black hover:bg-white/80',
          variant === 'outline' &&
            'border border-white text-white hover:bg-white/20',
          variant === 'icon' && 'bg-white !px-6 text-black hover:bg-white/80',
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
