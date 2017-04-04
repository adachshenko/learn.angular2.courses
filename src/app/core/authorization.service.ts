import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { LoaderBlockService } from './loader-block';

const LOCAL_STORAGE_KEY = 'currentUser';

@Injectable()
export class AuthorizationService {

    private userInfo: BehaviorSubject<any>;

    constructor(private loaderBlockService: LoaderBlockService) {
        this.userInfo = new BehaviorSubject(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    };

    public login(login: string, password: string): Observable<boolean> {
        //this.loaderBlockService.show();
        let res = new Subject();
        setTimeout(() => {
            let currentUser = {
                id: 1,
                userLogin: login,
                userName: login.charAt(0).toUpperCase() + login.slice(1)
            };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentUser));
            this.userInfo.next(currentUser);
            console.log(`${this.userInfo.getValue().userName} log in!`);
            res.next(true);
            //this.loaderBlockService.hide();
        }, 1000);
        return res.asObservable();
    }

    public logout(): Observable<boolean> {
        let res = new Subject();
        console.log(`${this.userInfo.getValue().userName} log out!`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.userInfo.next(null);
        res.next(true);
        return res.asObservable();
    }

    public isAuthenticated(): boolean {
        return this.userInfo.getValue() !== null;
    }

    public getUserInfo() {
        return this.userInfo.asObservable();
    }
}
