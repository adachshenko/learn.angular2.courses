import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnDestroy
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateDate } from './validators/date-validator/date-validator';

import {
    ICourse,
    CourseService
} from '.././shared';
import { LoaderBlockService, BreadcrumbsService } from '../../core/services';

@Component({
    selector: 'add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class AddCourseComponent implements OnDestroy {

    public duration: number;
    public allAuthors: any[];
    public date;
    public addEditCourseForm: FormGroup;
    private authorsSubscriptionList: Subscription = new Subscription();
    private courseSubscription: Subscription = new Subscription();

    constructor(private courseService: CourseService,
                private breadCrumbsService: BreadcrumbsService,
                private aRoute: ActivatedRoute,
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

        if (this.aRoute.snapshot.params['id']) {
            this.courseSubscription = this.courseService
                .getCourseById(this.aRoute.snapshot.params['id']).subscribe((_course) => {
                    console.log(_course);
                    this.addEditCourseForm.setValue({
                        title: _course.name,
                        description: _course.description,
                        date: new Date(_course.date),
                        duration: _course.length,
                        authors: _course.authors
                    });
                    this.breadCrumbsService.set(_course.name);
                    this.changeDetectorRef.markForCheck();
                });
        }
        this.createForm();
    }

    public addCourse() {
        let course = {
            name: this.addEditCourseForm.value.title,
            description: this.addEditCourseForm.value.description,
            date: this.addEditCourseForm.value.date,
            length: this.addEditCourseForm.value.duration,
            authors: this.addEditCourseForm.value.authors
        };
        let method = this.aRoute.snapshot.params['id'] ?
            this.courseService.updateCourse(course,
                this.aRoute.snapshot.params['id']) :
            this.courseService.createCourse(course);
        method.subscribe((response) => {
            this.router.navigate(['/courses']);
        });
    }

    public ngOnDestroy() {
        this.breadCrumbsService.set('');
    }

    private createForm() {
        this.addEditCourseForm = this.fb.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            date: [new Date(), [Validators.required, validateDate]],
            duration: ['', [Validators.required]],
            authors: [[]]
        });
    }
}
