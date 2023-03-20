import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { RequestUserDTO } from '../interface/request-user-dto';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
  //   private toastr: ToastrService) {

  // }

  constructor(private builder: FormBuilder, private router: Router, private registrationService: RegistrationService) {

  }

  registerform = this.builder.group({
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$')])),
    cPassword: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$')])),
  });
  proceedregister() {
    if (this.registerform.valid) {
      this.registrationService.addEmployee(this.registerform.value as RequestUserDTO).pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error);
        })
      ).subscribe((response: any) => {
        console.log(response);
        this.router.navigate(['login'])
        // addForm.reset();
      });

      // this.service.RegisterUser(this.registerform.value).subscribe(result => {
      //   this.toastr.success('Please contact admin for enable access.','Registered successfully')
      //   this.router.navigate(['login'])
      // });
    } else {
      // this.toastr.warning('Please enter valid data.')
    }
  }
}
