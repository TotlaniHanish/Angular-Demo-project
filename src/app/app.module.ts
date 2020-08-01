import { AppStudentList } from './student/student-list/student-list.component';
import { AppLoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { AppStudentAddEdit } from './student/student-add-edit/student-add-edit.component';
import { AppStudentService } from './student/student.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppStudentAddEdit,
    AppStudentList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppLoginService,
    AppStudentService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
