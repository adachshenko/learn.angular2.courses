import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

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

     constructor(private router: Router) {}

    public deleteCourse(): void {
        this.delete.emit(this.course.id);
    }

    public goToCourseDetails() {
  this.router.navigate(['/courses', this.course.id]);
}
}
