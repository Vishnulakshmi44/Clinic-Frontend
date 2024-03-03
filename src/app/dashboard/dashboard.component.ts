import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  appointmentDetails:any={}

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAppointment()
   

  }

  getAppointment(){
    this.api.getAppointment().subscribe((response:any)=>{
      console.log(response)
      this.appointmentDetails=response.response
    })
  }
  confirmAppointment(mobile:any,Name:any,Email:any,scheduleTime:any,scheduleDate:any,MobileNumberOfBystander:any,Doctor:any){
    this.api.confirmAppointment(mobile,Name,Email,scheduleTime,scheduleDate,MobileNumberOfBystander,Doctor).subscribe((response:any)=>{
      alert('confirmed')
      this.getAppointment()
    })
  }

  rejectAppointment(mobile:any,Name:any,Email:any,scheduleTime:any,scheduleDate:any,MobileNumberOfBystander:any,Doctor:any){
    this.api.rejectAppointment(mobile,Name,Email,scheduleTime,scheduleDate,MobileNumberOfBystander,Doctor).subscribe((response:any)=>{
      alert('Rejected')
      this.getAppointment()
    })
  }

}
