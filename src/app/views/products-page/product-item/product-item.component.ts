import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/domain/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product!: ProductModel;
  discountedPrice: number = 0;
  ngOnInit(){
    let discountedPrice = this.product.price - (this.product.price * this.product.discountPercentage / 100);
    // get only the first two decimal places 
    discountedPrice = Math.round(discountedPrice * 100)
    discountedPrice = discountedPrice / 100;    
    this.discountedPrice = discountedPrice;
  }
}
