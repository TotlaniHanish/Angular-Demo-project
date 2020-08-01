import { AppAuthGaurdService } from './common-services/authgaurd.service';
import { AppStudentList } from './student/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './login/login.component';
import { AppStudentAddEdit } from './student/student-add-edit/student-add-edit.component';



const routes: Routes = [
  { path: 'login', component: AppLoginComponent},
  { path: 'student-list', component: AppStudentList, canActivate: [AppAuthGaurdService]},
  { path: 'student-add-edit', component: AppStudentAddEdit, canActivate: [AppAuthGaurdService]},
  { path: '**' , redirectTo: '/student-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
