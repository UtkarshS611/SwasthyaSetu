"use client";

import { useState, useEffect } from "react";
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
    <Step7Review key="review" formData={formData} setFormData={setFormData} />,
  ];

  useEffect(() => {
    console.log("[Hydration Debug] Step:", step);
    console.log("[Hydration Debug] formData:", formData);
  }, [step, formData]);

  const isFirst = step === 0;
  const isLast = step === slides.length - 1;

  const handleNext = async () => {
    if (!isLast) {
      setStep((prev) => prev + 1);
    } else {
      // Finish button logic
      setLoading(true);
      try {
        // PDF generate & save in localStorage
        await generateAndSavePDF(formData);

        // Save JSON data also in localStorage
        localStorage.setItem("healthSurveyJSON", JSON.stringify(formData));

        setSubmitted(true);
      } catch (err) {
        console.error("PDF generation failed:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (!isFirst) setStep((prev) => prev - 1);
  };

  const progress = ((step + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0a0a0a] dark:to-[#1c1c1c] px-4">
      <Card className="w-full max-w-3xl shadow-2xl border-none rounded-2xl bg-white/80 dark:bg-[#111]/80 backdrop-blur-md">
        <CardHeader>
          <Progress value={progress} className="h-2 rounded-full" />
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
              <p className="text-center text-green-600 text-lg font-semibold mt-20">
                Form submitted successfully!
              </p>
            ) : (
              slides[step]
            )}
          </div>

          {!loading && !submitted && (
            <div className="flex justify-between border-t pt-4 mt-4 sticky bottom-0 bg-white/80 dark:bg-[#111]/80">
              <Button onClick={handleBack} disabled={isFirst} variant="outline">
                Back
              </Button>
              <Button onClick={handleNext}>
                {isLast ? "Finish" : "Next"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
