"use client";
import Link from "next/link";
import Image from "next/image";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useTranslations } from "next-intl";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import TransitionLink from "../TransitionLink/TransitionLink";

const Header = () => {

  const t = useTranslations('Header');

  return (
    <section className="py-4 header-animation">
      <div className="container">
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
            <span className="text-lg font-semibold tracking-tighter">
              Swasthya Setu
            </span>
          </TransitionLink>
          <NavigationMenu className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  <TransitionLink href="/">
                    {t('home')}
                  </TransitionLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  <TransitionLink href="/about">
                    {t('about')}
                  </TransitionLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  <TransitionLink href="/services">
                    {t('services')}
                  </TransitionLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  <TransitionLink href="/contact">
                    {t('contact')}
                  </TransitionLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
                  <TransitionLink href="/about" className="font-medium">
                    {t('about')}
                  </TransitionLink>
                  <TransitionLink href="/services" className="font-medium">
                    {t('services')}
                  </TransitionLink>
                  <TransitionLink href="/contact" className="font-medium">
                    {t('contact')}
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
