interface IRoute {
  id: string;
  title: string;
  href: string;
}

export const routes: IRoute[] = [
  {
    id: "portfolio",
    title: "portfolio",
    href: "/",
  },
  {
    id: "shop",
    title: "shop",
    href: "/shop",
  },
];

export default routes;
