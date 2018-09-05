import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  private employees: Employee[];
  constructor(private router: Router,
   private employeeService: EmployeeService) { }
  ngOnInit() {
   this.getAllEmployees();
   }
  getAllEmployees() {
   this.employeeService.findAll().then(
   employees => {
   this.employees = employees;
   },
   err => {
   console.log(err);
   }
  );
   }
  createEmployee() {
   let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
   let lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
   let empno = (<HTMLInputElement>document.getElementById('empno')).value;
  
   let employee = new Employee(0, firstName, lastName);
   this.employeeService.createEmployee(employee).then(
   employees => {
   this.employees = employees;
   },
   err => {
   console.log(err);
   }
   );
   }
  deleteEmployee(employee: Employee) {
   this.employeeService.deleteEmployeeById(employee.empNo).then(
   employees => {
   this.employees = employees;
   },
   err => {
   console.log(err);
   }
   );
   }
  }
