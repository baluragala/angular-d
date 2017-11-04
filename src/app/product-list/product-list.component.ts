import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:[{name:string,price:number,stock:number}];
  title:string='Top Selling Products'
  header:Object = {title:'Top Selling Products'}
  cartCount : number=0;
  constructor() { }

  ngOnInit() {
    this.products = [
      {name:'iphone',price:100,stock:10},
      {name:'galaxy',price:80,stock:10},
      {name:'pixel',price:75,stock:10},
      {name:'oppo',price:65,stock:10},
      ]
  }

  getProducts(){
    return this.products;
  }

  updateCart(count){
    this.cartCount = this.cartCount+count
  }

}
