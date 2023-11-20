import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/domain/models/product.model';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent {
  @Input() products: ProductModel[] = [];
}
