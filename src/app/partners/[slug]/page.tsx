import { partnersData } from "@/data/partners";
import { PartnerDetailClient } from "./PartnerDetailClient";

export async function generateStaticParams() {
  return partnersData.map((part) => ({
    slug: part.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PartnerPage({ params }: PageProps) {
  const { slug } = await params;
  return <PartnerDetailClient slug={slug} />;
}
