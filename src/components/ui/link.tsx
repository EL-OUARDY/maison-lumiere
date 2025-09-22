import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

interface Props extends LinkProps {
  className?: string;
  children?: ReactNode | string;
  variant?: 'default' | 'outline';
}

const ButtonLink = ({
  className,
  children,
  variant = 'default',
  ...props
}: Props) => {
  return (
    <Link
      {...props}
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300',
        variant === 'default' && 'bg-white text-black hover:bg-white/80',
        variant === 'outline' &&
          'border border-white text-white hover:bg-white/20',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
