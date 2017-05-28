import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateDate } from './validators/date-validator/date-validator';

import {
    ICourse,
    CourseService
} from '.././shared';
import { LoaderBlockService } from '../../core/services';

@Component({
    selector: 'add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class AddCourseComponent {

    public duration: number;
    public allAuthors: any[];
    public date;
    private authorsSubscriptionList: Subscription = new Subscription();
    public addEditCourseForm: FormGroup;

    constructor(private courseService: CourseService,
        private router: Router,
        private loaderBlockService: LoaderBlockService,
        private changeDetectorRef: ChangeDetectorRef,
        private fb: FormBuilder) {
        this.loaderBlockService.show();
        this.authorsSubscriptionList = this.courseService.getAuthors().subscribe((_authors) => {
            this.allAuthors = _authors;
            this.loaderBlockService.hide();
            this.changeDetectorRef.markForCheck();
        });
        this.createForm();
    }

    public addCourse() {
        console.log(this.addEditCourseForm.value);
    }


    //ngOnInit() {
    createForm() {
        this.addEditCourseForm = this.fb.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            date: ['', [Validators.required, validateDate]],
            duration: ['', [Validators.required]],
            authors: [[]/*, [Validators.required]*/]
        });
    }
}
