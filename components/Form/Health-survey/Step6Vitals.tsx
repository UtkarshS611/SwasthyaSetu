"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step6Vitals({ formData, setFormData }: Props) {
  const t = useTranslations("Survey.Step6");

  useEffect(() => {
    console.log("[Hydration Debug] Step6 formData:", formData);
  }, [formData]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("title")}</h2>

      <div className="space-y-2">
        <Label>{t("bp")}</Label>
        <Input type="text" value={formData.bp} onChange={(e) => setFormData({ ...formData, bp: e.target.value })} placeholder={t("bp")} />
      </div>

      <div className="space-y-2">
        <Label>{t("pulse")}</Label>
        <Input type="text" value={formData.pulse} onChange={(e) => setFormData({ ...formData, pulse: e.target.value })} placeholder={t("pulse")} />
      </div>

      <div className="space-y-2">
        <Label>{t("temp")}</Label>
        <Input type="text" value={formData.temp} onChange={(e) => setFormData({ ...formData, temp: e.target.value })} placeholder={t("temp")} />
      </div>
    </div>
  );
}
