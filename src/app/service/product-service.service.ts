import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public addProduct(dto: FormData): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/v1/users/product`, dto);
  }
  
}
