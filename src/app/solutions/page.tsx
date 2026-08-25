"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { solutionsData } from "@/data/solutions";
import { SolutionFinder } from "@/components/solutions/SolutionFinder";
import { ThermometerSnowflake, ArrowRight, Layers, Sparkles, Filter, CheckCircle2 } from "lucide-react";

export default function SolutionsPage() {
  const { language, isRTL, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSolutions =
    activeFilter === "all"
      ? solutionsData
      : solutionsData.filter((s) => s.technologies.includes(activeFilter));

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Layers className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "محفظة الحلول الهندسية" : "Engineering Solutions Portfolio"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "حلول متكاملة مصممة حول منظومة المياه لديك."
              : "Solutions Built Around Your Water System."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "كل تطبيق له كيمياء خاصة، ومعدات مختلفة، وظروف تشغيل ومخاطر متباينة. تجمع C-Water بين الخبرة الهندسية، المعالجة الكيميائية، الترشيح الفائق، والتحكم الآلي حول المنظومة الحقيقية."
              : "Every application has distinct chemistry, metallurgy, risk profiles, and thermal demands. C-Water connects engineering, chemistry, filtration, monitoring, and control around the real operating system."}
          </p>
        </div>

        {/* Interactive Guided Solution Finder */}
        <SolutionFinder />

        {/* Filter Bar */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <h2 className="text-xl font-display font-bold text-slate-900">
              {language === "ar" ? "استعرض كافة الحلول التخصصية" : "Explore All Targeted Solutions"}
            </h2>

            {/* Quick Tech Tag Filters */}
            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
              {[
                { id: "all", label: language === "ar" ? "الكل" : "All" },
                { id: "chemicals", label: language === "ar" ? "كيمياء" : "Chemistry" },
                { id: "filtration", label: language === "ar" ? "ترشيح" : "Filtration" },
                { id: "monitoring", label: language === "ar" ? "تحكم ومراقبة" : "Control & IoT" },
                { id: "dosing", label: language === "ar" ? "حقن رقمي" : "Dosing" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    activeFilter === f.id
                      ? "bg-cwater-blue text-white border-cwater-blue shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:text-cwater-blue hover:border-cwater-blue"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((sol) => (
              <div
                key={sol.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-50 text-cwater-blue font-bold">
                      {sol.technologies.length} TECHNOLOGIES
                    </span>
                    <span className="text-xs text-slate-400 font-mono">0{solutionsData.indexOf(sol) + 1}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                    {language === "ar" ? sol.titleAr : sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {language === "ar" ? sol.heroHeadlineAr : sol.heroHeadline}
                  </p>

                  <p className="text-xs text-slate-500 line-clamp-3">
                    {language === "ar" ? sol.shortDescAr : sol.shortDesc}
                  </p>

                  {/* Approach Highlights */}
                  <div className="pt-2 space-y-1.5 text-xs text-slate-700 border-t border-slate-100 font-medium">
                    <span className="text-[11px] font-mono text-cwater-blue block font-bold">
                      {language === "ar" ? "المنهجية الهندسية:" : "Engineering Methodology:"}
                    </span>
                    {(language === "ar" ? sol.approachAr : sol.approach).slice(0, 3).map((app) => (
                      <div key={app} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cwater-blue shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                  >
                    <span>{language === "ar" ? `استكشف ${sol.titleAr}` : `View Solution Specifications`}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
