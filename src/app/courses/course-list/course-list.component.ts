import {
    Component,
    OnInit
} from '@angular/core';

import { ICourse } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    providers: [CourseService]

})

export class CourseListComponent implements
    OnInit {

    private courses;

    constructor(private courseService: CourseService) {
    }

    public ngOnInit(): void {
        this.courses = this.courseService.getCourseList();
    }

    public printId($event): void {
        console.log($event);
    }

}
