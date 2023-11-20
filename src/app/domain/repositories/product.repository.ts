import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
export abstract class ProductRepository {
    abstract find(skip:number,limit:number): Observable<ProductModel[]>;
    abstract findAll(): Observable<ProductModel[]>;
}
