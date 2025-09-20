"use client";

import React from "react";
import TransitionLink from "../TransitionLink/TransitionLink";
import { BadgeCheck } from "lucide-react";
import { Button } from "../ui/button";
import { AnimateSvg } from "./Arrow";
import Image from "next/image";
import { useTranslations } from "next-intl";

const VideoFeature = () => {
  const t = useTranslations("VideoFeature");
  const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";

  return (
    <section className="my-8 overflow-hidden relative dark:bg-background bg-base-100 lg:h-[90vh] rounded-[40px] p-5 lg:p-16 gap-10 flex flex-col lg:flex-row justify-between items-center">
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

      <div className="bg-background dark:bg-base-900 relative shadow-md rounded-3xl max-w-3xl w-full h-fit lg:h-full p-5 space-y-5 flex flex-col">
        <div className="items-center absolute hidden lg:flex bottom-0 left-[-27%] z-99">
          <span className="text-[#70e000] -rotate-6 font-bold">{t("tryOut")}</span>
          <AnimateSvg
            width="150px"
            className=""
            height="150px"
            viewBox="0 0 225 75"
            path="M3 58.1151C35.9237 60.1367 64.1957 53.2742..."
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
            <div className="bg-white dark:bg-base-900 shadow-md rounded-lg lg:h-full lg:max-h-2/3 lg:absolute top-1/2 lg:-translate-y-1/2 w-full p-2 flex flex-col justify-between hover:-rotate-3 hover:scale-[105%] transition-all duration-200 gap-2">
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
              <div className="bg-linear-to-tr from-blue-500 to-green-200 h-2/3 rounded-md relative">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop..."
                  width={700}
                  height={400}
                  loading="lazy"
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="bg-[#f8f9fa] shadow-sm absolute top-1/4 left-1/2 -translate-x-[125%] -translate-y-1/2 rounded-md w-2/3 py-1 text-center text-muted-foreground hidden lg:block dark:text-black">
                  {t("notAvailable")}
                </div>
              </div>
              <div>
                <p className="text-sm">{t("videoConsultTitle")}</p>
                <p className="font-semibold">{t("videoConsultDesc")}</p>
              </div>
            </div>
          </div>

          {/* Audio Consult Card */}
          <div className="bg-base-100 dark:bg-background flex-1 rounded-xl p-2 relative flex justify-between items-center">
            <div className="bg-white dark:bg-base-900 shadow-md rounded-lg lg:h-full lg:max-h-2/3 lg:absolute top-1/3 lg:-translate-y-1/3 left-0 hover:rotate-3 w-full p-2 flex flex-col justify-between hover:scale-[105%] transition-all duration-200 gap-2">
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
              <div className="bg-linear-to-tr from-primary to-pink-100 h-2/3 rounded-md relative">
                <Image
                  src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=1770&auto=format&fit=crop..."
                  width={700}
                  height={400}
                  loading="lazy"
                  alt=""
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="bg-[#70e000] shadow-sm absolute top-3/4 right-1/2 translate-x-[100%] -translate-y-1/2 rounded-md w-2/3 py-1 text-center text-muted-foreground hidden lg:block dark:text-black">
                  {t("available")}
                </div>
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

export default VideoFeature;
