import { PortfolioEntries } from "../data/work";
import GalleryItem from "./GalleryItem";
import styles from "./Gallery.module.scss";

type TProps = {
  labels?: string[];
};

const Gallery = ({ labels }: TProps) => {
  return (
    <div className={styles.gallery}>
      {PortfolioEntries.filter((entry) =>
        entry.labels.some((label) => !labels || labels.includes(label))
      ).map((entry) => {
        return <GalleryItem key={entry.id} entry={entry} />;
      })}
    </div>
  );
};

export default Gallery;
