import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinDetailComponent } from './pin-detail/pin-detail.component';
import { PinRoutingModule } from './pin-routing.module';
import { PinService } from './services/pin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxSelectModule } from 'ngx-select-ex';



@NgModule({
  declarations: [
    PinListComponent,
    PinDetailComponent
  ],
  imports: [
    CommonModule,
    PinRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxSelectModule
  ],
  providers: [PinService]
})

export class PinModule { }
