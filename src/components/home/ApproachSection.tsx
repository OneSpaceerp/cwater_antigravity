"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Compass, FlaskConical, Sliders, LineChart, RefreshCw, CheckCircle2 } from "lucide-react";

export function ApproachSection() {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      name: "Diagnose",
      nameAr: "التشخيص",
      tagline: "Understand the water, the process, and operating conditions.",
      taglineAr: "فهم عميق لطبيعة المياه، ديناميكا العمليات وظروف التشغيل الواقعية.",
      icon: Search,
      deliverables: ["Full Ion Chromatography & Mineral Analysis", "Heat Exchanger & Metallurgy Inspection", "LSI/RSI Saturation Index Modeling", "Baseline Water Mass-Balance Audit"],
      deliverablesAr: ["تحليل كروماتوغرافي أيوني وفحص معدني كامل", "فحص ومعاينة المبادلات الحرارية والأنابيب", "نمذجة مؤشرات التشبع والتوازن LSI/RSI", "تدقيق الموازنة المائية وخط الأساس للمنشأة"],
    },
    {
      number: "02",
      name: "Design",
      nameAr: "التصميم",
      tagline: "Develop the tailored treatment strategy around the actual system.",
      taglineAr: "تطوير استراتيجية المعالجة بما يلائم متطلبات المنظومة بدقة.",
      icon: Compass,
      deliverables: ["Custom Chemical Program Formulation", "Filtration Micron & Flow Sizing (TIMEX)", "Dosing & Controller Electrical Schematics (Walchem)", "Economic ROI & Payback Projections"],
      deliverablesAr: ["صياغة البرنامج الكيميائي المخصص للمنشأة", "تحديد نوعية ودقة فلاتر الشاشات والأقراص (TIMEX)", "تصميم لوحات التحكم ودوائر الإشارات (Walchem)", "حساب العائد المالي وفترة الاسترداد للمشروع"],
    },
    {
      number: "03",
      name: "Treat",
      nameAr: "المعالجة",
      tagline: "Apply the right specialty chemistry and filtration technologies.",
      taglineAr: "تطبيق الكيماويات المتخصصة وتقنيات الترشيح المناسبة بدقة.",
      icon: FlaskConical,
      deliverables: ["Eco-friendly Polymeric Scale & Corrosion Inhibitors", "Kurita Cetamine® Film-Forming Amines", "Automatic Self-Cleaning Screen Filters", "Microbiological & Legionella Disinfection"],
      deliverablesAr: ["بوليمرات صديقة للبيئة لمنع الترسيب والتآكل", "تكنولوجيا الأمينات الغشائية Kurita Cetamine®", "فلاتر شاشات وأقراص ذاتية التنظيف بدون توقف", "برامج متخصصة لمكافحة الأغشية الحيوية والليجيونيلا"],
    },
    {
      number: "04",
      name: "Control",
      nameAr: "التحكم",
      tagline: "Measure, dose, and automate critical operating parameters.",
      taglineAr: "قياس وضبط ومعايرة المتغيرات الحرجة للمنظومة آلياً.",
      icon: Sliders,
      deliverables: ["Walchem W900 Multi-Parameter Process Automation", "Flow-Proportional Precision Solenoid Pumping", "Toroidal Conductivity Continuous Blowdown", "PID-Governed Acid/Caustic pH Neutralization"],
      deliverablesAr: ["أتمتة التشغيل بوحدات Walchem W900 المتقدمة", "حقن متناسب مع تدفق المياه بمضخات رقمية", "تصريف سطحي آلي مستمر بالحساسات الحلقية", "معادلة دقيقة للـ pH بدوائر تحكم PID ذكية"],
    },
    {
      number: "05",
      name: "Monitor",
      nameAr: "المراقبة",
      tagline: "Turn operating conditions into useful, actionable intelligence.",
      taglineAr: "تحويل بيانات التشغيل إلى معلومات ورؤى هندسية قابلة للتنفيذ.",
      icon: LineChart,
      deliverables: ["24/7 Cloud IoT Telemetry & Real-Time Dashboards", "Instant Alarm Notifications via SMS/Email", "Historical Compliance Logs & Trending Analytics", "Online Corrosion Rate Telemetry (MPY)"],
      deliverablesAr: ["بوابات ربط سحابي IoT ولوحات متابعة لحظية", "تنبيهات فورية عند تجاوز الحدود عبر SMS والبريد", "سجلات تاريخية موثقة للامتثال والتقارير", "مراقبة لحظية لمعدلات تآكل المعادن (MPY)"],
    },
    {
      number: "06",
      name: "Optimize",
      nameAr: "التحسين",
      tagline: "Keep improving system performance, water recovery, and ROI over time.",
      taglineAr: "التطوير المستمر لأداء المنظومة ورفع كفاءة الاستهلاك على المدى الطويل.",
      icon: RefreshCw,
      deliverables: ["Monthly On-Site Engineering Service Visits", "Cycle of Concentration Incremental Increases", "Boiler Blowdown Reduction Auditing", "Total Cost of Operation (TCO) Minimization"],
      deliverablesAr: ["زيارات دعم هندسي دورية للموقع من خبراء C-Water", "رفع دورات التركيز تدريجياً لتقليل مياه التعويض", "تدقيق ترشيد تصريف الغلايات وتوفير الوقود", "خفض التكلفة الإجمالية للتشغيل (TCO) باستمرار"],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "منهجية C-Water الهندسية" : "The C-Water Operating Methodology"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {t("approachHeadline")}
          </h2>

          <p className="text-sm sm:text-base text-cwater-blue font-mono font-bold">
            {t("approachSub")}
          </p>
        </div>

        {/* Interactive 6-Step Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between h-24 sm:h-28 ${
                  isCurrent
                    ? "bg-blue-50 border-cwater-blue shadow-md shadow-cwater-blue/10 ring-1 ring-cwater-blue"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? "text-cwater-blue" : "text-slate-400"}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? "text-cwater-blue" : "text-slate-400"}`} />
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold ${isCurrent ? "text-slate-900" : "text-slate-600"}`}>
                    {language === "ar" ? step.nameAr : step.name}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        {(() => {
          const current = steps[activeStep]!;
          const Icon = current.icon;
          return (
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Step Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 text-cwater-blue text-xs font-mono font-bold">
                    <span>STAGE {current.number}</span>
                    <span>·</span>
                    <span>{language === "ar" ? current.nameAr : current.name}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-snug">
                    {language === "ar" ? current.taglineAr : current.tagline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {language === "ar"
                      ? "تضمن C-Water تنفيذ هذه المرحلة بأعلى درجات الانضباط الهندسي ووفقاً لأدق القياسات الميدانية، لضمان تكامل النتائج مع كافة المراحل التالية."
                      : "C-Water delivers this stage with rigorous engineering discipline and precision field analytics, ensuring seamless synergy across the entire water loop."}
                  </p>
                </div>

                {/* Right: Deliverables List */}
                <div className="lg:col-span-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cwater-blue font-bold mb-2">
                    {language === "ar" ? "المخرجات الهندسية المعتمدة" : "Engineered Deliverables & Technologies"}
                  </h4>
                  <div className="space-y-2.5">
                    {(language === "ar" ? current.deliverablesAr : current.deliverables).map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
