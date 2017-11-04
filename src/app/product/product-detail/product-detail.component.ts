import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'la-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productName;

  constructor(private activedRoute: ActivatedRoute) { 
    console.log(activedRoute);
    this.productName = activedRoute.snapshot.params['pname']
  }

  ngOnInit() {
  }

}
