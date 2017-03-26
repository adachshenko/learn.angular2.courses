import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

    public login(login: string, password: string): boolean {
        let currentUser = {
            id: 1,
            userLogin: login,
            userName:  login.toUpperCase()
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        return true;
    }

    public logout(): boolean {
        localStorage.removeItem('currentUser');
        return true;
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem('currentUser') != null ? true : false;
    }

    public getUserInfo() {
        return localStorage.getItem('currentUser') != null ?
        JSON.parse(localStorage.getItem('currentUser')).userName : '';
    }
}
