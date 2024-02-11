"use client";

import { routes } from "@/routes/routes";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
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
            {route.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
