import React from "react";
import styles from "./TagBar.module.scss";
import Button from "./Button";
import { useTranslation } from "react-i18next";

type TProps = {
  selectedTag: string;
  tags: Record<string, string>;
  handleSelectTag: (value: any) => void;
};

const TagBar = ({ selectedTag, handleSelectTag, tags }: TProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.tagBar}>
      {Object.entries(tags).map(([key, value]) => {
        return (
          <Button
            className={`${styles.tag} ${
              selectedTag === value && styles.selected
            }`}
            key={key}
            onClick={() => handleSelectTag(value)}
          >
            {t(value as string)}
          </Button>
        );
      })}
    </div>
  );
};

export default TagBar;
