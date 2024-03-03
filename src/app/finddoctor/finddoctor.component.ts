import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-finddoctor',
  templateUrl: './finddoctor.component.html',
  styleUrls: ['./finddoctor.component.css']
})
export class  FinddoctorComponent implements OnInit{
  searchKey:string='' //to search hold

  
  allDoctorList :any=[]// to hold all doctor  list
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.viewAllList().subscribe((result:any)=>{
      console.log(result.data);
      this.allDoctorList=result.data
      
    })
  }
  //search
  filter(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
    
  }

}
