import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';


import { Employee } from '../services/employee';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  employee: Employee = new Employee();
  user_level_id = window.sessionStorage.user_level_id;
  user_id = window.sessionStorage.user_id;
  submitted = false;
  isUpdate = false;
  msg = "";
  type= "danger";
  employee_id = "save"
  readonly = false;

  registrationMessage: string = ""

 
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
   
    if (id) {
      console.log("Here eee");
      this.isUpdate = true;
      this.getEmployee(id);
    } 
  }

  getEmployee(id): void {
    this.employeeService.getEmployee(id).subscribe(
      data => {
        console.log(data);
        this.employee = data;
      },
      err => {
        console.log(err);
      }
    );

  }
  

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    console.log("I am here");
          // Saving Employee and Login Details
          this.employeeService.createEmployee(this.employee).subscribe(
            data => {
              this.registrationMessage = "Data Saved Successfully !!!";
              this.router.navigate(['/admin/employee']);
            },
            err => {
              this.registrationMessage = err.error.message;
              // this.isSignUpFailed = true;
            }
          );
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateEmployee();
    } else {
      this.submitted = true;
      this.save();
    }
    
  }

  updateEmployee(): void {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employee.employee_id, this.employee).subscribe(
      data => {
        console.log(data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
          this.msg = "Success : Details updated successfully !!!";
          this.type = "success";
          this.router.navigate(['/admin/employee']);
      },
      err => {
        // this.registrationMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }
}
