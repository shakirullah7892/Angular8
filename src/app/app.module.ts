import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// imorting Material stuff
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';

// in the terminal we wrote ng generate services/department and then the same for the
//  employee service file to be made too. (ng generate service services/employee )
// for services we imported the two servics (department and employee service files)
import {DepartmentService} from 'src/app/services/department.service';
import {EmployeeService} from 'src/app/services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    EditDepComponent,
    AddDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add BrowserAnimationsModule to imports for angular material...
    BrowserAnimationsModule
  ],
// in the empty providers: [], we added the DepartmentService, EmployeeService into 
// its square brackets
  providers: [DepartmentService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
