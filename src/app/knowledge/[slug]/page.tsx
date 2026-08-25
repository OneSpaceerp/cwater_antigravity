import { knowledgeData } from "@/data/knowledge";
import { ArticleDetailClient } from "./ArticleDetailClient";

export async function generateStaticParams() {
  return knowledgeData.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  return <ArticleDetailClient slug={slug} />;
}
