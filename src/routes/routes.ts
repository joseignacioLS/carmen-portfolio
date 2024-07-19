interface IRoute {
  id: string;
  title: string;
  href: string;
}

export const routes: IRoute[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    href: "/",
  },
  // {
  //   id: "shop",
  //   title: "Tienda",
  //   href: "/shop",
  // },
  // {
  //   id: "faq",
  //   title: "Preguntas Frecuentes",
  //   href: "/faq",
  // },
];

export default routes;
