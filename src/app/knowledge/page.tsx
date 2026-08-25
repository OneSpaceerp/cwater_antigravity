"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { knowledgeData } from "@/data/knowledge";
import { BookOpen, Search, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function KnowledgePage() {
  const { language, isRTL, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: language === "ar" ? "كافة المواضيع" : "All Topics" },
    { id: "Cooling Water", name: language === "ar" ? "مياه التبريد" : "Cooling Water" },
    { id: "Boiler Water", name: language === "ar" ? "مياه الغلايات" : "Boiler Water" },
    { id: "RO & Membranes", name: language === "ar" ? "التناضح العكسي" : "RO & Membranes" },
    { id: "Filtration", name: language === "ar" ? "الترشيح" : "Filtration" },
    { id: "Monitoring & Control", name: language === "ar" ? "التحكم والمراقبة" : "Monitoring & Control" },
    { id: "Chemical Dosing", name: language === "ar" ? "الحقن الكيميائي" : "Chemical Dosing" },
  ];

  const filteredArticles = knowledgeData.filter((art) => {
    const matchesCat = selectedCategory === "all" || art.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.titleAr.includes(searchQuery) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summaryAr.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "مركز المعرفة الهندسية" : "Engineering Knowledge Center"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar"
              ? "معالجة المياه علم هندسي. وإجاباتنا كذلك."
              : "Understand the Water. Understand the System."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "أدلة هندسية، آليات كيميائية، وقوائم فحص تشخيصية يقدمها كبار مهندسي C-Water لمساعدتك في فهم وتحسين أداء منظومة المياه."
              : "Technical guides, chemical mechanisms, diagnostic checklists, and operating rules authored by C-Water senior water-treatment engineers."}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === "ar" ? "ابحث في المقالات والمواضيع الهندسية..." : "Search technical guides, formulas, or challenges..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`py-2 px-3.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedCategory === c.id
                    ? "bg-cwater-blue text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:text-cwater-blue border border-slate-200"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="px-2.5 py-1 rounded bg-blue-50 text-cwater-blue font-bold">
                    {language === "ar" ? art.categoryAr : art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{language === "ar" ? art.readTimeAr : art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors leading-snug">
                  {language === "ar" ? art.titleAr : art.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                  {language === "ar" ? art.summaryAr : art.summary}
                </p>

                {/* Question Teaser */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic font-normal">
                  &ldquo;{language === "ar" ? art.questionAr : art.question}&rdquo;
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/knowledge/${art.slug}`}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cwater-blue flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === "ar" ? "قراءة الدليل كاملاً" : "Read Technical Guide"}</span>
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
