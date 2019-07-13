
import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";
import {Router} from "@angular/router";
@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{
    myallData:any;
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;
   // empall:any[]=[];
  
    constructor(private myservice:EmployeeService,private router:Router){}

     AddData(){
        this.myallData= {empId:this.empId, empName:this.empName, empSalary:this.empSalary, empDepartment:this.empDepartment};
        if(this.myservice.addEmployee(this.myallData)){
          this.router.navigate(['show']);
         //this.myservice.catch(this.empId, this.empName,this.empSalary, this.empDepartment);
     }

}}