import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {RouterModule} from '@angular/router';
import { CreateEmployeeComponent } from './employee-add/create-employee.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  bootstrap: [
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
