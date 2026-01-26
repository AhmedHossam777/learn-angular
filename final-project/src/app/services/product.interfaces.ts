export interface IProduct {
  id: string,
  title: string,
  price: number,
  description: string
}

export interface ProductsResponse {
  data: IProduct[]
  page: number
  count: number
  total_count: number
  has_more: boolean
}

export interface OneProductResponse {
  success: boolean,
  data: IProduct
}
