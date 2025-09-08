import React from 'react'
import { useTranslations } from 'next-intl'

import { Button } from '../ui/button';

import Header from '../Header/Header';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className='px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56'>
      <Header />
      <div className='py-48'>
        <div className='absolute left-0 top-0 w-full h-full bg-red-200 hero-gradient -z-1' />
        <div className='flex flex-col gap-8 max-w-xl w-full'>
          <h1 className='font-bold text-5xl lg:text-6xl xl:text-7xl leading-18'>
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
      </div>
    </section>
  )
}

export default Hero