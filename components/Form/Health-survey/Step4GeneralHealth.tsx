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

export default function Step4GeneralHealth({ formData, setFormData }: Props) {
  const t = useTranslations("Survey.Step4");

  useEffect(() => {
    console.log("[Hydration Debug] Step4 formData:", formData);
  }, [formData]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("title")}</h2>

      <div className="space-y-2">
        <Label>{t("sleep")}</Label>
        <Input type="text" value={formData.sleep} onChange={(e) => setFormData({ ...formData, sleep: e.target.value })} placeholder={t("sleep")} />
      </div>

      <div className="space-y-2">
        <Label>{t("energy")}</Label>
        <Input type="text" value={formData.energy} onChange={(e) => setFormData({ ...formData, energy: e.target.value })} placeholder={t("energy")} />
      </div>

      <div className="space-y-2">
        <Label>{t("digestion")}</Label>
        <Input type="text" value={formData.digestion} onChange={(e) => setFormData({ ...formData, digestion: e.target.value })} placeholder={t("digestion")} />
      </div>
    </div>
  );
}
