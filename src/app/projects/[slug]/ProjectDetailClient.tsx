"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import {
  ChevronRight,
  MapPin,
  Building,
  AlertTriangle,
  Wrench,
  Cpu,
  MessageSquare,
} from "lucide-react";

interface ProjectDetailClientProps {
  slug: string;
}

export function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
  const { language, isRTL, t } = useLanguage();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Link href="/" className="hover:text-cwater-blue">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <Link href="/projects" className="hover:text-cwater-blue">
            {t("navProjects")}
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          <span className="text-slate-900 font-bold">
            {language === "ar" ? project.titleAr : project.title}
          </span>
        </div>

        {/* Project Header Hero */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-cwater-blue font-bold">
                <Building className="w-3.5 h-3.5" />
                <span>{language === "ar" ? project.industryAr : project.industry}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-cwater-blue" />
                <span>{language === "ar" ? project.locationAr : project.location}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              {language === "ar" ? project.titleAr : project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? project.summaryAr : project.summary}
            </p>
          </div>
        </div>

        {/* Challenge vs Existing System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenge */}
          <div className="bg-amber-50/60 rounded-2xl p-7 border border-amber-200 space-y-3">
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>{language === "ar" ? "التحدي التشغيلي:" : "The Core Engineering Challenge:"}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {language === "ar" ? project.challengeAr : project.challenge}
            </p>
          </div>

          {/* Existing System */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-slate-400" />
              <span>{language === "ar" ? "الوضع القائم قبل تدخل C-Water:" : "The Baseline / Existing System:"}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {language === "ar" ? project.existingSystemAr : project.existingSystem}
            </p>
          </div>
        </div>

        {/* What C-Water Did */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-display font-bold text-slate-900">
              {language === "ar" ? "ما قامت به C-Water:" : "What C-Water Engineered:"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(language === "ar" ? project.cwaterApproachAr : project.cwaterApproach).map((app, idx) => (
              <div key={app} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-cwater-blue">0{idx + 1}</span>
                <span className="text-sm font-semibold text-slate-900">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Deployed */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl font-display font-bold text-slate-900">
              {language === "ar" ? "التقنيات والمعدات المنفذة:" : "Technology Stack Deployed:"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(language === "ar" ? project.technologiesUsedAr : project.technologiesUsed).map((tech) => (
              <div key={tech} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Cpu className="w-5 h-5 text-cwater-blue shrink-0" />
                <span className="text-xs font-bold text-slate-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measured Results Section */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <div className="text-xs font-mono uppercase text-emerald-600 font-bold mb-1">
              {language === "ar" ? "النتائج المثبتة" : "Validated Results"}
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900">
              {language === "ar" ? "النتائج والعوائد التشغيلية المحققة:" : "Measured Performance Improvements:"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res) => (
              <div
                key={res.metric}
                className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200 space-y-3"
              >
                <span className="text-xs font-mono text-emerald-700 font-bold uppercase block">
                  {language === "ar" ? res.metricAr : res.metric}
                </span>
                <span className="text-2xl sm:text-3xl font-display font-bold text-slate-900 block">
                  {res.value}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {language === "ar" ? res.descAr : res.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Consultation Callout */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-200 text-center space-y-6 shadow-xl shadow-blue-500/5">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
            {language === "ar" ? "هل تواجه تحدياً تشغيلياً مماثلاً؟" : "Working Through a Similar Water Challenge?"}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "تواصل مع مهندسينا لمناقشة منشأتك ووضع خطة هندسية تضمن أعلى كفاءة لمياه العمليات."
              : "Speak with a C-Water senior engineer to discuss your facility requirements and design a tailored solution."}
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky text-white font-bold text-sm shadow-md shadow-cwater-blue/25 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("navTalkToEngineer")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
