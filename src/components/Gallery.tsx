"use client";

import { useState } from "react";
import styles from "./Gallery.module.scss";
import TagBar from "./core/TagBar";
import {
  EPortfolioTag,
  IEntry,
  IPortfolioEntry,
  IProductEntry,
} from "@/data/types";
import GalleryItem from "./GalleryItem";

type TProps = {
  items: IEntry[];
  tags: Record<string, string>;
  size?: EColumnSizes;
};

interface IItem {
  id: string;
  image: string;
  title: string;
  link: string;
  subtitle: string;
}

export enum EColumnSizes {
  small = "150px",
  regular = "250px",
  big = "350px",
}

const destructureItem = (entry: IEntry): IItem => {
  if (entry.type === "Portfolio") {
    const data = entry as IPortfolioEntry;
    return {
      id: data.id,
      image: data.image,
      title: data.name,
      link: `/detail/${data.id}`,
      subtitle: data.subtitle,
    };
  } else if (entry.type === "Product") {
    const data = entry as IProductEntry;
    return {
      id: data.id,
      image: data.image,
      title: data.name,
      link: `/product/${data.id}`,
      subtitle: data.description,
    };
  }
  return {
    id: "",
    image: "",
    title: "",
    subtitle: "",
    link: "",
  };
};

const Gallery = ({ tags, items, size = EColumnSizes.regular }: TProps) => {
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
          .sort((a, b) => {
            return a.id > b.id ? -1 : 1;
          })
          .sort((a, b) => {
            const aVisible = !selectedTag || a.tags.includes(selectedTag);
            const bVisible = !selectedTag || b.tags.includes(selectedTag);
            if (aVisible && !bVisible) return -1;
            if (bVisible && !aVisible) return 1;
            return 0;
          })
          .map((entry) => {
            const data = destructureItem(entry);
            const visible = !selectedTag || entry.tags.includes(selectedTag);
            return (
              <div
                key={entry.id}
                className={`${styles.item} ${visible && styles.visible} ${
                  !visible && styles.hidden
                }`}
              >
                <GalleryItem
                  id={data.id}
                  image={data.image}
                  title={data.title}
                  subtitle={data.subtitle}
                  link={data.link}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
