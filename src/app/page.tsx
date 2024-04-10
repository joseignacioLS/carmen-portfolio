"use client";

import Gallery, { EColumnSizes } from "@/components/Gallery";
import GalleryItem from "@/components/GalleryItem";
import { EPortfolioTag } from "@/data/types";
import { PortfolioEntries } from "@/data/work";

export default function Home() {
  return (
    <Gallery
      items={PortfolioEntries}
      tags={EPortfolioTag}
      size={EColumnSizes.regular}
    />
  );
}
