'use client';
import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

import { useRouter, usePathname } from 'next/navigation';

import { useLocale } from 'next-intl';

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

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (onClick) {
            onClick(e);
        }
        const localizedPath = href.startsWith('/')
            ? `/${locale}${href}`
            : `/${locale}/${href}`;

        router.push(localizedPath);
    };

    return (
        <Link
            href={`/${locale}${href}`}
            onClick={handleClick}
            className={className}
        >
            {children}
        </Link>
    );
}

export default TransitionLink;