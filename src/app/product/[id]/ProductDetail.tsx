"use client";

import { useParams } from "next/navigation";
import styles from "./ProductDetail.module.scss";
import { Products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const info = Products.find((entry) => entry.id === id);
  if (info === undefined) return <>Not Found</>;
  return (
    <div>
      <h1 className={styles.title}>
        <span style={{ viewTransitionName: `title-${info.id}` }}>
          {info.name}
        </span>
      </h1>
      <img className={styles.mainImage} src={info.image} />
    </div>
  );
};

export default ProductDetail;
