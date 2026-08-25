"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Activity, TrendingDown, Sliders, RefreshCw, Leaf, Award } from "lucide-react";

export function ValueMetrics() {
  const { language, t } = useLanguage();

  const metrics = [
    {
      title: "PROTECT",
      titleAr: "حماية الأصول",
      headline: t("metricProtect"),
      desc: t("metricProtectDesc"),
      icon: ShieldCheck,
    },
    {
      title: "PERFORM",
      titleAr: "استقرار العمليات",
      headline: t("metricReliability"),
      desc: t("metricReliabilityDesc"),
      icon: Activity,
    },
    {
      title: "REDUCE",
      titleAr: "ترشيد الاستهلاك",
      headline: t("metricEfficiency"),
      desc: t("metricEfficiencyDesc"),
      icon: TrendingDown,
    },
    {
      title: "CONTROL",
      titleAr: "التحكم الذكي",
      headline: t("metricControl"),
      desc: t("metricControlDesc"),
      icon: Sliders,
    },
    {
      title: "OPTIMIZE",
      titleAr: "التحسين المستمر",
      headline: t("metricOptimization"),
      desc: t("metricOptimizationDesc"),
      icon: RefreshCw,
    },
    {
      title: "SUPPORT",
      titleAr: "الدعم الميداني",
      headline: t("metricSupport"),
      desc: t("metricSupportDesc"),
      icon: Award,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Award className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "النتائج الهندسية الملموسة" : "Engineered Outcomes"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {t("resultsHeadline")}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            {language === "ar"
              ? "نربط كيمياء المعالجة وأجهزة التحكم بنتائج تشغيلية واضحة ومقاسة."
              : "Connecting treatment programs to reliability, efficiency, safety, and asset lifetime."}
          </p>
        </div>

        {/* 6 Metric Outcome Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-cwater-blue group-hover:bg-cwater-blue group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-500 group-hover:text-cwater-blue transition-colors">
                      {language === "ar" ? m.titleAr : m.title}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-cwater-blue transition-colors">
                    {m.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex justify-between">
                  <span>C-WATER METRIC</span>
                  <span className="text-emerald-600 font-bold">MEASURABLE ROI</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
