import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import './globals.css';

import { routing } from '@/i18n/routing';

import { ThemeProvider } from '@/components/Theme-provider/ThemeProvider';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Swasthya Setu - Your Health Companion App',
  description: 'Your Health Companion App - Track, Manage, and Improve Your Well-being',
  icons: {
    icon: '/logo.svg',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming locale is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='relative'>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className='absolute left-0 top-0 w-full h-screen hero-gradient -z-1'></div>
            {children}
            <Footer />
            <Toaster richColors theme="light" position="top-center" />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}