"use client"
import React, { useEffect, useState } from 'react';

import Hero from '@/components/Hero/Hero';
import Benefits from '@/components/Benefits/Benefits';
import Faqs from '@/components/Faqs/Faqs';
import VideoFeature from '@/components/VideoFeature/VideoFeature';
import AIFeature from '@/components/AIFeature/AIFeature';
import Illustration from '../../components/Illustration/Illustration';

export default function HomePage() {

    const [showSlides, setShowSlides] = useState<boolean | null>(null);

    useEffect(() => {
        // check if slides have already been shown
        const alreadySeen = localStorage.getItem("slidesSeen");

        if (alreadySeen) {
            setShowSlides(false); // user has already seen them
        } else {
            setShowSlides(true); // first time
        }
    }, []);

    const handleExit = () => {
        setShowSlides(false);
        localStorage.setItem("slidesSeen", "true"); // remember for future visits
    };

    // Prevent flicker while deciding
    if (showSlides === null) return null;

    return (
        <>
            {showSlides ?
                (
                    <Illustration onExit={handleExit} />
                ) : (
                    <main>
                        <Hero />
                        <Benefits />
                        <VideoFeature />
                        <AIFeature />
                        <Faqs />
                    </main>
                )}
        </>
    );
}