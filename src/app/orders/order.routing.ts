import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { OrderItemComponent } from './order-item/order-item.component';

const route: Routes = [
    { path: '', component: OrderItemComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class OrderItemRouting { }
