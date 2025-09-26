"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { BadgeCheck } from "lucide-react";

import TransitionLink from "../TransitionLink/TransitionLink";

import { Button } from "../ui/button";
import { AnimateSvg } from "../VideoFeature/Arrow";

const Records = () => {
    const t = useTranslations("Records");
    const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";

    return (
        <section className="my-8 overflow-hidden relative dark:bg-background bg-base-100 rounded-[40px] p-5 lg:p-16 gap-10 flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:max-w-2xl space-y-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-start">
                <h2 className="font-semibold text-4xl lg:text-5xl">{t("title")}</h2>
                <p className="text-muted-foreground text-sm">
                    {t.rich("description", {
                        highlight: (chunks) => (
                            <span className="text-black dark:text-white font-semibold">
                                {chunks}
                            </span>
                        ),
                    })}
                </p>
                <Button>
                    <TransitionLink href="video-conference">{t("cta")}</TransitionLink>
                </Button>
            </div>

            <div className="bg-background dark:bg-base-900 relative shadow-md rounded-3xl max-w-3xl w-full min-h-[70vh] p-5 space-y-5 flex flex-col">
                <div className="items-center absolute hidden lg:flex bottom-0 left-[-27%] z-99">
                    <span className="text-[#70e000] -rotate-6 font-bold">{t("tryOut")}</span>
                    <AnimateSvg
                        width="150px"
                        className=""
                        height="150px"
                        viewBox="0 0 225 75"
                        path="M3 58.1151C35.9237 60.1367 64.1957 53.2742 82.9999 24.5151C89.33 14.8339 91.8913 -1.32279 74.1111 4.60398C57.5945 10.1095 48.7621 34.6091 55.1778 50.2929C64.8056 73.8289 92.9371 74.9924 114.644 69.3151C148.228 60.5317 181.089 48.8653 211 31.2706C217.093 27.6867 173.175 20.0151 187.8 24.5151C198.123 27.6912 207.525 27.7151 218.2 27.7151C225.887 27.7151 220.97 30.2928 216.511 34.1151C209.264 40.3271 202.139 50.3578 199.8 59.7151"
                        strokeColor="#70e000"
                        strokeWidth={5}
                        strokeLinecap="round"
                        animationDuration={1.5}
                        enableHoverAnimation={true}
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-primary">{t("insightsTitle")}</h2>
                    <p className="text-muted-foreground">{t("insightsDescription")}</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-2 flex-1">
                    {/* Video Consult Card */}
                    <div className="bg-base-100 dark:bg-background flex-1 rounded-xl p-2 relative flex justify-center items-center">
                        <div className="bg-white dark:bg-base-900 shadow-md rounded-lg lg:absolute top-1/2 lg:-translate-y-1/2 w-full p-2 flex flex-col justify-between hover:-rotate-3 hover:scale-[105%] transition-all duration-200 gap-2">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-1">
                                    <Image
                                        alt="avatar"
                                        src={MESCHAC_AVATAR}
                                        className="aspect-square rounded-full object-cover"
                                        loading="lazy"
                                        height="30"
                                        width="30"
                                    />
                                    <p className="text-sm">{t("doctor1")}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <BadgeCheck className="text-green-500" />
                                    <p className="text-sm">{t("verified")}</p>
                                </div>
                            </div>
                            <div className="rounded-md relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1740479050129-7fef21254518?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={700}
                                    height={400}
                                    loading="lazy"
                                    alt=""
                                    className="rounded-md w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm">{t("videoConsultTitle")}</p>
                                <p className="font-semibold">{t("videoConsultDesc")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Audio Consult Card */}
                    <div className="bg-base-100 dark:bg-background flex-1 rounded-xl p-2 relative flex justify-between items-center">
                        <div className="bg-white dark:bg-base-900 shadow-md rounded-lg lg:absolute top-1/3 lg:-translate-y-1/3 left-0 hover:rotate-3 w-full p-2 flex flex-col justify-between hover:scale-[105%] transition-all duration-200 gap-2">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-1">
                                    <Image
                                        alt="avatar"
                                        src={MESCHAC_AVATAR}
                                        className="aspect-square rounded-full object-cover"
                                        loading="lazy"
                                        height="30"
                                        width="30"
                                    />
                                    <p className="text-sm">{t("doctor2")}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <BadgeCheck className="text-green-500" />
                                    <p className="text-sm">{t("verified")}</p>
                                </div>
                            </div>
                            <div className="rounded-md relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?q=80&w=1761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={700}
                                    height={400}
                                    loading="lazy"
                                    alt=""
                                    className="rounded-md w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm">{t("audioConsultTitle")}</p>
                                <p className="font-semibold">{t("audioConsultDesc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Records;
