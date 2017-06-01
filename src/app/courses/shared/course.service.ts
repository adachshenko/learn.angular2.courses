import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';

import { GetCoursesAction } from './courses.action';
import { AppStore } from './../../core/store/app-store';
import { ICourse } from './';

@Injectable()
export class CourseService {

    public courseList: Observable<any>;
    private courseListSubject: Subject<any[]> = new Subject();

    private baseUrl: string;

    constructor(private http: Http,
                private store: Store<AppStore>) {
        this.courseList = this.courseListSubject.asObservable();
    };

    public getCourseList(start: number, count: number, query: string) {
        this.http
        .get(`http://localhost:3004/courses?start=${start}&count=${count}&query=${query}`)
            .map((res: Response) => res.json())
            .map((res: any[]) => res.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    duration: item.length,
                    startDate: new Date(item.date),
                    description: item.description,
                    topRated: item.isTopRated
                };
            }))
            .subscribe((courseList) => {
                this.store.dispatch(new GetCoursesAction(courseList));
            });
    }

    public deleteCourseById(courseId: number) {
        return this.http.delete(`http://localhost:3004/courses/${courseId}`);
    }

    public getCourseById(courseId: number): Observable<any> {
        return this.http.get(`http://localhost:3004/courses/${courseId}`)
        .map((res: Response) => res.json());
    }

    public createCourse(course): Observable<any> {
       return this.http.post(`http://localhost:3004/courses`, course);
    }

    public updateCourse(course, courseId): Observable<any> {
        return this.http.put(`http://localhost:3004/courses/${courseId}`, course);
    }

    public getAuthors() {
        return this.http.get(`http://localhost:3004/authors`)
            .map((res: Response) => res.json());

    }
}
