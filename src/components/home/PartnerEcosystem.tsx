"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { partnersData } from "@/data/partners";
import { ArrowRight, ShieldCheck, Cpu, Filter, FlaskConical, ExternalLink } from "lucide-react";

export function PartnerEcosystem() {
  const { language, isRTL, t } = useLanguage();

  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "الشراكات التكنولوجية الدولية" : "Global Technology Ecosystem"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {t("partnersHeadline")}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t("partnersSub")}
          </p>
        </div>

        {/* 3 Partner Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnersData.map((part) => (
            <div
              key={part.id}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-cwater-blue/50 hover:bg-white hover:shadow-xl flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                      {part.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      {language === "ar" ? part.originAr : part.origin}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-blue-100 text-cwater-blue font-bold uppercase">
                    AUTHORIZED
                  </span>
                </div>

                <div className="text-sm font-bold text-cwater-blue font-mono">
                  {language === "ar" ? part.taglineAr : part.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {language === "ar" ? part.descriptionAr : part.description}
                </p>

                {/* Core Pillars */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    {language === "ar" ? "ركائز التكنولوجيا المعتمدة:" : "Verified Capabilities:"}
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {(language === "ar" ? part.corePillarsAr : part.corePillars).slice(0, 3).map((pil) => (
                      <div key={pil} className="flex items-start gap-2">
                        <span className="text-cwater-blue font-bold">•</span>
                        <span>{pil}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href={`/partners/${part.slug}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                >
                  <span>
                    {language === "ar"
                      ? `استكشف تقنيات ${part.name}`
                      : `Explore ${part.name} Technologies`}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Master Brand Integration Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          <span>{language === "ar" ? "مدعومة بتقنيات عالمية مثبتة · منفذة ومصممة بهندسة C-Water المحلية" : "Powered by proven global technology. Delivered through C-Water local engineering."}</span>
        </div>
      </div>
    </section>
  );
}
