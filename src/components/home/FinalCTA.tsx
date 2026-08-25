"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MessageSquare, FileText, PhoneCall, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  const { language, isRTL, t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
          <ShieldCheck className="w-4 h-4" />
          <span>{language === "ar" ? "ابدأ باستشارة هندسية متخصصة" : "Start With a Technical Assessment"}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-tight">
          {t("finalCTAHeadline")}
        </h2>

        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          {t("finalCTASub")}
        </p>

        {/* Dual Primary Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto py-4 px-8 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white font-bold text-base shadow-lg shadow-cwater-blue/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t("finalCTABtn1")}</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </Link>

          <Link
            href="/request-quote"
            className="w-full sm:w-auto py-4 px-8 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm hover:border-cwater-blue transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5 text-cwater-blue" />
            <span>{t("finalCTABtn2")}</span>
          </Link>
        </div>

        {/* Emergency & Direct Phone Callout */}
        <div className="pt-8 border-t border-slate-200 text-xs text-slate-600 font-mono flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span>{language === "ar" ? "دعم هندسي مباشر:" : "Direct Engineering Support:"}</span>
          <a href="tel:+201122299044" className="text-cwater-blue font-bold hover:underline">
            (+20) 112 229 9044
          </a>
          <span>·</span>
          <a href="tel:+201117711444" className="text-cwater-blue font-bold hover:underline">
            (+20) 111 771 1444
          </a>
          <span>·</span>
          <a href="mailto:engineering@cw-eg.com" className="text-cwater-blue font-bold hover:underline">
            engineering@cw-eg.com
          </a>
        </div>
      </div>
    </section>
  );
}
