"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { technologiesData } from "@/data/technologies";
import { SystemExplorer } from "@/components/home/SystemExplorer";
import { Cpu, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function TechnologiesPage() {
  const { language, isRTL, t } = useLanguage();

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "منظومة التقنيات المتكاملة" : "Integrated Technology Platforms"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar" ? "تقنيات تعمل معاً في تناغم هندسي كامل." : "Technology That Works Together."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "لا توجد تقنية واحدة قادرة على حل كافة مشاكل المياه بمفردها. القوة الهندسية الحقيقية تكمن في اختيار التقنيات الصحيحة وربطها بالتسلسل والتكامل السليم."
              : "No single technology solves every water-treatment problem. The strongest engineering solution combines the right chemistry, automatic filtration, dosing, and digital control in the right sequence."}
          </p>
        </div>

        {/* Interactive Process Pipeline */}
        <SystemExplorer />

        {/* Technologies Grid */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-display font-bold text-slate-900">
              {language === "ar" ? "محاور التكنولوجيا الرئيسية" : "Core Technology Domains"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologiesData.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-50 text-cwater-blue font-bold">
                      {tech.partnerBrand}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">0{technologiesData.indexOf(tech) + 1}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                    {language === "ar" ? tech.nameAr : tech.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {language === "ar" ? tech.headlineAr : tech.headline}
                  </p>

                  <p className="text-xs text-slate-500 line-clamp-3">
                    {language === "ar" ? tech.descriptionAr : tech.description}
                  </p>

                  {/* Benefits */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 font-medium">
                    <span className="text-[11px] font-mono text-cwater-blue block font-bold">
                      {language === "ar" ? "المزايا الهندسية:" : "Key Benefits:"}
                    </span>
                    {(language === "ar" ? tech.keyBenefitsAr : tech.keyBenefits).slice(0, 2).map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cwater-blue shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/technologies/${tech.slug}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                  >
                    <span>{language === "ar" ? "عرض التفاصيل الفنية" : "View Technical Mechanics"}</span>
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
