"use client";

import Link from "next/link";
import TransitionLink from "../TransitionLink/TransitionLink";
import Image from "next/image";
import { useTranslations } from "next-intl";

const links = [
  { key: "features", href: "#" },
  { key: "solution", href: "#" },
  { key: "customers", href: "#" },
  { key: "pricing", href: "#" },
  { key: "help", href: "#" },
  { key: "about", href: "#" }
];

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="px-4 sm:px-16 md:px-36 lg:px-44 xl:px-56 py-16">
      <div className="w-full">
        <div className="flex justify-center items-center">
          <TransitionLink href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              height={35}
              width={35}
              alt="Swasthya Setu Logo"
            />
            <span className="text-lg font-semibold tracking-tighter text-black">
              Swasthya Setu
            </span>
          </TransitionLink>
        </div>

        {/* Navigation Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{t(link.key)}</span>
            </Link>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {/* keep your SVG social links here */}
        </div>

        {/* Footer Rights */}
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Tailark, {t("rights")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
