"use client";

import Gallery, { EColumnSizes } from "@/components/Gallery";
import { Products } from "@/data/products";
import { EShopTag } from "@/data/types";

export default function Page() {
  return <Gallery items={Products} tags={EShopTag} size={EColumnSizes.small} />;
}
