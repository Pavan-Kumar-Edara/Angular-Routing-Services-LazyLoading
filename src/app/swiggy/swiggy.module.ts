import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiggyRoutingModule } from './swiggy-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    OrdersComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SwiggyRoutingModule
  ]
})
export class SwiggyModule { }
