"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  MessageSquare,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  Wrench,
  FileText,
} from "lucide-react";

type ContactTab = "consultation" | "sales" | "support";

export default function ContactPage() {
  const { language, isRTL, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ContactTab>("consultation");
  const [submitted, setSubmitted] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [systemType, setSystemType] = useState("Cooling Tower");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-28 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "تواصل مع مهندسينا" : "Direct Engineering Channel"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {language === "ar" ? "ابدأ بالتحدث مع مهندس متخصص." : "Talk Directly to a Water Treatment Engineer."}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === "ar"
              ? "سواء كنت تواجه خللاً تشغيلياً عاجلاً، أو تخطط لبناء محطة جديدة، أو ترغب في تطوير برامج الحقن والترشيح، فريق C-Water جاهز لدعمك فوراً."
              : "Whether troubleshooting an active operational issue or planning a new water treatment installation, our Cairo engineering team is ready to assist."}
          </p>
        </div>

        {/* 3 Pathway Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-bold">
            <button
              onClick={() => setActiveTab("consultation")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === "consultation"
                  ? "bg-cwater-blue text-white shadow-md"
                  : "text-slate-600 hover:text-cwater-blue"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{language === "ar" ? "استشارة هندسية" : "Engineering Consultation"}</span>
            </button>

            <button
              onClick={() => setActiveTab("sales")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === "sales"
                  ? "bg-cwater-blue text-white shadow-md"
                  : "text-slate-600 hover:text-cwater-blue"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{language === "ar" ? "طلب عرض سعر ومعدات" : "RFQ & Equipment Sales"}</span>
            </button>

            <button
              onClick={() => setActiveTab("support")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === "support"
                  ? "bg-cwater-blue text-white shadow-md"
                  : "text-slate-600 hover:text-cwater-blue"
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>{language === "ar" ? "الدعم الميداني والصيانة" : "Field Support & Spares"}</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid: Form + Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  {language === "ar" ? "تم استلام رسالتك بنجاح!" : "Request Received Successfully!"}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                  {language === "ar"
                    ? "شكراً لتواصلك مع C-Water. سيقوم أحد كبار مهندسينا بمراجعة تفاصيل منشأتك والتواصل معك خلال ساعات العمل."
                    : "Thank you for reaching out to C-Water. A senior water treatment engineer will review your inquiry and contact you shortly."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 py-2 px-6 rounded-xl bg-slate-50 border border-slate-200 text-xs text-cwater-blue hover:bg-cwater-blue hover:text-white transition-all font-mono font-bold"
                >
                  {language === "ar" ? "إرسال استفسار آخر" : "Submit Another Inquiry"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                  {activeTab === "consultation"
                    ? language === "ar"
                      ? "طلب استشارة هندسية ومعاينة موقع"
                      : "Schedule Technical Assessment"
                    : activeTab === "sales"
                    ? language === "ar"
                      ? "طلب عرض سعر للمعدات والكيماويات"
                      : "Equipment & Chemical RFQ"
                    : language === "ar"
                    ? "طلب دعم فني وصيانة طارئة"
                    : "Technical Support & Service Request"}
                </h3>

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
                      placeholder={language === "ar" ? "المهندس / ..." : "e.g. John Doe"}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-medium">
                      {language === "ar" ? "اسم المنشأة / المصنع *" : "Company / Facility *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={language === "ar" ? "الشركة الصناعية..." : "e.g. Acme Industrial"}
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
                      placeholder="engineer@company.com"
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
                    {language === "ar" ? "نوع المنظومة المائية المعنية" : "Water System Category"}
                  </label>
                  <select
                    value={systemType}
                    onChange={(e) => setSystemType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue font-mono font-medium"
                  >
                    <option value="Cooling Tower">Cooling Water / Cooling Tower</option>
                    <option value="Boiler & Steam">Boiler & Steam Generation</option>
                    <option value="RO & Desalination">RO & Membrane Desalination</option>
                    <option value="Process Water">Process Water & Filtration</option>
                    <option value="Wastewater">Industrial Wastewater & DAF</option>
                    <option value="Controllers & Dosing">Walchem Controllers & Dosing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-medium">
                    {language === "ar" ? "تفاصيل التحدي أو المتطلبات *" : "Operational Challenge or Requirements *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === "ar"
                        ? "يرجى ذكر مواصفات المياه، المشاكل الملاحظة (ترسبات، تآكل، عكارة)، أو رقم الموديل المطلوب..."
                        : "Describe your current water parameters, observed issues (scaling, corrosion, biofouling), or equipment model..."
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-cwater-blue focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cwater-blue to-cwater-sky hover:from-cwater-sky hover:to-cwater-blue text-white font-bold text-sm shadow-lg shadow-cwater-blue/25 flex items-center justify-center gap-2 transition-all group"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === "ar" ? "إرسال الطلب للمهندس المختص" : "Submit to Technical Team"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Cairo HQ & Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-display font-bold text-slate-900 pb-3 border-b border-slate-100">
                {language === "ar" ? "المقر الرئيسي ومعلومات الاتصال" : "Cairo HQ & Technical Contact"}
              </h3>

              <div className="space-y-5 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-cwater-blue shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">
                      {language === "ar" ? "العنوان والمقر الرئيسي:" : "Headquarters Address:"}
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5 font-normal">
                      {language === "ar"
                        ? "السادس من أكتوبر، بوصلة 3، وحدة رقم I 21، مصر"
                        : "6th of October, Bosla 3, Unit No. I 21, Egypt"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">
                      {language === "ar" ? "الهاتف والدعم المباشر:" : "Direct Technical Line:"}
                    </strong>
                    <div className="text-xs text-slate-600 font-mono mt-0.5 flex flex-wrap gap-x-2">
                      <a href="tel:+201122299044" className="hover:text-cwater-blue transition-colors">
                        (+20) 112 229 9044
                      </a>
                      <span>/</span>
                      <a href="tel:+201117711444" className="hover:text-cwater-blue transition-colors">
                        (+20) 111 771 1444
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-cwater-blue shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">
                      {language === "ar" ? "البريد الإلكتروني الهندسي:" : "Engineering Inquiries:"}
                    </strong>
                    <p className="text-xs text-slate-600 font-mono mt-0.5">
                      info@cw-eg.com / engineering@cw-eg.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">
                      {language === "ar" ? "ساعات العمل الرسمية:" : "Working Hours:"}
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5 font-normal">
                      {language === "ar"
                        ? "الأحد - الخميس: ٨:٣٠ ص - ٥:٠٠ م (دعم الطوارئ ٢٤/٧)"
                        : "Sun - Thu: 8:30 AM - 5:00 PM (24/7 Field Emergency Hotline)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Field Response Box */}
            <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-200 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cwater-blue font-bold block">
                {language === "ar" ? "استجابة الطوارئ الصناعية" : "Rapid Industrial Dispatch"}
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {language === "ar"
                  ? "فرق الصيانة والمعايرة الميدانية لـ C-Water مزودة بأجهزة القياس المتنقلة وقطع الغيار الأصلية لتلبية حالات الطوارئ في المصانع على مدار الساعة."
                  : "C-Water field engineering teams maintain mobile diagnostic instrumentation and critical spares ready for immediate on-site response."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
