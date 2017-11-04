import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent implements OnInit {

  ///{name:string,price:number,stock:number}
  products:Array<any>;
  title:string='Top Selling Products'
  header:Object = {title:'Top Selling Products'}
  cartCount : number=0;
 
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  getProducts(){
    return this.products;
  }

  updateCart(count){
    this.cartCount = this.cartCount+count
  }

}
