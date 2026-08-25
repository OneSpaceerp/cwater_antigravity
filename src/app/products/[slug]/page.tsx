import { productsData } from "@/data/products";
import { ProductDetailClient } from "./ProductDetailClient";

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
