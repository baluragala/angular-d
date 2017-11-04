import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:pname', component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductListItemComponent
  ],
  providers:[ProductService]
})
export class ProductModule { }
