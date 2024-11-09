import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailComponent } from 'src/app/customer/customer-detail/customer-detail.component';
import { PinDetailComponent } from '../pin-detail/pin-detail.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent implements OnInit, AfterViewInit {
  // @ViewChild('modal') modal!: ModalComponent;

  pins = [{
    title: '',
    image: '',
    collaborators: [],
    privacy: ''
  }];

  moduleName: string = '';
  showModal = false;  // Flag to control modal visibility

  constructor(private router: Router) { }

  ngOnInit(): void {
    const existingPinData = localStorage.getItem('pinData');
    if (existingPinData) {
      this.pins = JSON.parse(existingPinData);
    }
  }

  ngAfterViewInit() {
    // Ensure modal is available after view initialization
    // if (!this.modal) {
    //   console.error('Modal reference is not available!');
    // }
  }

  // Method to open the modal
  openModal(val: string) {
    this.showModal = true;

    let url = val + '/add';
    this.router.navigate([url]);

    // if (this.modal) {
    //   console.log('Modal opening..');
    //   // Open the Customer or Pin Component dynamically inside the shared modal
    //   if (val === 'customers') {
    //     this.modal.open(CustomerDetailComponent);
    //   }
    //   if (val === 'pins') {
    //     this.modal.open(PinDetailComponent);
    //   }
    // }
  }

  // Method to close the modal
  // closeModal() {
  //   this.showModal = false;
  // }
}
