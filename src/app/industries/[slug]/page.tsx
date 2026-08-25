import { industriesData } from "@/data/industries";
import { IndustryDetailClient } from "./IndustryDetailClient";

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  return <IndustryDetailClient slug={slug} />;
}
