import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { ICourse } from '../../shared/course.model';

@Component({
    selector: 'course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.css']

})

export class CourseListItemComponent {
    @Input() public course: ICourse;
    @Output() private delete = new EventEmitter();

    deleteCourse(): void {
        this.delete.emit({
            value: this.course.id
        });
    }
}
