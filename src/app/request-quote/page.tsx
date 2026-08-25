"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useRFQ } from "@/context/RFQContext";
import { productsData } from "@/data/products";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  CheckCircle2,
  ArrowRight,
  Package,
  Send,
  Building,
} from "lucide-react";

export default function RequestQuotePage() {
  const { language, isRTL, t } = useLanguage();
  const { items, updateQuantity, removeItem, clearRFQ } = useRFQ();
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetFacility, setTargetFacility] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearRFQ();
  };

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "طلب عرض أسعار هندسي رسمي" : "Official Technical RFQ Builder"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar" ? "طلب عرض سعر للمعدات والتكنولوجيا" : "Request a Commercial & Technical Quote"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "راجع المنتجات والمعدات المختارة، وحدد الكميات والتطبيقات التشغيلية لمنشأتك لتصلك عروض الأسعار الرسمية وجداول التسليم."
              : "Review your selected equipment and chemistry items, specify your site parameters, and submit for direct engineering quotation."}
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-12 text-center space-y-6 max-w-xl mx-auto border border-emerald-200 shadow-xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900">
              {language === "ar" ? "تم إرسال طلب عرض السعر بنجاح!" : "RFQ Submitted Successfully!"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {language === "ar"
                ? "شكراً لاهتمامكم بتكنولوجيا C-Water. سيقوم قسم المبيعات الهندسية بإعداد العرض الفني والمالي والتواصل معكم في أقرب وقت."
                : "Thank you for selecting C-Water technologies. Our technical sales team is generating your formal commercial quote and datasheet pack."}
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/products"
                className="py-3 px-6 rounded-xl bg-slate-50 border border-slate-200 text-xs text-cwater-blue hover:bg-cwater-blue hover:text-white transition-all font-mono font-bold"
              >
                {language === "ar" ? "تصفح كتالوج المنتجات" : "Return to Product Catalog"}
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Selected Items List */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h2 className="text-lg font-display font-bold text-slate-900">
                    {language === "ar" ? "المنتجات والمعدات المختارة" : "Selected Items in Quote Cart"}
                  </h2>
                  <span className="text-xs font-mono font-bold text-cwater-blue">
                    {items.length} {language === "ar" ? "عنصر" : "Items"}
                  </span>
                </div>

                {items.length === 0 ? (
                  <div className="py-8 text-center space-y-3 text-slate-500 text-xs">
                    <Package className="w-10 h-10 mx-auto text-slate-300" />
                    <p>{language === "ar" ? "سلة عرض السعر فارغة حالياً." : "No products added to quote yet."}</p>
                    <Link
                      href="/products"
                      className="inline-block text-cwater-blue hover:underline font-bold"
                    >
                      {language === "ar" ? "تصفح كتالوج المنتجات لإضافة معدات" : "Browse products catalog to add items"}
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-cwater-blue font-bold">
                            {item.partner}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900">
                            {language === "ar" ? item.nameAr : item.name}
                          </h4>
                          <span className="text-[11px] text-slate-500">{item.category}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-white shadow-sm">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-slate-500 hover:text-slate-900"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2 text-xs font-mono font-bold text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-slate-500 hover:text-slate-900"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-slate-400 hover:text-red-600 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quote Submission Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                <h3 className="text-lg font-display font-bold text-slate-900 pb-3 border-b border-slate-100">
                  {language === "ar" ? "بيانات مقدم الطلب والمنشأة" : "Commercial Contact Information"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "الاسم بالكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "اسم الشركة / المصنع *" : "Company Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Industrial Ltd."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "البريد الإلكتروني للعمل *" : "Work Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="purchasing@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 11X XXX XXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-medium">
                      {language === "ar" ? "الموقع والمنطقة الصناعية" : "Facility Location / Delivery Site"}
                    </label>
                    <input
                      type="text"
                      value={targetFacility}
                      onChange={(e) => setTargetFacility(e.target.value)}
                      placeholder="e.g. 10th of Ramadan / Borg El Arab / Ain Sokhna"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-medium">
                      {language === "ar" ? "ملاحظات إضافية حول التطبيق والمواصفات" : "Technical Specifications or Project Notes"}
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={language === "ar" ? "أذكر أقطار المواسير، معدلات التدفق المطلوبة، أو أي متطلبات خاصة..." : "Mention flow rates, pipe diameters, power supply, or required options..."}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white font-bold text-sm shadow-lg shadow-cwater-blue/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === "ar" ? "إرسال طلب عرض السعر للمبيعات الهندسية" : "Submit Formal RFQ Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
