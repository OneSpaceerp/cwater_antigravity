"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRFQ } from "@/context/RFQContext";
import { productsData } from "@/data/products";
import { Search, Filter, Package, ShoppingCart, ArrowRight, Check, FileText } from "lucide-react";

export default function ProductsPage() {
  const { language, isRTL, t } = useLanguage();
  const { addItem, items } = useRFQ();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPartner, setSelectedPartner] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const partners = [
    { id: "all", name: language === "ar" ? "كافة الشركاء" : "All Partners" },
    { id: "walchem", name: "Walchem" },
    { id: "timex", name: "TIMEX" },
    { id: "kurita", name: "Kurita Europe" },
  ];

  const categories = [
    { id: "all", name: language === "ar" ? "كافة الفئات" : "All Categories" },
    { id: "Controllers & Automation", name: language === "ar" ? "وحدات التحكم والأتمتة" : "Controllers" },
    { id: "Filtration Systems", name: language === "ar" ? "أنظمة الترشيح الصناعي" : "Filtration" },
    { id: "Chemical Dosing", name: language === "ar" ? "مضخات الحقن الرقمي" : "Dosing Pumps" },
    { id: "Boiler & Steam Chemistry", name: language === "ar" ? "كيماويات الغلايات والبخار" : "Boiler Chemistry" },
    { id: "Membrane Treatment Chemistry", name: language === "ar" ? "كيماويات أغشية الـ RO" : "Membrane Chemistry" },
    { id: "Wastewater Separation", name: language === "ar" ? "فصل ومعالجة الصرف" : "Wastewater Separation" },
  ];

  const filteredProducts = productsData.filter((p) => {
    const matchesPartner = selectedPartner === "all" || p.partnerId === selectedPartner;
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameAr.includes(searchQuery) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescAr.includes(searchQuery);
    return matchesPartner && matchesCat && matchesSearch;
  });

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Package className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "الكتالوج الفني المتخصص" : "Technical Equipment & Chemistry Catalog"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar" ? "المنتجات والمعدات التكنولوجية المعتمدة." : "Find the Technology Behind the Solution."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "معدات تحكم Walchem، فلاتر TIMEX ذاتية التنظيف، وكيمياء Kurita Europe المتقدمة. تصفح المواصفات الهندسية وأضف ما تحتاجه لطلب عرض السعر المباشر."
              : "Walchem multi-parameter controllers, TIMEX automatic self-cleaning filtration, and Kurita specialty water chemistry. Inspect datasheets and build your RFQ."}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Live Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
              />
            </div>

            {/* Partner Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-mono text-slate-500 shrink-0 font-medium">
                {t("filterBy")}:
              </span>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="w-full md:w-auto py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-cwater-blue font-mono font-medium"
              >
                {partners.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Selector */}
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-cwater-blue font-mono font-medium"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>
            {language === "ar"
              ? `عرض ${filteredProducts.length} من إجمالي ${productsData.length} منتج معتمد`
              : `Showing ${filteredProducts.length} of ${productsData.length} verified products`}
          </span>
          {(selectedPartner !== "all" || selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedPartner("all");
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-cwater-blue font-bold hover:underline"
            >
              {language === "ar" ? "إعادة ضبط التصفية" : "Reset Filters"}
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => {
            const isAdded = items.some((item) => item.id === prod.id);
            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cwater-blue/50 flex flex-col justify-between group overflow-hidden transition-all duration-300"
              >
                {/* Official Product Image Showcase */}
                <div className="relative h-52 w-full bg-slate-100/70 border-b border-slate-100 overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={prod.imageUrl}
                      alt={prod.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm text-cwater-blue font-bold shadow-sm border border-slate-200">
                    {prod.partnerName}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[11px] text-slate-500 font-mono block">
                      {language === "ar" ? prod.categoryAr : prod.category}
                    </span>

                    <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-cwater-blue transition-colors">
                      {language === "ar" ? prod.nameAr : prod.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {language === "ar" ? prod.shortDescAr : prod.shortDesc}
                    </p>

                    {/* Specs Snippet */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs font-mono">
                      {prod.specifications.slice(0, 2).map((sp) => (
                        <div key={sp.label} className="flex justify-between text-[11px]">
                          <span className="text-slate-500">{language === "ar" ? sp.labelAr : sp.label}:</span>
                          <span className="text-slate-900 font-semibold text-right truncate max-w-[150px]">{sp.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="text-xs font-bold text-slate-900 hover:text-cwater-blue transition-colors"
                    >
                      {t("viewDetails")} →
                    </Link>

                    <button
                      onClick={() =>
                        addItem({
                          id: prod.id,
                          name: prod.name,
                          nameAr: prod.nameAr,
                          partner: prod.partnerName,
                          category: prod.category,
                        })
                      }
                      className={`py-2 px-3.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        isAdded
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-blue-50 hover:bg-cwater-blue text-cwater-blue hover:text-white border border-blue-200"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{language === "ar" ? "في الطلب" : "In Quote"}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>{t("navRequestQuote")}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
