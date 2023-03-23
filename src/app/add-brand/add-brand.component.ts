import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Brand } from '../interface/brand';
import { BrandServiceService } from '../service/brand-service.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  checked = true;
  constructor(private builder : FormBuilder, private router: Router, private service: BrandServiceService){}

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
        alert("Insert success!");
        
        // this.router.navigate(['login'])
        // addForm.reset();
      });

    }else{

    }
  }
}
