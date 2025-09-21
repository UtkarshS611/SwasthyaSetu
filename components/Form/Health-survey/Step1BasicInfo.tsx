"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

import type { HealthSurveyFormData } from "./HealthSurvey";

type Props = {
  formData: HealthSurveyFormData;
  setFormData: React.Dispatch<React.SetStateAction<HealthSurveyFormData>>;
};

export default function Step1BasicInfo({ formData, setFormData }: Props) {
  const t = useTranslations("Survey.Step1");

  useEffect(() => {
    console.log("[Hydration Debug] Step1 formData:", formData);
  }, [formData]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("title")}</h2>

      <div className="space-y-2">
        <Label>{t("name")}</Label>
        <Input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t("name")} />
      </div>

      <div className="space-y-2">
        <Label>{t("age")}</Label>
        <Input type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} placeholder={t("age")} />
      </div>

      <div className="space-y-2">
        <Label>{t("gender")}</Label>
        <Select value={formData.gender} onValueChange={(val) => setFormData({ ...formData, gender: val })}>
          <SelectTrigger>
            <SelectValue placeholder={t("gender")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>{t("weight")}</Label>
        <Input type="number" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} placeholder={t("weight")} />
      </div>

      <div className="space-y-2">
        <Label>{t("height")}</Label>
        <Input type="number" value={formData.height} onChange={(e) => setFormData({ ...formData, height: e.target.value })} placeholder={t("height")} />
      </div>
    </div>
  );
}
