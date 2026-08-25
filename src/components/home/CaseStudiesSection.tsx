"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { ArrowRight, CheckCircle2, TrendingUp, MapPin, Building } from "lucide-react";

export function CaseStudiesSection() {
  const { language, isRTL, t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "دراسات الحالة والنتائج الميدانية" : "Verified Field Case Studies"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {t("projectsHeadline", "Real Water Problems. Engineered Solutions.")}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
              {language === "ar"
                ? "شاهد كيف ساعدت حلول C-Water المتكاملة كبرى المنشآت الصناعية في مصر على مضاعفة كفاءتها وتجنب الأعطال."
                : "Real engineering challenges solved through integrated chemistry, automated filtration, and telemetry."}
            </p>
          </div>

          <Link
            href="/projects"
            className="self-start md:self-auto py-2.5 px-5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-cwater-blue text-xs sm:text-sm font-bold text-cwater-blue shadow-sm transition-all flex items-center gap-2"
          >
            <span>{language === "ar" ? "كافة دراسات الحالة" : "View All Case Studies"}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-cwater-blue font-bold">
                    <Building className="w-3.5 h-3.5" />
                    <span>{language === "ar" ? proj.industryAr : proj.industry}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{language === "ar" ? proj.locationAr : proj.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                  {language === "ar" ? proj.titleAr : proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                  {language === "ar" ? proj.summaryAr : proj.summary}
                </p>

                {/* Key Metrics Highlight Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cwater-blue font-bold block">
                    {language === "ar" ? "النتائج المحققة:" : "Measured Results:"}
                  </span>
                  <div className="space-y-1.5">
                    {proj.results.slice(0, 2).map((res) => (
                      <div key={res.metric} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">{res.value}</span> ·{" "}
                          <span className="text-slate-500">{language === "ar" ? res.metricAr : res.metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === "ar" ? "قراءة التقرير الهندسي كاملاً" : "Read Full Case Study"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
