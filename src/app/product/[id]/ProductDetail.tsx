"use client";

import { useParams } from "next/navigation";
import styles from "./ProductDetail.module.scss";
import { Products } from "@/data/products";
import Carousel from "@/components/Carousel";

const ProductDetail = () => {
  const { id } = useParams();
  const info = Products.find((entry) => entry.id === id);
  if (info === undefined) return <>Not Found</>;
  return (
    <div className={styles.productDetail}>
      <h1 className={styles.title}>
        <span style={{ viewTransitionName: `title-${info.id}` }}>
          {info.name}
        </span>
      </h1>
      <div className={styles.carousel}>
        <Carousel images={[info.image]} />
      </div>
    </div>
  );
};

export default ProductDetail;
