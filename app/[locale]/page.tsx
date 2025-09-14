import React from 'react';

import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Benefits from '@/components/Benefits/Benefits';
import Faqs from '@/components/Faqs/Faqs';
import VideoFeature from '@/components/VideoFeature/VideoFeature';

export default function HomePage() {

    return (
        <main>
            <Hero />
            <Benefits />
            <VideoFeature />
            <Faqs />
        </main>
    );
}