"use client";

import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { SystemExplorer } from "@/components/home/SystemExplorer";
import { DashboardDemo } from "@/components/home/DashboardDemo";
import { PartnerEcosystem } from "@/components/home/PartnerEcosystem";
import { ValueMetrics } from "@/components/home/ValueMetrics";
import { IndustriesRail } from "@/components/home/IndustriesRail";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { KnowledgePreview } from "@/components/home/KnowledgePreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 01: Hero with Animated Flow Stream & Quick Pulse */}
      <HeroSection />

      {/* 02: Interconnected Problem Section */}
      <ProblemSection />

      {/* 03: 6-Step C-Water Operating Model */}
      <ApproachSection />

      {/* 04: Solution Hub Preview */}
      <SolutionsPreview />

      {/* 05: Signature Interactive System Explorer */}
      <SystemExplorer />

      {/* 06: Live Digital Twin Telemetry & Waveform Demo */}
      <DashboardDemo />

      {/* 07: Global Partner Ecosystem (Walchem, TIMEX, Kurita) */}
      <PartnerEcosystem />

      {/* 08: Verified Outcomes & Metrics */}
      <ValueMetrics />

      {/* 09: Industry Solutions Rail */}
      <IndustriesRail />

      {/* 10: Real-World Case Studies */}
      <CaseStudiesSection />

      {/* 11: Engineering Knowledge Articles */}
      <KnowledgePreview />

      {/* 12: High-Conversion Closing Callout */}
      <FinalCTA />
    </div>
  );
}
