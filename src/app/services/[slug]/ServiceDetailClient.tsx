"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/services";
import {
  Wrench,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  FileText,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface ServiceDetailClientProps {
  slug: string;
}

export function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
  const { language, isRTL, t } = useLanguage();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-cwater-blue">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <Link href="/services" className="hover:text-cwater-blue">
            {t("navServices")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold">
            {language === "ar" ? service.titleAr : service.title}
          </span>
        </div>

        {/* Hero */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-cwater-blue text-xs font-mono font-bold">
              <Wrench className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "خدمة هندسية متخصصة" : "Certified Engineering Service"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {language === "ar" ? service.titleAr : service.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed">
              {language === "ar" ? service.headlineAr : service.headline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? service.descriptionAr : service.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2 group"
              >
                <span>{language === "ar" ? "طلب الخدمة الهندسية" : "Request This Service"}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* Why It Matters & When You Need It */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Why It Matters */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cwater-blue" />
              <span>{language === "ar" ? "لماذا تعتبر هذه الخدمة ضرورية؟" : "Why This Service Matters:"}</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? service.whyItMattersAr : service.whyItMatters}
            </p>
          </div>

          {/* When You Need It */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>{language === "ar" ? "متى تحتاج لطلب هذه الخدمة؟" : "When You Need This Service:"}</span>
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {(language === "ar" ? service.whenYouNeedItAr : service.whenYouNeedIt).map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The C-Water Approach & What You Receive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* C-Water Approach */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-xl font-display font-bold text-slate-900">
                {language === "ar" ? "خطوات التنفيذ الهندسية" : "Engineering Execution Methodology"}
              </h3>
            </div>
            <div className="space-y-3">
              {(language === "ar" ? service.cwaterApproachAr : service.cwaterApproach).map((app, idx) => (
                <div key={app} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-cwater-blue">0{idx + 1}</span>
                  <span className="text-sm font-semibold text-slate-900">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Receive */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>{language === "ar" ? "المخرجات والتقارير المعتمدة:" : "Deliverables & Certifications:"}</span>
              </h3>
            </div>
            <div className="space-y-3">
              {(language === "ar" ? service.whatYouReceiveAr : service.whatYouReceive).map((rec) => (
                <div key={rec} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200 text-center space-y-6 shadow-xl shadow-blue-500/5">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            {language === "ar" ? `طلب ${service.titleAr}` : `Schedule ${service.title}`}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "فريق مهندسي C-Water جاهز للتنسيق الميداني وإجراء الفحص الهندسي اللازم."
              : "Contact C-Water to schedule an on-site visit and receive an engineering scope of work."}
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href={`/contact?service=${service.slug}`}
              className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2"
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
