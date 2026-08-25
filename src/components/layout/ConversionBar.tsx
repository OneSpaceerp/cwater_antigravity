"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, ArrowRight, X } from "lucide-react";

export function ConversionBar() {
  const { language, isRTL, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      aria-label="Conversion quick actions"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl shadow-slate-900/10 text-slate-900 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-50 text-cwater-blue shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">
              {language === "ar" ? "هل تحتاج استشارة لمنظومة المياه لديك؟" : "Need guidance for your water system?"}
            </h4>
            <p className="text-[11px] text-slate-500">
              {language === "ar" ? "تحدث مباشرة مع فريق مهندسي C-Water" : "Speak directly with a senior water engineer"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="py-1.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-cwater-blue to-cwater-sky text-white shadow-sm hover:shadow-md transition-all flex items-center gap-1"
          >
            <span>{t("navTalkToEngineer")}</span>
            <ArrowRight className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
