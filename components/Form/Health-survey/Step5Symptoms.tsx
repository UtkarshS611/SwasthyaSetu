"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { HealthSurveyFormData } from "./HealthSurvey";


type Props = {
  formData: HealthSurveyFormData;
  setFormData: React.Dispatch<React.SetStateAction<HealthSurveyFormData>>;
};

export default function Step5Symptoms({ formData, setFormData }: Props) {
  const t = useTranslations("Survey.Step5");

  useEffect(() => {
    console.log("[Hydration Debug] Step5 formData:", formData);
  }, [formData]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("title")}</h2>

      <div className="space-y-2">
        <Label>{t("symptoms")}</Label>
        <Textarea value={formData.symptoms || ""} onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })} placeholder={t("symptoms")} />
      </div>
    </div>
  );
}
