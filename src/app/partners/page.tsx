"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { partnersData } from "@/data/partners";
import { ShieldCheck, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

export default function PartnersPage() {
  const { language, isRTL, t } = useLanguage();

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "الشراكات التكنولوجية الدولية" : "Global Technology Alliances"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "تقنيات عالمية مثبتة. بهندسة وتنفيذ C-Water."
              : "Global Technology. Delivered by C-Water."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "نجمع بين أرقى تقنيات القياس والتحكم من Walchem، وأنظمة الترشيح الصناعي الذاتي من TIMEX، والكيمياء المتقدمة من Kurita Europe، لتقديم منظومة مائية متكاملة ومدعومة هندسياً في مصر."
              : "We integrate precision instrumentation from Walchem, automatic filtration from TIMEX, and advanced chemistry from Kurita Europe with local engineering, assembly, and field service across Egypt."}
          </p>
        </div>

        {/* 3 Dedicated Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnersData.map((part) => (
            <div
              key={part.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                      {part.name}
                    </h2>
                    <span className="text-xs text-slate-500 font-mono">
                      {language === "ar" ? part.originAr : part.origin}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-blue-50 text-cwater-blue font-bold uppercase">
                    AUTHORIZED
                  </span>
                </div>

                <div className="text-sm font-bold text-cwater-blue font-mono">
                  {language === "ar" ? part.taglineAr : part.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {language === "ar" ? part.descriptionAr : part.description}
                </p>

                {/* Core Capabilities */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cwater-blue block font-bold">
                    {language === "ar" ? "مجالات القدرة التكنولوجية:" : "Technology Capabilities:"}
                  </span>
                  <div className="space-y-2 text-xs text-slate-700 font-medium">
                    {(language === "ar" ? part.corePillarsAr : part.corePillars).map((pil) => (
                      <div key={pil} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cwater-blue shrink-0 mt-0.5" />
                        <span>{pil}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href={`/partners/${part.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-cwater-blue text-slate-800 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 hover:border-cwater-blue transition-all"
                >
                  <span>{language === "ar" ? `استكشف تقنيات ${part.name}` : `Explore ${part.name} Technologies`}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* C-Water Role Narrative Box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-3 shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            {language === "ar"
              ? "C-Water: المطور والمهندس المحلي لمنظومتك المائية"
              : "C-Water: The Integrated Engineering & Service Master Brand"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {language === "ar"
              ? "نحن لا نكتفي بتوريد الأجهزة أو الكيماويات كصناديق مغلقة، بل نتولى التصميم الهندي، تجميع المحطات المدمجة، البرمجة، التركيب والمعايرة، والمتابعة المخبرية والميدانية المستمرة."
              : "We do not merely supply commodity components. We architect the solution, fabricate the control panels, calibrate the instrumentation, formulate the chemical programs, and provide 24/7 on-site support across Egypt."}
          </p>
        </div>
      </div>
    </div>
  );
}
