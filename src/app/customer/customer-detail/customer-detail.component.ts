import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerForm!: FormGroup;  // The form group for the customer details form
  customerData: any[] = [];

  regions: string[] = [];
  countries: any[] = [];
  selectedRegion: string = '';

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  ngOnInit(): void {
    // Initialize the form with fields and validations
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      country: ['', Validators.required]
    });

    // Fetch all unique regions when the component is initialized
    this.customerService.getAllCountries().subscribe(
      (response) => {
        const countries = response.data;
        // Extract unique regions
        const uniqueRegions = [...new Set(Object.values(countries).map((country: any) => country.region))];
        this.regions = uniqueRegions;
      },
      (error) => {
        console.error('Error fetching regions:', error);
      }
    );
  }

  // Fetch countries when a region is selected
  onRegionSelect(): void {
    this.selectedRegion = this.customerForm.controls['region'].value;
    
    if (this.selectedRegion) {
      this.customerService.getCountriesByRegion(this.selectedRegion).subscribe(
        (countries) => {
          this.countries = countries;  // Update the countries array
        },
        (error) => {
          console.error('Error fetching countries for region:', error);
        }
      );
    }
  }

  // Submit form data and store in localstorage
  onSubmit(): void {
    const existingData: any = localStorage.getItem('customerData');
    if (existingData) {
      this.customerData = JSON.parse(existingData);
    }
    
    this.customerData.push(this.customerForm.value);
    localStorage.setItem('customerData', JSON.stringify(this.customerData));

    this.customerForm.reset();
  }
}
