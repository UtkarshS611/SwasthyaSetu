import React from 'react'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className='text-7xl'>
      <div>
        <h1>{t('title')}</h1>
        <p>{t('subTitle')}</p>
      </div>
    </section>
  )
}

export default Hero