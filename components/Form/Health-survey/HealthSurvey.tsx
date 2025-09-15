"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Step1BasicInfo from "./Step1BasicInfo";
import Step2Lifestyle from "./Step2Lifestyle";
import Step3MedicalHistory from "./Step3MedicalHistory";
import Step4GeneralHealth from "./Step4GeneralHealth";
import Step5Symptoms from "./Step5Symptoms";
import Step6Vitals from "./Step6Vitals";
import Step7Review from "./Step7Review";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { convertToQnA, QA } from "@/lib/convertToQnA";
import { generateAndSavePDF } from "@/lib/pdf";

export const initialFormData = {
  name: "",
  age: "",
  gender: "",
  weight: "",
  height: "",
  diet: "",
  smoking: "",
  alcohol: "",
  exercise: "",
  chronic: "",
  medications: "",
  allergies: "",
  sleep: "",
  energy: "",
  digestion: "",
  symptoms: "",
  bp: "",
  pulse: "",
  temp: "",
};

export type HealthSurveyFormData = typeof initialFormData;

export default function HealthSurvey() {
  const t = useTranslations("Survey"); // UI translations
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<HealthSurveyFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const slides = [
    <Step1BasicInfo key="basic" formData={formData} setFormData={setFormData} />,
    <Step2Lifestyle key="lifestyle" formData={formData} setFormData={setFormData} />,
    <Step3MedicalHistory key="medical" formData={formData} setFormData={setFormData} />,
    <Step4GeneralHealth key="general" formData={formData} setFormData={setFormData} />,
    <Step5Symptoms key="symptoms" formData={formData} setFormData={setFormData} />,
    <Step6Vitals key="vitals" formData={formData} setFormData={setFormData} />,
    <Step7Review key="review" formData={formData} t={t} />,
  ];

  const isFirst = step === 0;
  const isLast = step === slides.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setStep((prev) => prev + 1);
      return;
    }
    handleFinish();
  };

  const handleBack = () => {
    if (!isFirst) setStep((prev) => prev - 1);
  };

  // Finish button clicked → save JSON
  const handleFinish = () => {
    localStorage.setItem("healthSurveyJSON", JSON.stringify(formData));
    setSubmitted(true); // show new download button
  };

  // Generate PDF on demand in ENGLISH only
  const handleDownloadPDF = async () => {
    setLoading(true);
    try {
      // English questions only for PDF
      const tEnglish = (key: string) => key.split(".")[1]; // field names as English questions
      const qaData: QA[] = convertToQnA(formData, tEnglish);

      const pdfBlob = await generateAndSavePDF(qaData);
      const url = URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "HealthSurvey.pdf";
      link.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0a0a0a] dark:to-[#1c1c1c] px-4">
      <Card className="w-full max-w-3xl shadow-2xl border-none rounded-2xl bg-white/80 dark:bg-[#111]/80 backdrop-blur-md">
        <CardHeader>
          <Progress value={((step + 1) / slides.length) * 100} className="h-2 rounded-full" />
          <p className="text-sm text-muted-foreground mt-2">
            Step {step + 1} of {slides.length}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col h-[600px]">
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <p className="text-center text-lg font-semibold mt-20">
                Generating PDF, please wait...
              </p>
            ) : submitted ? (
              <div className="text-center mt-10 space-y-4">
                <p className="text-green-600 text-lg font-semibold">
                  Form submitted successfully!
                </p>
                <Button
                  onClick={handleDownloadPDF}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Download PDF
                </Button>
              </div>
            ) : (
              slides[step]
            )}
          </div>

          {!loading && !submitted && (
            <div className="flex justify-between border-t pt-4 mt-4 sticky bottom-0 bg-white/80 dark:bg-[#111]/80">
              <Button onClick={handleBack} disabled={isFirst} variant="outline">
                Back
              </Button>
              <Button onClick={handleNext}>{isLast ? "Finish" : "Next"}</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
