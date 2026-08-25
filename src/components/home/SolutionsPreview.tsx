"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { solutionsData } from "@/data/solutions";
import { ArrowRight, ThermometerSnowflake, Flame, Waves, Cpu, Recycle, ShieldCheck, Factory } from "lucide-react";

export function SolutionsPreview() {
  const { language, isRTL, t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    ThermometerSnowflake,
    Flame,
    Waves,
    Cpu,
    Recycle,
    ShieldCheck,
    Factory,
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
              <ThermometerSnowflake className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "الحلول الهندسية المتخصصة" : "Targeted Engineering Solutions"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {language === "ar" ? "مصممة حول تحديات المياه لديك." : "Built Around Your Water Challenge."}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
              {language === "ar"
                ? "ابدأ بتحديد منظومة المياه أو التحدي التشغيلي لنصل بك إلى التكنولوجيا المناسبة."
                : "Select your water system or challenge to find the right integrated technology program."}
            </p>
          </div>

          <Link
            href="/solutions"
            className="self-start md:self-auto py-2.5 px-5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-cwater-blue text-xs sm:text-sm font-bold text-cwater-blue shadow-sm transition-all flex items-center gap-2"
          >
            <span>{t("allSolutions")}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </div>

        {/* 6 Large Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((sol) => {
            const Icon = iconMap[sol.iconName] || ThermometerSnowflake;
            return (
              <div
                key={sol.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-cwater-blue group-hover:bg-cwater-blue group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                      {sol.technologies.length} TECHNOLOGIES
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-cwater-blue transition-colors">
                    {language === "ar" ? sol.titleAr : sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {language === "ar" ? sol.shortDescAr : sol.shortDesc}
                  </p>

                  {/* Challenges Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {sol.challenges.slice(0, 2).map((c) => (
                      <span
                        key={c.title}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono"
                      >
                        {language === "ar" ? c.titleAr : c.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-xs sm:text-sm font-bold text-cwater-blue group-hover:text-cwater-sky flex items-center gap-1.5 transition-colors"
                  >
                    <span>
                      {language === "ar" ? `استكشف ${sol.titleAr}` : `Explore ${sol.title}`}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
