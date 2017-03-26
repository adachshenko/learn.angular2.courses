import { Injectable } from '@angular/core';
const LOCAL_STORAGE_KEY = 'currentUser';

@Injectable()
export class AuthorizationService {
    private currentUser;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    };

    public login(login: string, password: string): boolean {
        this.currentUser = {
            id: 1,
            userLogin: login,
            userName: login.charAt(0).toUpperCase() + login.slice(1)
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.currentUser));
        console.log(`${this.currentUser.userName} log in!`);
        return true;
    }

    public logout(): boolean {
        console.log(`${this.currentUser.userName} log out!`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.currentUser = null;
        return true;
    }

    public isAuthenticated(): boolean {
        return this.currentUser !== null;
    }

    public getUserInfo() {
        return this.currentUser !== null ? this.currentUser.userName : '';
    }
}
