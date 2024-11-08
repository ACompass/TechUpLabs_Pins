import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinDetailComponent } from './pin-detail/pin-detail.component';
import { PinRoutingModule } from './pin-routing.module';
import { PinService } from './services/pin.service';



@NgModule({
  declarations: [
    PinListComponent,
    PinDetailComponent
  ],
  imports: [
    CommonModule,
    PinRoutingModule
  ],
  providers: [PinService]
})

export class PinModule { }
