import React from "react";
import styles from "./ShowItem.module.scss";
import { IProduct } from "@/data/types";

type TProps = {
  entry?: IProduct;
};

const ShopItem = ({ entry }: TProps) => {
  if (!entry) return <></>;
  return (
    <a href={`/product/${entry.id}`} className={styles.shopItem}>
      <img
        loading="lazy"
        className={styles.img}
        src={entry.image}
        style={{ viewTransitionName: `item-image-${entry.id}` }}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>
          <span style={{ viewTransitionName: `title-${entry.id}` }}>
            {entry.name}
          </span>
        </h2>
        <span className={styles.subtitle}>{entry.description}</span>
      </div>
    </a>
  );
};

export default ShopItem;
