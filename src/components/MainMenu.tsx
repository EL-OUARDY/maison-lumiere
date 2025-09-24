import React, { useRef, useState } from 'react';
import Link from 'next/link';
import RevealText from '@/components/animations/RevealText';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Eases } from '@/lib/customEases';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import LogoIcon from '@/components/shared/LogoIcon';

gsap.registerPlugin(useGSAP);
function MainMenu() {
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const activeFragrance = params.name || '';
  const [image, setImage] = useState<string>(
    `.image-${activeFragrance || 'ignis'}`,
  );

  // Animate menu links
  useGSAP(
    () => {
      if (!imagesContainerRef.current) return;

      const imgs = imagesContainerRef.current.querySelectorAll('.image');
      const tl = gsap.timeline({
        id: 'image-animation',
        defaults: { ease: Eases.out },
      });
      // prettier-ignore
      tl.set(image, { zIndex: 100, }, 0)
        .to(imgs, { autoAlpha: 0 }, 0)
        .fromTo(image, 
          { autoAlpha: 0, scale: 1.3, rotate: 7 }, 
          { autoAlpha: 1, scale: 1, rotate: 0 }, 0);
    },
    { dependencies: [image] },
  );

  return (
    <div className="flex size-full flex-col">
      <div className="menu-header relative">
        <FadeIn vars={{ delay: 0.5 }}>
          <Link href="/" className="block w-fit cursor-pointer">
            <LogoIcon className="hover:text-foreground text-muted transition duration-300" />
          </Link>
        </FadeIn>
      </div>
      <div className="menu-body flex w-full flex-1 items-center justify-center">
        <div className="grid w-full grid-cols-12 items-center">
          <div
            ref={imagesContainerRef}
            className="image-container relative col-start-2 h-[50vw] w-[40vw] overflow-hidden sm:col-start-3 sm:h-[40vw] sm:w-[30vw] md:col-start-4 md:h-[30vw] md:w-[20vw]"
          >
            <Image
              src="/img/ignis.png"
              alt=""
              width={1000}
              height={1000}
              priority={activeFragrance === 'ignis'}
              className={clsx(
                'image image-ignis absolute inset-0 mx-auto block size-full object-cover',
                activeFragrance === 'ignis'
                  ? 'z-100'
                  : 'invisible z-1 opacity-0',
              )}
              style={{ objectPosition: '85% center' }}
            />
            <Image
              src="/img/aqua.png"
              alt=""
              width={1000}
              height={1000}
              priority={activeFragrance === 'aqua'}
              className={clsx(
                'image image-aqua absolute inset-0 mx-auto block size-full object-cover',
                activeFragrance === 'aqua'
                  ? 'z-100'
                  : 'invisible z-1 opacity-0',
              )}
              style={{ objectPosition: '85% center' }}
            />
            <Image
              src="/img/terra.png"
              alt=""
              width={1000}
              height={1000}
              priority={activeFragrance === 'terra'}
              className={clsx(
                'image image-terra absolute inset-0 mx-auto block size-full object-cover',
                activeFragrance === 'terra'
                  ? 'z-100'
                  : 'invisible z-1 opacity-0',
              )}
              style={{ objectPosition: '85% center' }}
            />
            <Image
              src="/img/luna.png"
              alt=""
              width={1000}
              height={1000}
              priority={activeFragrance === 'luna'}
              className={clsx(
                'image image-luna absolute inset-0 mx-auto block size-full object-cover',
                activeFragrance === 'luna'
                  ? 'z-100'
                  : 'invisible z-1 opacity-0',
              )}
              style={{ objectPosition: '52% center' }}
            />
            <Image
              src="/img/making.jpg"
              alt=""
              width={1000}
              height={1000}
              priority={activeFragrance === 'making'}
              className="image image-making absolute inset-0 mx-auto block size-full object-cover"
              style={{ objectPosition: '85% center' }}
            />
          </div>
          <div className="menu-links col-start-9 col-end-11 flex flex-2 flex-col justify-center gap-6 py-8 md:col-start-8 md:col-end-11">
            <div className="main-links font-title flex w-fit flex-col gap-1 text-2xl md:text-4xl">
              <Link
                href="/fragrance/ignis"
                className={clsx(
                  'w-fit',
                  activeFragrance === 'ignis' && 'active-link',
                )}
                onMouseOver={() => setImage('.image-ignis')}
              >
                <RevealText delay={0.4} text={'Ignis'} />
              </Link>
              <Link
                href="/fragrance/aqua"
                className={clsx(
                  'w-fit',
                  activeFragrance === 'aqua' && 'active-link',
                )}
                onMouseOver={() => setImage('.image-aqua')}
              >
                <RevealText delay={0.5} text={'Aqua'} />
              </Link>
              <Link
                href="/fragrance/terra"
                className={clsx(
                  'w-fit',
                  activeFragrance === 'terra' && 'active-link',
                )}
                onMouseOver={() => setImage('.image-terra')}
              >
                <RevealText delay={0.6} text={'Terra'} />
              </Link>
              <Link
                href="/fragrance/luna"
                className={clsx(
                  'w-fit',
                  activeFragrance === 'luna' && 'active-link',
                )}
                onMouseOver={() => setImage('.image-luna')}
              >
                <RevealText delay={0.7} text={'Luna'} />
              </Link>
              <span
                className="w-fit cursor-pointer"
                onMouseOver={() => setImage('.image-making')}
              >
                <RevealText delay={0.8} text={'...More'} />
              </span>
            </div>
            <div className="social-media flex w-fit flex-col">
              <RevealText
                delay={0.8}
                text={'Instagram'}
                className="hover:text-foreground text-muted cursor-pointer"
              />
              <RevealText
                delay={0.9}
                text={'Pinterest'}
                className="hover:text-foreground text-muted cursor-pointer"
              />
              <RevealText
                delay={1}
                text={'Twitter'}
                className="hover:text-foreground text-muted cursor-pointer"
              />
              <RevealText
                delay={1.1}
                text={'LinkedIn'}
                className="hover:text-foreground text-muted cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="menu-footer flex w-full items-center justify-between px-4 text-sm">
        <div className="flex gap-4">
          <FadeIn
            className="hover-line hover:text-foreground text-muted cursor-pointer"
            vars={{ delay: 0.8 }}
          >
            Our Story
          </FadeIn>
          <FadeIn
            className="hover-line hover:text-foreground text-muted cursor-pointer"
            vars={{ delay: 0.8 }}
          >
            Heritage
          </FadeIn>
        </div>
        <FadeIn
          className="hover-line hover:text-foreground text-muted cursor-pointer"
          vars={{ delay: 0.8 }}
        >
          Contact Us
        </FadeIn>
      </div>
    </div>
  );
}

export default MainMenu;
