import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseProduct } from '../interface/response-product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public addProduct(dto: FormData): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/v1/users/product`, dto);
  }
  
  public getAllProduct(): Observable<ResponseProduct> {
    
    // console.log("dhhd=>"+dto.email);
    return this.http.get<ResponseProduct>(`${this.apiServerUrl}/api/v1/users/product/all`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occurred - Error code: ${error.status}`);
  }
}
