import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestCategoryDTO } from 'src/app/interface/request-category-dto';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  isSearchable = true;
  isActive = false;
  constructor(private builder : FormBuilder, private router: Router){}

  addCategoryForm = this.builder.group({
    slug: this.builder.control('', Validators.required),
    subSlug: this.builder.control('', Validators.required),
    position: this.builder.control('', Validators.required),
    isSearchable: this.builder.control('', Validators.required),
    isActive: this.builder.control('', Validators.required),
    
  });


  preprocess(){
    
    if (this.addCategoryForm.valid){

      console.log("Value: "+this.addCategoryForm.value.position);
      // this.service.addBrand(this.addCategoryForm.value as Brand).pipe(
      //   catchError((error: HttpErrorResponse) => {
      //     alert(error.message);
      //     return throwError(error);
      //   })
      // ).subscribe((response: Response) => {
      //   // if(response instanceof Response){
      //   //   alert();
      //   // }
        
      //   var d = JSON.parse(JSON.stringify(response));

      //   alert("Insert success!" +  d['message']);
        
      //   // this.router.navigate(['login'])
      //   // addForm.reset();
      // });

     

    }else{

    }
  }
  


}
