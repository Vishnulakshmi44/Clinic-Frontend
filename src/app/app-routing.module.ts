import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ServicesComponent } from './services/services.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';
import { BookAnAppointmentComponent } from './book-an-appointment/book-an-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent 
  },

  {
    path:"admin/adminlogin", component:AdminloginComponent
  },

  {
    path:"patient/patientlogin", component:PatientloginComponent
  },

  {
    path:"patientregister", component:PatientregisterComponent
  },

  {
    path:"login/loginpage", component:LoginpageComponent
  },
  {
    path: "home/services" , component: ServicesComponent 
  },
  {
    path: "home/finddoctor" , component: FinddoctorComponent 
  },

  {
    path: "home/bookAppointment", component:BookAnAppointmentComponent
  },
  {
    path: "dashboard", component:DashboardComponent
  },

  {
    path: "home/contactus", component:ContactusComponent
  },
  
  {
    path: "login/edit/:MobileNumber", component:EditComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
