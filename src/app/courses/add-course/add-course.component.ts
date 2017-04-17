import {
    Component,
    ChangeDetectionStrategy
} from '@angular/core';
import { ICourse } from '../../shared';
import { Router } from '@angular/router';

@Component({
    selector: 'add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class AddCourseComponent {

constructor(private router: Router) {

}
}
