import { IPortfolioEntry } from "../data/types";
import styles from "./GalleryItem.module.scss";

type TProps = {
  image: string;
  title: string;
  subtitle: string;
  id: string;
  link: string;
};

const GalleryItem = ({ image, title, subtitle, id, link }: TProps) => {
  return (
    <a href={link} className={styles.galleryItem}>
      <img loading="lazy" className={styles.img} src={image} />
      <div className={styles.info}>
        <h2 className={styles.title}>
          <span>{title}</span>
        </h2>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </a>
  );
};

export default GalleryItem;
