import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'la-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input()
  product
  
  @Output()
  addToCartEvent: EventEmitter<number> = new EventEmitter();

  productStyle = { 'background-color': 'yellow' }

  inCart: boolean = false;

  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

  addToCart(product) {
    console.log('Product Added To Cart :' + product.name);
    this.inCart = true;
    this.addToCartEvent.emit(1)
  }

  removeFromCart() {
    this.inCart = false;
    this.addToCartEvent.emit(-1)
  }

}
