import React from 'react'
import { Button } from '../ui/button'
import TransitionLink from '../TransitionLink/TransitionLink'
import { BadgeCheck } from 'lucide-react'
import { AnimateSvg } from './Arrow'

const VideoFeature = () => {

    const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'

    return (
        <section className='overflow-hidden relative bg-[#f8f9fa] lg:h-[90vh] rounded-[40px] p-5 lg:p-16 gap-10 flex flex-col lg:flex-row justify-center items-center'>
            <div className='space-y-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-start'>
                <h2 className='font-semibold text-4xl lg:text-5xl'>
                    Introducing Low Bandwidth Consultations
                </h2>
                <p className='text-muted-foreground text-sm'>
                    Seamless care that adapts to your network—<span className='text-black dark:text-white font-semibold'>start with video, switch to audio on weak signals, and auto-schedule follow-ups if connectivity fails.</span>
                </p>
                <Button>
                    <TransitionLink href='video-conference'>
                        Take a look
                    </TransitionLink>
                </Button>
            </div>
            <div className="bg-white relative shadow-md rounded-3xl max-w-3xl w-full h-[100vh] lg:h-full p-5 space-y-5 flex flex-col">
                <div className='items-center absolute hidden lg:flex bottom-0 left-[-27%] z-99'>
                    <span className="text-[#70e000] -rotate-6 font-bold">Try out</span>
                    <AnimateSvg
                        width="150px"
                        height="150px"
                        viewBox="0 0 225 75"
                        className=""
                        path="M3 58.1151C35.9237 60.1367 64.1957 53.2742 82.9999 24.5151C89.33 14.8339 91.8913 -1.32279 74.1111 4.60398C57.5945 10.1095 48.7621 34.6091 55.1778 50.2929C64.8056 73.8289 92.9371 74.9924 114.644 69.3151C148.228 60.5317 181.089 48.8653 211 31.2706C217.093 27.6867 173.175 20.0151 187.8 24.5151C198.123 27.6912 207.525 27.7151 218.2 27.7151C225.887 27.7151 220.97 30.2928 216.511 34.1151C209.264 40.3271 202.139 50.3578 199.8 59.7151"
                        strokeColor="#70e000"
                        strokeWidth={5}
                        strokeLinecap="round"
                        animationDuration={1.5}
                        animationDelay={0}
                        animationBounce={0}
                        reverseAnimation={false}
                        enableHoverAnimation={true}
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-primary">Insights & Updates</h2>
                    <p className="text-muted-foreground">
                        Stay informed with the latest news and updates from our team.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-2 flex-1">
                    <div className="bg-[#f8f9fa] flex-1 rounded-xl p-2 relative flex justify-center items-center">
                        <div
                            className='bg-white shadow-md rounded-lg h-full lg:max-h-2/3 lg:absolute top-1/2 lg:-translate-y-1/2 :-left-5 lg:-rotate-3 w-full p-2 flex flex-col justify-between hover:scale-[105%] transition-all duration-200 gap-2'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-1'>
                                    <img
                                        alt='avatar'
                                        src={MESCHAC_AVATAR}
                                        className="aspect-square rounded-full object-cover"
                                        height="30"
                                        width="30"
                                    />
                                    <p className='text-sm'>Dr. Ranjan</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BadgeCheck className='text-green-500' />
                                    <p className='text-sm'>Verified</p>
                                </div>
                            </div>
                            <div className='bg-linear-to-tr from-blue-500 to-green-200 h-2/3 rounded-md relative'>
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className='rounded-md w-full h-full object-cover'
                                />
                                <div
                                    className='bg-[#f8f9fa] shadow-sm absolute top-1/4 left-1/2 -translate-x-[125%] -translate-y-1/2 rounded-md w-2/3 py-1 text-center text-muted-foreground hidden lg:block'>
                                    Not Available
                                </div>
                            </div>
                            <div>
                                <p className='text-sm'>Consult On Video</p>
                                <p className='font-semibold'>
                                    Get expert medical advice anytime, anywhere
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f8f9fa] flex-1 rounded-xl p-2 relative flex justify-between items-center">
                        <div className='bg-white shadow-md rounded-lg h-full lg:max-h-2/3 lg:absolute top-1/3 lg:-translate-y-1/3 left-0 lg:rotate-3 w-full p-2 flex flex-col justify-between hover:scale-[105%] transition-all duration-200 gap-2'>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-1'>
                                    <img
                                        alt='avatar'
                                        src={MESCHAC_AVATAR}
                                        className="aspect-square rounded-full object-cover"
                                        height="30"
                                        width="30"
                                    />
                                    <p className='text-sm'>Dr. Ambedkar</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BadgeCheck className='text-green-500' />
                                    <p className='text-sm'>Verified</p>
                                </div>
                            </div>
                            <div className='bg-linear-to-tr from-primary to-pink-100 h-2/3 rounded-md relative'>
                                <img
                                    src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className='rounded-md w-full h-full object-cover'
                                />
                                <div
                                    className='bg-[#70e000] shadow-sm absolute top-3/4 right-1/2 translate-x-[100%] -translate-y-1/2 rounded-md w-2/3 py-1 text-center text-muted-foreground hidden lg:block'>
                                    Available
                                </div>
                            </div>
                            <div>
                                <p className='text-sm'>Consult On Audio</p>
                                <p className='font-semibold'>
                                    Talk to doctors clearly, even on low networks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoFeature