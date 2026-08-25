"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRFQ } from "@/context/RFQContext";
import { MegaMenu } from "./MegaMenu";
import { SearchModal } from "./SearchModal";
import { MobileNav } from "./MobileNav";
import { RFQDrawer } from "./RFQDrawer";
import { getAssetUrl } from "@/lib/basePath";
import { Search, ShoppingCart, Globe, Menu, ChevronDown, ArrowRight } from "lucide-react";

export function Header() {
  const { language, setLanguage, isRTL, t } = useLanguage();
  const { itemCount, setIsDrawerOpen } = useRFQ();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Streamlined 5 primary navigation groups for optimal spacing in both Arabic and English
  const navGroups = [
    {
      key: "solutions",
      label: language === "ar" ? "الحلول" : "Solutions",
      hasMega: true,
    },
    {
      key: "technologies",
      label: language === "ar" ? "التقنيات" : "Technologies",
      hasMega: true,
    },
    {
      key: "services",
      label: language === "ar" ? "الخدمات" : "Services",
      hasMega: true,
    },
    {
      key: "knowledge",
      label: language === "ar" ? "المعرفة" : "Knowledge",
      href: "/knowledge",
    },
    {
      key: "about",
      label: language === "ar" ? "الشركة" : "About",
      href: "/about",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-sm"
            : "py-3.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-9 w-32 sm:h-10 sm:w-36 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src={getAssetUrl("/images/logo.png")}
                alt="C-Water Water Treatment"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navGroups.map((item) => {
              if (item.hasMega) {
                const isActive = activeMenu === item.key;
                return (
                  <div
                    key={item.key}
                    onMouseEnter={() => setActiveMenu(item.key)}
                    className="relative py-2"
                  >
                    <button
                      className={`px-3 py-1.5 rounded-xl text-[13px] xl:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                        isActive
                          ? "text-cwater-blue bg-blue-50/80"
                          : "text-slate-700 hover:text-cwater-blue hover:bg-slate-100/70"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isActive ? "rotate-180 text-cwater-blue" : "text-slate-400"
                        }`}
                      />
                    </button>
                  </div>
                );
              }
              return (
                <Link
                  key={item.key}
                  href={item.href || `/${item.key}`}
                  onMouseEnter={() => setActiveMenu(null)}
                  className="px-3 py-1.5 rounded-xl text-[13px] xl:text-sm font-semibold text-slate-700 hover:text-cwater-blue hover:bg-slate-100/70 transition-all"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              title="Search (Ctrl+K)"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-600 hover:text-cwater-blue transition-all"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Toggle Button — hidden for now */}
            {/* <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:text-cwater-blue transition-all"
              title={language === "en" ? "Switch to Arabic" : "التغيير للإنجليزية"}
            >
              <Globe className="w-3.5 h-3.5 text-cwater-blue" />
              <span>{language === "en" ? "العربية" : "EN"}</span>
            </button> */}

            {/* Quote Cart Badge */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-600 hover:text-cwater-blue transition-all relative"
              title={t("rfqTitle")}
            >
              <ShoppingCart className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-cwater-blue text-white font-bold text-[10px] flex items-center justify-center px-1 shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <Link
              href="/request-solution"
              className="hidden sm:inline-flex items-center gap-1.5 py-2 px-4 rounded-xl text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue shadow-md shadow-cwater-blue/20 hover:shadow-lg transition-all group"
            >
              <span>{t("navRequestSolution")}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${isRTL ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-cwater-blue"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MegaMenu Portal */}
        <MegaMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
      </header>

      {/* Global Modals & Drawers */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      <RFQDrawer />
    </>
  );
}
