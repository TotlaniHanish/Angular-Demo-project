import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppAuthGaurdService implements CanActivate {
    constructor(
        private router: Router
    ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('isLoggedIn')) {
            return true;
        } else {
            alert('not logged in');
            this.router.navigate(['/login']);
        }
        return false;

    }

}