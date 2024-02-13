export interface IEntry {
  id: string;
  tags: any[];
}

export interface IPortfolioEntry extends IEntry {
  title: string;
  subtitle: string;
  mini: string;
  tags: EPortfolioTag[]
}

export interface IProduct extends IEntry {
  sku: string;
  name: string;
  description: string;
  image: string;
  tags: EShopTag[];
}

export enum EPortfolioTag {
  design = "design",
  stamp = "stamp",
  illustration = "illustration"
}

export enum EShopTag {
  pins = "pin",
  print = "print",
}

