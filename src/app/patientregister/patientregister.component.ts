import { provideCloudflareLoader } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patientregister',
  templateUrl: './patientregister.component.html',
  styleUrls: ['./patientregister.component.css']
})
export class PatientregisterComponent {

  // //To hold Register Details
  RegisterError: string ='';
  RegisterSuccess: string ='';
  constructor(private fb: FormBuilder,private api: ApiService, private Router:Router) { }

  // Creating validation
  patientRegisterForm = this.fb.group({
    PatientName: ['',[Validators.required]],
    Age: ['', [Validators.required]],
    BloodGroup: ['',[Validators.required]],
    Gender: ['',[Validators.required]],
    Address: ['',[Validators.required]],
    MobileNumber: ['',[Validators.required]],
    EmailAddress: ['', [Validators.required]],

  })
  patientRegister() {
    if (this.patientRegisterForm.valid) {
      console.log(this.patientRegisterForm.value);
      let PatientName = this.patientRegisterForm.value.PatientName
      let Age= this.patientRegisterForm.value.Age
      let BloodGroup = this.patientRegisterForm.value.BloodGroup
      let Gender = this.patientRegisterForm.value.Gender
      let Address = this.patientRegisterForm.value.Address
      let MobileNumber = this.patientRegisterForm.value.MobileNumber
      let EmailAddress = this.patientRegisterForm.value.EmailAddress

      //API CALL FOR REGISTER

      this.api.register( PatientName, Age, BloodGroup, Gender, Address,MobileNumber,EmailAddress ).subscribe((response:any) =>{
        Swal.fire("Registered", "You have Successfully Registered ", "success").then((result) => {
          console.log(response); //message
          alert(response.message) //success
          this.RegisterSuccess = response.message;
          setTimeout(() => {
            //redirect to loginpage
            this.Router.navigateByUrl('/patient/patientlogin')
          }, 2000)
        })
      },(response: any) => {
        Swal.fire("Error", "Invalid Details", "error")
        this.RegisterError = response.error.message;//error message

        setTimeout(() => {
          this.patientRegisterForm.reset()
          this.RegisterError = '';
        }, 1000);
      }
      )
    }
    else{
      alert('Invalid Form')
    }
  }
}
