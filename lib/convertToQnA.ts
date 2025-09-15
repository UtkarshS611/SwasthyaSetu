"use client";

export type QA = { question: string; answer: string };

const stepMapping: Record<string, string> = {
  name: "Step1",
  age: "Step1",
  gender: "Step1",
  weight: "Step1",
  height: "Step1",
  diet: "Step2",
  smoking: "Step2",
  alcohol: "Step2",
  exercise: "Step2",
  chronic: "Step3",
  medications: "Step3",
  allergies: "Step3",
  sleep: "Step4",
  energy: "Step4",
  digestion: "Step4",
  symptoms: "Step5",
  bp: "Step6",
  pulse: "Step6",
  temp: "Step6",
};

export function convertToQnA(
  formData: Record<string, any>,
  t: (key: string) => string
): QA[] {
  return Object.entries(formData).map(([key, value]) => {
    const step = stepMapping[key] || "Step7";
    let question = t(`${step}.${key}`);
    if (typeof question !== "string") question = String(question);

    let answer = value;
    if (answer === undefined || answer === null || answer === "") answer = "N/A";
    else answer = String(answer);

    return { question, answer };
  });
}
