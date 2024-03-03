import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent {

  loginError: string = '';
  loginSuccess: boolean = false;
  
  constructor(private fb: FormBuilder, private api: ApiService, private loginRouter: Router) { }
  //  create validation
  patientLoginForm = this.fb.group({
    PatientName: ['', [Validators.required]],
    MobileNumber: ['', [Validators.required]]

  })
  patientlogin() {
    if (this.patientLoginForm.valid) {
      let PatientName = this.patientLoginForm.value. PatientName
      let MobileNumber:any = this.patientLoginForm.value.MobileNumber
      this.api.patientlogin(PatientName,MobileNumber).subscribe((response: any) => {
        
        localStorage.setItem('mobile',MobileNumber)

        
        Swal.fire("Logged In","You have successfully logged In","success").then((result)=>{
          //success
        this.loginSuccess = true

        //current user number
        localStorage.setItem('currentUserMobileNumber', response.currentUserMobileNumber)

        setTimeout(() => {
          this.loginRouter.navigateByUrl('login/loginpage')

        }, 2000);

        })

        
      },

        (response: any) => {
          Swal.fire("Error","Invalid Details","error")
          this.loginError = response.error.message
          setTimeout(() => {
            this.patientLoginForm.reset()
            this.loginError = ''
          }, 2000);

        })

    }
    else {
      alert('Invalid login');
    }
  }
}


