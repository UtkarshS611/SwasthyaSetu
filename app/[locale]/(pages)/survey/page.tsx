"use client";

import { useTranslations } from "next-intl";

import HealthSurvey from "@/components/Form/Health-survey/HealthSurvey";

export default function SurveyPage() {

  const t = useTranslations("Survey");

  return (
    <main className="w-full px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 py-24 relative">
      <div className='space-y-4 py-4 text-center lg:text-start'>
        <h1 className='text-4xl lg:text-6xl font-semibold flex flex-col'>
          <span>
            {t('SurveyPage.titleOne')}
          </span>
          <span>
            {t('SurveyPage.titleTwo')}
          </span>
        </h1>
        <p className='text-sm'>
          {t('SurveyPage.subtitle')}
        </p>
      </div>
      <div className="my-16">
        <HealthSurvey />
      </div>
    </main>
  );
}
