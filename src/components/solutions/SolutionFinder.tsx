"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { solutionsData } from "@/data/solutions";
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";

export function SolutionFinder() {
  const { language, isRTL, t } = useLanguage();

  const [step, setStep] = useState(1);
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const systems = [
    { id: "cooling", name: "Cooling Water Systems", nameAr: "أبراج ودوائر مياه التبريد", slug: "cooling-water" },
    { id: "boiler", name: "Boiler & Steam Systems", nameAr: "الغلايات وتوليد البخار", slug: "boiler-steam" },
    { id: "ro", name: "RO & Membrane Desalination", nameAr: "محطات التناضح العكسي والأغشية", slug: "ro-membrane" },
    { id: "process", name: "Industrial Process Water", nameAr: "مياه العمليات الصناعية", slug: "process-water" },
    { id: "wastewater", name: "Industrial Wastewater & Reuse", nameAr: "الصرف الصناعي وإعادة التدوير", slug: "wastewater" },
    { id: "potable", name: "Potable & Domestic Water", nameAr: "مياه الشرب والاستخدام الآدمي", slug: "potable-drinking" },
    { id: "industrial", name: "Integrated Plant Utility Loop", nameAr: "المجمع الصناعي ومرافق المياه الكبرى", slug: "industrial-water" },
  ];

  const challenges = [
    { id: "scale", name: "Mineral Scaling / Tube Fouling", nameAr: "تكون الترسبات المعدنية وانسداد الأنابيب" },
    { id: "corrosion", name: "Corrosion / Metal Loss / Pipe Leaks", nameAr: "تآكل المعادن وثقوب خطوط الأنابيب" },
    { id: "bio", name: "Biofouling / Slime / Legionella Risk", nameAr: "النمو البكتيري والطحالب وخطر الليجيونيلا" },
    { id: "filtration", name: "Poor Physical Filtration / High Turbidity", nameAr: "ضعف الترشيح وارتفاع العكارة والمواد العالقة" },
    { id: "blowdown", name: "High Water Loss / Excessive Blowdown", nameAr: "هدر المياه والتصريف السطحي المفرط" },
    { id: "dosing", name: "Uncontrolled Chemical Consumption", nameAr: "استهلاك كيميائي غير منضبط وتكلفة باهظة" },
    { id: "membrane", name: "Rapid RO Membrane Flux Decline / High DP", nameAr: "انخفاض تدفق مياه الـ RO وارتفاع فرق الضغط" },
  ];

  const goals = [
    { id: "protect", name: "Protect Equipment & Prevent Shutdowns", nameAr: "حماية الأصول وتجنب التوقفات الطارئة" },
    { id: "efficiency", name: "Improve Water & Thermal Energy Efficiency", nameAr: "رفع كفاءة استهلاك المياه والطاقة الحرارية" },
    { id: "automation", name: "Automate Monitoring & Chemical Dosing", nameAr: "أتمتة المراقبة والتحكم والحقن الكيميائي" },
    { id: "compliance", name: "Achieve Environmental / Health Compliance", nameAr: "الامتثال الكامل للمعايير البيئية والصحية" },
    { id: "new_system", name: "Design & Engineer a New Water Treatment Skid", nameAr: "تصميم وبناء محطة معالجة جديدة متكاملة" },
  ];

  const reset = () => {
    setStep(1);
    setSelectedSystem(null);
    setSelectedChallenge(null);
    setSelectedGoal(null);
  };

  const getRecommendedSolution = () => {
    const sys = systems.find((s) => s.id === selectedSystem);
    return sys || systems[0]!;
  };

  const recommended = getRecommendedSolution();

  return (
    <div id="finder" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden text-slate-900">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      {/* Card Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-cwater-blue text-xs font-mono font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "الموجّه الهندسي التفاعلي" : "Interactive Engineering Triage"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            {t("finderTitle")}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            {t("finderSubtitle")}
          </p>
        </div>

        {step > 1 && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-cwater-blue px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 transition-colors font-mono font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t("finderReset")}</span>
          </button>
        )}
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              step === i
                ? "w-8 bg-cwater-blue"
                : step > i
                ? "w-4 bg-blue-300"
                : "w-2 bg-slate-200"
            }`}
          />
        ))}
      </div>

      {/* STEP 1: Select System */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 text-center">
            {t("finderStep1Title")}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {systems.map((sys) => (
              <button
                key={sys.id}
                onClick={() => {
                  setSelectedSystem(sys.id);
                  setStep(2);
                }}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${
                  selectedSystem === sys.id
                    ? "bg-blue-50 border-cwater-blue text-cwater-blue shadow-sm font-bold"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50 hover:border-cwater-blue hover:text-cwater-blue"
                }`}
              >
                <span className="text-sm font-semibold">
                  {language === "ar" ? sys.nameAr : sys.name}
                </span>
                <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-cwater-blue transition-transform ${isRTL ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: Select Challenge */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 text-center">
            {t("finderStep2Title")}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {challenges.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChallenge(ch.id);
                  setStep(3);
                }}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${
                  selectedChallenge === ch.id
                    ? "bg-blue-50 border-cwater-blue text-cwater-blue shadow-sm font-bold"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50 hover:border-cwater-blue hover:text-cwater-blue"
                }`}
              >
                <span className="text-sm font-semibold">
                  {language === "ar" ? ch.nameAr : ch.name}
                </span>
                <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-cwater-blue transition-transform ${isRTL ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: Select Goal */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 text-center">
            {t("finderStep3Title")}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goals.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setSelectedGoal(g.id);
                  setStep(4);
                }}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${
                  selectedGoal === g.id
                    ? "bg-blue-50 border-cwater-blue text-cwater-blue shadow-sm font-bold"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50 hover:border-cwater-blue hover:text-cwater-blue"
                }`}
              >
                <span className="text-sm font-semibold">
                  {language === "ar" ? g.nameAr : g.name}
                </span>
                <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-cwater-blue transition-transform ${isRTL ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 4: Generated Recommended Engineering Outcome */}
      {step === 4 && (
        <div className="space-y-6 animate-in zoom-in-95 duration-300 text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-cwater-blue font-bold tracking-wider">
              {language === "ar" ? "التوصية الهندسية الأولية" : "Engineered Recommendation"}
            </span>
            <h4 className="text-2xl font-display font-bold text-slate-900">
              {language === "ar"
                ? `${t("finderResultPrefix")} ${recommended.nameAr}`
                : `${t("finderResultPrefix")} ${recommended.name}`}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {language === "ar"
                ? `بناءً على التحدي المذكور، نوصي ببرنامج متكامل يجمع بين المعالجة الكيميائية الموجهة والترشيح الميكانيكي المناسب مع التحكم والقياس اللحظي. ${t("finderResultSuffix")}`
                : `Based on your responses, an integrated program combining specialized chemical passivation with automated filtration and precision controller telemetry is recommended. ${t("finderResultSuffix")}`}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?system=${selectedSystem}&challenge=${selectedChallenge}&goal=${selectedGoal}`}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/20 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("finderCTADiscuss")}</span>
            </Link>

            <Link
              href={`/solutions/${recommended.slug}`}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-white border border-slate-300 hover:border-cwater-blue text-slate-800 text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{language === "ar" ? `استكشف حلول ${recommended.nameAr}` : `View ${recommended.name} Details`}</span>
            </Link>
          </div>

          <p className="text-[11px] text-slate-400">
            {language === "ar"
              ? "هذه الأداة التفاعلية تساعد في تحديد نقطة الانطلاق الفنية ولا تغني عن المعاينة والتحليل المعملي الميداني."
              : "This interactive triage identifies initial technical pathways and does not replace on-site engineering lab analysis."}
          </p>
        </div>
      )}
    </div>
  );
}
