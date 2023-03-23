import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../interface/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {
  private readonly apiServerUrl = environment.apiBaseUrl;
  


  constructor(private http: HttpClient) { }

  public addBrand(dto: Brand): Observable<Response> {
    

    // console.log("dhhd=>"+dto.email);
    return this.http.post<Response>(`${this.apiServerUrl}/api/v1/users/brands`, dto);
  }


  // public addBrand(dto: Brand) {
  //   console.log("Brand name =>"+dto.brandName);
  // }

}
