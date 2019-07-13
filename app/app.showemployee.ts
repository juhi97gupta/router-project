import { Component,OnInit } from "@angular/core";
import {EmployeeService} from './app.employeeservice';
import { ActivatedRoute,Params} from "@angular/router";


@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent implements OnInit{
    data: any;
    
    
    constructor(private myservice:EmployeeService,private _active:ActivatedRoute){}
    empall:any[]=[];
    ngOnInit(){
      //  this.myservice.getAllEmployee().subscribe((data:any)=>this.empall=data);
      this.empall=this.myservice.getAllEmployee();
      this.data=this._active.snapshot.params['id'];
     

}}