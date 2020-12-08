import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderItemRouting } from './order.routing';



@NgModule({
  declarations: [OrderItemComponent],
  imports: [
    CommonModule,OrderItemRouting
  ]
})
export class OrdersModule { }
