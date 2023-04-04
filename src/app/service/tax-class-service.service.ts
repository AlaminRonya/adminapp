import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestTaxClassesDTO } from '../interface/request-tax-classes-dto';
import { ResponseTaxClassesDTO } from '../interface/response-tax-classes-dto';

@Injectable({
  providedIn: 'root'
})
export class TaxClassServiceService {

  private readonly apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public addTaxClass(dto: RequestTaxClassesDTO): Observable<Response> {
    console.log(dto.basedOn+'============>');
    return this.http.post<Response>(`${this.apiServerUrl}/api/v1/users/taxClasses`, dto);
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occurred - Error code: ${error.status}`);
  }

  public getAllTaxClass(): Observable<ResponseTaxClassesDTO> {
    
    // console.log("dhhd=>"+dto.email);
    return this.http.get<ResponseTaxClassesDTO>(`${this.apiServerUrl}/api/v1/users/taxClasses`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

}
