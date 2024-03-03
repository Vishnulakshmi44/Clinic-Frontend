import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{
  userMobileNumber:String = ''
  userDetails:any={}
  appointmentDetails:any={}

  constructor(private api:ApiService,private route:Router){}
  ngOnInit(): void {
    if (localStorage.getItem('currentUserMobileNumber')) {
      this.userMobileNumber = localStorage.getItem('currentUserMobileNumber') || '' //current user number
    }

   
    let userId:any=localStorage.getItem('mobile')
    
    this.api.getDetails(userId).subscribe((response:any)=>{
    
    console.log(response)
    this.userDetails=response.response
    this.appointmentDetails=response.response.Appointments
    console.log(this.appointmentDetails=response.response.Appointments);
   })
  }



  deleteUser(mobile:any){
  this.api.deleteUser(mobile).subscribe((response:any)=>{
    alert('Deleted successfully')
    this.route.navigateByUrl('/')
  })
  }

}
