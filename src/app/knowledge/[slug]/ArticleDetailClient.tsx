"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { knowledgeData } from "@/data/knowledge";
import {
  ChevronRight,
  Clock,
  User,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

interface ArticleDetailClientProps {
  slug: string;
}

export function ArticleDetailClient({ slug }: ArticleDetailClientProps) {
  const { language, isRTL, t } = useLanguage();

  const article = knowledgeData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-cwater-blue">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <Link href="/knowledge" className="hover:text-cwater-blue">
            {t("navKnowledge")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold truncate max-w-[200px]">
            {language === "ar" ? article.titleAr : article.title}
          </span>
        </div>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-cwater-blue font-bold">
              {language === "ar" ? article.categoryAr : article.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === "ar" ? article.readTimeAr : article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === "ar" ? "فريق C-Water الهندسي" : "C-Water Engineering Team"}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar" ? article.titleAr : article.title}
          </h1>

          {/* Practical Question Prompt */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-cwater-blue shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono uppercase text-cwater-blue font-bold block mb-1">
                {language === "ar" ? "السؤال التشغيلي المطروح:" : "The Field Question:"}
              </span>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                {language === "ar" ? article.questionAr : article.question}
              </p>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold block">
            {language === "ar" ? "الملخص الهندسي المباشر:" : "Executive Engineering Summary:"}
          </span>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            {language === "ar" ? article.summaryAr : article.summary}
          </p>
        </div>

        {/* Full Technical Explanation */}
        <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-display font-bold text-slate-900">
              {language === "ar" ? "الشرح والتحليل الهندسي" : "Technical Engineering Analysis"}
            </h2>
          </div>
          <div className="space-y-4 font-normal">
            {(language === "ar" ? article.engineeringExplanationAr : article.engineeringExplanation).map((p, idx) => (
              <p key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Actionable Field Checklist */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cwater-blue" />
              <span>{language === "ar" ? "قائمة الفحص الميداني للمهندس:" : "Engineering Diagnostic Checklist:"}</span>
            </h3>
          </div>
          <div className="space-y-3">
            {(language === "ar" ? article.diagnosticChecklistAr : article.diagnosticChecklist).map((item: string) => (
              <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Escalation Rules */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{language === "ar" ? "متى يجب تصعيد المشكلة لمهندس معالجة مياه؟" : "When to Escalate to a Water Specialist:"}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {language === "ar" ? article.whenToCallEngineerAr : article.whenToCallEngineer}
          </p>
        </div>

        {/* Closing CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-200 text-center space-y-6 shadow-xl shadow-blue-500/5">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            {language === "ar" ? "هل تحتاج لمساعدة فنية في منشأتك؟" : "Need Technical Support on This Topic?"}
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "مهندسونا جاهزون للإجابة على استفساراتك وتقديم المشورة الفنية الدقيقة."
              : "Speak directly with our technical engineering team for specific calculations or system diagnostics."}
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="py-3 px-8 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("navTalkToEngineer")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
