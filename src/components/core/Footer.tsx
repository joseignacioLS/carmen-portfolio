"use client";

import { rrssData } from "../../data/rrss";
import styles from "./Footer.module.scss";

const Footer = () => {
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
