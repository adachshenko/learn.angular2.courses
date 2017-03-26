import { Injectable } from '@angular/core';

import { ICourse } from './';

@Injectable()
export class CourseService {

    private courseList: ICourse[] = [
        {
            id: 1, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'
        },

        {
            id: 2, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'
        },

        {
            id: 3, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(),
            description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'
        }];

    public getCourseList(): ICourse[] {
        return this.courseList;
    }

    public getCourseById(courseId: number): ICourse {
        return this.courseList.find((course: ICourse) => course.id === courseId);
    }

    public deleteCourseById(courseId: number): boolean {
        this.courseList = this.courseList.filter((course) => course.id !== courseId);
        return true;
    }

    public createCourse(course: ICourse): boolean {
        return false;
    }

    public updateCourse(course: ICourse): boolean {
        return false;
    }
}
