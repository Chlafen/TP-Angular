import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { ProductModel } from '../../models/product.model';
import { ProductRepository } from '../../repositories/product.repository';

export class GetAllProducts implements UseCase<void, ProductModel[]> {

    constructor(private productRepository: ProductRepository) { }

    execute(): Observable<ProductModel[]> {
        return this.productRepository.findAll();
    }
}
