import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
  companyName:string;
  fruits:string[];
  isMember:boolean;
  ctr:number;
  empObject:any;
  constructor(){
    this.companyName="Marsh Mcleannan";
    this.fruits=['Apple','Banana','Carrot'];
    this.isMember=true;
    this.ctr=10;
    this.empObject={empId:1,empName:"bhushan",empSalary:123,dob:new Date(1987,7,26)}
  }
}
