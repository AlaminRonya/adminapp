import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { RequestCategoryDTO } from 'src/app/interface/request-category-dto';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  isSearchable = true;
  isActive = false;
  constructor(private builder : FormBuilder, private router: Router, private categoryService: CategoryServiceService){}

  addCategoryForm = this.builder.group({
    slug: this.builder.control('', Validators.required),
    subSlug: this.builder.control('', Validators.required),
    position: this.builder.control('', Validators.required),
    isSearchable: this.builder.control('', Validators.required),
    isActive: this.builder.control('', Validators.required),
    
  });


  preprocess(){
    
    if (this.addCategoryForm.valid){
      var dto = this.addCategoryForm.value as RequestCategoryDTO;
      this.categoryService.add(dto).pipe(
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
