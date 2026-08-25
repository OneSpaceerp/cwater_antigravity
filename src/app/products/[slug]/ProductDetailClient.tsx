"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useRFQ } from "@/context/RFQContext";
import { productsData } from "@/data/products";
import { solutionsData } from "@/data/solutions";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Download,
  ShoppingCart,
  Check,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface ProductDetailClientProps {
  slug: string;
}

export function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const { language, isRTL, t } = useLanguage();
  const { addItem, items } = useRFQ();

  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isAdded = items.some((item) => item.id === product.id);

  const relatedSolutions = solutionsData.filter((s) =>
    product.relatedSolutionIds.includes(s.id)
  );

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-cwater-blue">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <Link href="/products" className="hover:text-cwater-blue">
            {t("navProducts")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold">
            {language === "ar" ? product.nameAr : product.name}
          </span>
        </div>

        {/* Product Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Product Image Frame */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full bg-slate-50 rounded-2xl border border-slate-200 p-6 flex items-center justify-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Product Overview & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-blue-100 text-cwater-blue font-bold">
                  {product.partnerName}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {language === "ar" ? product.categoryAr : product.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                {language === "ar" ? product.nameAr : product.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {language === "ar" ? product.shortDescAr : product.shortDesc}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      nameAr: product.nameAr,
                      partner: product.partnerName,
                      category: product.category,
                    })
                  }
                  className={`py-3.5 px-7 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 transition-all ${
                    isAdded
                      ? "bg-emerald-600 text-white shadow-emerald-600/20"
                      : "bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white shadow-cwater-blue/25 hover:shadow-lg"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{language === "ar" ? "مضاف لسلة عرض السعر" : "Added to RFQ Cart"}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>{t("navRequestQuote")}</span>
                    </>
                  )}
                </button>

                <Link
                  href={`/contact?product=${product.slug}`}
                  className="py-3.5 px-7 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-cwater-blue text-slate-800 text-sm font-bold flex items-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-cwater-blue" />
                  <span>{t("navTalkToEngineer")}</span>
                </Link>
              </div>

              {/* Quick Spec Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-600 font-mono">
                <div>
                  <span className="text-slate-400">PARTNER: </span>
                  <span className="font-bold text-slate-900">{product.partnerName}</span>
                </div>
                <div>
                  <span className="text-slate-400">INTEGRATION: </span>
                  <span className="font-bold text-cwater-blue">C-Water Egypt</span>
                </div>
                <div>
                  <span className="text-slate-400">DOCUMENTS: </span>
                  <span className="font-bold text-slate-900">{product.documents.length} PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Overview & Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Full Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-display font-bold text-slate-900">
                {language === "ar" ? "نظرة عامة ومواصفات هندسية" : "Engineering Overview"}
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? product.fullOverviewAr : product.fullOverview}
            </p>

            {/* Applications List */}
            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cwater-blue font-bold">
                {language === "ar" ? "التطبيقات والبيئات التشغيلية:" : "Target Applications:"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {(language === "ar" ? product.applicationsAr : product.applications).map((app) => (
                  <div key={app} className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-cwater-blue font-bold">•</span>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{language === "ar" ? "المزايا التشغيلية المعتمدة:" : "Key Engineering Benefits:"}</span>
            </h3>
            <div className="space-y-3">
              {(language === "ar" ? product.keyBenefitsAr : product.keyBenefits).map((b) => (
                <div key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structured Technical Specifications Table */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <div className="text-xs font-mono uppercase text-cwater-blue font-bold mb-1">
              {language === "ar" ? "جدول المواصفات الهندسية" : "Engineering Parameters"}
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900">
              {language === "ar" ? "المواصفات الفنية التفصيلية" : "Technical Specifications"}
            </h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr
                    key={spec.label}
                    className={`border-b border-slate-100 ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                    }`}
                  >
                    <td className="py-4 px-6 font-mono text-slate-500 w-1/3 font-medium">
                      {language === "ar" ? spec.labelAr : spec.label}
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Documents & Datasheets */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl font-display font-bold text-slate-900">
              {language === "ar" ? "النشرات والوثائق الفنية المعتمدة" : "Technical Documents & Datasheets"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.documents.map((doc) => (
              <div
                key={doc.name}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between group hover:border-cwater-blue"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-cwater-blue">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                      {doc.name}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {doc.type} · {doc.size}
                    </span>
                  </div>
                </div>

                <a
                  href={`/contact?document=${encodeURIComponent(doc.name)}`}
                  className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:text-cwater-blue hover:bg-blue-50 transition-colors"
                  title="Download / Request Document"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Related Solutions */}
        {relatedSolutions.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-xl font-display font-bold text-slate-900">
                {language === "ar" ? "الحلول الهندسية المتوافقة" : "Compatible Water Solutions"}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedSolutions.map((sol) => (
                <Link
                  key={sol.id}
                  href={`/solutions/${sol.slug}`}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cwater-blue flex flex-col justify-between group"
                >
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                    {language === "ar" ? sol.titleAr : sol.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-xs text-cwater-blue font-bold">
                    <span>{language === "ar" ? "عرض الحل" : "View Solution"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
