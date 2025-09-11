import React from 'react'
import Image from 'next/image';

import { useTranslations } from 'next-intl'

import { Button } from '../ui/button';
import JoinRoom from '../JoinRoom/JoinRoom';


const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className='px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 relative'>
      <div className='py-40 lg:py-64 relative flex hero-animation'>
        <div className='flex flex-col gap-8 max-w-xl w-full'>
          <h1 className='font-bold text-5xl lg:text-6xl xl:text-7xl leading-15 lg:leading-18'>
            {t('title')}
          </h1>
          <p className='text-muted-foreground'>
            {t('subtitle')}
          </p>
          <div>
            <Button>
              {t('BtnText')}
            </Button>
          </div>
        </div>
        <div className='absolute top-0 -right-2/5 -translate-x-1/2'>
          <div
            className='absolute h-full w-full top-0 left-0 bg-linear-to-b from-transparent from-80% to-white dark:to-[#0a0a0a]' />
          <Image
            className='heroImage 2xl:block hidden'
            priority
            src="/hero/heroImage.png"
            alt="Hero Image"
            width={750}
            height={400}
          />
        </div>
      </div>
      <JoinRoom />
    </section>
  )
}

export default Hero