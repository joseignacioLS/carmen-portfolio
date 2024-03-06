"use client";

import { useTranslation } from "react-i18next";
import { rrssData } from "../../data/rrss";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <ul className={styles.rrss}>
        {rrssData.map((item) => {
          return (
            <li key={item.title}>
              <a href={item.url} target="_blank">
                <img src={item.logo} />
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className={styles.disclaimer}>
        © {new Date().getUTCFullYear()} CarmenBonita Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
