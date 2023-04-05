import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Brand } from 'src/app/interface/brand';
import { Category } from 'src/app/interface/category';
import { FileHandle } from 'src/app/interface/file-handle';
import { RequestProductDTO } from 'src/app/interface/request-product-dto';
import { TaxClassesDTO } from 'src/app/interface/tax-classes-dto';
import { BrandServiceService } from 'src/app/service/brand-service.service';
import { CategoryServiceService } from 'src/app/service/category-service.service';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { TaxClassServiceService } from 'src/app/service/tax-class-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  brandName = ['Easy','av','dggf'];
  categoryName = ['Easy','av','dggf'];
  taxClass = ['Easy','av','dggf'];

  fileImage: FileHandle[]=[];
  
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;
  
  brands: Brand[] = [];
  categories: Category[] = [];
  taxClasses: TaxClassesDTO[] = [];

  constructor(private builder : FormBuilder, private router: Router, private sanitizer: DomSanitizer, private brandService: BrandServiceService, private categoryService: CategoryServiceService, private taxClassServiceService: TaxClassServiceService, private productService: ProductServiceService ){}
  ngOnInit(): void {
    this.brandService.getBrand().subscribe(
      (response) => {
        this.brands = response.data.brands as Brand[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    this.categoryService.getAll().subscribe(
      (response) => {
        this.categories.splice(0);

        this.categories = response.data.categories as Category[];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

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
  
  public preprocess(){
    
    if (this.registerform.valid){
      console.log(this.registerform.value);
      const dto = this.registerform.value as unknown as RequestProductDTO;
      const registrationData = this.prepareFormData(dto);
      console.log('===>'+registrationData.get('dto'));
      this.productService.addProduct(registrationData).pipe(
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


  selectFiles(event: any): void {

    // if(event.target.files){
      
    //   const file = event.target.files[0];
      
    //   const fileHandle : FileHandle = {
    //     file: file,
    //     url: this.sanitizer.bypassSecurityTrustUrl(
    //       window.URL.createObjectURL(file)
    //     )
    //   }
    //   this.fileImage.push(fileHandle);
    // }

    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const file = event.target.files[0];
      
      const fileHandle : FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.fileImage.push(fileHandle);

      for(var i = 0; i < this.fileImage.length; i++){
        console.log(i+'==>'+this.fileImage[i].file.name);
        
      }

      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          // console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  public fileOutput(){
    for(var i = 0; i < this.fileImage.length; i++){
      console.log(i+'==>'+this.fileImage[i].file.name);
      
    }
  }


  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      // this.uploadService.upload(file).subscribe(
      //   (event: any) => {
      //     if (event.type === HttpEventType.UploadProgress) {
      //       this.progressInfos[idx].value = Math.round(
      //         (100 * event.loaded) / event.total
      //       );
      //     } else if (event instanceof HttpResponse) {
      //       const msg = 'Uploaded the file successfully: ' + file.name;
      //       this.message.push(msg);
      //       this.imageInfos = this.uploadService.getFiles();
      //     }
      //   },
      //   (err: any) => {
      //     this.progressInfos[idx].value = 0;
      //     const msg = 'Could not upload the file: ' + file.name;
      //     this.message.push(msg);
      //   }
      // );
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }


  // const registrationData = this.prepareFormData(this.dtoData);
  //   registrationData.forEach((value,key) => {
  //     console.log(key+" "+value)
  //   });

  prepareFormData(dto: RequestProductDTO): FormData {
    const formDTO = new FormData();
    formDTO.append(
      'dto', new Blob([JSON.stringify(dto)], {type : 'application/json'})
    );
    for(var i = 0; i < this.fileImage.length; i++){
      formDTO.append(
        'image',
        this.fileImage[i].file,
        this.fileImage[i].file.name
      );
    }
    return formDTO;
  }

}
