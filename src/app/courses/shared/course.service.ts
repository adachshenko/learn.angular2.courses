import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ICourse } from './';
import { LoaderBlockService } from '../../core/loader-block';

@Injectable()
export class CourseService {

    private courseList: Subject<ICourse[]>;
    private courses: ICourse[] = [
        {
            id: 1, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'
        },

        {
            id: 2, name: 'HTML & CSS', duration: 120, startDate: new Date(),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'
        },

        {
            id: 3, name: 'Angular 2', duration: 120, startDate: new Date(),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'
        }];

    constructor(private loaderBlockService: LoaderBlockService) {
       
    };

    public getCourseList(): void {
         return this.courseList.next(this.courses);
    }

    public getCourseById(courseId: number): ICourse {
        return this.courses.find((course: ICourse) => course.id === courseId);
    }

    /*public deleteCourseById(courseId: number): boolean {
        this.loaderBlockService.show();
        setTimeout(() => {
            this.courseList.next(this.courseList.getValue().filter((course) => course.id !== courseId));
            this.loaderBlockService.hide();
        }, 2000);
        return true;
    }*/
    public deleteCourseById(courseId: number) {
           // return this.courseList.next(this.courseList.filter((course) => course.id !== courseId));
           let subject = new Subject();
           setTimeout();
           return subject.asObservable();
    }

    public createCourse(course: ICourse): boolean {
        return false;
    }

    public updateCourse(course: ICourse): boolean {
        return false;
    }
}
