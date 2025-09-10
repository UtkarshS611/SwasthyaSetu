"use client"

import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { getGeminiResponse } from '@/lib/gemini'

import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

const Page = () => {
    const [symptoms, setSymptoms] = useState('');
    const [analysis, setAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const locale = useLocale();
    const t = useTranslations("SymptomAnalysis")

    const localeMap: Record<string, string> = {
        en: "english",
        fr: "french",
        hi: "hindi",
    };

    const handleAnalyze = async () => {
        if (!symptoms.trim()) return;

        setIsLoading(true);
        try {
            const prompt = `As a medical AI assistant, please analyze these symptoms and provide potential causes, recommended actions, and whether immediate medical attention might be needed. Format the response in clear sections without markdown symbols. Symptoms: ${symptoms} in ${localeMap[locale]}`;
            const response = await getGeminiResponse(prompt);
            const formattedResponse = response.replace(/\*\*/g, '').trim();
            setAnalysis(formattedResponse);
        } catch (error) {
            console.error('Error:', error);
            setAnalysis('Error analyzing symptoms. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <section className="w-full px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 py-24 lg:py-40">
            <div className='space-y-4 py-4 text-center lg:text-start'>
                <h1 className='text-4xl lg:text-6xl font-semibold flex flex-col'>
                    <span>
                        {t('titleOne')}
                    </span>
                    <span>
                        {t('titleTwo')}
                    </span>
                </h1>
                <p className='text-sm'>
                    {t('subtitle')}
                </p>
            </div>
            <div className="rounded-2xl px-4 py-6 shadow-lg w-full bg-background">
                <div className='mb-4'>
                    <h2 className="text-2xl font-semibold">{t('formtitle')}</h2>
                    <p className='text-muted-foreground'>{t('subtitle')}</p>
                </div>
                <div className="mb-4">
                    <textarea
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        className="w-full h-32 p-3 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                        placeholder="Enter your symptoms here..."
                    />
                </div>
                <Button
                    onClick={handleAnalyze}
                    disabled={!symptoms.trim() || isLoading}
                    className="w-full"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="animate-spin mr-2" />
                            Analyzing...
                        </>
                    ) : (
                        'Analyze Symptoms'
                    )}
                </Button>
                {analysis && (
                    <div className="mt-6">
                        <h3 className="text-lg font-medium mb-2">Analysis Results</h3>
                        <div className="bg-gray-50 rounded-lg p-4 prose prose-emerald max-w-none">
                            {analysis.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-2">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Page