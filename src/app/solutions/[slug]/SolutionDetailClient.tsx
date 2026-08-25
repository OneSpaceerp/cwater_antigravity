"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { solutionsData } from "@/data/solutions";
import { productsData } from "@/data/products";
import { technologiesData } from "@/data/technologies";
import {
  ArrowRight,
  AlertTriangle,
  Layers,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

interface SolutionDetailClientProps {
  slug: string;
}

export function SolutionDetailClient({ slug }: SolutionDetailClientProps) {
  const { language, isRTL, t } = useLanguage();

  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) =>
    solution.recommendedProductIds.includes(p.id)
  );

  const relatedTechs = technologiesData.filter((tech) =>
    solution.technologies.includes(tech.id) || solution.technologies.includes(tech.slug)
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
          <Link href="/solutions" className="hover:text-cwater-blue">
            {t("navSolutions")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold">
            {language === "ar" ? solution.titleAr : solution.title}
          </span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-cwater-blue text-xs font-mono font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "حلول هندسية متكاملة" : "Targeted Engineering Solution"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {language === "ar" ? solution.heroHeadlineAr : solution.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? solution.heroCopyAr : solution.heroCopy}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?solution=${solution.slug}`}
                className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 hover:shadow-lg flex items-center gap-2 group"
              >
                <span>{language === "ar" ? `ناقش منظومة ${solution.titleAr}` : `Discuss Your ${solution.title}`}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>

              <Link
                href="/request-solution"
                className="py-3.5 px-7 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-cwater-blue text-slate-800 text-sm font-bold flex items-center gap-2 shadow-sm"
              >
                <span>{t("navRequestSolution")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 01 & 02: Common Challenges & Operational Risks */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-mono uppercase text-amber-600 font-bold mb-1">
              {language === "ar" ? "التحديات والمخاطر التشغيلية" : "Challenges & Operational Risks"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              {language === "ar"
                ? `المشاكل الشائعة في ${solution.titleAr}`
                : `Critical Operating Challenges in ${solution.title}`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.challenges.map((ch) => (
              <div
                key={ch.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-amber-400/60"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {language === "ar" ? ch.titleAr : ch.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {language === "ar" ? ch.descAr : ch.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Operational Risks Highlight Box */}
          {solution.risks.length > 0 && (
            <div className="p-6 rounded-2xl bg-red-50 border border-red-200 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-red-700 font-bold block">
                {language === "ar" ? "مخاطر استمرار الخلل التشغيلي:" : "High-Impact Operational Consequences:"}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-800">
                {solution.risks.map((r) => (
                  <div key={r.title} className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold">•</span>
                    <div>
                      <strong className="text-slate-900">{language === "ar" ? r.titleAr : r.title}:</strong>{" "}
                      <span className="text-slate-600">{language === "ar" ? r.descAr : r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section 03: The C-Water Approach */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <div className="text-xs font-mono uppercase text-cwater-blue font-bold mb-1">
              {language === "ar" ? "المنهجية الهندسية" : "Engineering Methodology"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              {language === "ar" ? "منهج C-Water المتكامل للمنظومة" : "The C-Water Integrated Approach"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(language === "ar" ? solution.approachAr : solution.approach).map((step, idx) => (
              <div
                key={step}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cwater-blue space-y-2"
              >
                <span className="text-xs font-mono text-cwater-blue font-bold block">
                  STEP 0{idx + 1}
                </span>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 04: Technology Stack & Integrated Partners */}
        {relatedTechs.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-mono uppercase text-cwater-blue font-bold mb-1">
                {language === "ar" ? "المصفوفة التكنولوجية" : "Integrated Technology Matrix"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {language === "ar" ? "التقنيات المستخدمة في هذا الحل" : "Technologies Deployed in This Solution"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTechs.map((tech) => (
                <Link
                  key={tech.id}
                  href={`/technologies/${tech.slug}`}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-cwater-blue hover:shadow-lg flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-cwater-blue font-bold">
                      {tech.partnerBrand}
                    </span>
                    <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                      {language === "ar" ? tech.nameAr : tech.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 font-normal">
                      {language === "ar" ? tech.descriptionAr : tech.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-cwater-blue font-bold flex items-center gap-1">
                    <span>{language === "ar" ? "استكشف التقنية" : "View Technology"}</span>
                    <ArrowRight className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Section 05: Recommended Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-mono uppercase text-cwater-blue font-bold mb-1">
                {language === "ar" ? "الأجهزة والمعدات الموصى بها" : "Recommended Equipment & Products"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {language === "ar" ? "المنتجات المتوافقة مع المنظومة" : "Engineered Hardware & Chemistry"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-cwater-blue flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-cwater-blue font-bold">
                        {prod.partnerName}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{prod.category}</span>
                    </div>

                    <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                      {language === "ar" ? prod.nameAr : prod.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 font-normal">
                      {language === "ar" ? prod.shortDescAr : prod.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="text-xs font-bold text-slate-900 hover:text-cwater-blue transition-colors"
                    >
                      {t("viewDetails")}
                    </Link>
                    <Link
                      href={`/request-quote?product=${prod.id}`}
                      className="py-1.5 px-3 rounded-xl text-xs font-bold bg-blue-50 text-cwater-blue hover:bg-cwater-blue hover:text-white border border-blue-200 transition-all"
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
            {language === "ar"
              ? `هل تواجه تحدياً في ${solution.titleAr}؟`
              : `Dealing with a ${solution.title} Challenge?`}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "تحدث مباشرة مع فريق مهندسي C-Water لتحديد أسباب الخلل ووضع خطة عمل هندسية متكاملة."
              : "Contact C-Water to conduct a complete on-site water analysis and engineer the optimal treatment and filtration program."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/contact?solution=${solution.slug}`}
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
