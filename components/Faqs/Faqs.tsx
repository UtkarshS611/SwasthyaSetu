'use client'

import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslations } from 'next-intl'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

const Faqs = () => {

    const t = useTranslations('FAQs')

    const faqItems: FAQItem[] = [
        {
            id: "item-1",
            icon: "clock",
            question: t("q1"),
            answer: t("a1"),
        },
        {
            id: "item-2",
            icon: "stethoscope",
            question: t("q2"),
            answer: t("a2"),
        },
        {
            id: "item-3",
            icon: "pill",
            question: t("q3"),
            answer: t("a3"),
        },
        {
            id: "item-4",
            icon: "globe",
            question: t("q4"),
            answer: t("a4"),
        },
        {
            id: "item-5",
            icon: "user",
            question: t("q5"),
            answer: t("a5"),
        },
    ];



    return (
        <section className="px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 py-16">
            <div className="w-full">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">{t('title')}</h2>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4 text-primary"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs;