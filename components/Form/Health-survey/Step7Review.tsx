
"use client";

import { useTranslations } from "next-intl";
import type { HealthSurveyFormData } from "./HealthSurvey";

type Props = {
  formData: HealthSurveyFormData;
  setFormData: React.Dispatch<React.SetStateAction<HealthSurveyFormData>>;
};

export default function Step7Review({ formData }: Props) {
  const t = useTranslations("Survey.Step7");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("title")}</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        {JSON.stringify(formData, null, 2)}
      </pre>
      <p>{t("reviewNote")}</p>
    </div>
  );
}
