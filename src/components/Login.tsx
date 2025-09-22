import React from 'react';
import Input from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { LockIcon, MailIcon } from 'lucide-react';
import Button from '@/components/ui/button';
import Link from 'next/link';

function Login() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-title mb-4 border-b border-neutral-700 pb-4 text-3xl capitalize md:text-4xl">
          Login
        </h3>

        <div className="text-base text-gray-300">
          Enter your email below to login to your account
        </div>
      </div>

      <div className="form-controls flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Email"
            icon={<MailIcon className="size-4" />}
            className="text-sm"
          />
          <Input
            type="password"
            placeholder="Password"
            icon={<LockIcon className="size-4" />}
            className="text-sm"
          />
        </div>
        <div className="flex items-center justify-between text-sm font-[350] text-gray-300">
          <div className="flex items-center gap-1 hover:underline">
            <Checkbox
              id="remember-me"
              className="!size-3.5 cursor-pointer shadow-none"
            />
            <label
              htmlFor="remember-me"
              className="cursor-pointer hover:text-white"
            >
              Remember Me
            </label>
          </div>
          <div className="cursor-pointer hover:text-white hover:underline">
            Forgot your password?
          </div>
        </div>

        <Button
          variant="default"
          className="!py-2 text-lg font-semibold !capitalize"
        >
          Login
        </Button>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neutral-700"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-neutral-900 px-2 text-gray-300">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-gray-300">
            <Button
              className="inline-flex h-10 items-center justify-center text-sm font-semibold !capitalize"
              type="button"
              variant="outline"
            >
              <svg
                className="mr-2 size-5"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google
            </Button>
            <div className="text-center text-sm text-gray-300">
              Don&apos;t have an account?{' '}
              <Link
                className="text-gray-300 underline hover:text-white"
                href="#"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
