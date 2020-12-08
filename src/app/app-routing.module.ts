import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: '', redirectTo: '', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
