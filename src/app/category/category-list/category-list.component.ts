import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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



}
