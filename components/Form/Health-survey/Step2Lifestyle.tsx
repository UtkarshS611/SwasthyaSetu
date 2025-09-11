"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step2Lifestyle({ formData, setFormData }: Props) {
  const t = useTranslations("Survey.Step2");

  useEffect(() => {
    console.log("[Hydration Debug] Step2 formData:", formData);
  }, [formData]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("title")}</h2>

      <div className="space-y-2">
        <Label>{t("diet")}</Label>
        <Input type="text" value={formData.diet} onChange={(e) => setFormData({ ...formData, diet: e.target.value })} placeholder={t("diet")} />
      </div>

      <div className="space-y-2">
        <Label>{t("smoking")}</Label>
        <Select value={formData.smoking} onValueChange={(val) => setFormData({ ...formData, smoking: val })}>
          <SelectTrigger>
            <SelectValue placeholder={t("smoking")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>{t("alcohol")}</Label>
        <Select value={formData.alcohol} onValueChange={(val) => setFormData({ ...formData, alcohol: val })}>
          <SelectTrigger>
            <SelectValue placeholder={t("alcohol")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>{t("exercise")}</Label>
        <Input type="text" value={formData.exercise} onChange={(e) => setFormData({ ...formData, exercise: e.target.value })} placeholder={t("exercise")} />
      </div>
    </div>
  );
}
