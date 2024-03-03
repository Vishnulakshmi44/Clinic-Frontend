import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


    userMobileNumber: string = '' //to hold the current user number
    userDetails:any={}
    constructor(private api:ApiService,private routerupdate:Router){}
    ngOnInit(): void {
  
      this.userMobileNumber = localStorage.getItem('currentUserMobileNumber') || '' //current user number
    
      this.api.viewParticularUserDetails(this.userMobileNumber).subscribe((result:any)=>{
        console.log(result);
        this.userDetails=result.data
        console.log(this.userDetails);
        
        
      })
    }
  
    
    // edit user profile submit 
    editUserprofile(){
      this.api.editUser(this.userDetails.PatientName,this.userDetails.Age,this.userDetails.BloodGroup,this.userDetails.Gender,this.userDetails. Address,this.userDetails.MobileNumber,this.userDetails.EmailAddress).subscribe((response:any)=>{
        console.log(response);
        
        alert('Updated')
        setTimeout(()=>{
          this.routerupdate.navigateByUrl('patient/patientlogin')
        })
      })
      
    }
  
  }
    



