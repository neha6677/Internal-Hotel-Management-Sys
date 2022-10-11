import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateUploadEmployee(id: number, employee: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-employees/${id}`);
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
