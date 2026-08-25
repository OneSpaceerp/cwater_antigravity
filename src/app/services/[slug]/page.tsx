import { servicesData } from "@/data/services";
import { ServiceDetailClient } from "./ServiceDetailClient";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}
