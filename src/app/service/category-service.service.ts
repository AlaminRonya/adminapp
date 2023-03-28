import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestCategoryDTO } from '../interface/request-category-dto';
import { ResponseCategory } from '../interface/response-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private readonly apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public add(dto: RequestCategoryDTO): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/api/v1/users/addCategory`, dto);
  }

  public getAll(): Observable<ResponseCategory>{
    
    return this.http.get<ResponseCategory>(`${this.apiServerUrl}/api/v1/users/addCategory/all`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  public delete(slug: string): Observable<any>{
    console.log(slug);
    return this.http.delete<any>(`${this.apiServerUrl}/api/v1/users/category/${slug}`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }
  

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occurred - Error code: ${error.status}`);
  }




}
