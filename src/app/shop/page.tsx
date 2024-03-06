"use client";

import Gallery, { EColumnSizes } from "@/components/Gallery";
import ShopItem from "@/components/ShopItem";
import { Products } from "@/data/products";
import { EShopTag } from "@/data/types";

export default function Page() {
  return (
    <Gallery
      items={Products}
      itemComponent={<ShopItem />}
      tags={EShopTag}
      size={EColumnSizes.small}
    />
  );
}
