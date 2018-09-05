import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeComponent, EmployeesComponent]
})
export class EmployeeModule { }
