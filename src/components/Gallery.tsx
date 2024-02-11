"use client";

import { ReactElement, cloneElement, useState } from "react";
import styles from "./Gallery.module.scss";
import TagBar from "./core/TagBar";
import { EPortfolioTag, IEntry } from "@/data/types";

type TProps = {
  items: IEntry[];
  itemComponent: ReactElement;
  tags: Record<string, string>;
  size?: EColumnSizes;
};

export enum EColumnSizes {
  small = "150px",
  regular = "250px",
  big = "350px",
}

const Gallery = ({
  tags,
  itemComponent,
  items,
  size = EColumnSizes.regular,
}: TProps) => {
  const [selectedTag, setSelectedTag] = useState<EPortfolioTag | undefined>(
    undefined
  );
  const handleSelectTag = (newTag: EPortfolioTag) => {
    setSelectedTag((oldTag) => {
      return oldTag === newTag ? undefined : newTag;
    });
  };

  return (
    <div>
      <TagBar
        selectedTag={selectedTag as string}
        handleSelectTag={handleSelectTag}
        tags={tags}
      />
      <div
        className={styles.gallery}
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${size}, 1fr))`,
        }}
      >
        {items
          .filter((entry) => {
            return !selectedTag || entry.tags.includes(selectedTag);
          })
          .map((entry) => {
            return cloneElement(itemComponent, { key: entry.id, entry: entry });
          })}
      </div>
    </div>
  );
};

export default Gallery;
