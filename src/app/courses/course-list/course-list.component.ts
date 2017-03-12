import { Component } from '@angular/core';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']

})

export class CourseListComponent {
    public courses = [{
        id: 1,
        name: "Course 1",
        duration: 120,
        date: 121,
        description: "jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj"

    },
    {
        id: 2,
        name: "Course 1",
        duration: 120,
        date: 121,
        description: "jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj"

    },
    {
        id: 3,
        name: "Course 1",
        duration: 120,
        date: 121,
        description: "jkjkjkjkj jkjkjkjkjk  jjjjjjj   jjjjj   jjjjj"

    }];

    printId($event) {
        console.log($event);
    }
}
