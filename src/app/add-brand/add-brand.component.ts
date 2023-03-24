import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, startWith, throwError } from 'rxjs';
import { DataState } from '../enum/data-state';
import { AppState } from '../interface/app-state';
import { Brand } from '../interface/brand';
import { ResponseBrand } from '../interface/response-brand';
import { BrandServiceService } from '../service/brand-service.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  checked = true;
  
  constructor(private builder : FormBuilder, private router: Router, private service: BrandServiceService){}
  ngOnInit(): void {
    this.service.getBrand().pipe(
      catchError((error: HttpErrorResponse) => {
      alert(error.message);
      return throwError(error);
    })).subscribe((response: ResponseBrand) => {
      console.log(response.data);
      console.log(response.message);
    });

  }

  registerform = this.builder.group({
    brandName: this.builder.control('', Validators.required),
    slug : this.builder.control('', Validators.required),
    createdAt: this.builder.control('', Validators.required),
    checked: this.builder.control(''),
  });
  

  preprocess(){
    
    if (this.registerform.valid){
      this.service.addBrand(this.registerform.value as Brand).pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      ).subscribe((response: Response) => {
        // if(response instanceof Response){
        //   alert();
        // }
        
        var d = JSON.parse(JSON.stringify(response));

        alert("Insert success!" +  d['message']);
        
        // this.router.navigate(['login'])
        // addForm.reset();
      });

     

    }else{

    }
  }
}
