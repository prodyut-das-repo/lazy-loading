import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemComponentRouting } from './cart.routing';



@NgModule({
  declarations: [CartItemComponent],
  imports: [
    CommonModule, CartItemComponentRouting
  ]
})
export class CartModule { }
