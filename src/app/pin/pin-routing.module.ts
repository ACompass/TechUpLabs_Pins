import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinDetailComponent } from './pin-detail/pin-detail.component';


const routes: Routes = [
  { path: '', component: PinListComponent },
  { path: ':id', component: PinDetailComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)], // Use forChild for feature modules
  exports: [RouterModule]
})

export class PinRoutingModule { }
