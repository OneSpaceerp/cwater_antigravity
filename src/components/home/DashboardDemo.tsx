"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Activity, AlertCircle, CheckCircle, RefreshCw, Cpu, Zap, ArrowRight, Sliders } from "lucide-react";

type PresetType = "cooling" | "boiler" | "ro";

export function DashboardDemo() {
  const { language, isRTL, t } = useLanguage();
  const [preset, setPreset] = useState<PresetType>("cooling");
  const [isAlarmActive, setIsAlarmActive] = useState(false);

  // Live oscillating telemetry state
  const [pH, setPH] = useState(7.42);
  const [conductivity, setConductivity] = useState(1850);
  const [orp, setOrp] = useState(315);
  const [flow, setFlow] = useState(120);
  const [dosing, setDosing] = useState(2.4);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const historyRef = useRef<number[]>([]);

  // Adjust parameters according to preset and alarm
  useEffect(() => {
    let basePH = 7.42;
    let baseCond = 1850;
    let baseOrp = 315;
    let baseFlow = 120;
    let baseDose = 2.4;

    if (preset === "boiler") {
      basePH = 9.2;
      baseCond = 3200;
      baseOrp = -240;
      baseFlow = 45;
      baseDose = 1.2;
    } else if (preset === "ro") {
      basePH = 6.8;
      baseCond = 380;
      baseOrp = 10;
      baseFlow = 85;
      baseDose = 3.6;
    }

    if (isAlarmActive) {
      if (preset === "cooling") {
        baseCond = 2950;
        basePH = 8.65;
        baseDose = 5.8;
      } else if (preset === "boiler") {
        baseCond = 4600;
        basePH = 8.1;
      } else {
        baseCond = 750;
        baseFlow = 62;
      }
    }

    const interval = setInterval(() => {
      // Natural subtle telemetry noise oscillation
      const noise = (Math.random() - 0.5) * 0.05;
      const condNoise = (Math.random() - 0.5) * 15;
      const orpNoise = (Math.random() - 0.5) * 4;

      setPH(Number((basePH + noise).toFixed(2)));
      setConductivity(Math.round(baseCond + condNoise));
      setOrp(Math.round(baseOrp + orpNoise));
      setFlow(Number((baseFlow + (Math.random() - 0.5) * 1.5).toFixed(1)));
      setDosing(Number((baseDose + (Math.random() - 0.5) * 0.1).toFixed(2)));

      // Add to sparkline history
      if (historyRef.current.length > 50) {
        historyRef.current.shift();
      }
      historyRef.current.push(baseCond + condNoise);
    }, 1000);

    return () => clearInterval(interval);
  }, [preset, isAlarmActive]);

  // Render Canvas Waveform
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(226, 232, 240, 0.8)";
      ctx.lineWidth = 1;
      for (let y = 10; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const data = historyRef.current;
      if (data.length < 2) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const minVal = Math.min(...data) - 50;
      const maxVal = Math.max(...data) + 50;
      const range = maxVal - minVal || 1;

      // Draw Gradient fill
      ctx.beginPath();
      data.forEach((val, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((val - minVal) / range) * (height - 20) - 10;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      if (isAlarmActive) {
        gradient.addColorStop(0, "rgba(239, 68, 68, 0.2)");
        gradient.addColorStop(1, "rgba(239, 68, 68, 0.0)");
      } else {
        gradient.addColorStop(0, "rgba(0, 140, 210, 0.2)");
        gradient.addColorStop(1, "rgba(0, 140, 210, 0.0)");
      }
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw Line
      ctx.beginPath();
      data.forEach((val, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((val - minVal) / range) * (height - 20) - 10;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = isAlarmActive ? "#EF4444" : "#008CD2";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Draw pulse dot at latest point
      const lastX = width;
      const lastVal = data[data.length - 1] ?? minVal;
      const lastY = height - ((lastVal - minVal) / range) * (height - 20) - 10;

      ctx.beginPath();
      ctx.arc(lastX - 2, lastY, 4, 0, Math.PI * 2);
      ctx.fillStyle = isAlarmActive ? "#EF4444" : "#008CD2";
      ctx.fill();
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAlarmActive, conductivity]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-cwater-blue">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === "ar" ? "محطة التوأم الرقمي والمراقبة" : "Digital Twin & Live Telemetry Demo"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {t("dashboardTitle")}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t("dashboardSubtitle")}
          </p>
        </div>

        {/* The Digital Twin Console Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Console Header */}
          <div className="p-4 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50">
            <div className="flex items-center gap-3">
              <div
                className={`w-3.5 h-3.5 rounded-full ${
                  isAlarmActive ? "bg-red-500 animate-ping" : "bg-emerald-500 animate-pulse"
                }`}
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-base text-slate-900">
                    {preset === "cooling"
                      ? t("dashboardCoolingPreset")
                      : preset === "boiler"
                      ? t("dashboardBoilerPreset")
                      : t("dashboardROPreset")}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isAlarmActive
                        ? "bg-red-100 text-red-700 border border-red-200"
                        : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    {isAlarmActive ? t("dashboardWarning") : t("dashboardHealthy")}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-500">
                  WALCHEM CONTROLLER W900 · SECURE ENCRYPTED CLOUD TELEMETRY
                </p>
              </div>
            </div>

            {/* Presets & Simulator Trigger */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-xl bg-white border border-slate-200 p-1 text-xs font-semibold text-slate-700">
                <button
                  onClick={() => {
                    setPreset("cooling");
                    setIsAlarmActive(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    preset === "cooling" ? "bg-cwater-blue text-white shadow-sm" : "hover:text-cwater-blue"
                  }`}
                >
                  {language === "ar" ? "تبريد" : "Cooling"}
                </button>
                <button
                  onClick={() => {
                    setPreset("boiler");
                    setIsAlarmActive(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    preset === "boiler" ? "bg-cwater-blue text-white shadow-sm" : "hover:text-cwater-blue"
                  }`}
                >
                  {language === "ar" ? "غلايات" : "Boiler"}
                </button>
                <button
                  onClick={() => {
                    setPreset("ro");
                    setIsAlarmActive(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    preset === "ro" ? "bg-cwater-blue text-white shadow-sm" : "hover:text-cwater-blue"
                  }`}
                >
                  {language === "ar" ? "تحلية RO" : "RO Unit"}
                </button>
              </div>

              <button
                onClick={() => setIsAlarmActive(!isAlarmActive)}
                className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all border flex items-center gap-1.5 ${
                  isAlarmActive
                    ? "bg-red-600 text-white border-red-500 animate-pulse shadow-sm"
                    : "bg-white text-slate-700 hover:text-red-600 border-slate-200 hover:border-red-300"
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{isAlarmActive ? (language === "ar" ? "إلغاء الإنذار" : "Reset Alarm") : t("dashboardSimAlarm")}</span>
              </button>
            </div>
          </div>

          {/* Telemetry Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 border-b border-slate-200">
            {/* pH */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-500 mb-1">{t("dashboardpH")}</span>
              <span
                className={`text-2xl sm:text-3xl font-display font-bold ${
                  isAlarmActive && (pH > 8.5 || pH < 6.5) ? "text-red-600" : "text-slate-900"
                }`}
              >
                {pH}
              </span>
              <span className="block text-[10px] text-slate-400 font-mono mt-1">Standard Scale</span>
            </div>

            {/* Conductivity */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-500 mb-1">{t("dashboardCond")}</span>
              <span
                className={`text-2xl sm:text-3xl font-display font-bold ${
                  isAlarmActive ? "text-red-600" : "text-cwater-blue"
                }`}
              >
                {conductivity.toLocaleString()}
              </span>
              <span className="block text-[10px] text-slate-400 font-mono mt-1">μS/cm (Toroidal)</span>
            </div>

            {/* ORP */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-500 mb-1">{t("dashboardORP")}</span>
              <span className="text-2xl sm:text-3xl font-display font-bold text-emerald-600">
                {orp > 0 ? `+${orp}` : orp}
              </span>
              <span className="block text-[10px] text-slate-400 font-mono mt-1">mV (Pt Redox)</span>
            </div>

            {/* Flow */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-500 mb-1">{t("dashboardFlow")}</span>
              <span className="text-2xl sm:text-3xl font-display font-bold text-slate-900">{flow}</span>
              <span className="block text-[10px] text-slate-400 font-mono mt-1">m³/hr (Magmeter)</span>
            </div>

            {/* Dosing */}
            <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-500 mb-1">{t("dashboardDose")}</span>
              <span className="text-2xl sm:text-3xl font-display font-bold text-sky-600">{dosing}</span>
              <span className="block text-[10px] text-slate-400 font-mono mt-1">L/hr (E-Pump)</span>
            </div>
          </div>

          {/* Real-time Waveform Canvas */}
          <div className="p-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cwater-blue" />
                <span>REAL-TIME CONDUCTIVITY / TDS DYNAMICS (μS/cm)</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-bold">1 SEC POLLING</span>
            </div>

            <div className="w-full h-36 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative">
              <canvas
                ref={canvasRef}
                width={800}
                height={150}
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          {/* Footer Disclaimer & CTA */}
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p className="text-center sm:text-left text-[11px]">
              {t("dashboardDemoDisclaimer")}
            </p>
            <Link
              href="/technologies/monitoring-control"
              className="font-bold text-cwater-blue hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>{language === "ar" ? "تعرف على وحدات تحكم Walchem" : "Learn About Walchem Controllers"}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
