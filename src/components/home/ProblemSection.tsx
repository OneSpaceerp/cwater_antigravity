"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AlertTriangle, TrendingDown, Wrench, Flame, Droplets, ZapOff } from "lucide-react";

export function ProblemSection() {
  const { language, t } = useLanguage();

  const problemCards = [
    {
      title: "Mineral Scale Formation",
      titleAr: "تراكم الترسبات المعدنية",
      consequence: "Becomes massive lost thermal efficiency & skyrocketing power bills.",
      consequenceAr: "يتحول إلى فقدان هائل في كفاءة التبادل الحراري وارتفاع حاد في استهلاك الكهرباء.",
      icon: Flame,
      tag: "Thermal Inefficiency",
      tagAr: "فقدان كفاءة التبادل",
    },
    {
      title: "Aggressive Corrosion",
      titleAr: "التآكل العدواني للمعادن",
      consequence: "Becomes pipe leaks, heat exchanger failures, and emergency shutdowns.",
      consequenceAr: "يتحول إلى ثقوب بالأنابيب، تلف المبادلات، وتوقفات طارئة لخطوط الإنتاج.",
      icon: AlertTriangle,
      tag: "Asset Destruction",
      tagAr: "دمار الأصول الصناعية",
    },
    {
      title: "Poor Upstream Filtration",
      titleAr: "ضعف الترشيح الأولي",
      consequence: "Plugs spray nozzles, chokes membranes, and blinds chemical inhibitors.",
      consequenceAr: "يسد الفوهات والرشاشات، يدمر الأغشية، ويمنع الكيماويات من حماية الأسطح.",
      icon: Droplets,
      tag: "Downstream Cascade",
      tagAr: "تتابع الأعطال اللاحقة",
    },
    {
      title: "Uncontrolled Chemical Dosing",
      titleAr: "الحقن الكيميائي العشوائي",
      consequence: "Wastes expensive chemical drums and risks toxic environmental discharge.",
      consequenceAr: "يهدر ميزانيات الكيماويات الباهظة ويزيد مخاطر المخالفات البيئية.",
      icon: TrendingDown,
      tag: "Wasted Budget",
      tagAr: "هدر مالي وتشغيلي",
    },
    {
      title: "Weak / Blind Monitoring",
      titleAr: "غياب المراقبة اللحظية",
      consequence: "Turns subtle parameter drift into catastrophic unplanned plant outages.",
      consequenceAr: "يحول الانحرافات البسيطة إلى كوارث تشغيلية وتوقف كلي للمنشأة.",
      icon: ZapOff,
      tag: "Operational Blindness",
      tagAr: "الغياب عن المتابعة",
    },
    {
      title: "Fragmented Suppliers",
      titleAr: "تشتت الموردين والمسؤوليات",
      consequence: "Leaves plant managers caught between blaming chemical vs filter vs pump vendors.",
      consequenceAr: "يترك مدير المصنع حائراً بين تبادل اللوم بين موردي الكيماويات والفلاتر والمضخات.",
      icon: Wrench,
      tag: "Vendor Blame Game",
      tagAr: "ضياع المسؤولية",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "التحدي التشغيلي الحقيقي" : "The Core Operating Challenge"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "مشاكل المياه لا تحدث كأجزاء منفصلة."
              : "Water Problems Don't Happen One Component at a Time."}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t("problemSub")}
          </p>
        </div>

        {/* Problem Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/60 relative group flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                      {language === "ar" ? card.tagAr : card.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {language === "ar" ? card.titleAr : card.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {language === "ar" ? card.consequenceAr : card.consequence}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>PROBLEM 0{idx + 1}</span>
                  <span className="text-amber-600 font-bold">RISK CASCADE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-blue-200 text-center space-y-2 shadow-md shadow-blue-500/5">
          <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900">
            {language === "ar"
              ? "C-Water تربط سلسلة المعالجة بأكملها في منظومة هندسية واحدة."
              : "C-Water connects the entire treatment chain into one integrated solution."}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal">
            {language === "ar"
              ? "كيمياء متطورة + ترشيح فائق + حقن دقيق + استشعار لحظي + تحكم ذكي + خبرة هندسية محلية."
              : "Advanced Chemistry + Automatic Filtration + Precision Dosing + Analytical Sensing + Smart Control + Local Engineering Support."}
          </p>
        </div>
      </div>
    </section>
  );
}
