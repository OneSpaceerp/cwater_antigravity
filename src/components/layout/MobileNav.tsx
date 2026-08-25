"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRFQ } from "@/context/RFQContext";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";
import { technologiesData } from "@/data/technologies";
import { partnersData } from "@/data/partners";
import { getAssetUrl } from "@/lib/basePath";
import {
  X,
  Globe,
  Search,
  ShoppingCart,
  ChevronDown,
  ArrowRight,
  PhoneCall,
  Mail,
  ShieldCheck,
} from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileNav({ isOpen, onClose, onOpenSearch }: MobileNavProps) {
  const { language, setLanguage, isRTL, t } = useLanguage();
  const { itemCount, setIsDrawerOpen } = useRFQ();

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white text-slate-900 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
        <Link href="/" onClick={onClose} className="relative h-8 w-28">
          <Image
            src={getAssetUrl("/images/logo.png")}
            alt="C-Water Logo"
            fill
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-cwater-blue" />
            <span>{language === "en" ? "العربية" : "EN"}</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* Quick Search Trigger */}
        <button
          onClick={() => {
            onClose();
            onOpenSearch();
          }}
          className="w-full p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-cwater-blue" />
            <span>{t("searchPlaceholder")}</span>
          </div>
          <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200">
            Ctrl+K
          </span>
        </button>

        {/* 1. Solutions Accordion */}
        <div className="border-b border-slate-100 pb-2">
          <button
            onClick={() => toggleSection("solutions")}
            className="w-full py-2.5 flex items-center justify-between text-sm font-bold text-slate-900"
          >
            <span>{t("navSolutions")}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSection === "solutions" ? "rotate-180 text-cwater-blue" : "text-slate-400"
              }`}
            />
          </button>
          {expandedSection === "solutions" && (
            <div className="pl-4 pr-4 py-2 space-y-2 text-xs">
              {solutionsData.map((sol) => (
                <Link
                  key={sol.id}
                  href={`/solutions/${sol.slug}`}
                  onClick={onClose}
                  className="block py-1.5 text-slate-600 hover:text-cwater-blue"
                >
                  {language === "ar" ? sol.titleAr : sol.title}
                </Link>
              ))}
              <Link
                href="/solutions"
                onClick={onClose}
                className="block pt-1 font-bold text-cwater-blue"
              >
                {t("allSolutions")} →
              </Link>
            </div>
          )}
        </div>

        {/* 2. Industries Accordion */}
        <div className="border-b border-slate-100 pb-2">
          <button
            onClick={() => toggleSection("industries")}
            className="w-full py-2.5 flex items-center justify-between text-sm font-bold text-slate-900"
          >
            <span>{t("navIndustries")}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSection === "industries" ? "rotate-180 text-cwater-blue" : "text-slate-400"
              }`}
            />
          </button>
          {expandedSection === "industries" && (
            <div className="pl-4 pr-4 py-2 space-y-2 text-xs">
              {industriesData.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industries/${ind.slug}`}
                  onClick={onClose}
                  className="block py-1.5 text-slate-600 hover:text-cwater-blue"
                >
                  {language === "ar" ? ind.nameAr : ind.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 3. Technologies Accordion */}
        <div className="border-b border-slate-100 pb-2">
          <button
            onClick={() => toggleSection("technologies")}
            className="w-full py-2.5 flex items-center justify-between text-sm font-bold text-slate-900"
          >
            <span>{t("navTechnologies")}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSection === "technologies" ? "rotate-180 text-cwater-blue" : "text-slate-400"
              }`}
            />
          </button>
          {expandedSection === "technologies" && (
            <div className="pl-4 pr-4 py-2 space-y-2 text-xs">
              {technologiesData.map((tech) => (
                <Link
                  key={tech.id}
                  href={`/technologies/${tech.slug}`}
                  onClick={onClose}
                  className="block py-1.5 text-slate-600 hover:text-cwater-blue"
                >
                  {language === "ar" ? tech.nameAr : tech.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 4. Direct Links */}
        <div className="space-y-2.5 pt-2 text-sm font-bold text-slate-800">
          <Link
            href="/products"
            onClick={onClose}
            className="block py-2 hover:text-cwater-blue"
          >
            {t("navProducts")}
          </Link>
          <Link
            href="/partners"
            onClick={onClose}
            className="block py-2 hover:text-cwater-blue"
          >
            {t("navPartners")}
          </Link>
          <Link
            href="/services"
            onClick={onClose}
            className="block py-2 hover:text-cwater-blue"
          >
            {t("navServices")}
          </Link>
          <Link
            href="/projects"
            onClick={onClose}
            className="block py-2 hover:text-cwater-blue"
          >
            {t("navProjects")}
          </Link>
          <Link
            href="/knowledge"
            onClick={onClose}
            className="block py-2 hover:text-cwater-blue"
          >
            {t("navKnowledge")}
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="block py-2 hover:text-cwater-blue"
          >
            {t("navAbout")}
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block py-2 hover:text-cwater-blue"
          >
            {t("navContact")}
          </Link>
        </div>
      </div>

      {/* Bottom Floating CTAs */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
        <Link
          href="/request-solution"
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-cwater-blue hover:bg-cwater-sky text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-cwater-blue/20"
        >
          <span>{t("navRequestSolution")}</span>
          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
        </Link>
      </div>
    </div>
  );
}
