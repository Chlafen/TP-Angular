import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, map, tap } from 'rxjs';
import { ProductModel } from 'src/app/domain/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  providers: [MessageService],
})
export class ProductsPageComponent {
  products$: Observable<ProductModel[]> = this.productService.products$;
  buttonDisabled: boolean = false;

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  onNoMoreProducts(){
    this.buttonDisabled = true;
    this.messageService.add({
      severity: 'info',
      summary: 'No more products',
      detail: 'There are no more products to load',
      key: 'br'
    });
  }

  loadMore(): void {
    this.productService.loadMore().pipe(
      tap(
        (isNoMoreProducts) => isNoMoreProducts&&this.onNoMoreProducts(),
      )
    ).subscribe();
  }
}
