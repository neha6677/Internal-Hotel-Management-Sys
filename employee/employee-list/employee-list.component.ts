import { EmployeeService } from "../services/employee.service";
import { Employee } from "../services/employee";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  user_level_id = window.sessionStorage.user_level_id;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getAllEmployees();
  }

  public openNewTab(rtype) {
    window.open(rtype, '_blank');
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
