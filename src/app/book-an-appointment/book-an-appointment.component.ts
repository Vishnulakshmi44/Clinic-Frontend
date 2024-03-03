import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.css']
})
export class BookAnAppointmentComponent {

  appointmentDetails:any={}
  mobile:any=localStorage.getItem('mobile')
  
  constructor (private api:ApiService,private fb:FormBuilder){
    
  }

  appointmentForm=this.fb.group({
    Name:[''],
    Email:[''],
    scheduleDate:[''],
    scheduleTime:[''],
    MobileNumber:[''],
    Doctor:['']
    

  })

  
  storeAppointments(){
    if(this.appointmentForm.valid){
      let Name=this.appointmentForm.value.Name
      let Email=this.appointmentForm.value.Email
      let scheduleDate=this.appointmentForm.value.scheduleDate
      let scheduleTime=this.appointmentForm.value.scheduleTime
      let MobileNumber=this.appointmentForm.value.MobileNumber
      let Doctor=this.appointmentForm.value.Doctor
     

      //calling the function from services
      this.api.storeAppointments(this.mobile,Name,Email,scheduleDate,scheduleTime,MobileNumber,Doctor).subscribe((response:any)=>{
        alert('uploaded successfully')
      })
    }else{
      alert('Enter valid details')
    }

  }

}
