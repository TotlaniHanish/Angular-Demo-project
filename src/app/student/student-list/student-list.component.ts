import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { AppStudentService } from '../student.service';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class AppStudentList implements OnInit {

    studentList: Array<Student>;

    constructor(
        private router: Router,
        private studentService: AppStudentService
    ) {
    }

    ngOnInit() {
        this.studentList = this.studentService.getAllStudents();
    }

    addStudent() {
        this.router.navigate(['/student-add-edit']);
    }

    editStudent(studentId: number) {
        this.router.navigate(['/student-add-edit'], { queryParams: { studentId: studentId } });
    }

    deleteStudent(studentId: number) {
        this.studentList = this.studentService.deleteStudent(studentId);
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

}