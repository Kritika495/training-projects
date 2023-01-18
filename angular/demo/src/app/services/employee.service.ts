import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../components/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
baseUrl: string=  'http://localhost:5279/api/Employees/';

  constructor(private http: HttpClient) { }
  getAllEmps(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.baseUrl + "GetAllEmps");
  }
}
