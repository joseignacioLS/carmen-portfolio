import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.scss";
import I118nWrapper from "@/components/I118nWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carmen Bonita",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${inter.className}`}>
        <I118nWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </I118nWrapper>
      </body>
    </html>
  );
}
