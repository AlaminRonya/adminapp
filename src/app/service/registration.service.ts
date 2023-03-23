import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestUserDTO } from '../interface/request-user-dto';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private readonly apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public addEmployee(dto: RequestUserDTO): Observable<any> {
    // console.log("dhhd=>"+dto.email);
    return this.http.post<any>(`${this.apiServerUrl}/api/v1/users/register`, dto);
  }
}
