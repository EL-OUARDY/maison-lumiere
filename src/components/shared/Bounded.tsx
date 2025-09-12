import { ElementType, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

type BoundedProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = 'section', className, children, ...rest }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx('overflow-hidden px-6', className)}
        {...rest}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </Comp>
    );
  },
);

Bounded.displayName = 'Bounded';
