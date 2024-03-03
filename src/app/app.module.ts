import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { HomeComponent } from './home/home.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { FinddoctorComponent } from './finddoctor/finddoctor.component';
import { BookAnAppointmentComponent } from './book-an-appointment/book-an-appointment.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AdminloginComponent,
    AdminregisterComponent,
    HomeComponent,
    PatientloginComponent,
    PatientregisterComponent,
    LoginpageComponent,
    ServicesComponent,
    FinddoctorComponent,
    BookAnAppointmentComponent,
    FilterPipe,
    DashboardComponent,
    ContactusComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
