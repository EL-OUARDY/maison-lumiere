import { ReactNode } from 'react';
import clsx from 'clsx';
import { LinkProps } from 'next/link';
import { Link } from 'next-view-transitions';

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
        variant === 'default' &&
          'bg-foreground hover:bg-foreground/80 text-background-bold',
        variant === 'outline' &&
          'hover:bg-foreground/20 text-foreground border-foreground border',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
