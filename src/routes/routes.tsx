import { ReactNode } from "react";
import Gallery from "../components/Gallery";
import Detail from "../components/Detail";

type TRoute = {
  id: string;
  title: string;
  href: string;
};

export const routes: TRoute[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    href: "/",
  },
  {
    id: "shop",
    title: "Tienda",
    href: "/shop",
  },
];
