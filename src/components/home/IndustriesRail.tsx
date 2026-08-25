"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { industriesData } from "@/data/industries";
import { ArrowRight, Factory, Utensils, Hotel, HeartPulse, Flame, Zap } from "lucide-react";

export function IndustriesRail() {
  const { language, isRTL, t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    Factory,
    Utensils,
    Hotel,
    HeartPulse,
    Flame,
    Zap,
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
              <Factory className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "القطاعات والمنشآت" : "Sector Expertise"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {language === "ar" ? "مهندسة وفقاً لطبيعة قطاعك الصناعي." : "Engineered for the Way You Operate."}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
              {language === "ar"
                ? "تتغير طبيعة التحدي ومواصفات المياه المطلوبة باختلاف العملية الإنتاجية للمنشأة."
                : "Water challenges vary dramatically across industrial processes, utility demands, and compliance requirements."}
            </p>
          </div>

          <Link
            href="/industries"
            className="self-start md:self-auto py-2.5 px-5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-cwater-blue text-xs sm:text-sm font-bold text-cwater-blue shadow-sm transition-all flex items-center gap-2"
          >
            <span>{t("allIndustries")}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon] || Factory;
            return (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-cwater-blue/50 hover:bg-white hover:shadow-xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-cwater-blue group-hover:bg-cwater-blue group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 font-semibold">
                      {ind.typicalSystems.length} SYSTEMS
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-cwater-blue transition-colors">
                    {language === "ar" ? ind.nameAr : ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4 font-normal">
                    {language === "ar" ? ind.headlineAr : ind.headline}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-600 font-medium">
                    {(language === "ar" ? ind.typicalSystemsAr : ind.typicalSystems).slice(0, 2).map((sys) => (
                      <div key={sys} className="flex items-center gap-1.5">
                        <span className="text-cwater-blue font-bold">•</span>
                        <span className="truncate">{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-cwater-blue">
                  <span>{language === "ar" ? "عرض تفاصيل القطاع" : "View Sector Solutions"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
