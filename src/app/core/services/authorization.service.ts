import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { AppStore } from '../store/app-store';
import { Store } from '@ngrx/store';
import { AddTokenAction, AddUserAction } from '../../login-page/user.actions';

const LOCAL_STORAGE_KEY = 'currentUser';

@Injectable()
export class AuthorizationService {

    constructor(private http: Http,
                private store: Store<AppStore>) {
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
                    this.store.dispatch(new AddTokenAction(currentUser.token));
                    this.getUserInfo();
                }
            });
    }

    public logout(): Observable<boolean> {
        let res = new Subject();
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.store.dispatch(new AddTokenAction(null));
        res.next(true);
        return res.asObservable();
    }

    public isAuthenticated() {
        return localStorage.getItem(LOCAL_STORAGE_KEY) !== null;
    }

    public getUserInfo() {
        let headers = new Headers({ Authorization: localStorage.getItem(LOCAL_STORAGE_KEY) });
        let options = new RequestOptions({ headers: headers });
        this.http.post(`http://localhost:3004/auth/userinfo`, null, options)
            .subscribe((response: Response) => {
                this.store.dispatch(new AddUserAction (response.json()));
            });
    }

}
