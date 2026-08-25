"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getAssetUrl } from "@/lib/basePath";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";
import { technologiesData } from "@/data/technologies";
import { partnersData } from "@/data/partners";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, ChevronRight } from "lucide-react";

export function Footer() {
  const { language, isRTL, t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={getAssetUrl("/images/logo.png")}
                alt="C-Water Logo"
                width={160}
                height={55}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {language === "ar"
                ? "C-Water: شركة هندسية متخصصة في معالجة المياه الصناعية والتجارية في مصر، تدمج أرقى التقنيات العالمية (Walchem, TIMEX, Kurita) لتقديم حلول متكاملة وموثوقة."
                : "C-Water combines local engineering expertise with proven global technologies (Walchem, TIMEX, Kurita Europe) to design, treat, control, monitor, and optimize industrial water systems."}
            </p>

            {/* Credential Tags */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                Walchem Authorized
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                TIMEX Filtration
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                Kurita Europe
              </span>
            </div>

            {/* Contact Info */}
            <div className="pt-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cwater-cyan shrink-0 mt-0.5" />
                <span>
                  {language === "ar"
                    ? "السادس من أكتوبر، بوصلة 3، وحدة رقم I 21، مصر"
                    : "6th of October, Bosla 3, Unit No. I 21, Egypt"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cwater-cyan shrink-0" />
                <div className="flex flex-wrap gap-x-2 font-mono">
                  <a href="tel:+201122299044" className="hover:text-cwater-cyan transition-colors">
                    (+20) 112 229 9044
                  </a>
                  <span>·</span>
                  <a href="tel:+201117711444" className="hover:text-cwater-cyan transition-colors">
                    (+20) 111 771 1444
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cwater-cyan shrink-0" />
                <a href="mailto:engineering@cw-eg.com" className="hover:text-cwater-cyan transition-colors">
                  engineering@cw-eg.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cwater-cyan shrink-0" />
                <span>{t("workingHours")}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-4">
              {t("navSolutions")}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {solutionsData.slice(0, 6).map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="hover:text-cwater-cyan transition-colors flex items-center gap-1 group text-slate-300"
                  >
                    <ChevronRight className={`w-3 h-3 text-slate-600 group-hover:text-cwater-cyan transition-transform ${isRTL ? "rotate-180" : ""}`} />
                    <span>{language === "ar" ? sol.titleAr : sol.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/solutions"
                  className="text-cwater-cyan font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>{t("allSolutions")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Technologies & Partners */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-4">
              {t("navTechnologies")}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {technologiesData.slice(0, 5).map((tech) => (
                <li key={tech.id}>
                  <Link
                    href={`/technologies/${tech.slug}`}
                    className="hover:text-cwater-cyan transition-colors flex items-center gap-1 group text-slate-300"
                  >
                    <ChevronRight className={`w-3 h-3 text-slate-600 group-hover:text-cwater-cyan transition-transform ${isRTL ? "rotate-180" : ""}`} />
                    <span>{language === "ar" ? tech.nameAr : tech.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1">
                  {t("navPartners")}
                </span>
                <div className="flex gap-2 text-xs">
                  <Link href="/partners/walchem" className="hover:text-cwater-cyan text-slate-300">Walchem</Link> ·
                  <Link href="/partners/timex" className="hover:text-cwater-cyan text-slate-300">TIMEX</Link> ·
                  <Link href="/partners/kurita" className="hover:text-cwater-cyan text-slate-300">Kurita</Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Access & Knowledge */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-4">
              {language === "ar" ? "الروابط الهندسية" : "Engineering Hub"}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/products" className="hover:text-cwater-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className={`w-3 h-3 text-slate-600 ${isRTL ? "rotate-180" : ""}`} />
                  <span>{t("navProducts")}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cwater-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className={`w-3 h-3 text-slate-600 ${isRTL ? "rotate-180" : ""}`} />
                  <span>{t("navServices")}</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cwater-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className={`w-3 h-3 text-slate-600 ${isRTL ? "rotate-180" : ""}`} />
                  <span>{t("navProjects")}</span>
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-cwater-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className={`w-3 h-3 text-slate-600 ${isRTL ? "rotate-180" : ""}`} />
                  <span>{t("navKnowledge")}</span>
                </Link>
              </li>
              <li>
                <Link href="/request-solution" className="hover:text-cwater-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className={`w-3 h-3 text-slate-600 ${isRTL ? "rotate-180" : ""}`} />
                  <span>{t("navRequestSolution")}</span>
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:text-cwater-cyan transition-colors flex items-center gap-1">
                  <ChevronRight className={`w-3 h-3 text-slate-600 ${isRTL ? "rotate-180" : ""}`} />
                  <span>{t("navRequestQuote")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t("copyright")}</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              {t("navAbout")}
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              {t("navContact")}
            </Link>
            <span className="font-mono text-[11px] text-cwater-cyan">
              C-WATER PLATFORM V2.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
