import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CourseListItemComponent } from './course-list/course-list-item';
import { ToolboxComponent } from './course-list/toolbox';
import { CourseListComponent } from './course-list';
import { CourseService } from './shared';
import { CoursesComponent } from './courses.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent,
         DateValidator,
         AuthorCheckboxComponent,
         DurationInputComponent,
         DateInputComponent } from './add-course';

@NgModule({
  declarations: [
    CourseListItemComponent,
    ToolboxComponent,
    CourseListComponent,
    CoursesComponent,
    AddCourseComponent,
    DateValidator,
    AuthorCheckboxComponent,
    DurationInputComponent,
    DateInputComponent
  ],
  exports: [
    CoursesComponent,
    DateValidator
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    BrowserModule,
    SharedModule
  ],
  providers: [CourseService]
})
export class CoursesModule {
}
