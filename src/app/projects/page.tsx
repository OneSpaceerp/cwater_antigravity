"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { TrendingUp, ArrowRight, CheckCircle2, MapPin, Building, ShieldCheck } from "lucide-react";

export default function ProjectsPage() {
  const { language, isRTL, t } = useLanguage();

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "سجل الإنجازات والمشاريع" : "Engineered Case Studies & Project Portfolio"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "هندسة تنعكس مباشرة في نتائج التشغيل."
              : "Engineering That Shows Up in the Results."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "نماذج واقعية من تحديات المياه المعقدة في مصر، وكيف نجحت C-Water في تصميم وتنفيذ حلول أوقفت الأعطال ووفرت ملايين اللترات من المياه والطاقة."
              : "Real industrial water challenges solved through integrated chemistry, automatic filtration, precision dosing, and 24/7 telemetry."}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500 font-mono">
                  <div className="flex items-center gap-1.5 text-cwater-blue font-bold">
                    <Building className="w-3.5 h-3.5" />
                    <span>{language === "ar" ? proj.industryAr : proj.industry}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{language === "ar" ? proj.locationAr : proj.location}</span>
                  </div>
                </div>

                <h2 className="text-xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                  {language === "ar" ? proj.titleAr : proj.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {language === "ar" ? proj.summaryAr : proj.summary}
                </p>

                {/* Key Metrics Highlight Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cwater-blue block font-bold">
                    {language === "ar" ? "النتائج المحققة:" : "Measured Engineering Impact:"}
                  </span>
                  <div className="space-y-2">
                    {proj.results.map((res) => (
                      <div key={res.metric} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">{res.value}</span> ·{" "}
                          <span className="text-slate-500">{language === "ar" ? res.metricAr : res.metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === "ar" ? "قراءة التقرير الهندسي كاملاً" : "Read Full Project Report"}</span>
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
