import {
  Component,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef

} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { ICourse, CourseService } from '../shared';
import { LoaderBlockService } from '../../core/services';
import { FilterByPipe } from '../../shared/pipes/filter-by.pipe';
import { AppStore } from './../../core/store/app-store';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterByPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseListComponent implements OnDestroy {

  public courseList: ICourse[] = [];
  public count = 11;
  private start = 0;
  private query = '';
  private courseListSubscriptionList: Subscription = new Subscription();

  constructor(private courseService: CourseService,
              private loaderBlockService: LoaderBlockService,
              private changeDetectorRef: ChangeDetectorRef,
              private store: Store<AppStore>) {
    this.courseList = [];
    this.getCourseList(this.start, this.count, '');
    this.courseListSubscriptionList = this.store.select('courses')
      .subscribe((_courseList) => {
        this.courseList = this.courseList.concat(_courseList);
        this.loaderBlockService.hide();
        this.changeDetectorRef.markForCheck();
      });
  }

  public removeCourse(courseId: number): void {
    if (confirm('Do you really want to delete this course?')) {
      this.loaderBlockService.show();
      this.courseService.deleteCourseById(courseId)
        .subscribe((removeResult) => {
          if (removeResult) {
            this.courseList = this.courseList.filter((course: ICourse) => courseId !== course.id);
            this.getCourseList(this.start + this.count - 1, 1, this.query);
          } else {
            console.log(`Error during course with id ${courseId} remove`);
          }
        });
    }
  }

  public ngOnDestroy(): void {
    this.courseListSubscriptionList.unsubscribe();
  }

  public addMoreCourses() {
    this.start += this.count;
    this.getCourseList(this.start, this.count, this.query);
   }

  public findCourses(filter: string) {
    this.start = 0;
    this.query = filter.toLowerCase();
    this.courseList = [];
    this.getCourseList(this.start, this.count, this.query);
  }

  private getCourseList(start, count, query) {
    this.loaderBlockService.show();
    this.courseService.getCourseList(start, count, query);
  }
}
