'use client'

import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

const Faqs = () => {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'When can I book a consultation?',
            answer: 'You can book telemedicine consultations anytime, 24/7. Doctor availability may vary, but appointment slots and wait times are always visible in the app.',
        },
        {
            id: 'item-2',
            icon: 'stethoscope',
            question: 'What types of doctors are available?',
            answer: 'Our platform connects you with general physicians, pediatricians, dermatologists, and other specialists. You can choose based on your health concern and preferred time slot.',
        },
        {
            id: 'item-3',
            icon: 'pill',
            question: 'How do I check medicine availability?',
            answer: 'After your consultation, the platform shows real-time stock updates from nearby pharmacies so you can easily find where your prescribed medicines are available.',
        },
        {
            id: 'item-4',
            icon: 'globe',
            question: 'Is the platform available in multiple languages?',
            answer: 'Yes, the app supports multiple Indian languages including Hindi, Punjabi, and Bengali, making healthcare more accessible to everyone.',
        },
        {
            id: 'item-5',
            icon: 'user',
            question: 'Do I need to create an account?',
            answer: 'Yes, creating an account helps you securely store medical history, prescriptions, and past consultations, making future visits faster and more personalized.',
        },        
    ]

    return (
        <section className="px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 py-16">
            <div className="w-full">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
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