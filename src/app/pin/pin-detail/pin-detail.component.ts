import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-pin-detail',
  templateUrl: './pin-detail.component.html',
  styleUrls: ['./pin-detail.component.scss']
})
export class PinDetailComponent implements OnInit {
  pinDetailForm!: FormGroup;
  collaborators = [];
  pinData: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form with fields and validations
    this.pinDetailForm = this.fb.group({
      title: ['', Validators.required],
      image: [null, Validators.required],
      collaborators: [[], Validators.required],
      privacy: ['public', Validators.required]
    });

    const existingCustomerData: any = localStorage.getItem('customerData');
    this.collaborators = JSON.parse(existingCustomerData).map((customer: any) => customer.name);
  }

  // Method to handle form submission
  onSubmit(): void {
    const existingPinData: any = localStorage.getItem('pinData');
    if (existingPinData) {
      this.pinData = JSON.parse(existingPinData);
    }
    
    this.pinData.push(this.pinDetailForm.value);
    localStorage.setItem('pinData', JSON.stringify(this.pinData));

    this.pinDetailForm.reset();
  }

  // Method to handle image drag-and-drop
  onImageDrop(event: any): void {
    const files = event?.dataTransfer?.files;
    
    if (files && files.length > 0) {
      this.pinDetailForm.patchValue({
        image: files[0]
      });
    }
  }

  // Method to handle file input change
  onFileChange(event: any): void {
    const file = event.target.files[0];
    
    if (file) {
      this.pinDetailForm.patchValue({
        image: file
      });
    }
  }
}
