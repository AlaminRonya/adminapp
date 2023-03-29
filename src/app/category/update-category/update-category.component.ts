import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit{
  slugName: any;
  constructor(private builder : FormBuilder, private activeRoute: ActivatedRoute, private router: Router, private categoryService: CategoryServiceService){}
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(param=>{
      console.log("update: "+param['data']);
      this.slugName = param['data'];
    });
  }

  updatedCategoryForm = this.builder.group({
    slug: this.builder.control('', Validators.required),
  });
  preprocess(){
    
    if (this.updatedCategoryForm.valid){
      var s = this.updatedCategoryForm.value.slug;
      if(s === null || s === undefined){

      }else{
        this.categoryService.update(this.slugName, s).pipe(
          catchError((error: HttpErrorResponse) => {
            alert(error.message);
            return throwError(error);
          })
        ).subscribe((response) => {
          alert("Update success!" );
          this.router.navigate(['categoryList']);
        });
      }
      

    }else{

    }
  }

}
