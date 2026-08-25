"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Upload,
  Layers,
  ThermometerSnowflake,
  Flame,
  Waves,
  Factory,
  Check,
} from "lucide-react";

export default function RequestSolutionPage() {
  const { language, isRTL, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [systemType, setSystemType] = useState("cooling");
  const [problemType, setProblemType] = useState<string[]>([]);
  const [facilityLocation, setFacilityLocation] = useState("");
  const [facilityIndustry, setFacilityIndustry] = useState("Manufacturing");
  const [currentTreatment, setCurrentTreatment] = useState("Manual chemical dosing");
  const [automationGoal, setAutomationGoal] = useState("Full IoT Telemetry & Auto-Dosing");
  const [timeline, setTimeline] = useState("Immediate (Within 1-2 weeks)");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [waterAnalysisNote, setWaterAnalysisNote] = useState("");

  const toggleProblem = (prob: string) => {
    if (problemType.includes(prob)) {
      setProblemType(problemType.filter((p) => p !== prob));
    } else {
      setProblemType([...problemType, prob]);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "معالج التشخيص الهندسي الشامل" : "Multi-Step Engineering Diagnostic Wizard"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar" ? "طلب دراسة وتصميم حل هندسي" : "Request an Engineered Solution"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "ar"
              ? "أجب عن خطوات التشخيص التالية لنقوم بإعداد دراسة فنية أولية لمنظومة المياه بمنشأتك."
              : "Complete this 6-step technical profile to receive a tailored engineering proposal and baseline water audit."}
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          {!submitted && (
            <>
              {/* Progress Indicator */}
              <div className="mb-10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
                  <span>
                    {language === "ar" ? `الخطوة ${currentStep} من 6` : `STEP 0${currentStep} OF 06`}
                  </span>
                  <span className="text-cwater-blue font-bold">
                    {currentStep === 1 && (language === "ar" ? "نوع المنظومة المائية" : "System Identification")}
                    {currentStep === 2 && (language === "ar" ? "الأعراض والمشاكل الملاحظة" : "Observed Symptoms")}
                    {currentStep === 3 && (language === "ar" ? "بيانات المنشأة والموقع" : "Facility Profile")}
                    {currentStep === 4 && (language === "ar" ? "برنامج المعالجة الحالي" : "Current Treatment Baseline")}
                    {currentStep === 5 && (language === "ar" ? "الأهداف والجدول الزمني" : "Goals & Timeline")}
                    {currentStep === 6 && (language === "ar" ? "بيانات الاتصال وتقرير المياه" : "Contact & Water Lab Report")}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cwater-blue to-cwater-sky transition-all duration-300"
                    style={{ width: `${(currentStep / 6) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: System Identification */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h3 className="text-lg font-display font-bold text-slate-900">
                    {language === "ar" ? "ما هي المنظومة المائية المطلوب دراستها؟" : "Select Your Primary Water System:"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "cooling", label: "Cooling Towers & Closed Loops", labelAr: "أبراج ودوائر التبريد المغلقة والمفتوحة" },
                      { id: "boiler", label: "Boiler & Steam Generation Skid", labelAr: "الغلايات ومولدات البخار" },
                      { id: "ro", label: "RO / Membrane Desalination Plant", labelAr: "محطات تحلية التناضح العكسي RO" },
                      { id: "process", label: "Industrial Process Water Filtration", labelAr: "مياه العمليات الصناعية والترشيح" },
                      { id: "wastewater", label: "Industrial Wastewater & DAF Reuse", labelAr: "معالجة الصرف الصناعي وإعادة الاستخدام" },
                      { id: "integrated", label: "Complete Plant Multi-System Skid", labelAr: "المجمع المائي الصناعي المتكامل" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSystemType(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                          systemType === item.id
                            ? "bg-blue-50 border-cwater-blue text-cwater-blue font-bold shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50 hover:border-cwater-blue"
                        }`}
                      >
                        <span className="text-sm font-semibold">
                          {language === "ar" ? item.labelAr : item.label}
                        </span>
                        {systemType === item.id && <CheckCircle2 className="w-4 h-4 text-cwater-blue" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Observed Symptoms */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h3 className="text-lg font-display font-bold text-slate-900">
                    {language === "ar" ? "ما هي المشاكل أو الأعراض الملاحظة؟ (يمكن اختيار أكثر من خيار)" : "Select Observed Problems or Symptoms (Multi-Select):"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "scaling", label: "Mineral scale build-up on heat exchangers", labelAr: "تكون ترسبات كلسية على أسطح المبادلات" },
                      { id: "corrosion", label: "Pipe corrosion, rust water, or pinhole leaks", labelAr: "تآكل الأنابيب، مياه صدئة، أو ثقوب تسريب" },
                      { id: "biofouling", label: "Algae, slime, or biofouling accumulation", labelAr: "طحالب، رواسب مخاطية بكتيرية، أو روائح" },
                      { id: "solids", label: "High turbidity / Suspended solids clogging equipment", labelAr: "عكارة مرتفعة وانسداد متكرر للفلاتر" },
                      { id: "waterloss", label: "Excessive blowdown / High water & chemical costs", labelAr: "تصريف مفرط وتكلفة كيماويات ومياه باهظة" },
                      { id: "flux", label: "Rapid RO membrane fouling or flux decline", labelAr: "انسداد متكرر لأغشية الـ RO وهبوط التدفق" },
                    ].map((item) => {
                      const isSelected = problemType.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleProblem(item.id)}
                          className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? "bg-blue-50 border-cwater-blue text-cwater-blue font-bold shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50 hover:border-cwater-blue"
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-semibold">
                            {language === "ar" ? item.labelAr : item.label}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-cwater-blue" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Facility Profile */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h3 className="text-lg font-display font-bold text-slate-900">
                    {language === "ar" ? "بيانات المنشأة والقطاع الصناعي:" : "Facility Sector & Geographic Profile:"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "القطاع الصناعي" : "Industry Sector"}
                      </label>
                      <select
                        value={facilityIndustry}
                        onChange={(e) => setFacilityIndustry(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue font-mono font-medium"
                      >
                        <option value="Manufacturing">Manufacturing & Heavy Industry</option>
                        <option value="Food & Beverage">Food & Beverage Processing</option>
                        <option value="Hospitality">Hotels & Commercial Real Estate</option>
                        <option value="Healthcare">Hospitals & Pharmaceuticals</option>
                        <option value="Oil & Gas">Oil, Gas & Petrochemicals</option>
                        <option value="Power">Power Generation & Utilities</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "موقع المنشأة / المحافظة في مصر" : "Facility Location / Industrial Zone"}
                      </label>
                      <input
                        type="text"
                        value={facilityLocation}
                        onChange={(e) => setFacilityLocation(e.target.value)}
                        placeholder="e.g. 10th of Ramadan / 6th of October / Alexandria / Suez"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Current Treatment Baseline */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h3 className="text-lg font-display font-bold text-slate-900">
                    {language === "ar" ? "كيف تتم معالجة المنظومة حالياً؟" : "Current Operating Baseline:"}
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Manual chemical dosing with standard off-the-shelf chemicals",
                      "Generic timer-based dosing pumps without sensors",
                      "Automated controller installed but sensors out of calibration",
                      "No physical filtration currently upstream",
                      "Brand new facility under design / turnkey skid needed",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCurrentTreatment(item)}
                        className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                          currentTreatment === item
                            ? "bg-blue-50 border-cwater-blue text-cwater-blue font-bold shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50 hover:border-cwater-blue"
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-semibold">{item}</span>
                        {currentTreatment === item && <CheckCircle2 className="w-4 h-4 text-cwater-blue" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Goals & Timeline */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h3 className="text-lg font-display font-bold text-slate-900">
                    {language === "ar" ? "الهدف الرئيسي والجدول الزمني المستهدف:" : "Primary Goal & Required Timeline:"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "الهدف التشغيلي الأهم" : "Key Project Goal"}
                      </label>
                      <select
                        value={automationGoal}
                        onChange={(e) => setAutomationGoal(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue font-mono font-medium"
                      >
                        <option value="Stop Corrosion & Scaling">Stop Corrosion & Scaling</option>
                        <option value="Reduce Water & Chemical Spend">Reduce Water & Chemical Spend</option>
                        <option value="Full IoT Telemetry & Auto-Dosing">Full IoT Telemetry & Auto-Dosing</option>
                        <option value="Automatic Self-Cleaning Filtration">Automatic Self-Cleaning Filtration</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "الجدول الزمني المطلوب" : "Project Timeline"}
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue font-mono font-medium"
                      >
                        <option value="Immediate (Within 1-2 weeks)">Immediate (Within 1-2 weeks)</option>
                        <option value="1 Month">Within 1 Month</option>
                        <option value="Planned Annual Turnaround">Planned Annual Turnaround</option>
                        <option value="Budgeting for Next Quarter">Budgeting for Next Quarter</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Contact & Water Analysis Attachment UI */}
              {currentStep === 6 && (
                <form onSubmit={handleFinalSubmit} className="space-y-5 animate-in fade-in duration-300">
                  <h3 className="text-lg font-display font-bold text-slate-900">
                    {language === "ar" ? "بيانات الاتصال وملاحظات فحص المياه:" : "Engineering Contact & Water Lab Data:"}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "الاسم بالكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Eng. Mohamed..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "اسم الشركة / المنشأة *" : "Company Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Industrial Facility..."
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
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="engineer@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-medium">
                        {language === "ar" ? "رقم الهاتف / واتساب *" : "Phone Number *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+20 11X XXX XXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Water Analysis Note / Attachment prompt */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-medium">
                      {language === "ar" ? "ملاحظات جودة المياه أو تقرير التحليل" : "Water Analysis Lab Parameters (TDS, Hardness, Silica, pH, Iron):"}
                    </label>
                    <textarea
                      rows={3}
                      value={waterAnalysisNote}
                      onChange={(e) => setWaterAnalysisNote(e.target.value)}
                      placeholder={language === "ar" ? "أدخل قراءات الـ TDS، العكارة، القلوية أو أي معايير مخبرية متاحة..." : "Paste your raw water TDS, conductivity, hardness, silica, or operational volumes..."}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white font-bold text-sm shadow-lg shadow-cwater-blue/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>{language === "ar" ? "إرسال ملف التشخيص وحجز موعد المعاينة" : "Submit Diagnostic & Book Engineering Review"}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                  </button>
                </form>
              )}

              {/* Wizard Navigation Buttons */}
              {currentStep < 6 && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="py-2.5 px-5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-cwater-blue flex items-center gap-1.5 transition-all"
                    >
                      <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                      <span>{language === "ar" ? "السابق" : "Previous Step"}</span>
                    </button>
                  ) : <div />}

                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="py-2.5 px-6 rounded-xl bg-cwater-blue hover:bg-cwater-sky text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>{language === "ar" ? "التالي" : "Continue to Next Step"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Submitted Completion State */}
          {submitted && (
            <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">
                {language === "ar" ? "تم إرسال بيانات التشخيص بنجاح!" : "Diagnostic Submitted Successfully!"}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                {language === "ar"
                  ? "يقوم الفريق الهندسي لـ C-Water بمراجعة معايير منشأتك لتجهيز التقرير الفني ومطابقته بأحدث تقنيات Walchem وTIMEX وKurita."
                  : "Our senior water treatment engineering team has logged your operational baseline. We will prepare your initial sizing review and contact you within 24 hours."}
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  href="/"
                  className="py-2.5 px-6 rounded-xl bg-slate-50 border border-slate-200 text-xs text-cwater-blue hover:bg-cwater-blue hover:text-white transition-all font-mono font-bold"
                >
                  {language === "ar" ? "العودة للرئيسية" : "Return to Homepage"}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
