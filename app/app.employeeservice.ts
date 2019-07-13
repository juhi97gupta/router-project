import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import {AddEmployeeComponent} from "./app.addemployee";
import { ActivatedRoute } from "@angular/router";




@Injectable({
    providedIn:'root'
})
 export class EmployeeService{
    empId: any;
     
    
  
    //emp:any[]=[];
     //constructor(private http:HttpClient){}

     empall:any[]=[{empId:10, empName:"juhi", empSalary:10000.00, empDepartment:".Net"},
                    {empId:11, empName:"ruhi", empSalary:20000.00, empDepartment:"Net"}];

     getAllEmployee(){
         //return this.http.get("assets/employee.json");
return this.empall;
     }
     addEmployee(data:any){
         this.empall.push(data);
         return true;


     }
     
   
    /*catch(empId1,empName1,empSalary1,empDepartment1){
        console.log(empId1,empName1,empSalary1,empDepartment1);
        this.emp.pu(this.empId=empId1, this.empName=empName1, this.empSalary=empSalary1, this.empDepartment=empDepartment1);
    }*/
     }
 