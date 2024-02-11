"use client";

import { useParams } from "next/navigation";
import { PortfolioEntries } from "../data/work";
import styles from "./Detail.module.scss";

const Detail = () => {
  const { id } = useParams();
  const info = PortfolioEntries.find((entry) => entry.id === id);
  if (info === undefined) return <>Not Found</>;
  return (
    <div>
      <h1 className={styles.title}>
        <span style={{ viewTransitionName: `title-${info.id}` }}>
          {info.title}
        </span>
      </h1>
      <img className={styles.mainImage} src={info.mini} />
    </div>
  );
};

export default Detail;
