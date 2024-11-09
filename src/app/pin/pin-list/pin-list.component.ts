import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent implements OnInit {
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

  // Method to open the modal
  openModal(val: string) {
    this.showModal = true;

    let url = val + '/add';
    this.router.navigate([url]);
  }

  // Method to close the modal
  closeModal() {
    this.showModal = false;
  }
}
