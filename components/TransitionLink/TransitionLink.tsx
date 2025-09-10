'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ReactNode, MouseEvent } from 'react';

interface TransitionLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const TransitionLink = ({
    href,
    children,
    className = '',
    onClick
}: TransitionLinkProps) => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (onClick) {
            onClick(e);
        }
        const localizedPath = href.startsWith('/')
            ? `/${locale}${href}`
            : `/${locale}/${href}`;

        setTimeout(() => {
            router.push(localizedPath);
        }, 200);
    };

    return (
        <a
            href={`/${locale}${href}`}
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
}

export default TransitionLink;