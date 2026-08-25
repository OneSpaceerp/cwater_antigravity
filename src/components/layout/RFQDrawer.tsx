"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useRFQ } from "@/context/RFQContext";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingCart } from "lucide-react";

export function RFQDrawer() {
  const { language, isRTL, t } = useLanguage();
  const { items, removeItem, updateQuantity, clearRFQ, isDrawerOpen, setIsDrawerOpen, itemCount } = useRFQ();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`fixed inset-y-0 ${isRTL ? "left-0" : "right-0"} max-w-md w-full bg-white border-${isRTL ? "r" : "l"} border-slate-200 shadow-2xl flex flex-col z-50 text-slate-900`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-cwater-blue" />
            <h3 className="font-display font-semibold text-lg text-slate-900">{t("rfqTitle")}</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-blue-50 text-cwater-blue font-bold">
              {itemCount}
            </span>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-slate-300 stroke-[1.5]" />
              <p className="text-sm font-medium text-slate-600">{t("rfqEmpty")}</p>
              <Link
                href="/products"
                onClick={() => setIsDrawerOpen(false)}
                className="mt-4 inline-block text-xs font-bold text-cwater-blue hover:underline"
              >
                {language === "ar" ? "تصفح كتالوج المنتجات" : "Browse Technical Catalog"}
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center pb-2 border-b border-slate-100 text-xs text-slate-500">
                <span>{language === "ar" ? "المنتجات المحددة" : "Selected Items"}</span>
                <button
                  onClick={clearRFQ}
                  className="text-red-500 hover:text-red-600 flex items-center gap-1 transition-colors font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t("rfqClear")}</span>
                </button>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-cwater-blue font-mono font-bold">
                        {item.partner}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        {language === "ar" && item.nameAr ? item.nameAr : item.name}
                      </h4>
                      <p className="text-xs text-slate-500">{item.category}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <span className="text-xs text-slate-500 font-medium">{t("rfqQuantity")}:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-mono font-bold text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
            <Link
              href="/request-quote"
              onClick={() => setIsDrawerOpen(false)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-cwater-blue/20 transition-all group"
            >
              <span>{t("rfqProceed")}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </Link>
            <p className="text-[11px] text-center text-slate-500">
              {language === "ar"
                ? "سيتم تضمين هذه المنتجات تلقائياً في نموذج طلب عرض السعر الرسمي."
                : "These products will be automatically pre-filled in your formal RFQ inquiry."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
