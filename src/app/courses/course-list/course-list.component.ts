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
  public filteredCourseList: ICourse[] = [];

  private courseListSubscriptionList: Subscription = new Subscription();

  constructor(private courseService: CourseService,
    private loaderBlockService: LoaderBlockService,
    private changeDetectorRef: ChangeDetectorRef,
    private filterByPipe: FilterByPipe) {
    this.courseListSubscriptionList = courseService.courseList
      .subscribe((_courseList) => {
        this.courseList = _courseList;
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

  public findCourses(filter: string) {
    this.updateCourseList();
    this.courseList = this.filterByPipe.transform(this.courseList, 'name', filter);

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
