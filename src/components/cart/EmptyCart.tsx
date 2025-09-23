import FadeIn from '@/components/animations/FadeIn';
import RevealText from '@/components/animations/RevealText';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import React from 'react';

interface Props {
  onClose: () => void;
}

function EmptyCart({ onClose }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <RevealText
        as={'h3'}
        delay={0.4}
        className="font-title text-2xl capitalize md:text-3xl"
        text={'Your cart is empty!'}
        hoverLine={false}
      />
      <FadeIn vars={{ delay: 0.5, duration: 1 }} className="translate-y-20">
        <svg
          className="size-64 sm:size-84"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 708.58 627.78"
        >
          <g id="shoping-cart">
            <g id="leaves">
              <path
                d="m52.94,584.71c15.8,29.31,49.34,41.89,49.34,41.89,0,0,7.92-34.94-7.89-64.25s-49.34-41.89-49.34-41.89c0,0-7.92,34.94,7.89,64.25Z"
                fill="currentColor"
                className="opacity-20"
              />
              <path
                d="m63.8,575.06c28.53,17.17,39.52,51.26,39.52,51.26,0,0-35.27,6.26-63.8-10.9S0,564.16,0,564.16c0,0,35.27-6.26,63.8,10.9Z"
                fill="#9f6b66"
              />
            </g>
            <g id="cart" fill="currentColor">
              <polygon points="460.38 571.29 159.29 571.29 159.29 569.12 458.22 569.12 458.22 464.06 184.61 464.06 171.31 436.37 173.27 435.43 185.97 461.9 460.38 461.9 460.38 571.29" />
              <circle cx="199.37" cy="601.61" r="22.74" fill="#9f6b66" />
              <circle cx="423.56" cy="601.61" r="22.74" fill="#9f6b66" />
              <circle cx="687.83" cy="118.57" r="14.08" fill="#9f6b66" />
              <path d="m492.59,428.32H154.16l-73.23-239.36h487.07l-.44,1.41-74.97,237.95Zm-336.82-2.17h335.23l74.05-235.02H83.86l71.9,235.02Z" />
              <polygon
                id="background"
                points="466.17 415.87 168.92 415.87 104.6 203.59 532.41 203.59 532.02 204.84 466.17 415.87"
                className="opacity-10"
              />
              <polygon points="574.07 167.58 571.97 167.03 586.27 113.15 669.41 113.15 669.41 115.32 587.93 115.32 574.07 167.58" />
              <rect x="104.6" y="261.53" width="439.06" height="2.17" />
              <rect x="129.01" y="341.33" width="389.5" height="2.17" />
              <rect x="323.38" y="190.05" width="2.17" height="237.19" />
              <rect
                x="296.98"
                y="307.56"
                width="237.69"
                height="2.17"
                transform="translate(80.65 703.39) rotate(-86.25)"
              />
              <rect
                x="232.01"
                y="189.8"
                width="2.17"
                height="237.69"
                transform="translate(-19.58 15.81) rotate(-3.73)"
              />
              <rect y="626.22" width="701.91" height="1.57" />
            </g>
            <g id="wall" fill="currentColor" className="opacity-20">
              <g>
                <rect x="530.56" y="85.2" width="178.02" height="2.54" />
                <rect x="578.88" y="62.31" width="2.54" height="23.52" />
                <rect x="656.44" y="62.31" width="2.54" height="23.52" />
              </g>
              <g>
                <rect x="523.89" y="391.64" width="178.02" height="2.54" />
                <rect x="572.21" y="368.75" width="2.54" height="23.52" />
                <rect x="649.77" y="368.75" width="2.54" height="23.52" />
              </g>
              <g>
                <rect x="76.61" y="127.16" width="178.02" height="2.54" />
                <rect x="124.93" y="104.27" width="2.54" height="23.52" />
                <rect x="202.5" y="104.27" width="2.54" height="23.52" />
              </g>
              <g>
                <rect x="318.21" y="1.27" width="178.02" height="2.54" />
                <rect x="445.36" y="3.18" width="2.54" height="23.52" />
                <rect x="367.8" y="3.18" width="2.54" height="23.52" />
              </g>
              <g>
                <rect x="15.57" width="178.02" height="2.54" />
                <rect x="142.73" y="1.91" width="2.54" height="23.52" />
                <rect x="65.17" y="1.91" width="2.54" height="23.52" />
              </g>
            </g>
          </g>
        </svg>
      </FadeIn>
      <div className="flex w-full items-center">
        <FadeIn
          className="hover-line flex w-fit translate-y-8 cursor-pointer items-center text-sm text-gray-300 hover:text-white"
          vars={{ delay: 0.7, duration: 1.3 }}
        >
          <ArrowLeftIcon className="size-5" />
          <span onClick={onClose}>Continue shopping</span>
        </FadeIn>
      </div>
    </div>
  );
}

export default EmptyCart;
