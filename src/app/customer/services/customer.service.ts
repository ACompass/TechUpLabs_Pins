import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private apiUrl = 'https://api.first.org/data/v1/countries';
  private apiData = 'assets/data/countries.json';  // Path to the JSON file in assets folder

  constructor(private http: HttpClient) {}

  // Method to fetch countries data from the API / json file path
  getAllCountries(): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get<any>(this.apiData);
  }

  // Fetch countries based on selected region
  getCountriesByRegion(region: string): Observable<any> {
    return this.http.get<any>(this.apiData).pipe(
      map(response => {
        const countries = response.data;
        return Object.values(countries).filter((country: any) => country.region === region);
      })
    );
  }
}
