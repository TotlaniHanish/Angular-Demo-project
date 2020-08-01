import { Component } from '@angular/core';
import { AppLoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})
export class AppLoginComponent {

    username: string;
    password: string;

    constructor(
        private loginService: AppLoginService,
        private router: Router
    ) {

    }

    login(form: NgForm) {
        if (form.valid) {
            this.loginService.login(this.username, this.password).then((val) => {
                localStorage.setItem('isLoggedIn', 'true');
                this.router.navigate(['/student-list']);
            }).catch(err => {
                alert('invalid username password');
                this.username = null;
                this.password = null;
            });
        } else {
            alert('please fill all the details');
        }
    }

}