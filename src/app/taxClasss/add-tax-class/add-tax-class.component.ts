import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { RequestTaxClassesDTO } from 'src/app/interface/request-tax-classes-dto';
import { TaxClassesDTO } from 'src/app/interface/tax-classes-dto';
import { TaxClassServiceService } from 'src/app/service/tax-class-service.service';

@Component({
  selector: 'app-add-tax-class',
  templateUrl: './add-tax-class.component.html',
  styleUrls: ['./add-tax-class.component.css']
})
export class AddTaxClassComponent implements OnInit {
  taxClasses: TaxClassesDTO[] = [];
  constructor(private builder : FormBuilder, private router: Router, private taxClassServiceService: TaxClassServiceService){}
  ngOnInit(): void {
    this.taxClassServiceService.getAllTaxClass().subscribe(
      (response) => {
        this.taxClasses.splice(0);

        this.taxClasses = response.data.taxClasses as TaxClassesDTO[];
        for(var v of this.taxClasses){
          console.log("===>"+v.basedOn);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  registerform = this.builder.group({
    basedOn: this.builder.control('', Validators.required),
  });
  

  preprocess(){
    if (this.registerform.valid){
      var dto = this.registerform.value as RequestTaxClassesDTO;
      console.log("dto==>"+dto.basedOn);
      this.taxClassServiceService.addTaxClass(dto).pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      ).subscribe((response: Response) => {
        var d = JSON.parse(JSON.stringify(response));
        alert("Insert success!" +  d['message']);
      });

    }else{

    }

  }

}
