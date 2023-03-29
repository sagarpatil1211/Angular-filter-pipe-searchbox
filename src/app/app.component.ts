import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  states:any;
  name:string = '';
  constructor(private api : ApiService){

  }
  ngOnInit(): void {
    this.api.getdata("http://awsmaster.mahamining.com/master/states/GetState").subscribe((result:any)=>{
      // console.log(result.responseData);
      this.states = result.responseData; 
    })
  }

 

}
