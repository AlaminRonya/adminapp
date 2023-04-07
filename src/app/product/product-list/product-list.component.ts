import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from 'src/app/interface/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable) table: MatTable<PeriodicElement> | undefined;

  products: Product[] = [];

  constructor(private productService: ProductServiceService){}
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      (response) => {
        this.products.splice(0);

        this.products = response.data.products as Product[];
        
        // console.log('Product: '+this.products[0].brand);
        for(var v of this.products){
          console.log('Product: '+v.attachmentDTOList[0].filename);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    
  }

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
