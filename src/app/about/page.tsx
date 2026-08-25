"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Building,
  Wrench,
  Globe,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const { language, isRTL, t } = useLanguage();

  const pillars = [
    {
      title: "1. Diagnosis Before Prescription",
      titleAr: "١. التشخيص المعملي قبل التوصيف",
      desc: "Every water program begins with analytical testing, metallurgy reviews, and operational profiling — not generic guesswork.",
      descAr: "تبدأ كل منظومة بتحليل مخبري معتمد وفحص شامل للمبادلات والمعادن وظروف التشغيل قبل أي توصيف.",
    },
    {
      title: "2. The Complete Operating Chain",
      titleAr: "٢. المنظومة التشغيلية المتكاملة",
      desc: "Chemical treatment, mechanical filtration, and digital controls must be engineered together. Components don't succeed in isolation.",
      descAr: "الكيمياء المتقدمة، الترشيح الفائق، والتحكم الذكي يجب أن تعمل في تكامل وترابط وثيق لتحقيق النتائج.",
    },
    {
      title: "3. Best-in-Class Global Technologies",
      titleAr: "٣. شراكات تكنولوجية عالمية رائدة",
      desc: "We partner with global market leaders — Walchem, TIMEX, and Kurita Europe — combining proven technology with local engineering execution.",
      descAr: "نعتمد تقنيات رائدة من Walchem وTIMEX وKurita Europe مع التجميع والتنفيذ والضمان الهندسي المحلي.",
    },
    {
      title: "4. Measurable Operational Outcomes",
      titleAr: "٤. نتائج تشغيلية ملموسة ومقاسة",
      desc: "We connect our programs directly to client ROI: energy efficiency, water recovery, corrosion rates, and zero unscheduled downtime.",
      descAr: "نربط برامجنا مباشرة بحسابات العائد على الاستثمار: ترشيد الطاقة والمياه، خفض معدلات التآكل، واستمرارية العمليات.",
    },
    {
      title: "5. Lifecycle Engineering Partnership",
      titleAr: "٥. شراكة هندسية مستدامة",
      desc: "We do not ship boxes and disappear. C-Water field teams conduct regular audits, calibrations, and continuous program optimization.",
      descAr: "شراكتنا مستمرة بعد التركيب: زيارات تدقيق دورية، معايرة الحساسات، وتطوير مستمر لبرامج المعالجة.",
    },
  ];

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Building className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "عن C-Water" : "About C-Water"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "معالجة مياه، مهندسة حول عملياتك التشغيلية."
              : "Water Treatment, Engineered Around Your Operation."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "تأسست C-Water لتقديم نقلة نوعية في قطاع معالجة المياه الصناعية في مصر، من خلال دمج الهندسة الميدانية، والشراكات التكنولوجية العالمية، والدعم الفني المستمر."
              : "C-Water is Egypt's leading integrated B2B water treatment technology platform, bringing together global instrumentation, filtration, and chemistry with relentless local engineering support."}
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              {language === "ar" ? "رؤيتنا ورسالتنا الهندسية" : "Our Engineering Foundation"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {language === "ar"
                ? "في بيئة صناعية تزداد تعقيداً، تواجه المنشآت تحديات متصاعدة في تكاليف الطاقة، شح المياه، واستنزاف المعدات نتيجة الترسبات والتآكل. نؤمن بأن الحلول الجزئية المؤقتة تكلف أكثر مما توفر. لذلك نقدم برامج معالجة متكاملة تبدأ من فحص مياه المصدر وتستمر حتى المراقبة السحابية اللحظية."
                : "Modern industrial operations face mounting challenges: rising energy tariffs, strict water quality standards, and costly downtime from scaling and corrosion. We reject one-size-fits-all commodity products. Every C-Water installation is a custom-engineered integration built for maximum asset longevity."}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {language === "ar"
                ? "بصفتنا الشريك المعتمد في مصر لـ Walchem وTIMEX وKurita Europe، نوفر لعملائنا في كافة المحافظات أحدث ما توصلت إليه التكنولوجيا العالمية بضمان ودعم محلي كامل."
                : "As authorized technology partners for Walchem, TIMEX, and Kurita Europe in Egypt, we combine globally proven hardware and specialty chemistry with our Cairo-based engineering lab and service infrastructure."}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cwater-blue font-bold uppercase">C-WATER CREDENTIALS</span>
              <h3 className="text-xl font-display font-bold text-slate-900">
                {language === "ar" ? "الثقة والمصداقية الميدانية" : "Verified Credentials"}
              </h3>
            </div>
            <div className="space-y-4 text-xs font-mono text-slate-700">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">HEADQUARTERS:</span>
                <span className="text-slate-900 font-bold">6th of October, Egypt</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">CORE PARTNERS:</span>
                <span className="text-cwater-blue font-bold">Walchem · TIMEX · Kurita</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">ENGINEERING LAB:</span>
                <span className="text-emerald-600 font-bold">In-House Water Analytics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SERVICE COVERAGE:</span>
                <span className="text-slate-900 font-bold">All Industrial Zones in Egypt</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Operating Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cwater-blue uppercase font-bold">THE C-WATER PHILOSOPHY</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              {language === "ar" ? "الركائز الهندسية الخمس" : "The Five Engineering Pillars"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pil) => (
              <div
                key={pil.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-cwater-blue space-y-3"
              >
                <h3 className="text-base font-display font-bold text-slate-900">
                  {language === "ar" ? pil.titleAr : pil.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {language === "ar" ? pil.descAr : pil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200 text-center space-y-6 shadow-xl shadow-blue-500/5">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            {language === "ar" ? "هل ترغب في التعاون مع فريق C-Water؟" : "Ready to Engineer Your Water Program?"}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "تواصل معنا اليوم لحجز زيارة ميدانية أو مناقشة احتياجات منشأتك مع كبير مهندسينا."
              : "Connect with our team to schedule an introductory engineering consultation or on-site facility audit."}
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2"
            >
              <span>{t("navTalkToEngineer")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
