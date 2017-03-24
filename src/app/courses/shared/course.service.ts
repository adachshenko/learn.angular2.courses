import { Injectable } from '@angular/core';

import { ICourse } from './course.model';

@Injectable()
export class CourseService {

    private courseList: ICourse[] = [
    {id: 1, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(),
        description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'},

    {id: 2, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(),
        description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'},

    {id: 3, name: 'Learn JavaScript Basics', duration: 120, startDate: new Date(),
        description: 'jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj'}];

public getCourseList(): ICourse[] {
    return this.courseList;
   }

public deleteCourse(courseId: number): void {
    this.courseList.splice(courseId, 1);
    alert(this.courseList);
}
}
