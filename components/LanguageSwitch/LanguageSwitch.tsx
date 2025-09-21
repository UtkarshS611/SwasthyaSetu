'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

import { Languages } from 'lucide-react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function LanguageSwitch() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const languages = [
        // add more languages later
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'Hindi' },
        { code: 'pu', label: 'Punjabi' },
        { code: 'ur', label: 'Urdu' },
        { code: 'fr', label: 'French' },
    ]

    return (
        <div className="flex items-center gap-2">
            <Select value={locale} onValueChange={handleChange}>
                <SelectTrigger className="w-full lg:w-[130px]">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {languages.map((loc) => (
                            <SelectItem key={loc.code} value={loc.code}>
                                {loc.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Languages />
        </div>
    );
}