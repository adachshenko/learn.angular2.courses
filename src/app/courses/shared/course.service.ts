import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

import { ICourse } from './';

@Injectable()
export class CourseService {

    public courseList: Observable<any>;
    private courseListSubject: Subject<any[]> = new Subject();

   /* private _courseList = [
        {
            id: 1, title: 'Learn JavaScript', duration: 105, startDate: new Date(2017, 2, 26),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: true
        },

        {
            id: 2, title: 'HTML & CSS', duration: 50, startDate: new Date(2017, 0, 17),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: false
        },

        {
            id: 3, title: 'Angular 2', duration: 145, startDate: new Date(2017, 3, 15),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: true
        },

        {
            id: 4, title: 'React', duration: 220, startDate: new Date(2017, 6, 1),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: true
        },

        {
            id: 5, title: 'Angular 4', duration: 145, startDate: new Date(2017, 3, 15),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj',
            topRated: true
        }];*/
        private baseUrl: string;

    constructor(private http: Http) {
        this.courseList = this.courseListSubject.asObservable();
    };

    public getCourseList() {
        //console.log(this._courseList);
        //return Observable.from(this._courseList);
       return  this.http.request('/courses');
    }

    /*public deleteCourseById(courseId: number): Observable<boolean> {
        let res = new Subject();
        setTimeout(() => {
            this._courseList = this._courseList
                .filter((course: ICourse) => courseId !== course.id);
            res.next(true);
        }, 2000);
        return res.asObservable();
    }*/

    public createCourse(course: ICourse): Observable<boolean> {
        let res = new Subject();
        return res.asObservable();
    }

    public updateCourse(course: ICourse): Observable<boolean> {
        let res = new Subject();
        return res.asObservable();
    }
}
