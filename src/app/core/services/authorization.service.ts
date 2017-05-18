import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

const LOCAL_STORAGE_KEY = 'currentUser';

@Injectable()
export class AuthorizationService {

    private userInfo: BehaviorSubject<any>;

    constructor(private http: Http) {
        this.userInfo = new BehaviorSubject(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    };

    /*public login(login: string, password: string): Observable<boolean> {
        let res = new Subject();
        setTimeout(() => {
            let currentUser = {
                id: 1,
                userLogin: login,
                userName: login.charAt(0).toUpperCase() + login.slice(1)
            };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentUser));
            this.userInfo.next(currentUser);
            res.next(true);
            console.log(`${this.userInfo.getValue().userName} log in!`);
        }, 1000);
        return res.asObservable();
    }*/

    public login(login: string, password: string) {
        return this.http.post(`http://localhost:3004/users`,
        JSON.stringify({ login: login, password: password }))
            .map((response: Response) => {
                let currentUser = response.json();
                if (currentUser && currentUser.fakeToken) {
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentUser));
                    //this.userInfo.next(currentUser);
                }
            });
    }

    public logout(): Observable<boolean> {
        let res = new Subject();
        console.log(`${this.userInfo.getValue().userName} log out!`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.userInfo.next(null);
        res.next(true);
        return res.asObservable();
    }

    public isAuthenticated(): Observable<boolean> {
        return Observable.of(this.userInfo.getValue() !== null);
    }

    public getUserInfo() {
        return this.userInfo.asObservable();
    }
}
