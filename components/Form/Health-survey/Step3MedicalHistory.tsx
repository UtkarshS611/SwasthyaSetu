"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import type { HealthSurveyFormData } from "./HealthSurvey";

type Props = {
  formData: HealthSurveyFormData;
  setFormData: React.Dispatch<React.SetStateAction<HealthSurveyFormData>>;
};

export default function Step3MedicalHistory({ formData, setFormData }: Props) {
  const t = useTranslations("Survey.Step3");

  useEffect(() => {
    console.log("[Hydration Debug] Step3 formData:", formData);
  }, [formData]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("title")}</h2>

      <div className="space-y-2">
        <Label>{t("chronic")}</Label>
        <Input type="text" value={formData.chronic} onChange={(e) => setFormData({ ...formData, chronic: e.target.value })} placeholder={t("chronic")} />
      </div>

      <div className="space-y-2">
        <Label>{t("medications")}</Label>
        <Input type="text" value={formData.medications} onChange={(e) => setFormData({ ...formData, medications: e.target.value })} placeholder={t("medications")} />
      </div>

      <div className="space-y-2">
        <Label>{t("allergies")}</Label>
        <Input type="text" value={formData.allergies} onChange={(e) => setFormData({ ...formData, allergies: e.target.value })} placeholder={t("allergies")} />
      </div>
    </div>
  );
}
