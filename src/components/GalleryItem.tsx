import { TPortfolioEntry } from "../data/types";
import styles from "./GalleryItem.module.scss";

type TProps = {
  entry: TPortfolioEntry;
};

const GalleryItem = ({ entry }: TProps) => {
  return (
    <a href={`/detail/${entry.id}`} className={styles.galleryItem}>
      <img
        loading="lazy"
        className={styles.img}
        src={entry.mini}
        style={{ viewTransitionName: `item-image-${entry.id}` }}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>
          <span style={{ viewTransitionName: `title-${entry.id}` }}>
            {entry.title}
          </span>
        </h2>
        <span className={styles.subtitle}>{entry.subtitle}</span>
      </div>
    </a>
  );
};

export default GalleryItem;
