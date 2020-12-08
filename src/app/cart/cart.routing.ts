import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CartItemComponent } from './cart-item/cart-item.component';

const route: Routes = [
    { path: '', component: CartItemComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class CartItemComponentRouting { }