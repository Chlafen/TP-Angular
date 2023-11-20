import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT_PRODUCT } from 'src/app/app.config';
import { Injectable } from '@angular/core';
import { ProductRepository } from 'src/app/domain/repositories/product.repository';
import { ProductModel } from 'src/app/domain/models/product.model';
import { ProductImplementationRepositoryMapper } from './mappers/product-repository.mapper';
import { ProductPageEntity } from './entities/product-list.entity';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryHttpImpl extends ProductRepository {
  productMapper = new ProductImplementationRepositoryMapper();
  uri = 'products';

  constructor(private http: HttpClient) {
    super();
  }

  override find(skip: number, limit: number): Observable<ProductModel[]> {
    let url = ENDPOINT_PRODUCT + this.uri + `?skip=${skip}&limit=${limit}`;
    return this.http.get<ProductPageEntity>(url).pipe(
      map((data:ProductPageEntity) => {
        return data.products.map((product) => this.productMapper.mapFrom(product));
      })
    );
  }
  override findAll(): Observable<ProductModel[]> {
    let url = ENDPOINT_PRODUCT + this.uri + `?skip=0&limit=1000`;
    return this.http.get<ProductPageEntity>(url).pipe(
      map((data:ProductPageEntity) => {
        return data.products.map((product) => this.productMapper.mapFrom(product));
      })
    );
  }
}
