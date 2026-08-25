import { solutionsData } from "@/data/solutions";
import { SolutionDetailClient } from "./SolutionDetailClient";

export async function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  return <SolutionDetailClient slug={slug} />;
}
