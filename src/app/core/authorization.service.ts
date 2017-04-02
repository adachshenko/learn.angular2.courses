import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const LOCAL_STORAGE_KEY = 'currentUser';

@Injectable()
export class AuthorizationService {
    // private currentUser;
    private userInfo: BehaviorSubject<any>;
    constructor() {
        this.userInfo = new BehaviorSubject(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    };

    public login(login: string, password: string): boolean {
        let currentUser = {
            id: 1,
            userLogin: login,
            userName: login.charAt(0).toUpperCase() + login.slice(1)
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentUser));
        this.userInfo.next(currentUser);
        console.log(`${this.userInfo.getValue().userName} log in!`);
        return true;
    }

    public logout(): boolean {
        console.log(`${this.userInfo.getValue().userName} log out!`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.userInfo.next(null);
        return true;
    }

    public isAuthenticated(): boolean {
        return this.userInfo.getValue() !== null;
    }

    public getUserInfo() {
        return this.userInfo.asObservable();
    }
}
