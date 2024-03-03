import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Patient Register

  register(PatientName: any, Age: any, BloodGroup: any, Gender: any, Address: any, MobileNumber: any, EmailAddress: any) {
    const body = {
      PatientName,
      Age,
      BloodGroup,
      Gender,
      Address,
      EmailAddress,
      MobileNumber

    }
    return this.http.post('http://localhost:5000/patientregister', body)
  }

  // Patient Login 

  patientlogin(PatientName: any, MobileNumber: any) {
    const body = {
      PatientName,
      MobileNumber
    }
    return this.http.post('http://localhost:5000/patient/patientlogin', body)

  }

  //api call for get detials
  getDetails(mobile: any) {
    return this.http.get('http://localhost:5000/home/patientprofile/' + mobile)
  }


  // Store appointments

  storeAppointments(mobile: any, Name: any, Email: any, scheduleDate: any, scheduleTime: any, MobileNumber: any,Doctor:any) {
    const body = {
      Name, Email, scheduleTime, scheduleDate, MobileNumber, Doctor
    }
    return this.http.post('http://localhost:5000/home/appointments/' + mobile, body)
  }

  //view all doctors api call
  viewAllList() {
    return this.http.get('http://localhost:5000/home/finddoctor')
  }
  // Patient Login

  admin(EmailAddress: any, Password: any) {
    const body = {

      EmailAddress,
      Password


    }
    return this.http.post('http://localhost:5000/admin/adminlogin', body)
  }

  ///get detials of appointment
  getAppointment(){
    return this.http.get('http://localhost:5000/admin/getAppointments')
  }

  //confirm appointment
  confirmAppointment(mobile:any,Name:any,Email:any,scheduleTime:any,scheduleDate:any,MobileNumberOfBystander:any,Doctor:any){
       const body={
        Name,Email,scheduleTime,scheduleDate,MobileNumberOfBystander,Doctor
       }
       return this.http.post('http://localhost:5000/admin/confirmappointment/'+mobile,body)
  }

  //Rejectappointment
  rejectAppointment(mobile:any,Name:any,Email:any,scheduleTime:any,scheduleDate:any,MobileNumberOfBystander:any,Doctor:any){
    const body={
     Name,Email,scheduleTime,scheduleDate,MobileNumberOfBystander,Doctor
    }
    return this.http.post('http://localhost:5000/admin/rejectappointment/'+mobile,body)
}

  deleteUser(mobile:any){
    return this.http.delete('http://localhost:5000/user/deleteuser/'+mobile)
  }


    //edit user data  fetching 
  //  view particular User details-proile and name
  viewParticularUserDetails(MobileNumber: any) {
    return this.http.get(`http://localhost:5000/login/edit/${MobileNumber}`)

  }


//edit user
  editUser( PatientName: any, Age: any, BloodGroup: any, Gender: any, Address: any, MobileNumber: any, EmailAddress: any) {
  
    const body = {
      PatientName,
      Age,
      BloodGroup,
      Gender,
      Address,
      EmailAddress,
      MobileNumber


    }
    return this.http.put(`http://localhost:5000/userEditbutton/${MobileNumber}`, body)
  }

  
}





