import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import { ICourse } from '../../shared';

@Component({
    selector: 'course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class CourseListItemComponent {

    @Input() public course: ICourse;
    @Output() private delete = new EventEmitter();

    public deleteCourse(): void {
        this.delete.emit(this.course.id);
    }
}
