export interface IEntry {
  id: string;
  tags: any[];
  type: "blank" | "Portfolio" | "Product";
  name: string;
  image: string;
}

export interface IPortfolioEntry extends IEntry {
  tags: EPortfolioTag[];
  subtitle: string;
}

export interface IProductEntry extends IEntry {
  sku: string;
  description: string;
  tags: EShopTag[];
}

export enum EPortfolioTag {
  design = "Diseño",
  stamp = "Estampación",
  illustration = "Ilustración",
}

export enum EShopTag {
  pins = "Broche",
  print = "Lámina",
}
