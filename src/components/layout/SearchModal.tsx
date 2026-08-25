"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";
import { technologiesData } from "@/data/technologies";
import { productsData } from "@/data/products";
import { knowledgeData } from "@/data/knowledge";
import { Search, X, ArrowRight, Layers, Factory, Cpu, Package, BookOpen } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { language, isRTL, t } = useLanguage();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredSolutions = q
    ? solutionsData.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.titleAr.includes(q) ||
          s.shortDesc.toLowerCase().includes(q)
      )
    : [];

  const filteredProducts = q
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.nameAr.includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.partnerName.toLowerCase().includes(q)
      )
    : [];

  const filteredTechnologies = q
    ? technologiesData.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.nameAr.includes(q) ||
          t.description.toLowerCase().includes(q)
      )
    : [];

  const filteredIndustries = q
    ? industriesData.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.nameAr.includes(q) ||
          i.description.toLowerCase().includes(q)
      )
    : [];

  const filteredArticles = q
    ? knowledgeData.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.titleAr.includes(q) ||
          a.summary.toLowerCase().includes(q)
      )
    : [];

  const hasResults =
    filteredSolutions.length > 0 ||
    filteredProducts.length > 0 ||
    filteredTechnologies.length > 0 ||
    filteredIndustries.length > 0 ||
    filteredArticles.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-cwater-blue shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-base sm:text-lg text-slate-900 placeholder-slate-400 focus:ring-0"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-slate-500 hover:text-slate-900 px-2 py-1 rounded bg-slate-200 font-mono"
            >
              {language === "ar" ? "مسح" : "Clear"}
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {!q && (
            <div className="text-center py-10 text-slate-500">
              <p className="text-sm">
                {language === "ar"
                  ? "ابدأ بكتابة كلمة للبحث عن منتج، تقنية، قطاع صناعي، أو مقال هندسي..."
                  : "Type to search solutions, products, partners (Walchem, TIMEX, Kurita), or technical articles..."}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Cooling Tower", "RO Membrane", "Walchem W900", "Cetamine", "TIMEX SAF", "Boiler Scale"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 rounded-full text-xs bg-slate-100 border border-slate-200 hover:border-cwater-blue hover:text-cwater-blue text-slate-700 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {q && !hasResults && (
            <div className="text-center py-12 text-slate-500">
              <p className="text-base font-medium">
                {language === "ar"
                  ? `لا توجد نتائج مطابقة لـ "${query}"`
                  : `No results found for "${query}"`}
              </p>
              <p className="text-xs mt-2 text-slate-400">
                {language === "ar"
                  ? "جرب البحث بمصطلحات عامة مثل 'تبريد'، 'غلايات'، 'Walchem' أو تواصل مع مهندسينا مباشرة."
                  : "Try broader keywords like 'cooling', 'boiler', 'controller' or contact our engineers."}
              </p>
            </div>
          )}

          {/* Solutions */}
          {filteredSolutions.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cwater-blue mb-3">
                <Layers className="w-4 h-4" />
                <span>{t("navSolutions")}</span>
              </div>
              <div className="space-y-2">
                {filteredSolutions.map((s) => (
                  <Link
                    key={s.id}
                    href={`/solutions/${s.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-cwater-blue/40 transition-all group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-cwater-blue transition-colors">
                        {language === "ar" ? s.titleAr : s.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {language === "ar" ? s.shortDescAr : s.shortDesc}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-cwater-blue transition-transform ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Products */}
          {filteredProducts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cwater-blue mb-3">
                <Package className="w-4 h-4" />
                <span>{t("navProducts")}</span>
              </div>
              <div className="space-y-2">
                {filteredProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-cwater-blue/40 transition-all group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-cwater-blue font-mono font-bold">
                          {p.partnerName}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-cwater-blue transition-colors">
                          {language === "ar" ? p.nameAr : p.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                        {language === "ar" ? p.shortDescAr : p.shortDesc}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-cwater-blue transition-transform ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {filteredTechnologies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cwater-blue mb-3">
                <Cpu className="w-4 h-4" />
                <span>{t("navTechnologies")}</span>
              </div>
              <div className="space-y-2">
                {filteredTechnologies.map((tech) => (
                  <Link
                    key={tech.id}
                    href={`/technologies/${tech.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-cwater-blue/40 transition-all group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-cwater-blue transition-colors">
                        {language === "ar" ? tech.nameAr : tech.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {language === "ar" ? tech.headlineAr : tech.headline}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-cwater-blue transition-transform ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Knowledge Articles */}
          {filteredArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cwater-blue mb-3">
                <BookOpen className="w-4 h-4" />
                <span>{t("navKnowledge")}</span>
              </div>
              <div className="space-y-2">
                {filteredArticles.map((art) => (
                  <Link
                    key={art.id}
                    href={`/knowledge/${art.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-cwater-blue/40 transition-all group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-cwater-blue transition-colors">
                        {language === "ar" ? art.titleAr : art.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {language === "ar" ? art.summaryAr : art.summary}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-cwater-blue transition-transform ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>
            {language === "ar"
              ? "اضغط ESC للإغلاق | Ctrl+K للفتح السريع"
              : "Press ESC to close · Ctrl+K to toggle"}
          </span>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-cwater-blue font-semibold hover:underline flex items-center gap-1"
          >
            <span>{t("navTalkToEngineer")}</span>
            <ArrowRight className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
