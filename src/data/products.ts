import { EShopTag, IProduct } from "./types";

export const Products: IProduct[] = [
  {
    id: "0",
    sku: "",
    name: "Broche Sol",
    description: "",
    image: "/images/products/pin-sun.jpg",
    tags: [EShopTag.pins]
  },
  {
    id: "1",
    sku: "",
    name: "Broche Luna",
    description: "",
    image: "/images/products/pin-moon.jpg",
    tags: [EShopTag.pins]
  },
  {
    id: "2",
    sku: "",
    name: "Lamina Ursa",
    description: "",
    image: "/images/products/ursa.jpg",
    tags: [EShopTag.paper]
  }
]