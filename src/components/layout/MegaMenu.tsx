"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";
import { technologiesData } from "@/data/technologies";
import { partnersData } from "@/data/partners";
import { productsData } from "@/data/products";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  ThermometerSnowflake,
  Flame,
  Waves,
  Factory,
  Cpu,
  Package,
  Wrench,
  TrendingUp,
} from "lucide-react";

interface MegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
}

export function MegaMenu({ activeMenu, onClose }: MegaMenuProps) {
  const { language, isRTL, t } = useLanguage();

  if (!activeMenu) return null;

  return (
    <>
      {/* Seamless backdrop click-dismissal */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-30"
      />

      {/* Main Glassy MegaMenu Container seamlessly attached without any gray line */}
      <div
        onMouseLeave={onClose}
        className="absolute top-[calc(100%-1px)] left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-2xl shadow-slate-900/10 z-40 animate-in fade-in duration-150"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* 1. SOLUTIONS & SECTORS MEGA MENU */}
          {activeMenu === "solutions" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left 7 Columns: Solutions by Water System */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-cwater-blue font-bold">
                      {language === "ar" ? "الحلول حسب المنظومة المائية" : "Solutions by Water System"}
                    </span>
                    <Link
                      href="/solutions"
                      onClick={onClose}
                      className="text-xs font-bold text-cwater-blue hover:underline flex items-center gap-1"
                    >
                      <span>{t("allSolutions")}</span>
                      <ArrowRight className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {solutionsData.slice(0, 6).map((sol) => (
                      <Link
                        key={sol.id}
                        href={`/solutions/${sol.slug}`}
                        onClick={onClose}
                        className="group p-3 rounded-xl glass-dropdown-card flex items-start gap-3"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 text-cwater-blue group-hover:bg-cwater-blue group-hover:text-white transition-colors shrink-0 mt-0.5 shadow-sm">
                          <ThermometerSnowflake className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                            {language === "ar" ? sol.titleAr : sol.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5 font-normal">
                            {language === "ar" ? sol.shortDescAr : sol.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right 5 Columns: Industries / Sectors */}
                <div className="lg:col-span-5 space-y-4 bg-slate-50/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                      {language === "ar" ? "القطاعات والمنشآت" : "Industry Sectors"}
                    </span>
                    <Link
                      href="/industries"
                      onClick={onClose}
                      className="text-xs font-bold text-cwater-blue hover:underline flex items-center gap-1"
                    >
                      <span>{t("allIndustries")}</span>
                      <ArrowRight className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {industriesData.map((ind) => (
                      <Link
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        onClick={onClose}
                        className="p-2 rounded-lg bg-white/80 hover:bg-white text-xs font-semibold text-slate-800 hover:text-cwater-blue flex items-center gap-2 transition-all border border-slate-200/70 hover:border-cwater-blue/40 shadow-xs"
                      >
                        <Factory className="w-3.5 h-3.5 text-cwater-blue shrink-0" />
                        <span className="truncate">{language === "ar" ? ind.nameAr : ind.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Quick Solution Finder Banner */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700 font-medium">
                    <span>{language === "ar" ? "هل تبحث عن تشخيص فوري؟" : "Looking for instant triage?"}</span>
                    <Link
                      href="/solutions#finder"
                      onClick={onClose}
                      className="text-xs font-bold text-cwater-blue hover:underline"
                    >
                      {t("navFindSolution")} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. TECHNOLOGIES, PARTNERS & PRODUCTS MEGA MENU */}
          {activeMenu === "technologies" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left 5 Columns: Core Technology Pillars */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-cwater-blue font-bold">
                      {language === "ar" ? "محاور التكنولوجيا المتكاملة" : "Integrated Tech Pillars"}
                    </span>
                    <Link
                      href="/technologies"
                      onClick={onClose}
                      className="text-xs font-bold text-cwater-blue hover:underline"
                    >
                      {language === "ar" ? "خريطة التقنيات" : "View Map"}
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {technologiesData.map((tech) => (
                      <Link
                        key={tech.id}
                        href={`/technologies/${tech.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-xl glass-dropdown-card group"
                      >
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-50 text-cwater-blue font-bold">
                          {tech.partnerBrand}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-cwater-blue transition-colors mt-1.5">
                          {language === "ar" ? tech.nameAr : tech.name}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Middle 4 Columns: Global Technology Partners */}
                <div className="lg:col-span-4 space-y-4 bg-slate-50/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                      {language === "ar" ? "الشركاء الدوليون المعتمدون" : "Authorized Partners"}
                    </span>
                    <Link
                      href="/partners"
                      onClick={onClose}
                      className="text-xs font-bold text-cwater-blue hover:underline"
                    >
                      {language === "ar" ? "كافة الشركاء" : "All"}
                    </Link>
                  </div>

                  <div className="space-y-2.5">
                    {partnersData.map((part) => (
                      <Link
                        key={part.id}
                        href={`/partners/${part.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-xl bg-white/90 hover:bg-white border border-slate-200/80 hover:border-cwater-blue/50 flex items-center justify-between group transition-all shadow-xs"
                      >
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-cwater-blue">
                            {part.name}
                          </h4>
                          <p className="text-[10px] text-slate-500 font-mono font-medium">
                            {language === "ar" ? part.taglineAr : part.tagline}
                          </p>
                        </div>
                        <ArrowRight className={`w-3.5 h-3.5 text-slate-400 group-hover:text-cwater-blue ${isRTL ? "rotate-180" : ""}`} />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right 3 Columns: Direct Product Catalog Link */}
                <div className="lg:col-span-3 p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-cwater-navy text-white space-y-4 flex flex-col justify-between shadow-xl">
                  <div className="space-y-2">
                    <div className="inline-flex p-2 rounded-lg bg-white/10 text-cwater-cyan">
                      <Package className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-display font-bold">
                      {language === "ar" ? "كتالوج الأجهزة والكيماويات" : "Technical Equipment Catalog"}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {language === "ar"
                        ? "تصفح مواصفات لوحات Walchem، فلاتر TIMEX، وكيماويات Kurita مع بناء طلب عرض السعر المباشر."
                        : "Search product lines, download datasheets, and build your quotation cart."}
                    </p>
                  </div>

                  <Link
                    href="/products"
                    onClick={onClose}
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>{t("navProducts")}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 3. SERVICES & PROJECTS MEGA MENU */}
          {activeMenu === "services" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left 7 Columns: Engineering Services */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-cwater-blue font-bold">
                      {language === "ar" ? "الخدمات الهندسية والميدانية" : "Lifecycle Engineering Services"}
                    </span>
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="text-xs font-bold text-cwater-blue hover:underline"
                    >
                      {language === "ar" ? "كافة الخدمات" : "View All"}
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {servicesData.map((serv) => (
                      <Link
                        key={serv.id}
                        href={`/services/${serv.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-xl glass-dropdown-card group"
                      >
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                          {language === "ar" ? serv.titleAr : serv.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5 font-normal">
                          {language === "ar" ? serv.headlineAr : serv.headline}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right 5 Columns: Case Studies Showcase */}
                <div className="lg:col-span-5 space-y-4 bg-slate-50/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                      {language === "ar" ? "المشاريع والنتائج الميدانية" : "Field Case Studies"}
                    </span>
                    <Link
                      href="/projects"
                      onClick={onClose}
                      className="text-xs font-bold text-cwater-blue hover:underline"
                    >
                      {language === "ar" ? "كافة المشاريع" : "All Projects"}
                    </Link>
                  </div>

                  <div className="space-y-2.5">
                    {projectsData.slice(0, 3).map((proj) => (
                      <Link
                        key={proj.id}
                        href={`/projects/${proj.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-xl bg-white/90 hover:bg-white border border-slate-200/80 hover:border-cwater-blue/50 block transition-all shadow-xs"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                          <span className="text-cwater-blue font-bold">{proj.industry}</span>
                          <span>{proj.location}</span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 hover:text-cwater-blue line-clamp-1">
                          {language === "ar" ? proj.titleAr : proj.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
