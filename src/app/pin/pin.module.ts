import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinDetailComponent } from './pin-detail/pin-detail.component';
import { PinRoutingModule } from './pin-routing.module';
import { PinService } from './services/pin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxSelectModule } from 'ngx-select-ex';
// import { CustomerDetailComponent } from '../customer/customer-detail/customer-detail.component';
// import { ModalComponent } from '../shared/modal/modal.component';



@NgModule({
  declarations: [
    PinListComponent,
    PinDetailComponent,
    // ModalComponent
  ],
  imports: [
    CommonModule,
    PinRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxSelectModule
  ],
  // entryComponents: [
  //   CustomerDetailComponent,
  //   PinDetailComponent
  // ],
  providers: [PinService]
})

export class PinModule { }
