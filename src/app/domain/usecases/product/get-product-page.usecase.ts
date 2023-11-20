import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { ProductModel } from '../../models/product.model';
import { ProductRepository } from '../../repositories/product.repository';

interface GetProductPageParams {
  pageNumber: number;
  pageLength: number;
}

export class GetProductPage
  implements UseCase<GetProductPageParams, ProductModel[]>
{
  constructor(private productRepository: ProductRepository) {}

  execute(params: GetProductPageParams): Observable<ProductModel[]> {
    let skip = params.pageNumber * params.pageLength;
    return this.productRepository.find(skip, params.pageLength);
  }
}
