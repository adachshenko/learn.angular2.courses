import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { ICourse } from '../../shared/course.model';
import { CourseService } from '../../shared/course.service';

@Component({
    selector: 'course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.css'],
    providers: [CourseService]

})

export class CourseListItemComponent {

    @Input() public course: ICourse;
    @Output() private delete = new EventEmitter();

    constructor(private courseService: CourseService){
    }

    public deleteCourse(): void {
        this.courseService.deleteCourse(this.course.id);
        this.delete.emit({
            value: this.course.id
        });
    }
}
