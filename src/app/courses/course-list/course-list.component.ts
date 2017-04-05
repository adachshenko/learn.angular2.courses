import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef

} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ICourse, CourseService } from '../shared';
import { LoaderBlockService } from '../../core/loader-block';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseListComponent implements OnInit, OnDestroy {

    private courseListSubscriptionList: Subscription = new Subscription();

    constructor(private courseService: CourseService,
                private loaderBlockService: LoaderBlockService,
                private changeDetectorRef: ChangeDetectorRef) {
        this.courseListSubscriptionList = courseService.courseList
            .subscribe(() => {
                this.changeDetectorRef.markForCheck();
                this.loaderBlockService.hide();
            });
    }

    public ngOnInit(): void {
        this.updateCourseList();
    }

      public removeCourse(courseId: number): void {
    if (confirm('Do you really want to delete this course?')) {
        this.loaderBlockService.show();
        this.courseService.deleteCourseById(courseId)
          .subscribe((removeResult) => {
            if (removeResult) {
              this.updateCourseList();
            } else {
              console.log(`Error during course with id ${courseId} remove`);
            }
          });
      }
  }

   public ngOnDestroy(): void {
    this.courseListSubscriptionList.unsubscribe();
  }
      private updateCourseList(): void {
    this.loaderBlockService.show();
    this.courseService.getCourseList().subscribe((res) => {
      console.log(`getCourseList result: ${res}`);
    });
  }
}
