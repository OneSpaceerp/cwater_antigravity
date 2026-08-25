"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { industriesData } from "@/data/industries";
import { solutionsData } from "@/data/solutions";
import {
  Factory,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Wrench,
  Layers,
} from "lucide-react";

interface IndustryDetailClientProps {
  slug: string;
}

export function IndustryDetailClient({ slug }: IndustryDetailClientProps) {
  const { language, isRTL, t } = useLanguage();

  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const relatedSolutions = solutionsData.filter((s) =>
    industry.relevantSolutionIds.includes(s.id)
  );

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-cwater-blue">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <Link href="/industries" className="hover:text-cwater-blue">
            {t("navIndustries")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold">
            {language === "ar" ? industry.nameAr : industry.name}
          </span>
        </div>

        {/* Hero */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-cwater-blue text-xs font-mono font-bold">
              <Factory className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "حلول متخصصة للقطاع" : "Sector-Specific Engineering"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {language === "ar" ? industry.headlineAr : industry.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? industry.descriptionAr : industry.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?industry=${industry.slug}`}
                className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2 group"
              >
                <span>{language === "ar" ? `ناقش منشأة ${industry.nameAr}` : `Discuss Your ${industry.name} Facility`}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>

              <Link
                href="/request-solution"
                className="py-3.5 px-7 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-cwater-blue text-slate-800 text-sm font-bold shadow-sm"
              >
                <span>{t("navRequestSolution")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Typical Systems & Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Typical Systems */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-cwater-blue" />
              <span>{language === "ar" ? "المنظومات المائية الشائعة بالقطاع:" : "Typical Facility Water Systems:"}</span>
            </h3>
            <div className="space-y-2.5">
              {(language === "ar" ? industry.typicalSystemsAr : industry.typicalSystems).map((sys) => (
                <div key={sys} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{sys}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Water Challenges */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>{language === "ar" ? "أبرز المخاطر والتحديات المائية:" : "Core Water & Process Challenges:"}</span>
            </h3>
            <div className="space-y-2.5">
              {(language === "ar" ? industry.waterChallengesAr : industry.waterChallenges).map((ch) => (
                <div key={ch} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* C-Water Engineered Solutions for this Industry */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-mono uppercase text-cwater-blue font-bold mb-1">
              {language === "ar" ? "الحلول الهندسية المعتمدة" : "Engineered Solutions"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              {language === "ar"
                ? `برامج C-Water المتكاملة لقطاع ${industry.nameAr}`
                : `C-Water Solutions for ${industry.name}`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(language === "ar" ? industry.cwaterSolutionsAr : industry.cwaterSolutions).map((sol) => (
              <div
                key={sol}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-blue-50 text-cwater-blue shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-900">{sol}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Solution Links */}
        {relatedSolutions.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-xl font-display font-bold text-slate-900">
                {language === "ar" ? "الحلول الهندسية ذات الصلة بهذا القطاع" : "Related Solution Categories"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedSolutions.map((sol) => (
                <Link
                  key={sol.id}
                  href={`/solutions/${sol.slug}`}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cwater-blue flex flex-col justify-between group"
                >
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                    {language === "ar" ? sol.titleAr : sol.title}
                  </h4>
                  <div className="mt-4 flex items-center justify-between text-xs text-cwater-blue font-bold">
                    <span>{language === "ar" ? "عرض الحل" : "View Details"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200 text-center space-y-6 shadow-xl shadow-blue-500/5">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            {language === "ar"
              ? `هل تدير منشأة في قطاع ${industry.nameAr}؟`
              : `Operating a ${industry.name} Facility?`}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "فريق مهندسي C-Water جاهز لمعاينة الموقع وإجراء تدقيق شامل لجودة المياه والمبادلات لتقديم الحلول المثلى."
              : "Our engineering team is ready to conduct an on-site system audit and tailor a complete water management plan."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/contact?industry=${industry.slug}`}
              className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("navTalkToEngineer")}</span>
            </Link>
            <Link
              href="/request-solution"
              className="py-3.5 px-8 rounded-xl bg-white border border-slate-300 hover:border-cwater-blue text-slate-800 text-sm font-bold shadow-sm"
            >
              <span>{t("navRequestSolution")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
