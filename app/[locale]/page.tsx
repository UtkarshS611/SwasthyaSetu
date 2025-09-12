import React from 'react';

import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Benefits from '@/components/Benefits/Benefits';
import Faqs from '@/components/Faqs/Faqs';

export default function HomePage() {

    return (
        <main>
            <Hero />
            <Benefits />
            {/* <Features /> */}
            <Faqs />
        </main>
    );
}