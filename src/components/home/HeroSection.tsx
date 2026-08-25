"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Activity, ShieldCheck, Cpu, Droplets, Sparkles, Filter, Sliders, Waves } from "lucide-react";

export function HeroSection() {
  const { language, isRTL, t } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    { name: "Raw Intake Water", nameAr: "مياه المصدر والخام", partner: "Intake / Raw", color: "text-blue-600" },
    { name: "Automatic Self-Cleaning Filtration", nameAr: "الترشيح الذاتي الفائق", partner: "TIMEX", color: "text-sky-600" },
    { name: "Specialized Water Chemistry", nameAr: "المعالجة الكيميائية المتقدمة", partner: "Kurita", color: "text-teal-600" },
    { name: "Digital Precision Metering", nameAr: "الحقن الرقمي عالي الدقة", partner: "Walchem", color: "text-blue-700" },
    { name: "IoT Multi-Parameter Sensing", nameAr: "الاستشعار والتحكم الذكي", partner: "Walchem", color: "text-indigo-600" },
    { name: "Continuous Field Engineering", nameAr: "التحسين الهندسي المستمر", partner: "C-Water", color: "text-cwater-blue" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50">
      {/* Background Light Blueprint Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Dynamic Animated Flowing SVG Water Stream */}
      <svg
        className="absolute top-1/3 left-0 w-full h-40 pointer-events-none opacity-25"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,100 C200,20 400,180 720,100 C1040,20 1240,180 1540,100"
          stroke="#008CD2"
          strokeWidth="3"
          className="animate-water-flow"
        />
        <path
          d="M-100,120 C220,190 420,30 720,120 C1020,210 1260,30 1540,120"
          stroke="#00A3E0"
          strokeWidth="2"
          strokeDasharray="4 8"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cwater-blue animate-pulse" />
              <span>{t("heroEyebrow")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 leading-[1.15]">
              {language === "ar" ? (
                <>
                  معالجة المياه الصناعية.{" "}
                  <span className="text-gradient">مصممة وفقاً لطبيعة تشغيلك.</span>
                </>
              ) : (
                <>
                  Water Treatment,{" "}
                  <span className="text-gradient">Engineered Around Your Operation.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              {t("heroSubtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white font-bold text-sm shadow-lg shadow-cwater-blue/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>{t("heroCTA1")}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>

              <Link
                href="/solutions"
                className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-sm hover:border-cwater-blue transition-all flex items-center justify-center gap-2"
              >
                <span>{t("heroCTA2")}</span>
              </Link>
            </div>

            {/* Trust Pillars */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600 font-mono font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cwater-blue" />
                <span>{language === "ar" ? "تقنيات عالمية معتمدة" : "Global Technology (Walchem · TIMEX · Kurita)"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cwater-blue" />
                <span>{language === "ar" ? "هندسة وتحكم محلي" : "Local Field Engineering"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cwater-blue" />
                <span>{language === "ar" ? "دعم ميداني مستمر" : "24/7 Monitoring"}</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Animated Treatment Schematic (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
              {/* Card Header with Live Pulse */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                    {language === "ar" ? "مسار المعالجة الهندسية التفاعلي" : "Integrated Treatment Stream"}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-cwater-blue border border-blue-200 font-bold">
                  SIMULATION ACTIVE
                </span>
              </div>

              {/* Animated Stages Vertical Pipeline */}
              <div className="space-y-2.5 relative">
                {/* Connecting glowing stream line */}
                <div className="absolute top-4 bottom-4 left-5 w-0.5 bg-gradient-to-b from-blue-400 via-sky-400 to-teal-400" />

                {stages.map((stage, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <button
                      key={stage.name}
                      onClick={() => setActiveStage(idx)}
                      className={`w-full text-left flex items-center gap-3.5 p-2.5 rounded-xl transition-all relative z-10 ${
                        isActive
                          ? "bg-blue-50/80 border border-cwater-blue/50 shadow-sm"
                          : "bg-slate-50/70 border border-transparent hover:border-slate-200"
                      }`}
                    >
                      {/* Node Indicator */}
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-cwater-blue ring-4 ring-blue-100 scale-110"
                            : "bg-slate-300"
                        }`}
                      >
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>

                      {/* Stage Info */}
                      <div className="flex-1 flex items-center justify-between">
                        <div>
                          <h4
                            className={`text-xs font-bold transition-colors ${
                              isActive ? "text-slate-900" : "text-slate-600"
                            }`}
                          >
                            {language === "ar" ? stage.nameAr : stage.name}
                          </h4>
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                            isActive
                              ? "bg-blue-100 text-cwater-blue"
                              : "text-slate-400"
                          }`}
                        >
                          {stage.partner}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Telemetry Snapshot Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-2 font-mono">
                  <span>{language === "ar" ? "قراءات الحساسات اللحظية" : "Sensor Telemetry Sample"}</span>
                  <span className="text-emerald-600 font-bold">● OPTIMAL RUN</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="block text-[10px] text-slate-500">pH</span>
                    <span className="text-sm font-bold text-slate-900">7.45</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="block text-[10px] text-slate-500">Cond. (µS)</span>
                    <span className="text-sm font-bold text-cwater-blue">1,820</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="block text-[10px] text-slate-500">ORP (mV)</span>
                    <span className="text-sm font-bold text-emerald-600">+315</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Trigger */}
              <div className="mt-4 text-center">
                <Link
                  href="/technologies"
                  className="text-[11px] text-cwater-blue hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>{language === "ar" ? "استكشف تكامل المنظومة التكنولوجية" : "Explore Integrated Technology System"}</span>
                  <ArrowRight className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
