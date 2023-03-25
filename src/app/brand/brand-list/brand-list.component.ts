import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Brand } from 'src/app/interface/brand';
import { ResponseBrand } from 'src/app/interface/response-brand';
import { BrandServiceService } from 'src/app/service/brand-service.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent  implements OnInit{
  brands: any[] = [];
  constructor(private builder : FormBuilder, private router: Router, private service: BrandServiceService){}
  ngOnInit(): void {
    this.service.getBrand().pipe(
      catchError((error: HttpErrorResponse) => {
      alert(error.message);
      return throwError(error);
    })).subscribe((response) => {
      // var value = Array(response.data['brand'][0]);
      // value.array.forEach(element => {
        
      // });
      this.brands.push(response.data['brand'] as Brand);
      var v = JSON.stringify(response.data['brand'])
      for(var w of this.brands){
        console.log("------"+w);
      }
      response.data.brand;
      console.log("******************");
      // console.log(response.data?[0]);
      console.log("===>"+typeof response.data['brand']);


    });
  }

}
