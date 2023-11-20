import { Mapper } from 'src/base/mapper';
import { ProductEntity } from '../entities/product.entity';
import { ProductModel } from 'src/app/domain/models/product.model';


export class ProductImplementationRepositoryMapper extends Mapper<ProductEntity, ProductModel> {
    override mapFrom(param: ProductEntity): ProductModel {
        return {
            id: param.id,
            title: param.title,
            description: param.description,
            price: param.price,
            discountPercentage: param.discountPercentage,
            rating: param.rating,
            stock: param.stock,
            brand: param.brand,
            category: param.category,
            thumbnail: param.thumbnail,
            images: param.images
        };
    }
    override mapTo(param: ProductModel): ProductEntity {
        return {
            id: param.id,
            title: param.title,
            description: param.description,
            price: param.price,
            discountPercentage: param.discountPercentage,
            rating: param.rating,
            stock: param.stock,
            brand: param.brand,
            category: param.category,
            thumbnail: param.thumbnail,
            images: param.images
        };
    }
}
