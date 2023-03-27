import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith, throwError } from 'rxjs';
import { DataState } from 'src/app/enum/data-state';
import { AppState } from 'src/app/interface/app-state';
import { Brand } from 'src/app/interface/brand';
import { ResponseBrand } from 'src/app/interface/response-brand';
import { BrandServiceService } from 'src/app/service/brand-service.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent  implements OnInit{
  // brands: {id: number,
  //   brandName: string,
  //   slug: string,
  //   isActive: boolean,
  //   createdAt: Date,
  //   updatedAt: Date }[] | undefined;
  brands: Brand[] = [];
  appState$: Observable<AppState<ResponseBrand>> | undefined;
  constructor(private builder : FormBuilder, private router: Router, private service: BrandServiceService){}
  ngOnInit(): void {

    this.service.getBrand().subscribe(
      (response) => {
        this.brands = response.data.brands as Brand[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    

    

    // this.service.getBrand().pipe(
    //   catchError((error: HttpErrorResponse) => {
    //   alert(error.message);
    //   return throwError(error);
    // })).subscribe((response) => {
    //   var v = response.data['brands'];
    //   this.brands.push(v);
    //   for(var b of this.brands){
    //     console.log("=======>"+b);
    //   }
      
    //   // for(var value of response.data['brand']){
    //   //   console.log("---->"+value);
    //   // }
    //   console.log(v);

      
    //   });
    //   this.brands.push(response.data['brand'] as Brand);
    //   var v = JSON.stringify(response.data['brand'])
    //   for(var w of this.brands){
    //     console.log("------"+w);
    //   }
    //   response.data.brand;
    //   console.log("******************");
    //   // console.log(response.data?[0]);
    //   console.log("===>"+typeof response.data['brand']);


    // });

    // this.appState$ = this.service.brands$
    //   .pipe(
    //     map(response => {
    //       // this.notifier.onDefault(response.message);
    //       // this.dataSubject.next(response);
    //       return { dataState: DataState.LOADED_STATE, appData: { ...response, data: { servers: response.data.servers.reverse() } } }
    //     }),
    //     startWith(),
    //     catchError((error: string) => {
    //       // this.notifier.onError(error);
    //       return of({ dataState: DataState.ERROR_STATE, error });
    //     })
    //   );
  }

  deletedBrand(id: number){
    console.log(id)
    this.service.deletedBrand(id).subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
