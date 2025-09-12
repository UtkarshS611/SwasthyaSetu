import JoinRoom from '@/components/JoinRoom/JoinRoom'
import React from 'react'

const Page = () => {
    return (
        <section className="w-full px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 py-24">
            <div className='space-y-4 py-4 text-center lg:text-start'>
                <h1 className='text-4xl lg:text-6xl font-semibold flex flex-col'>
                    <span>
                        Video Conference
                    </span>
                    <span>
                        Connect with Ease and Flexibility.
                    </span>
                </h1>
                <p className='text-sm'>
                    Experience seamless video conferencing with our platform, designed to keep you connected anytime, anywhere.
                </p>
            </div>
            <div>
                <JoinRoom />
            </div>
        </section>
    )
}

export default Page