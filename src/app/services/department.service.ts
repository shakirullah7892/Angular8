// department service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
}


//  We wrote in the terminal ng generate service services/depatment and 
// ng generate service services/employee.
//  then we go this files made for us automatically.
//  in app.module.ts file we imorted these class into there 
// (see that file's note)
// and in the same app.module.ts file we filled in the empty 
// // in the empty providers: [], we added the DepartmentService, EmployeeService into 
// its square brackets.
