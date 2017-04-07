import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ICourse } from './';

@Injectable()
export class CourseService {

    public courseList: Observable<ICourse[]>;
    private courseListSubject: Subject<ICourse[]> = new Subject();

    private _courseList: ICourse[] = [
        {
            id: 1, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(2017, 5, 22),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: true
        },

        {
            id: 2, name: 'HTML & CSS', duration: 120, startDate: new Date(2017, 0, 17),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: false
        },

        {
            id: 3, name: 'Angular 2', duration: 120, startDate: new Date(2017, 3, 1),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: true
        }];

    constructor() {
        this.courseList = this.courseListSubject.asObservable();
    };

    public getCourseList(): Observable<boolean> {
        let res = new Subject();
            this.courseListSubject.next(this._courseList);
            res.next(true);
        return res.asObservable();
    }

    public deleteCourseById(courseId: number): Observable<boolean> {
        let res = new Subject();
        setTimeout(() => {
            this._courseList = this._courseList.filter((course: ICourse) => courseId !== course.id);
            res.next(true);
        }, 2000);
        return res.asObservable();
    }

    public createCourse(course: ICourse): Observable<boolean> {
        let res = new Subject();
        return res.asObservable();
    }

    public updateCourse(course: ICourse): Observable<boolean> {
        let res = new Subject();
        return res.asObservable();
    }
}
