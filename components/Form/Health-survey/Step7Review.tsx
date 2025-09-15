"use client";

import type { HealthSurveyFormData } from "./HealthSurvey";
import { convertToQnA, QA } from "@/lib/convertToQnA";
import { useTranslations } from "next-intl";

type Props = { formData: HealthSurveyFormData ;  t: (key: string) => string;};

export default function Step7Review({ formData }: Props) {
  const t = useTranslations("Survey");
  const qaPairs: QA[] = convertToQnA(formData, t);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Review</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md space-y-3">
        {qaPairs.map(({ question, answer }, idx) => (
          <div key={idx} className="border-b border-gray-300 dark:border-gray-700 pb-2">
            <p className="font-medium">Q: {question}</p>
            <p className="ml-2 text-gray-700 dark:text-gray-300">A: {answer}</p>
          </div>
        ))}
      </div>
      <p>Please review all the information carefully before submission.</p>
    </div>
  );
}
