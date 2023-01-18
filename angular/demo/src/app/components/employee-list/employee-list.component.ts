import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
emps:Employee[] = [];
  constructor(private empService: EmployeeService) {
    // this.emps.push(new Employee(101, "David", 1111, 201));
    // this.emps.push(new Employee(102, "Jane", 1111, 201));
    // this.emps.push(new Employee(103, "Lily", 1111, 201));

   }

  ngOnInit(): void {
    this.empService.getAllEmps().subscribe(data=>{
      this.emps = data;
      console.log(this.emps);
    })
  }
deleteEmp(i:number)
{
  console.log(i);
  this.emps.splice(i,1);
}
}
