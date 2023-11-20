import { ProductEntity } from "./product.entity"

export interface ProductPageEntity {
    products: ProductEntity[]
    total: number
    skip: number
    limit: number
}