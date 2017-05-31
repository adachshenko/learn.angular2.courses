import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BreadcrumbsService {
    public courseName: Observable<string>;
    private _courseName: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() {
        this.courseName = this._courseName.asObservable();
    }

    public set(value): void {
        this._courseName.next(value);
    }
}
