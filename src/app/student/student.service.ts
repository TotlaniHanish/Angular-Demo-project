import { Injectable } from '@angular/core';
import { Student } from './student';
@Injectable()
export class AppStudentService {


    studentList: Array<Student>;
    constructor() {
        this.studentList = new Array<Student>();
    }

    addStudent(student: Student) {
        if (student.id) {
            const index = this.findStudentIndex(student.id);
            this.studentList.splice(index, 1, student);
        } else {
            student.id = this.generateId();
            this.studentList.push(student);
        }
    }

    generateId(): number {
        if (!this.studentList.length) {
            return 1;
        }
        return this.studentList[this.studentList.length - 1].id + 1;
    }

    findStudentIndex(id): number {
        return this.studentList.findIndex(element => {
            return id === element.id;
        });
    }

    getStudent(studentId) {
        const student = this.studentList.find(student => {
            return student.id === studentId;
        });
        return student ? student : new Student();
    }

    getAllStudents() {
        return Object.assign(this.studentList);
    }

    deleteStudent(studentId) {
        const index = this.findStudentIndex(studentId);
        this.studentList.splice(index, 1);
        return Object.assign(this.studentList);
    }
}