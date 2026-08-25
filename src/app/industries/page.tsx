"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { industriesData } from "@/data/industries";
import { Factory, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function IndustriesPage() {
  const { language, isRTL, t } = useLanguage();

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Factory className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "الخبرات الصناعية التخصصية" : "Sector-Specific Engineering"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "مهندسة وفقاً لمتطلبات قطاعك الصناعي."
              : "Engineered for the Way You Operate."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "تختلف متطلبات مياه التبريد والبخار والعمليات باختلاف المنشأة. نقدم حلولاً مهندسة خصيصاً لقطاعات التصنيع، الأغذية، المستشفيات، البترول، الفنادق، ومحطات الطاقة."
              : "Water requirements and operating risks vary dramatically across food processing, petrochemicals, hospitals, and heavy manufacturing. C-Water delivers targeted sector programs."}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-50 text-cwater-blue group-hover:bg-cwater-blue group-hover:text-white transition-all">
                    <Factory className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-semibold border border-slate-200">
                    {ind.typicalSystems.length} SYSTEMS
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                  {language === "ar" ? ind.nameAr : ind.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {language === "ar" ? ind.headlineAr : ind.headline}
                </p>

                <p className="text-xs text-slate-500 line-clamp-3">
                  {language === "ar" ? ind.descriptionAr : ind.description}
                </p>

                {/* Challenges Tags */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 font-medium">
                  <span className="text-[11px] font-mono text-cwater-blue block font-bold">
                    {language === "ar" ? "أبرز التحديات المائية:" : "Key Sector Water Challenges:"}
                  </span>
                  {(language === "ar" ? ind.waterChallengesAr : ind.waterChallenges).slice(0, 2).map((ch) => (
                    <div key={ch} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="line-clamp-1">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === "ar" ? `استكشف حلول ${ind.nameAr}` : `View ${ind.name} Solutions`}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
