import { Injectable } from '@angular/core';
import { Store } from './store';
import { ProductModel } from '../domain/models/product.model';
import { GetAllProducts } from '../domain/usecases/product/get-all-products.usecase';
import { GetProductPage } from '../domain/usecases/product/get-product-page.usecase';
import { Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  pageLength = 12;

  private store = new Store<ProductModel[]>([]);
  products$ = this.store.select((products) => products);

  constructor(
    private getAllProducts: GetAllProducts,
    private getProductPage: GetProductPage
  ) {
    this.initialize([]);
  }

  initialize(initialProds: ProductModel[]): void {
    this.getProductPage
      .execute({ pageNumber: 0, pageLength: this.pageLength })
      .pipe(
        map((products) => {
          this.store.update((_) => products);
        }),
        catchError(async (_) => this.store.update((_) => initialProds))
      )
      .subscribe();
  }

  loadMore(): Observable<boolean> {
    const oldCount = this.store.value.length;
    return this.getProductPage
      .execute({
        pageNumber: oldCount / this.pageLength,
        pageLength: this.pageLength,
      })
      .pipe(
        map((products) =>{
          if(products.length === 0){
            return true;
          }
          this.store.update((currentProducts) => [
            ...currentProducts,
            ...products,
          ])
          return false
        }),
        catchError(async (_) =>{
          this.store.update((_) => [])
          return true
        })
      )
  }

  // loadPage(pageNumber: number): void {
  //     this.getProductPage
  //     .execute({
  //         pageNumber: pageNumber,
  //         pageLength: this.pageLength,
  //     })
  //     .pipe(
  //         map((products) => this.store.update((_) => products)),
  //         catchError(async (_) => this.store.update((_) => []))
  //     ).subscribe();
  // }
}
