import {
    Component,
    ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

import { ICourse } from '../shared';

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
