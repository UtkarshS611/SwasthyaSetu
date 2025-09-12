"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import TransitionLink from "../TransitionLink/TransitionLink";

const Header = () => {

  const t = useTranslations('Header');

  return (
    <section className="py-4 header-animation px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56">
      <div className="w-full">
        <nav className="flex items-center justify-between relative">
          <TransitionLink
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.svg"
              height={35}
              width={35}
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter text-black">
              Swasthya Setu
            </span>
          </TransitionLink>
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 max-w-max space-x-2 text-black">
            <Button variant={"ghost"}>
              <TransitionLink href="/">
                {t('home')}
              </TransitionLink>
            </Button>
            <Button variant={"ghost"}>
              <TransitionLink href="/chat-with-ai">
                {t('chat')}
              </TransitionLink>
            </Button>
            <Button variant={"ghost"}>
              <TransitionLink href="/symptom-analysis">
                {t('symptoms')}
              </TransitionLink>
            </Button>
            <Button variant={"ghost"}>
              <TransitionLink href="/video-conference">
                {t('video')}
              </TransitionLink>
            </Button>
             <Button variant={"ghost"}>
              <TransitionLink href="/survey">
                {t('survey')}
              </TransitionLink>
            </Button>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeSwitch />
            <Button variant="outline">Sign in</Button>
            <LanguageSwitch />
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <TransitionLink
                    href="/"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/logo.svg"
                      height={35}
                      width={35}
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Swasthya Setu
                    </span>
                  </TransitionLink>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <TransitionLink href="/" className="font-medium">
                    {t('home')}
                  </TransitionLink>
                  <TransitionLink href="/chat-with-ai">
                    {t('chat')}
                  </TransitionLink>
                  <TransitionLink href="/symptom-analysis">
                    {t('symptoms')}
                  </TransitionLink>
                  <TransitionLink href="/video-conference">
                    {t('video')}
                  </TransitionLink>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <LanguageSwitch />
                  <ThemeSwitch />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Header;
