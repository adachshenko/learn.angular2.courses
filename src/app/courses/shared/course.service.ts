import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

import { ICourse } from './';

@Injectable()
export class CourseService {

    public courseList: Observable<any>;
    private courseListSubject: Subject<any[]> = new Subject();

    private baseUrl: string;

    constructor(private http: Http) {
        this.courseList = this.courseListSubject.asObservable();
    };

    public getCourseList(start: number, count: number, query: string): Observable<ICourse[]> {
        return this.http
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
            }));
    }

    public deleteCourseById(courseId: number) {
        return this.http.delete(`http://localhost:3004/courses/${courseId}`);
    }

    public createCourse(course: ICourse): Observable<boolean> {
        let res = new Subject();
        return res.asObservable();
    }

    public updateCourse(course: ICourse): Observable<boolean> {
        let res = new Subject();
        return res.asObservable();
    }

    public getAuthors() {
        return this.http.get(`http://localhost:3004/authors`)
            .map((res: Response) => res.json());

    }
}
