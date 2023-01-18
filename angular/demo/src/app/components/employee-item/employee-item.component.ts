import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  emp:Employee = new Employee(101,"Ram",1111, 11111);

  constructor() { }

  ngOnInit(): void {
  }

}
