"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Filter, FlaskConical, Syringe, Gauge, Cpu, LineChart, Sparkles, CheckCircle2 } from "lucide-react";

export function SystemExplorer() {
  const { language, isRTL, t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState(1);

  const nodes = [
    {
      id: 0,
      title: "Raw / Source Water",
      titleAr: "مياه المصدر والآبار",
      partner: "Intake Water",
      partnerAr: "مأخذ المياه",
      icon: Filter,
      purpose: "Intake characterization, ion profiling, and turbidity baseline testing.",
      purposeAr: "توصيف المياه الخام، قياس التوازن الأيوني وتحديد خط الأساس للعكارة.",
      action: "Characterize",
      actionAr: "توصيف",
      techSlug: "water-analysis",
    },
    {
      id: 1,
      title: "Physical Filtration",
      titleAr: "الترشيح الميكانيكي",
      partner: "TIMEX",
      partnerAr: "تايمكس (TIMEX)",
      icon: Filter,
      purpose: "Removes suspended solids down to 10-50 microns with zero flow interruption to protect downstream equipment.",
      purposeAr: "إزالة المواد العالقة حتى 10-50 ميكرون دون إيقاف التدفق لحماية المعدات اللاحقة.",
      action: "Filter",
      actionAr: "ترشيح",
      techSlug: "filtration",
    },
    {
      id: 2,
      title: "Chemical Treatment",
      titleAr: "المعالجة الكيميائية",
      partner: "Kurita Europe",
      partnerAr: "كوريتـا (Kurita)",
      icon: FlaskConical,
      purpose: "Applies specialty polymeric crystal modifiers, corrosion passivators, and bio-dispersants.",
      purposeAr: "تطبيق بوليمرات تعديل البلورات وتخميل التآكل ومشتتات الأغشية الحيوية.",
      action: "Treat",
      actionAr: "معالجة",
      techSlug: "water-treatment-chemicals",
    },
    {
      id: 3,
      title: "Precision Dosing",
      titleAr: "الحقن الرقمي الدقيق",
      partner: "Walchem",
      partnerAr: "والكـيم (Walchem)",
      icon: Syringe,
      purpose: "Delivers micro-precision chemical pacing up to 360 SPM driven by flow and analytical feedback.",
      purposeAr: "حقن رقمي دقيق حتى 360 نبضة/دقيقة متناسب مع معدل التدفق والقراءات التحليلية.",
      action: "Dose",
      actionAr: "حقن",
      techSlug: "chemical-dosing",
    },
    {
      id: 4,
      title: "Sensing & Control",
      titleAr: "الاستشعار والتحكم",
      partner: "Walchem",
      partnerAr: "والكـيم (Walchem)",
      icon: Gauge,
      purpose: "Multi-parameter digital monitoring (pH, ORP, Conductivity, Chlorine) governing automated blowdown & feed.",
      purposeAr: "قياس رقمي متعدد (pH, ORP, توصيلية, كلور) للتحكم في صمامات التصريف والحقن آلياً.",
      action: "Control",
      actionAr: "تحكم",
      techSlug: "monitoring-control",
    },
    {
      id: 5,
      title: "Telemetry & Optimization",
      titleAr: "المراقبة والتحسين",
      partner: "C-Water Integrated",
      partnerAr: "منظومة C-Water",
      icon: LineChart,
      purpose: "24/7 Cloud IoT dashboards, remote engineering audits, and continuous cycle optimization.",
      purposeAr: "بوابات سحابية IoT على مدار الساعة، تدقيق هندسي دوري وتحسين مستمر لدورات التشغيل.",
      action: "Optimize",
      actionAr: "تحسين",
      techSlug: "water-analysis",
    },
  ];

  const current = nodes[selectedNode]!;
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "المستكشف التفاعلي للمنظومة" : "Interactive System Explorer"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {t("systemHeadline")}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t("systemSub")}
          </p>
        </div>

        {/* Process Flow Interactive Chain */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {nodes.map((node, idx) => {
            const isSelected = selectedNode === idx;
            const Icon = node.icon;
            return (
              <button
                key={node.title}
                onClick={() => setSelectedNode(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between relative group ${
                  isSelected
                    ? "bg-blue-50 border-cwater-blue shadow-md shadow-cwater-blue/10 ring-1 ring-cwater-blue"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white text-cwater-blue border border-slate-200 font-bold">
                    {language === "ar" ? node.partnerAr : node.partner}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-cwater-blue" : "bg-slate-300"}`} />
                </div>

                <div className="space-y-1">
                  <Icon className={`w-5 h-5 ${isSelected ? "text-cwater-blue" : "text-slate-500"}`} />
                  <h4 className={`text-xs font-bold ${isSelected ? "text-slate-900" : "text-slate-700"}`}>
                    {language === "ar" ? node.titleAr : node.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Deep-Dive Card */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-100 text-cwater-blue">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-cwater-blue font-bold">
                    {language === "ar" ? current.partnerAr : current.partner}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                    {language === "ar" ? current.titleAr : current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {language === "ar" ? current.purposeAr : current.purpose}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href={`/technologies/${current.techSlug}`}
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-cwater-blue/20 hover:shadow-lg transition-all group"
                >
                  <span>{language === "ar" ? "استكشف تفاصيل هذه التقنية" : "Explore Technology Details"}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                </Link>

                <Link
                  href="/contact"
                  className="py-2.5 px-5 rounded-xl bg-white border border-slate-300 hover:border-cwater-blue text-slate-800 font-bold text-xs sm:text-sm transition-all"
                >
                  <span>{t("navTalkToEngineer")}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-white border border-slate-200 text-xs space-y-3 font-mono shadow-sm">
              <div className="flex justify-between border-b border-slate-100 pb-2 text-slate-500">
                <span>SYSTEM STAGE:</span>
                <span className="text-slate-900 font-bold">{selectedNode + 1} / 6</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2 text-slate-500">
                <span>PRIMARY PARTNER:</span>
                <span className="text-cwater-blue font-bold">{current.partner}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2 text-slate-500">
                <span>INTEGRATION:</span>
                <span className="text-emerald-600 font-bold">C-WATER CERTIFIED</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>AUTOMATION:</span>
                <span className="text-slate-900 font-bold">CLOSED-LOOP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
