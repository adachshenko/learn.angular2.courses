import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef

} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

import { ICourse, CourseService } from '../shared';
import { LoaderBlockService } from '../../core/services';
import { FilterByPipe } from '../../shared/pipes/filter-by.pipe';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [FilterByPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseListComponent implements OnInit, OnDestroy {

  public courseList = [];
  public filteredCourseList: ICourse[] = [];
  public loading: boolean = false;

  private courseListSubscriptionList: Subscription = new Subscription();

  constructor(private courseService: CourseService,
              private loaderBlockService: LoaderBlockService,
              private changeDetectorRef: ChangeDetectorRef,
              private filterByPipe: FilterByPipe) {

    this.updateCourseList();
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

  public findCourses(filter: string) {
    this.updateCourseList();
    this.courseList = this.filterByPipe.transform(this.courseList, 'name', filter);
  }

  public ngOnDestroy(): void {
    this.courseListSubscriptionList.unsubscribe();
  }
  private updateCourseList() {
    this.loading = true;
    this.loaderBlockService.show();
    this.courseList = [];
    this.courseListSubscriptionList = this.courseService.getCourseList().filter((course) => {
      return course.startDate > new Date(new Date().getFullYear(),
        new Date().getMonth(), new Date().getDate() - 14);
    }
    )
      .map((course) => {
        if ('title' in course) {
          course['name'] = course['title'];
          delete course['title'];
        }
        return course;
      })
      .subscribe((course) => {
        this.courseList.push(course);
      }, null, () => {
        this.loaderBlockService.hide();
        this.changeDetectorRef.markForCheck();
      });

  }
}
