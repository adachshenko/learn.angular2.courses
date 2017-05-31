import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

const LOCAL_STORAGE_KEY = 'currentUser';

@Injectable()
export class AuthorizationService {

    //private userInfo: BehaviorSubject<any>;

    constructor(private http: Http) {
        //this.userInfo = new BehaviorSubject(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    };

    public login(login: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`http://localhost:3004/auth/login`,
            JSON.stringify({ login: login, password: password }), options)
            .map((response: Response) => {
                let currentUser = response.json();
                if (currentUser && currentUser.token) {
                    localStorage.setItem(LOCAL_STORAGE_KEY, currentUser.token);
                    //this.userInfo.next(currentUser);
                    //this.getUserInfo();
                }
            });
    }

    public logout(): Observable<boolean> {
        let res = new Subject();
       //console.log(`${this.userInfo.getValue().userName} log out!`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
       // this.userInfo.next(null);
        res.next(true);
        return res.asObservable();
    }

    public isAuthenticated(){
        //return Observable.of(this.userInfo.getValue() !== null);
        return localStorage.getItem(LOCAL_STORAGE_KEY) !== null;
    }

    public getUserInfo() {
        let headers = new Headers({ 'Authorization': localStorage.getItem(LOCAL_STORAGE_KEY) });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`http://localhost:3004/auth/userinfo`, null, options)
            .map((response: Response) => {
               return response.json();
            });

    }

}
