import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistsComponent } from './users/userlists/userlists.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddTaxClassComponent } from './taxClasss/add-tax-class/add-tax-class.component';












const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "userlist", component: UserlistsComponent},
  {path: "productList", component: ProductListComponent},
  {path: "addBrand", component: AddBrandComponent},
  {path: "addCategory", component: AddCategoryComponent},
  {path: "categoryList", component: CategoryListComponent},
  {path: "brandList", component: BrandListComponent},
  {path: "updateCategory", component: UpdateCategoryComponent},
  {path: "addProduct", component: AddProductComponent},
  {path: "addTaxClass", component: AddTaxClassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
