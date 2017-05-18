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

  public courseList: ICourse[] = [];
  public loading: boolean = false;
  private start = 0;
  private count = 5;
  private courseListSubscriptionList: Subscription = new Subscription();

  constructor(private courseService: CourseService,
              private loaderBlockService: LoaderBlockService,
              private changeDetectorRef: ChangeDetectorRef) {
      this.updateCourseList();
  }

  public ngOnInit(): void {
   // this.updateCourseList();
  }

  public removeCourse(courseId: number): void {
    if (confirm('Do you really want to delete this course?')) {
      this.loaderBlockService.show();
      this.courseService.deleteCourseById(courseId)
        .subscribe((removeResult) => {
          if (removeResult) {
            this.courseList = this.courseList.filter((course: ICourse) => courseId !== course.id);
            this.getCourseList(this.start + this.count - 1, 1);
          } else {
            console.log(`Error during course with id ${courseId} remove`);
          }
        });
    }
  }

  public ngOnDestroy(): void {
    this.courseListSubscriptionList.unsubscribe();
  }

  public addMore() {
    this.start += this.count;
    //this.updateCourseList();
   /* this.courseListSubscriptionList = this.courseService.getCourseList(this.start, this.count)
      .subscribe((_courseList) => {
        this.courseList = this.courseList.concat(_courseList);
      });*/
      this.getCourseList(this.start, this.count);
  }

  private updateCourseList() {
    this.loaderBlockService.show();
    this.courseList = [];
    /*this.courseListSubscriptionList = this.courseService.getCourseList(this.start, this.count)
      .subscribe((_courseList) => {
        this.courseList = _courseList;
      }, null, () => {
        this.loaderBlockService.hide();
        this.changeDetectorRef.markForCheck();
      });*/
     this.getCourseList(this.start, this.count); 
  }

  private getCourseList(start, count){
        this.courseListSubscriptionList = this.courseService.getCourseList(start, count)
      .subscribe((_courseList) => {
        this.courseList = this.courseList.concat(_courseList);
      }, null, () => {
        this.loaderBlockService.hide();
        this.changeDetectorRef.markForCheck();
      });
  }
}
