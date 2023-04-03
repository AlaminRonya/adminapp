import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestTaxClassesDTO } from '../interface/request-tax-classes-dto';

@Injectable({
  providedIn: 'root'
})
export class TaxClassServiceService {

  private readonly apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public addTaxClass(dto: RequestTaxClassesDTO): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/v1/users/taxClasses`, dto);
  }
}
