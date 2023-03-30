import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private builder : FormBuilder, private router: Router){}

  registerform = this.builder.group({
    productName: this.builder.control('', Validators.required),
    brand : this.builder.control('', Validators.required),
    taxClass: this.builder.control('', Validators.required),
    slug: this.builder.control('', Validators.required),
    price: this.builder.control('', Validators.required),
    specialPrice: this.builder.control('', Validators.required),
    specialPriceType: this.builder.control('', Validators.required),
    specialPriceStart: this.builder.control('', Validators.required),
    specialPriceEnd : this.builder.control('', Validators.required),
    sellingPrice: this.builder.control('', Validators.required),
    sku: this.builder.control('', Validators.required),
    manageStock: this.builder.control('', Validators.required),
    qty: this.builder.control('', Validators.required),
    inStock: this.builder.control('', Validators.required),
    viewed: this.builder.control('', Validators.required),
    isActive : this.builder.control('', Validators.required),
    newFrom: this.builder.control('', Validators.required),
    newTo: this.builder.control('', Validators.required),
    virtualAt: this.builder.control('', Validators.required),
    
   
  });
  
  public preprocess(){}

}
