import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "./app.employeeservice";
@Component({
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})

export class SearchEmployeeComponent{
EmpId1:any;
data1:any;
data2:any;
status:boolean=false;
empId1:any;

constructor(private ser: EmployeeService, private router:Router){}
searchData(){
    this.router.navigate(['show',this.empId1]);
  /*
  
  console.log("a");
    this.data1=this.ser.getAllEmployee();
    for(let i in this.data1){
if(this.data1[i].empId==this.empId1){
    this.data2=this.data1[i];
    */
    }
}

