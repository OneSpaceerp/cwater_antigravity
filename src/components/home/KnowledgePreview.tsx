"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { knowledgeData } from "@/data/knowledge";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export function KnowledgePreview() {
  const { language, isRTL, t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "مركز المعرفة الهندسية" : "Engineering Knowledge Base"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {t("knowledgeHeadline", "Water Is Technical. Your Answers Should Be Too.")}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
              {language === "ar"
                ? "أدلة هندسية عملية، معادلات حسابية، وقوائم فحص تشخيصية يقدمها كبار مهندسي C-Water."
                : "In-depth technical guides, chemical mechanisms, diagnostic checklists, and operating rules."}
            </p>
          </div>

          <Link
            href="/knowledge"
            className="self-start md:self-auto py-2.5 px-5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-cwater-blue text-xs sm:text-sm font-bold text-cwater-blue shadow-sm transition-all flex items-center gap-2"
          >
            <span>{language === "ar" ? "تصفح مركز المعرفة" : "Explore Knowledge Center"}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </div>

        {/* Knowledge Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {knowledgeData.slice(0, 3).map((art) => (
            <Link
              key={art.id}
              href={`/knowledge/${art.slug}`}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-cwater-blue/50 hover:bg-white hover:shadow-xl flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-blue-100 text-cwater-blue font-bold">
                    {language === "ar" ? art.categoryAr : art.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{language === "ar" ? art.readTimeAr : art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors leading-snug">
                  {language === "ar" ? art.titleAr : art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                  {language === "ar" ? art.summaryAr : art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-cwater-blue">
                <span>{language === "ar" ? "قراءة الدليل الهندسي" : "Read Technical Guide"}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
