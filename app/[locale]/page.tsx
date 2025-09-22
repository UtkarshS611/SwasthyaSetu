import React from 'react';

import Hero from '@/components/Hero/Hero';
import Benefits from '@/components/Benefits/Benefits';
import Faqs from '@/components/Faqs/Faqs';
import VideoFeature from '@/components/VideoFeature/VideoFeature';
import AIFeature from '@/components/AIFeature/AIFeature';

export default function HomePage() {

    return (
        <main>
            {/* <Hero /> */}
            {/* <Benefits /> */}
            <VideoFeature />
            <AIFeature />
            {/* <Faqs /> */}
        </main>
    );
}