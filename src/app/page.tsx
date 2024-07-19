"use client";

import Gallery, { EColumnSizes } from "@/components/Gallery";
import GalleryItem from "@/components/GalleryItem";
import { EPortfolioTag } from "@/data/types";
import { PortfolioEntries } from "@/data/work";
import { Wip } from "./wip/Wip";

export default function Home() {
  return <Wip />;
  return (
    <Gallery
      items={PortfolioEntries}
      itemComponent={<GalleryItem />}
      tags={EPortfolioTag}
      size={EColumnSizes.regular}
    />
  );
}
