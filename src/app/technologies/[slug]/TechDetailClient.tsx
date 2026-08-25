"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { technologiesData } from "@/data/technologies";
import { productsData } from "@/data/products";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Layers,
  MessageSquare,
} from "lucide-react";

interface TechDetailClientProps {
  slug: string;
}

export function TechDetailClient({ slug }: TechDetailClientProps) {
  const { language, isRTL, t } = useLanguage();

  const tech = technologiesData.find((t) => t.slug === slug);

  if (!tech) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) =>
    tech.relatedProductIds.includes(p.id)
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
          <Link href="/technologies" className="hover:text-cwater-blue">
            {t("navTechnologies")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold">
            {language === "ar" ? tech.nameAr : tech.name}
          </span>
        </div>

        {/* Hero */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-blue-50 text-cwater-blue font-bold">
                {tech.partnerBrand}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {language === "ar" ? "تقنية صناعية متقدمة" : "Advanced Industrial Technology"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {language === "ar" ? tech.nameAr : tech.name}
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed">
              {language === "ar" ? tech.headlineAr : tech.headline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? tech.descriptionAr : tech.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?tech=${tech.slug}`}
                className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2 group"
              >
                <span>{language === "ar" ? "استشر مهندسنا حول هذه التقنية" : "Consult an Engineer on this Tech"}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works Conceptually & Mechanically */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-mono uppercase text-cwater-blue font-bold mb-1">
              {language === "ar" ? "آلية العمل والميكانيكا" : "Engineering Mechanics"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              {language === "ar" ? "كيف تعمل هذه التكنولوجيا علمياً وهندسياً؟" : "How This Technology Works"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(language === "ar" ? tech.howItWorksAr : tech.howItWorks).map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
              >
                <span className="text-xs font-mono text-cwater-blue font-bold">
                  MECHANISM 0{idx + 1}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits & Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Benefits */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{language === "ar" ? "أبرز المزايا والعوائد التشغيلية:" : "Validated Operational Benefits:"}</span>
            </h3>
            <div className="space-y-2.5">
              {(language === "ar" ? tech.keyBenefitsAr : tech.keyBenefits).map((b) => (
                <div key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cwater-blue" />
              <span>{language === "ar" ? "مجالات واستخدامات التطبيق:" : "Primary Applications:"}</span>
            </h3>
            <div className="space-y-2.5">
              {(language === "ar" ? tech.applicationsAr : tech.applications).map((app) => (
                <div key={app} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="text-cwater-blue font-bold">•</span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Equipment & Chemistry Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-xl font-display font-bold text-slate-900">
                {language === "ar" ? "المنتجات والمعدات المرتبطة بهذه التقنية" : "Related Products & Hardware"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-cwater-blue flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-cwater-blue font-bold">
                      {prod.partnerName}
                    </span>
                    <h4 className="text-base font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                      {language === "ar" ? prod.nameAr : prod.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 font-normal">
                      {language === "ar" ? prod.shortDescAr : prod.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="text-xs font-bold text-slate-900 hover:text-cwater-blue"
                    >
                      {t("viewDetails")}
                    </Link>
                    <Link
                      href={`/request-quote?product=${prod.id}`}
                      className="text-xs px-2.5 py-1 rounded bg-blue-50 text-cwater-blue border border-blue-200 hover:bg-cwater-blue hover:text-white transition-all font-bold"
                    >
                      {t("navRequestQuote")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200 text-center space-y-6 shadow-xl shadow-blue-500/5">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            {language === "ar" ? `تطبيق تقنية ${tech.nameAr} في منشأتك` : `Deploy ${tech.name} in Your Plant`}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "تواصل مع مهندسي C-Water للحصول على دراسة فنية وعرض سعر مخصص لمنظومتك."
              : "Contact C-Water engineers to receive a technical sizing proposal and application review."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/contact?tech=${tech.slug}`}
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
