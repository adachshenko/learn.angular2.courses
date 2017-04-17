import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseListItemComponent } from './course-list/course-list-item';
import { ToolboxComponent } from './course-list/toolbox';
import { CourseListComponent } from './course-list';
import { CourseService } from './shared';
import { CoursesComponent } from './courses.component';
import { AddCourseComponent } from './add-course';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CourseListItemComponent,
    ToolboxComponent,
    CourseListComponent,
    CoursesComponent,
    AddCourseComponent
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [CourseService]
})
export class CoursesModule {
}
