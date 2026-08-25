"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { partnersData } from "@/data/partners";
import { productsData } from "@/data/products";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Wrench,
} from "lucide-react";

interface PartnerDetailClientProps {
  slug: string;
}

export function PartnerDetailClient({ slug }: PartnerDetailClientProps) {
  const { language, isRTL, t } = useLanguage();

  const partner = partnersData.find((p) => p.slug === slug);

  if (!partner) {
    notFound();
  }

  const partnerProducts = productsData.filter((prod) => prod.partnerId === partner.id);

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-cwater-blue">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <Link href="/partners" className="hover:text-cwater-blue">
            {t("navPartners")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold">{partner.name}</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-blue-50 text-cwater-blue font-bold">
                {language === "ar" ? "شريك تكنولوجي معتمد" : "Authorized Technology Partner"}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {language === "ar" ? partner.originAr : partner.origin}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {partner.name}
            </h1>

            <p className="text-base sm:text-xl text-cwater-blue font-mono font-bold">
              {language === "ar" ? partner.taglineAr : partner.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? partner.descriptionAr : partner.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?partner=${partner.slug}`}
                className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2 group"
              >
                <span>{language === "ar" ? `طلب استشارة حول تقنيات ${partner.name}` : `Consult an Engineer on ${partner.name}`}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* Core Pillars & C-Water Role */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Core Pillars */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cwater-blue" />
              <span>{language === "ar" ? `القدرات التكنولوجية لـ ${partner.name}` : `${partner.name} Global Capability Pillars`}</span>
            </h2>
            <div className="space-y-3">
              {(language === "ar" ? partner.corePillarsAr : partner.corePillars).map((pil) => (
                <div key={pil} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cwater-blue shrink-0 mt-0.5" />
                  <span>{pil}</span>
                </div>
              ))}
            </div>
          </div>

          {/* C-Water Local Engineering Role */}
          <div className="lg:col-span-6 bg-blue-50/50 rounded-2xl p-7 border border-blue-200 space-y-4">
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-cwater-blue" />
              <span>{language === "ar" ? "دور C-Water في التكامل والتنفيذ:" : "C-Water Local Engineering & Support Role:"}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {language === "ar" ? partner.cwaterRoleAr : partner.cwaterRole}
            </p>
            <div className="pt-2 border-t border-blue-200 text-xs font-mono font-bold text-cwater-blue">
              ✓ 100% LOCAL FACTORY WARRANTY & SPARES STOCKED IN CAIRO
            </div>
          </div>
        </div>

        {/* Verified Product Lines */}
        {partnerProducts.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-display font-bold text-slate-900">
                {language === "ar" ? `منتجات ومعدات ${partner.name} المعتمدة` : `${partner.name} Product Portfolio`}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group overflow-hidden transition-all"
                >
                  <div className="relative h-44 w-full bg-slate-100/70 border-b border-slate-100 flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={prod.imageUrl}
                        alt={prod.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-cwater-blue font-bold">
                        {prod.category}
                      </span>
                      <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors mt-2">
                        {language === "ar" ? prod.nameAr : prod.name}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 font-normal mt-1">
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
                        className="py-1.5 px-3 rounded-xl text-xs font-bold bg-blue-50 hover:bg-cwater-blue text-cwater-blue hover:text-white border border-blue-200 transition-all"
                      >
                        {t("navRequestQuote")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
