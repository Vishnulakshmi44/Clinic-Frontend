import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  loginSuccess: string=''
  loginError: string =''

  constructor(private fb: FormBuilder, private api: ApiService, private loginRouter: Router) { }


  //create validation

  adminLoginForm = this.fb.group({
    EmailAddress:  ['', [Validators.required]],
    Password: ['', [Validators.required]]
  })

  adminlogin(){
    if (this.adminLoginForm.valid){
      console.log(this.adminLoginForm.value);
      let EmailAddress = this.adminLoginForm.value.EmailAddress
      let Password = this.adminLoginForm.value.Password
      this.api.admin(EmailAddress,Password).subscribe((response:any)=>{

        Swal.fire("Welcome","You have successfully logged In","success").then((result)=>{
          //success
          console.log(result);
          
        this.loginSuccess = response.message

        setTimeout(() => {
          this.loginRouter.navigateByUrl('dashboard')

        }, 2000);

        })

        
      },
      (response: any) => {
        Swal.fire("Error","Invalid Details","error")
        this.loginError = response.error.message
        setTimeout(() => {
          this.adminLoginForm.reset()
          this.loginError = ''
        }, 2000);

      })

    }
    else {
      alert('Invalid login');
    }

      }
    }
  

