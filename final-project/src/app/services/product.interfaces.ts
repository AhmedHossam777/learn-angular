export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
  images?: string[];
  tags?: string[];
  is_active?: boolean;
}

export interface ProductData {
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
  images: string[];
  tags: string[];
}

export interface ProductsResponse {
  data: IProduct[];
  page: number;
  count: number;
  total_count: number;
  has_more: boolean;
}

export interface OneProductResponse {
  success: boolean;
  data: IProduct;
}
