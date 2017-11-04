import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  products = [
    { name: 'iphone', price: 100, stock: 10 },
    { name: 'galaxy', price: 80, stock: 10 },
    { name: 'pixel', price: 75, stock: 10 },
    { name: 'oppo', price: 65, stock: 10 },
  ]
  constructor() { }

  getProducts() {
    return this.products;
  }

}
