"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/services";
import { Wrench, ArrowRight, CheckCircle2, ShieldCheck, ClipboardCheck } from "lucide-react";

export default function ServicesPage() {
  const { language, isRTL, t } = useLanguage();

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Wrench className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "الخدمات الهندسية الشاملة" : "Lifecycle Engineering & Support"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "المعدات ليست سوى جزء واحد من الحل."
              : "The Equipment Is Only One Part of the Solution."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "ترافق C-Water منظومتك المائية طوال دورة حياتها: بدءاً من التحاليل المخبرية المتقدمة وتدقيق المحطات، وحتى التصميم، والتركيب، والمعايرة، والمتابعة الميدانية الدورية."
              : "C-Water supports your water systems across their entire operating lifecycle: from certified analytical testing to turnkey engineering, field commissioning, and scheduled maintenance."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((serv) => (
            <div
              key={serv.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-50 text-cwater-blue group-hover:bg-cwater-blue group-hover:text-white transition-all">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">0{servicesData.indexOf(serv) + 1}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                  {language === "ar" ? serv.titleAr : serv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {language === "ar" ? serv.headlineAr : serv.headline}
                </p>

                <p className="text-xs text-slate-500 line-clamp-3">
                  {language === "ar" ? serv.descriptionAr : serv.description}
                </p>

                {/* Deliverables Snippet */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 font-medium">
                  <span className="text-[11px] font-mono text-cwater-blue block font-bold">
                    {language === "ar" ? "ما ستحصل عليه:" : "What You Receive:"}
                  </span>
                  {(language === "ar" ? serv.whatYouReceiveAr : serv.whatYouReceive).slice(0, 2).map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cwater-blue shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${serv.slug}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === "ar" ? `تفاصيل ${serv.titleAr}` : `View Service Scope`}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
