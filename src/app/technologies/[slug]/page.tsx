import { technologiesData } from "@/data/technologies";
import { TechDetailClient } from "./TechDetailClient";

export async function generateStaticParams() {
  return technologiesData.map((tech) => ({
    slug: tech.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TechnologyPage({ params }: PageProps) {
  const { slug } = await params;
  return <TechDetailClient slug={slug} />;
}
