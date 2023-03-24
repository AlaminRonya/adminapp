import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../interface/brand';
import { ResponseBrand } from '../interface/response-brand';

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



  brands$ = <Observable<ResponseBrand>>
    this.http.get<ResponseBrand>(`${this.apiServerUrl}/api/v1/users/brands/all`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occurred - Error code: ${error.status}`);
  }

  public getBrand(): Observable<ResponseBrand> {
    
    // console.log("dhhd=>"+dto.email);
    return this.http.get<ResponseBrand>(`${this.apiServerUrl}/api/v1/users/brands/all`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

}
