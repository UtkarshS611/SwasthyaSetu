import React from "react";
import Link from "next/link";
import TransitionLink from "../TransitionLink/TransitionLink";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {

  const t = useTranslations("Footer");

  const sections = [
    {
      title: "Company",
      links: [
        { name: t("company.chat"), href: "/chat-with-ai" },
        { name: t("company.symptoms"), href: "/video-conference" },
        { name: t("company.video"), href: "/symptom-analysis" },
        { name: t("company.survey"), href: "/survey" },
      ],
    },
    {
      title: "Legal Links",
      links: [
        { name: t("legals.privacy"), href: "/" },
        { name: t("legals.copyright"), href: "/" }
      ],
    },
  ];

  const date = new Date().getFullYear();
  const legalLinks = [
    { name: t("legals.privacy"), href: "/" },
    { name: t("legals.copyright"), href: "/" }
  ]

  return (
    <footer className="pt-16 flex justify-center px-6 md:px-16 lg:px-32">
      <div className="w-full">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <TransitionLink
                href="/"
                className="flex items-center gap-2"
              >
                <Image
                  src="/logo.svg"
                  height={75}
                  width={75}
                  alt="logo"
                />
                <span className="text-lg font-semibold">
                  <span>Swasthya </span>
                  <span className="text-primary">Setu</span>
                </span>
              </TransitionLink>
            </div>
            <p className="text-muted-foreground md:max-w-[70%] text-sm">
              {t("subHeading")}
            </p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-semibold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <TransitionLink href={link.href}>{link.name}</TransitionLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t py-8 text-xs font-medium gap-5">
          <p className="order-2 lg:order-1">
            © Copyright Swasthya Setu {date}
          </p>
          <ul className="flex gap-2 order-1 md:order-2 md:flex-row">
            {legalLinks.map((link, index) => (
              <li key={index} className="hover:text-primary">
                <TransitionLink href={link.href}> {link.name}</TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
