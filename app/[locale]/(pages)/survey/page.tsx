"use client";
import HealthSurvey from "@/components/Form/Health-survey/HealthSurvey";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function SurveyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradient (scoped only for this page) */}
      <div className="absolute inset-0 hero-gradient -z-10" />

      <Card className="w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur">
        <CardHeader className="border-b">
          <CardTitle className="text-center text-2xl font-bold">
            Health Survey
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto p-6">
          <HealthSurvey />
        </CardContent>
      </Card>
    </main>
  );
}
