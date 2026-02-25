"use client";

import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = ({ scrolled }: { scrolled: boolean }) => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon
        className={`${scrolled ? "text-primary" : "text-white"} cursor-pointer`}
      />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = ({ scrolled }: { scrolled: boolean }) => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navList.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="underline-animation"
            animate={{ color: scrolled ? "hsl(var(--primary))" : "#ffffff" }}
            whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md text-primary"
          : "bg-transparent text-white"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full  font-bold">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="dm rustic 24"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <DesktopNav scrolled={scrolled} />
        <a href="tel:+381607182300" onClick={() => (window as any).gtag_report_conversion?.('tel:+381607182300')}>
          <motion.button
            whileHover={{
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--primary))",
            }}
            className={`${
              scrolled
                ? "text-primary border-primary"
                : "text-white border-white"
            } items-center justify-center rounded-full  border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-colors flex`}
          >
            <PhoneIcon />
            <p className="">+381607182300</p>
          </motion.button>
        </a>
        <MobileMenu scrolled={scrolled} />
      </nav>
    </header>
  );
}
