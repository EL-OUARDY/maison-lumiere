import clsx from 'clsx';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import {
  InputHTMLAttributes,
  forwardRef,
  useId,
  ReactElement,
  useState,
} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, icon, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const id = useId();
    const isPasswordInput = props['type'] === 'password';

    return (
      <div className="relative">
        {icon && (
          <label
            htmlFor={id}
            className="absolute top-0 left-0 flex h-full w-8 cursor-text items-center justify-center text-gray-300"
          >
            {icon}
          </label>
        )}

        <input
          id={id}
          {...props}
          ref={ref}
          className={clsx(
            'flex h-10 w-full rounded-md bg-gradient-to-r from-neutral-900 to-neutral-800 p-2 px-3 py-2 text-base ring-0',
            icon && 'pl-8',
            className,
          )}
          type={
            isPasswordInput
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : props['type']
          }
        />

        {isPasswordInput && (
          <div
            onClick={() => setIsPasswordVisible((v) => !v)}
            className="absolute top-0 right-1 flex h-full w-8 cursor-pointer items-center justify-center text-gray-300"
          >
            {isPasswordVisible ? (
              <EyeOffIcon className="size-4" />
            ) : (
              <EyeIcon className="size-4" />
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'input';

export default Input;
