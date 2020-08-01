
import { Injectable } from '@angular/core';

@Injectable()
export class AppLoginService {

    username = 'Nascent';
    password = 'Nascent';


    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            if (username.toLowerCase() === this.username.toLowerCase()
                && password === this.password) {
                    resolve('Login Successful');
                } else {
                    reject('Login Unsuccessful');
                }
        });
    }
}