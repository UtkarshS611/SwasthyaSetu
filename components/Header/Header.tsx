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

const Header = () => {

  const t = useTranslations('Header');

  return (
    <section className="py-4 header-animation">
      <div className="container">
        <nav className="flex items-center justify-between relative">
          <Link
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
          </Link>
          <NavigationMenu className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  {t('home')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  {t('about')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className={navigationMenuTriggerStyle()}
                >
                  {t('services')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  {t('contact')}
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
                  <Link
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
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <Link href="/" className="font-medium">
                    {t('home')}
                  </Link>
                  <Link href="/about" className="font-medium">
                    {t('about')}
                  </Link>
                  <Link href="/services" className="font-medium">
                    {t('services')}
                  </Link>
                  <Link href="/contact" className="font-medium">
                    {t('contact')}
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <LanguageSwitch />
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
