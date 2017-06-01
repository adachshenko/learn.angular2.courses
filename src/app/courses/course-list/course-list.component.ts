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
import { ClearCoursesAction, DeleteCoursesAction } from '../shared/courses.action';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterByPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseListComponent implements OnDestroy {

  public courseList;
  public count = 11;
  private start = 0;
  private query = '';
  private courseListSubscriptionList: Subscription = new Subscription();

  constructor(private courseService: CourseService,
              private loaderBlockService: LoaderBlockService,
              private changeDetectorRef: ChangeDetectorRef,
              private store: Store<AppStore>) {
    this.courseList = this.store.select('courses');
    this.store.dispatch(new ClearCoursesAction());
    this.getCourseList(this.start, this.count, '');
  }

  public removeCourse(courseId: number): void {
    if (confirm('Do you really want to delete this course?')) {
      this.loaderBlockService.show();
      this.courseService.deleteCourseById(courseId)
        .subscribe((removeResult) => {
          if (removeResult) {
            this.store.dispatch(new DeleteCoursesAction(courseId));
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
    this.store.dispatch(new ClearCoursesAction());
    this.getCourseList(this.start, this.count, this.query);
  }

  private getCourseList(start, count, query) {
    this.loaderBlockService.show();
    this.courseService.getCourseList(start, count, query);
  }
}
