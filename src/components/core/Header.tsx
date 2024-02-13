"use client";

import { routes } from "@/routes/routes";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@/hooks/localStorage";
import { useEffect } from "react";

const languages = ["es", "en"];

const Header = () => {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const { setValue: setStoredLng } = useLocalStorage("lng");

  const handleLanguageChange = (e: any) => {
    setStoredLng({ value: e.target.value });
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.language}>
        <select value={i18n.language} onChange={handleLanguageChange}>
          {languages.map((l) => (
            <option key={l} value={l}>
              {t(l)}
            </option>
          ))}
        </select>
      </div>
      <a href="/" className={styles.logo}>
        <img src="/carmenbonita.png" />
      </a>
      <nav className={styles.navbar}>
        {routes.map((route) => (
          <a
            id={route.id}
            key={route.id}
            href={route.href}
            className={`${styles.tab} ${
              pathname === route.href ? styles.selectedTab : ""
            }`}
          >
            {t(route.title)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
