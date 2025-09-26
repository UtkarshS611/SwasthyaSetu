"use client"
import React, { useEffect, useState } from 'react'

import { Separator } from "@/components/ui/separator"

const Illustration = ({ onExit }: { onExit: () => void }) => {

    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                setActiveSlide((prev) => (prev === 1 ? 2 : prev)); // Next slide
            }
            if (e.key === "ArrowLeft") {
                setActiveSlide((prev) => (prev === 2 ? 1 : prev)); // Previous slide
            }
            if (e.key === "Escape") {
                onExit(); // tell parent to remove this component
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onExit]);


    return (
        <section className="bg-white flex flex-col justify-center p-32 absolute top-0 left-0 h-screen w-full z-999">
            {/* Slide One */}
            {activeSlide === 1 && (
                <div className="min-h-screen flex flex-col justify-center max-w-4xl gap-6" id="slide-one">
                    <img
                        src={"/medicine.svg"}
                        alt='Illustration'
                        className='h-screen w-1/3 top-0 right-0 bg-no-repeat bg-center bg-cover absolute'
                    />
                    <div>
                        <img
                            src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1"
                            className="h-72 w-72"
                            alt=""
                        />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-[#8ecae6] text-3xl font-bold">Team: INNOVATEX#</h1>
                        <h2 className="text-5xl font-bold text-[#fb8500]">
                            Telemedicine Access for Rural Healthcare in Nabha
                        </h2>
                    </div>
                    <div className="font-semibold text-xl flex justify-between">
                        <p>PSID: 25018</p>
                        <p>MedTech / BioTech / HealthTech</p>
                        <p>Software</p>
                    </div>
                </div>
            )}

            {/* Slide Two */}
            {activeSlide === 2 && (
                <div className="max-w-5xl flex flex-col " id="slide-two">
                    <div
                        className='illustration-gradient h-screen w-1/3 top-0 right-0 bg-no-repeat bg-center bg-cover absolute'
                    />
                    <div className="space-y-2">
                        <h1 className="text-[#8ecae6] text-2xl font-bold">Core Problem</h1>
                        <h2 className="text-5xl font-bold text-[#fb8500]">
                            Why the Need of AI in Healthcare?
                        </h2>
                        <p>
                            173 nearby villages including daily wage workers and farmers struggle to
                            access quality healthcare due to:
                        </p>
                    </div>
                    <div className="text-xl flex justify-start gap-6 text-[#264653] my-10">
                        <div className="flex flex-col items-center w-fit gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="font-bold text-7xl">50%</p>
                                <p>Available doctors out of total sanctioned posts.</p>
                            </div>
                            <img src="/PSOne.png" className="h-96 w-96" alt="" />
                        </div>
                        <div className="flex flex-col items-center w-fit gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="font-bold text-7xl">60-70%</p>
                                <p>Out of stock medicines.</p>
                            </div>
                            <img src="/PSTwo.png" className="h-96 w-96" alt="" />
                        </div>
                    </div>
                    <div className="font-semibold text-xl flex justify-between text-[#264653]">
                        Language & literacy barrier limiting access to online healthcare.
                    </div>
                </div>
            )}
        </section>
    )
}

export default Illustration