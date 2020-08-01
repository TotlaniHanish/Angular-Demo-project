import { NgForm } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Student } from '../student';
import { Router, ActivatedRoute } from '@angular/router';
import { AppStudentService } from '../student.service';

@Component({
    selector: 'student-add-edit',
    templateUrl: './student-add-edit.component.html'
})
export class AppStudentAddEdit implements OnInit {
    student: Student;
    constructor(
        private router: Router,
        private studentService: AppStudentService,
        private route: ActivatedRoute
    ) {
        this.student = new Student();
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params && params['studentId']) {
                this.student = this.studentService.getStudent(+params['studentId']);
                if (!this.student.id) {
                    alert('No Object found');
                    this.router.navigate(['/student-add-edit']);
                }
            }
        })
    }

    navigateToList() {
        this.router.navigate(['/student-list']);
    }

    saveStudent(form: NgForm) {
        if (form.valid) {
            this.studentService.addStudent(this.student);
            this.router.navigate(['/student-list']);
        } else {
            alert('please fill all the details');
        }
    }
}