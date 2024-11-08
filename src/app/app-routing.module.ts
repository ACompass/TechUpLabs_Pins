import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },  // Lazy load CustomerModule
  { path: 'pins', loadChildren: () => import('./pin/pin.module').then(m => m.PinModule) },  // Lazy load PinModule
  { path: '', redirectTo: '/pins', pathMatch: 'full' }, // Redirect to the pin list by default
  { path: '**', redirectTo: '/pins' }  // Wildcard route to handle invalid URLs
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
