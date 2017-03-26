import {
    Component,
    OnInit
} from '@angular/core';

import { ICourse, CourseService } from '../shared';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']

})

export class CourseListComponent implements
    OnInit {

    private courses;

    constructor(private courseService: CourseService) {
    }

    public ngOnInit(): void {
        this.courses = this.courseService.getCourseList();
    }

    public removeCourse(courseId): void {
        if (confirm('Do you really want to delete this course?')) {
            if (this.courseService.deleteCourseById(courseId)) {
                this.courses = this.courseService.getCourseList();
            }
        }
    }
}
