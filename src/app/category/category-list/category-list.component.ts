import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Category } from 'src/app/interface/category';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private builder : FormBuilder, private router: Router, private categoryService: CategoryServiceService){}
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (response) => {
        this.categories.splice(0);

        this.categories = response.data.categories as Category[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  deleted(slug: string){
    this.categoryService.delete(slug).subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  displayedColumns: string[] = ['id', 'slug', 'parent', 'position','isSearchable','isActive','createdAt','updatedAt'];

  dataSource = new MatTableDataSource(this.categories);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(':'+filterValue.trim().toLowerCase()+':');
    this.categoryService.getSearchSlug(filterValue.trim().toLowerCase()).subscribe(
      (response) => {
        this.categories.splice(0);
        this.categories = response.data.categories as Category[];
        for(var p of response.data.categories as Category[]){
          console.log(p);
        }

      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
      }
    );

    // console.log(filterValue.trim().toLowerCase());
    // this.categories.splice(0);
    // for(var v of this.categories){
    //   console.log(v);
    // }
    
  }


  navToUpdate(slug: string){
    this.router.navigate(['updateCategory'],{queryParams:{data:slug}});
  }



}
